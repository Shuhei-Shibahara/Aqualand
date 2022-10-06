import {Fish} from "./script/fish.js";

document.addEventListener("DOMContentLoaded", () => {
  const canvas = document.getElementById('canvas')
  const ctx = canvas.getContext("2d"); 
  canvas.height = 500;
  canvas.width = 880;
  
  const fish = new Fish({
    pos: [300,300],
    vel: [10,10],
    radius: 10
  });
});

