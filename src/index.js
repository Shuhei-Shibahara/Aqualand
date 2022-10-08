import {Fish} from "./script/fish.js";

import {GameView} from "./script/gameView.js";

document.addEventListener("DOMContentLoaded", () => {
  const canvas = document.getElementById('canvas')
  const ctx = canvas.getContext("2d"); 
  canvas.height = 500;
  canvas.width = 880;
  
  // const img = new Image();
  // img.src = "./image/backround.jpg"
  // img.onload = function(){
  //   layout.drawImage(img, 100, 100, 500, 880)
  // }
  const burger = document.querySelector('.burger')
  const nav = document.querySelector('.navbar')
  burger.addEventListener('mouseover', function(){
    nav.style.display = 'flex';
  })
  nav.addEventListener('mouseout', function(){
    nav.style.display = 'none';
  })
  const gameview = new GameView(ctx)
  gameview.start();
});

