//handles functionality of what my clicks would be doing
import {Fish} from "./fish.js"
import {Decoration} from "./decoration.js"

class Game{

  constructor(){
    this.fish = {};
    this.dec = [];
    this.canvas =  document.getElementById('canvas');
    this.createFish = this.createFish.bind(this);
    this.createDecoration = this.createDecoration.bind(this);
    this.directingNavbar = this.directingNavbar.bind(this);

    this.navbar = document.querySelector(".navbar")
    this.navbar.addEventListener('click', this.directingNavbar)

  }

  static DIM_X = 880;
  static DIM_Y = 500;
  static NUM_FISH = 10;
  static NUM_DEC = 4;

  directingNavbar(e){
    const click = e.target;
    console.log(click.classList.value)
    // console.log(click.classList)
    if (click.classList.value === 'fish'){
      this.canvas.addEventListener('click', this.createFish)
    } 
    if (click.classList.value === 'decorate'){
      this.canvas.addEventListener('click', this.createDecoration)
    }

  }

  createDecoration(e){
    let decX = e.clientX;
    let decY = e.clientY;
    let pos = [decX,decY];
    console.log(decX)
    if (!this.isOutOfBounds(pos) && this.dec < Game.NUM_DEC) {
      this.addDecoration(pos)
    }

  }

  createFish (e) {
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
  }

  addDecoration(pos){
    const dec = new Decoration(pos);
    this.dec.push(dec);
  }

  // randomPosition() {
  //   let x = Math.floor(Math.random() * (Game.DIM_X + 1));
  //   let y = Math.floor(Math.random() * (Game.DIM_Y + 1));
  //   return [x, y]
  // }

  draw (ctx) {
    ctx.clearRect(0, 0, Game.DIM_X, Game.DIM_Y);
    Object.values(this.fish).forEach((el) => {
      el.draw(ctx);
    });
    this.dec.forEach(el2=>{
      el2.draw(ctx)
    })

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