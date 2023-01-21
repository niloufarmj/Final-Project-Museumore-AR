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

if (play_btn0 && info_btn0) {
  play_btn0.addEventListener("click", () => {
    // console.log(
    //   play_btn1.parentElement.getAttribute("mindar-image-target").targetIndex
    // );
  });
  info_btn0.addEventListener("click", () => {
    // target_index = info_btn1.parentElement.getAttribute("mindar-image-target").targetIndex;
    window.location.replace("http://localhost:3000/iteminfo/0");
  });
}

if (play_btn1 && info_btn1) {
  play_btn1.addEventListener("click", () => {
    // console.log(
    //   play_btn2.parentElement.getAttribute("mindar-image-target").targetIndex
    // );
  });
  info_btn1.addEventListener("click", () => {
    // target_index = info_btn2.parentElement.getAttribute("mindar-image-target").targetIndex;
    window.location.replace("http://localhost:3000/iteminfo/1");
  });
}

if (play_btn2 && info_btn2) {
  play_btn2.addEventListener("click", () => {
    // console.log(
    //   play_btn1.parentElement.getAttribute("mindar-image-target").targetIndex
    // );
  });
  info_btn2.addEventListener("click", () => {
    // target_index = info_btn3.parentElement.getAttribute("mindar-image-target").targetIndex;
    window.location.replace("http://localhost:3000/iteminfo/2");
  });
}

// var images = new Array();

// const image0 = new Image();
// image0.src = "./target_images/0.jpg";
// images.push(image0);

// const image1 = new Image();
// image1.src = "./target_images/1.jpg";
// images.push(image1);

// const image2 = new Image();
// image2.src = "./target_images/2.jpg";
// images.push(image2);

// const compiler = new window.MINDAR.Compiler();
// async function myFunction() {
//   const dataList = await compiler.compileImageTargets(images, (progress) => {
//     // images is an array of HTML image object
//     console.log("progress", progress);
//   });
//   const exportedBuffer = await compiler.exportData(); // export the compiled data into buffer for download (e.g. the .mind file)
// }

// myFunction();
