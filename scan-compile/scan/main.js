// const returnButton = document.querySelector("#return-button");
// const controlOverlay = document.querySelector("#control-overlay");
// controlOverlay.style.display = "block";
// returnButton.addEventListener('click', () => {
//   window.location.replace(`http://172.20.10.10:3000/`);
//   console.log("here");
// });

var items = [],
  target_file = "";

var error;

async function fetchItems() {
  return fetch("http://172.20.10.10:8000/api/items/")
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      items = data;
      fetchTargetFile();
    })
    .catch((err) => (error = err.message));
}

async function fetchTargetFile() {
  fetch("http://172.20.10.10:8000/api/targetfiles/")
    .then((res) => res.json())
    .then(async (data) => {
      if (data.length > 0) {
        target_file = data[0].file;

        mainFunction();
      }
    })
    .catch((err) => (error = err.message));
}

fetchItems();

const insertAfter = (element, htmlString) =>
  element.insertAdjacentHTML("afterend", htmlString);

function mainFunction() {
  let result = ``;

  result =
    `<a-scene mindar-image="imageTargetSrc: ` +
    target_file +
    `; maxTrack: 2;"
    vr-mode-ui="enabled: false"
    device-orientation-permission-ui="enabled: false">

    <a-camera position="0 0 0" look-controls="enabled: false"
      cursor="fuse: false; rayOrigin: mouse;" raycaster="far:` +
    "${customFields.libVersion};" +
    ` objects: .clickable"></a-camera>
    </a-scene>`;

  //insertAfter(controlOverlay, result);
  const body = document.body;
  body.innerHTML = result;

  // alert(document.body.innerHTML)

  const camera = document.getElementsByTagName("a-camera")[0];
  result = ``;
  for (let i = 0; i < items.length; i++) {
    let play_btn_id = "play-btn" + items[i].target_index;
    let info_btn_id = "info-btn" + items[i].target_index;
    if (items[i].augmented_video == null) {
      result =
        result +
        `
      <a-entity mindar-image-target="targetIndex: ${items[i].target_index}">
        <a-image id="${play_btn_id}" class="clickable"
          src="./Assets/play_btn.png"
          width="0.2" height="0.2" position="0.3 0 0"></a-image>
        <a-image id="${info_btn_id}" class="clickable"
          src="./Assets/info_btn.png"
          width="0.2" height="0.2" position="-0.3 0 0"></a-image>
      </a-entity>
    `;
      
    } else {
      const getMeta = (url, cb) => {
        const img = new Image();
        img.onload = () => cb(null, img);
        img.onerror = (err) => cb(err);
        img.src = url;
      };

      // Use like:
      getMeta(items[i].target_image, (err, img) => {
        result =
          result +
          `
      <a-entity mindar-image-target="targetIndex: ${items[i].target_index}">
        <a-image id="${play_btn_id}" class="clickable"
          src="./Assets/play_btn.png"
          width="0.2" height="0.2" position="0.3 -0.8 0.3"></a-image>
        <a-image id="${info_btn_id}" class="clickable"
          src="./Assets/info_btn.png"
          width="0.2" height="0.2" position="-0.3 -0.8 0.3"></a-image>
      
        <a-video src=" ` +
          items[i].augmented_video +
          `" width="` +
          img.naturalWidth / img.naturalWidth +
          `" height="` +
          img.naturalHeight / img.naturalWidth +
          `" position="0 0 0" ></a-video>  
      </a-entity>`;
        // insertAfter(camera, result);
        // afterAugment();
      });
    }

    
  }
  insertAfter(camera, result);

  afterAugment();

  // const asceneTag = document.getElementsByTagName("a-scene")[0];
  // asceneTag.setAttribute("style", "height:10px" );

  // alert(document.body.innerHTML)

  
}

afterAugment = () => {
  var play_btn = new Array();
  var info_btn = new Array();

  for (let i = 0; i < items.length; i++) {
    let play_btn_query = "#play-btn" + i;
    let info_btn_query = "#info-btn" + i;
    play_btn.push(document.querySelector(play_btn_query));
    info_btn.push(document.querySelector(info_btn_query));
  }

  var playing_audio;
  var playing_audio_item_index = -1;
  var is_audio_playing = false;
  for (let i = 0; i < items.length; i++) {
    if (play_btn[i] && info_btn[i]) {
      play_btn[i].addEventListener("click", () => {
        for (const item of items) {
          if (item.target_index == i) {
            if (!is_audio_playing) {
              playing_audio = new Audio(item.audio);
              playing_audio.play();
              is_audio_playing = true;
              playing_audio_item_index = i;
            } else {
              playing_audio.pause();
              is_audio_playing = false;
              if (playing_audio_item_index != i) {
                playing_audio = new Audio(item.audio);
                playing_audio.play();
                is_audio_playing = true;
                playing_audio_item_index = i;
              }
            }
          }
        }
      });
      info_btn[i].addEventListener("click", () => {
        window.location.replace(`http://172.20.10.10:3000/iteminfo/${i}`);
      });
    }
  }
}
