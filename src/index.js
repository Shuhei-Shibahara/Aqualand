import {Fish} from "./script/fish.js";

import {GameView} from "./script/gameView.js";

document.addEventListener("DOMContentLoaded", () => {
  const canvas = document.getElementById('canvas')
  const ctx = canvas.getContext("2d"); 
  canvas.height = 900;
  canvas.width = 1400;
  const burger = document.querySelector('.burger')
  const exit = document.querySelector('.exit')
  const exitMenu = document.querySelector('.exitMenu')
  const nav = document.querySelector('.navbar')
  const start = document.querySelector('.start')
  const startInstruction = document.querySelector('.instruction')
  const instructionsSolo = document.querySelector('.instructionMenu')
  const titleScreen = document.querySelector('.titleScreen')
  burger.addEventListener('mouseover', function () {
    nav.style.display = 'flex';
    burger.style.display = 'none';
  })
  startInstruction.addEventListener('click', (e)=>{
    instructionsSolo.style.display = 'block'
    titleScreen.style.display = 'none'
  })

  window.addEventListener('keypress', (e) => {
    if(e.key === 'e'){
      nav.style.display = 'none'
      burger.style.display = 'flex';
    }
  });

  exitMenu.addEventListener('click', (e)=>{
    instructionsSolo.style.display = 'none'
    titleScreen.style.display = 'flex'

  })


  start.addEventListener('click', function(){
    titleScreen.style.display = 'none'
    nav.style.display ='flex'

  })

  exit.addEventListener('click', function () {
    nav.style.display = 'none';
    burger.style.display = 'flex';
  })
  const gameview = new GameView(ctx)
  gameview.start();
});

