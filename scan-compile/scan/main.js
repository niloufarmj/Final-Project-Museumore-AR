var items = [],
  target_file = "";

async function fetchItems() {
  return fetch("http://localhost:8000/api/items/")
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      items = data;
      fetchTargetFile();
    })
    .catch((err) => console.error(err));
}

async function fetchTargetFile() {
  fetch("http://localhost:8000/api/targetfiles/")
    .then((res) => res.json())
    .then(async (data) => {
      if (data.length > 0) {
        target_file = data[0].file;
        mainFunction();
      }
    })
    .catch((err) => console.log(err));
}

fetchItems();

const insertAfter = (element, htmlString) =>
  element.insertAdjacentHTML("afterend", htmlString);

function mainFunction() {
  const body = document.getElementsByTagName("body")[0];

  body.innerHTML =
    `<a-scene mindar-image="imageTargetSrc: ` +
    target_file +
    `; maxTrack: 2"
  vr-mode-ui="enabled: false"
  device-orientation-permission-ui="enabled: false">

  <a-camera position="0 0 0" look-controls="enabled: false"
      cursor="fuse: false; rayOrigin: mouse;" raycaster="far:` +
    "${customFields.libVersion};" +
    ` objects: .clickable"></a-camera>
  <!-- dynamic a-entities that are built in main.js -->

</a-scene>`;

  const camera = document.getElementsByTagName("a-camera")[0];
  let result = ``;
  for (let i = 0; i < items.length; i++) {
    let play_btn_id = "play-btn" + items[i].target_index;
    let info_btn_id = "info-btn" + items[i].target_index;
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
  }

  insertAfter(camera, result);
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
        window.location.replace(`http://localhost:3000/iteminfo/${i}`);
      });
    }
  }
}
