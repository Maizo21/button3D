"use strict";

let button3D = document.querySelector("button");

button3D.addEventListener("click", function () {
  let alarm = document.querySelector(".alarm");
  let boom = document.querySelector(".boom");
  let boomSound = document.querySelector(".boomSound");
  alarm.style.opacity = "1";
  setTimeout(function () {
    alarm.style.opacity = "0";
    boom.style.opacity = "1";
    boom.style.animationPlayState = "running";
    boom.style.zIndex = "1";
    boomSound.play();
    setTimeout(function () {
      boom.style.opacity = "0";
      boom.style.animationPlayState = "paused";
      boom.style.zIndex = "-1";
    }, 2000);
  }, 3000);
});
