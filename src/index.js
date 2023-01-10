import {Fish} from "./script/fish.js";

import {GameView} from "./script/gameView.js";

document.addEventListener("DOMContentLoaded", () => {
  const canvas = document.getElementById('canvas')
  const ctx = canvas.getContext("2d"); 
  const burger = document.querySelector('.burger')
  const exit = document.querySelector('.exit')
  const exitMenu = document.querySelector('.exitMenu')
  const nav = document.querySelector('.navbar')
  const grid = document.querySelector('.grid-container')
  const start = document.querySelector('.start')
  const body = document.querySelector('body')
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
      grid.style.display = 'none'
      body.style.cursor = 'pointer'

    }
  });

  window.addEventListener('keypress', (e) => {
    if (e.key === ' ' || e.key === 'Spacebar') {
      e.preventDefault();
      nav.style.display = 'flex'
      burger.style.display = 'none';
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

  canvas.height = window.innerHeight * .8;
  canvas.width = window.innerWidth * .8;
  const gameview = new GameView(ctx)
  gameview.start();
});

