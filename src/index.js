import {Fish} from "./script/fish.js";

import {GameView} from "./script/gameView.js";

document.addEventListener("DOMContentLoaded", () => {
  const canvas = document.getElementById('canvas')
  const ctx = canvas.getContext("2d"); 
  canvas.height = 500;
  canvas.width = 880;
  const burger = document.querySelector('.burger')
  const exit = document.querySelector('.exit')
  const nav = document.querySelector('.navbar')
  burger.addEventListener('mouseover', function () {
    nav.style.display = 'flex';
   
  })
  // nav.addEventListener('mouseout', function(){
  //   nav.style.display = 'none'
  // })
  exit.addEventListener('click', function () {
    nav.style.display = 'none';
  })
  const gameview = new GameView(ctx)
  gameview.start();
});

