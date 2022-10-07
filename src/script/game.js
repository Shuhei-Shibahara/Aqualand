//handles functionality of what my clicks would be doing
import {Fish} from "./fish.js"

class Game{

  constructor(){
    this.fish = [];
    this.create();
  }

  static DIM_X = 880;
  static DIM_Y = 500;
  static NUM_FISH = 10;

  create () {
    while (this.fish.length < Game.NUM_FISH) {
      this.addFish();
    }
  }

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
    // ctx.fillRect(0, 0, Game.DIM_X, Game.DIM_Y);

  }

  moveObjects (){
    this.fish.forEach((el) => {
      el.move();
    });
  }

  isOutOfBounds(pos) {
    return (pos[0] < 0) || (pos[1] < 0) ||
      (pos[0] > Game.DIM_X) || (pos[1] > Game.DIM_Y);
  };

}

export {Game};