//handles functionality of what my clicks would be doing
import {Fish} from "./fish.js"

class Game{

  constructor(){
    this.fish = {};
    this.canvas =  document.getElementById('canvas');
    this.createFish = this.createFish.bind(this);
    this.canvas.addEventListener('click', this.createFish)

  }

  static DIM_X = 880;
  static DIM_Y = 500;
  static NUM_FISH = 10;

  createFish (e) {
      Object.values(this.fish).includes(e.target)
      let fishX = e.clientX - 50;
      let fishY = e.clientY - 40;
      let pos = [fishX,fishY];
      
      if (!this.isOutOfBounds(pos) && Object.keys(this.fish).length < Game.NUM_FISH){
        this.addFish(pos);
      }
    }
  

// checkFish(pos){
//   this.fish.forEach(el => {
//     if (el.pos === pos){
//       console.log('fish exist')
//     }else{
//     console.log('doesnt exist')
//     }
//   })
// }

  addFish (pos) {
    const fish = new Fish(pos, `fish${Object.values(this.fish).length}`)
    
    this.fish[`fish${Object.values(this.fish).length}`] = fish

    let fishp = document.createElement('p')
    fishp.id = `fish${Object.values(this.fish).length}`

  }

  randomPosition() {
    let x = Math.floor(Math.random() * (Game.DIM_X + 1));
    let y = Math.floor(Math.random() * (Game.DIM_Y + 1));
    return [x, y]
  }

  draw (ctx) {
    ctx.clearRect(0, 0, Game.DIM_X, Game.DIM_Y);
    Object.values(this.fish).forEach((el) => {
      el.draw(ctx);
    });
    // ctx.fillRect(0, 0, Game.DIM_X, Game.DIM_Y);

  }

  moveObjects (){
    Object.values(this.fish).forEach((el) => {
      el.move();
      // debugger
      
    });
  }

  isOutOfBounds(pos) {
    return (pos[0] < 0) || (pos[1] < 0) ||
      (pos[0] > Game.DIM_X) || (pos[1] > Game.DIM_Y);
  };

}

export {Game};