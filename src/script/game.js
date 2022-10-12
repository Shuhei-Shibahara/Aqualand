//handles functionality of what my clicks would be doing
import {Fish} from "./fish.js"
import {Decoration} from "./decoration.js"
import {Bubble} from "./bubble.js"
import {Food} from "./food.js"
import {Util} from "./util.js"

class Game{
  constructor(){
    this.fish = {};
    this.dec = [];
    this.bubbles = [];
    this.food = [];
    this.canvas =  document.getElementById('canvas');
    this.body = document.querySelector('body');
    this.createFish = this.createFish.bind(this);
    this.createFood = this.createFood.bind(this);
    this.createDecoration = this.createDecoration.bind(this);
    this.directingNavbar = this.directingNavbar.bind(this);
    this.navbar = document.querySelector(".navbar")
    this.navbar.addEventListener('click', this.directingNavbar)
  }

  static DIM_X = 1400;
  static DIM_Y = 900;
  static MAX_FISH = 10;
  static MAX_DEC = 4;
  static NUM_BUBBLES = 4;
  static MAX_FOOD = 1;

  directingNavbar(e){
    const click = e.target;
    if (click.classList.value === 'feed') {
      this.canvas.removeEventListener('click', this.createFish)
      this.canvas.removeEventListener('click', this.createDecoration)
      this.canvas.addEventListener('click', this.createFood)
      this.body.style.cursor = 'pointer'

    } 
    if (click.classList.value === 'fish'){
      this.canvas.removeEventListener('click', this.createFood)
      this.canvas.removeEventListener('click', this.createDecoration)
      this.body.style.cursor = "url('../src/image/c-clownFish.png'), auto"
      this.canvas.addEventListener('click', this.createFish)
    } 
    if (click.classList.value === 'decorate'){
      this.canvas.removeEventListener('click', this.createFood)
      this.canvas.removeEventListener('click', this.createFish)
      this.body.style.cursor = 'pointer'
      this.canvas.addEventListener('click', this.createDecoration)
    }
    if (click.classList.value === 'imgexit') {
      this.canvas.removeEventListener('click', this.createFish)
      this.canvas.removeEventListener('click', this.createDecoration)
      this.body.style.cursor = 'pointer'

    }

  }

  
  createFood(e){
    console.log(e.clientX)
    let foodX = e.clientX - 290;
    let foodY = e.clientY - 90;
    let pos = [foodX, foodY];
    const food = new Food(pos);
    if (this.food.length < Game.MAX_FOOD){
      this.food.push(food);
    }
  }

  decreaseFoodLife(){
    this.food.forEach(el =>{
      el.life--
      if (el.life === 0){
        this.food.shift();
      }
    })
  }


  
  createBubble() {
    this.addBubbles();
  }

 

  deleteBubble(){
    if (this.bubbles.length >= Game.NUM_BUBBLES){
      this.bubbles.shift();
    }
  }

  addBubbles() {
    const bubble = new Bubble(this.randomPosition())
    this.bubbles.push(bubble)
  }

  createDecoration(e){
    let decX = e.clientX;
    let decY = e.clientY;
    let pos = [decX,decY];
    let zone = 0;
    if (decX < 450) {
      decX = 80;
      zone = 1;
    }
    if (decX >= 450 && decX < 750) {
      decX = 450;
      zone = 2;
    }

    if (decX >= 750 && decX < 1100) {
      decX = 750;
      zone = 3;
    }

    if (decX >= 1150) {
      decX = 1150;
      zone = 4;
    }

    if (!this.isOutOfBounds(pos) && this.dec.length < Game.MAX_DEC) {
      this.addDecoration(pos, zone)
    }
  }


  createFish (e) {
      let fishX = e.clientX - 220;
      let fishY = e.clientY - 100;
      let pos = [fishX,fishY];
      let fishName = `fish${Object.keys(this.fish).length}`

      // const mouse = document.getElementsByTagName("html");
      // mouse.style.cursor = "url('../image/l-betta.png'), auto";    
      // this.body.style.cursor = "url('../src/image/l-betta.png'), auto"

  
      if (!this.isOutOfBounds(pos) && Object.keys(this.fish).length < Game.MAX_FISH){
        this.addFish(pos);
      }
    }
  
 
  addFish (pos) {
    const fish = new Fish(pos, `fish${Object.values(this.fish).length}`)
    
    this.fish[`fish${Object.values(this.fish).length}`] = fish
  }

  addDecoration(pos, zone){
    const dec = new Decoration(pos, zone);
    const empty = true;
    this.dec.forEach(checker => {
      if (checker.zone === dec.zone){
        empty = false;
      }
    })
    if (empty){
      this.dec.push(dec);
    }
    console.log(this.dec)
  }

  randomPosition() {
    let x = Math.floor(Math.random() * (Game.DIM_X));
    // let y = Math.floor(Math.random() * (Game.DIM_Y + 1));
    let y = Game.DIM_Y;
    return [x, y]
  }
  

  draw (ctx) {
    ctx.clearRect(0, 0, Game.DIM_X, Game.DIM_Y);
    this.dec.forEach(el2=>{
      el2.draw(ctx)
    })
    this.food.forEach(el3 =>{
      el3.draw(ctx);
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
      
      if (this.food.length > 0 && el.hunger){

        this.food.forEach(food =>{
          if (el.hunger){
            el.chase(food.pos);
            if (el.posX >= (food.pos[0] -10) && el.posX <= (food.pos[0] + 10)){
              if (el.size < 3){
                el.size += 1;
              }
              el.hunger = false;
              el.resetHunger();
              el.vel = Util.randomVec(5);
              el.velX = el.vel[0]
              this.food.shift();
            }
          } 
          else {
            el.move();
          }
        })
      }
      else {
        el.move();
      }
      })

      // hoverFish(e){
      // let hoverX = e.clientX;
      // let hoverY = e.clientY;
      // let pos = [decX, decY];
      // }
    };
 
  

  isOutOfBounds(pos) {
    return (pos[0] < 0) || (pos[1] < 0) ||
      (pos[0] > Game.DIM_X) || (pos[1] > Game.DIM_Y);
  };

}

export {Game};