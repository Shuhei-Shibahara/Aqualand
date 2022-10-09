//handles functionality of what my clicks would be doing
import {Fish} from "./fish.js"
import {Decoration} from "./decoration.js"
import {Bubble} from "./bubble.js"

class Game{

  constructor(){
    this.fish = {};
    this.dec = [];
    this.bubbles = [];
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
  static NUM_BUBBLES = 5;

  directingNavbar(e){
    const click = e.target;
    console.log(click.classList.value)

    if (click.classList.value === 'fish'){
      this.canvas.removeEventListener('click', this.createDecoration)
      this.canvas.addEventListener('click', this.createFish)
    } 
    if (click.classList.value === 'decorate'){
      this.canvas.removeEventListener('click', this.createFish)
      this.canvas.addEventListener('click', this.createDecoration)
    }
    if (click.classList.value === 'imgexit') {
      this.canvas.removeEventListener('click', this.createFish)
      this.canvas.removeEventListener('click', this.createDecoration)
    }

  }

  createBubble() {
    this.addBubbles();
  }


  addBubbles() {
    const bubble = new Bubble(this.randomPosition())
    this.bubbles.push(bubble)
  }

  createDecoration(e){
    let decX = e.clientX;
    let decY = e.clientY;
    let pos = [decX,decY];
    console.log(decX)
    if (!this.isOutOfBounds(pos) && this.dec.length < Game.NUM_DEC) {
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

  randomPosition() {
    let x = Math.floor(Math.random() * (Game.DIM_X + 1));
    // let y = Math.floor(Math.random() * (Game.DIM_Y + 1));
    let y = Game.DIM_Y;
    return [x, y]
  }

  draw (ctx) {
    ctx.clearRect(0, 0, Game.DIM_X, Game.DIM_Y);
    this.dec.forEach(el2=>{
      el2.draw(ctx)
    })
    Object.values(this.fish).forEach((el) => {
      el.draw(ctx);
    });
  }
  
  drawBubbles (ctx){
    this.bubbles.forEach(el3 =>{
      el3.draw(ctx)
    })
  }

  moveBubbles(){
    this.bubbles.forEach(el3 => {
      el3.move();
    })
  }

  moveObjects (){
    Object.values(this.fish).forEach((el) => {
      el.move();
    });
  }

  isOutOfBounds(pos) {
    return (pos[0] < 0) || (pos[1] < 0) ||
      (pos[0] > Game.DIM_X) || (pos[1] > Game.DIM_Y);
  };

}

export {Game};