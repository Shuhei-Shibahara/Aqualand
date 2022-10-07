import {Fish} from "./script/fish.js";

import Game from "./script/game.js";
import GameView from "./script/game_view.js";

document.addEventListener("DOMContentLoaded", () => {
  const canvas = document.getElementById('canvas')
  const ctx = canvas.getContext("2d"); 
  canvas.height = 500;
  canvas.width = 880;
  
  const gameview = new GameView(ctx)
  gameview.start();
});

