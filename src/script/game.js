//handles functionality of what my clicks would be doing
import {Fish} from "./fish.js"

class Game{

  constructor(){
    this.fish = [];
    this.create();
  }

  static DIM_X = 500;
  static DIM_Y = 880;
  static NUM_FISH = 10;

  addFish () {
    const fish = new Fish(this.randomPosition())
    this.fish.push(fish);
  }

  randomPosition() {
    let x = Math.floor(Math.random() * (Game.DIM_X + 1));
    let y = Math.floor(Math.random() * (Game.DIM_Y + 1));
    return [x, y]
  }

  draw (ctx) {
    ctx.clearRect(0, 0, Game.DIM_X, Game.DIM_Y);
    this.fish.forEach((el) => {
      el.draw(ctx);
    });
    ctx.fillRect(0, 0, Game.DIM_X, Game.Dim_Y);
  }

  moveObjects (){
    this.fish.forEach((el) => {
      el.move();
    });
  }
}

export {Game};