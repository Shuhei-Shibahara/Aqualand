//handles functionality of what my clicks would be doing
import {Fish} from "./fish.js"

class Game{

  constructor(){
    this.fish = [];
    this.canvas =  document.getElementById('canvas');
    this.createFish = this.createFish.bind(this);
    this.canvas.addEventListener('click', this.createFish)

  }

  static DIM_X = 880;
  static DIM_Y = 500;
  static NUM_FISH = 10;

  createFish (e) {
      console.log('hello')
      let fishX = e.clientX - 50;
      let fishY = e.clientY - 40;
      let pos = [fishX,fishY];
      
      if (!this.isOutOfBounds(pos)){
        this.addFish(pos);
      }
    }
  



  addFish (pos) {
    const fish = new Fish(pos)
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