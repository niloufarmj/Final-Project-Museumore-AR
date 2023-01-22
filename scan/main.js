// var return_btn = document.querySelector("#return-img");
// if (return_btn) {
//   return_btn.addEventListener("click", () => {
//     console.log("here");
//     window.location.replace("http://localhost:3000/");
//   });
// }

var play_btn0 = document.querySelector("#play-btn0");
var info_btn0 = document.querySelector("#info-btn0");
var play_btn1 = document.querySelector("#play-btn1");
var info_btn1 = document.querySelector("#info-btn1");
var play_btn2 = document.querySelector("#play-btn2");
var info_btn2 = document.querySelector("#info-btn2");

// let target_index = 0;

var items = [];
fetch("http://localhost:8000/api/items/")
  .then((res) => res.json())
  .then((data) => {
    items = data;
  })
  .catch((err) => console.error(err));

var playing_audio;
var playing_audio_item_index = -1;
var is_audio_playing = false;

if (play_btn0 && info_btn0) {
  play_btn0.addEventListener("click", () => {
    for (const item of items) {
      if (item.target_index == 0) {
        if (!is_audio_playing) {
          playing_audio = new Audio(item.audio);
          playing_audio.play();
          is_audio_playing = true;
          playing_audio_item_index = 0;
        } else {
          playing_audio.pause();
          is_audio_playing = false;
          if (playing_audio_item_index != 0) {
            playing_audio = new Audio(item.audio);
            playing_audio.play();
            is_audio_playing = true;
            playing_audio_item_index = 0;
          }
        }
      }
    }
  });
  info_btn0.addEventListener("click", () => {
    // target_index = info_btn0.parentElement.getAttribute("mindar-image-target").targetIndex;
    window.location.replace("http://localhost:3000/iteminfo/0");
  });
}

if (play_btn1 && info_btn1) {
  play_btn1.addEventListener("click", () => {
    for (const item of items) {
      if (item.target_index == 1) {
        if (!is_audio_playing) {
          playing_audio = new Audio(item.audio);
          playing_audio.play();
          is_audio_playing = true;
          playing_audio_item_index = 1;
        } else {
          playing_audio.pause();
          is_audio_playing = false;
          if (playing_audio_item_index != 1) {
            playing_audio = new Audio(item.audio);
            playing_audio.play();
            is_audio_playing = true;
            playing_audio_item_index = 1;
          }
        }
      }
    }
  });
  info_btn1.addEventListener("click", () => {
    // target_index = info_btn1.parentElement.getAttribute("mindar-image-target").targetIndex;
    window.location.replace("http://localhost:3000/iteminfo/1");
  });
}

if (play_btn2 && info_btn2) {
  play_btn2.addEventListener("click", () => {
    for (const item of items) {
      if (item.target_index == 2) {
        if (!is_audio_playing) {
          playing_audio = new Audio(item.audio);
          playing_audio.play();
          is_audio_playing = true;
          playing_audio_item_index = 2;
        } else {
          playing_audio.pause();
          is_audio_playing = false;
          if (playing_audio_item_index != 2) {
            playing_audio = new Audio(item.audio);
            playing_audio.play();
            is_audio_playing = true;
            playing_audio_item_index = 2;
          }
        }
      }
    }
  });
  info_btn2.addEventListener("click", () => {
    // target_index = info_btn2.parentElement.getAttribute("mindar-image-target").targetIndex;
    window.location.replace("http://localhost:3000/iteminfo/2");
  });
}
