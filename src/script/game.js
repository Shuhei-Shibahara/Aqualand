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
    this.grid = document.querySelector('.grid-container')
    this.item1 = document.querySelector('.grid-item1')
    this.item2 = document.querySelector('.grid-item2')
    this.item3 = document.querySelector('.grid-item3')
    this.item4 = document.querySelector('.grid-item4')
    this.navbar = document.querySelector('.navbar')
    this.destroy = this.destroy.bind(this);
    this.createFish = this.createFish.bind(this);
    this.createFood = this.createFood.bind(this);
    this.createDecoration = this.createDecoration.bind(this);
    this.directingNavbar = this.directingNavbar.bind(this);
    this.navbar = document.querySelector(".navbar")
    this.navbar.addEventListener('click', this.directingNavbar)
    this.count = 0;
  }


  // static DIM_X = this.canvas.width;
  // static DIM_Y = this.canvas.getBoundingClientRect().height;
  static MAX_FISH = 10;
  static MAX_DEC = 4;
  static NUM_BUBBLES = 4;
  static MAX_FOOD = 1;

  directingNavbar(e){
    const click = e.target;
    if (click.classList.value === 'feed') {
      this.canvas.removeEventListener('click', this.createFish)
      this.canvas.removeEventListener('click', this.createDecoration)
      this.canvas.removeEventListener('click', this.destroy)
      this.canvas.addEventListener('click', this.createFood)
      this.body.style.cursor = "url('src/image/c-fishFood.png'), auto"
      
    } 
    if (click.classList.value === 'fish'){
      this.canvas.removeEventListener('click', this.createFood)
      this.canvas.removeEventListener('click', this.destroy)
      this.canvas.removeEventListener('click', this.createDecoration)
      this.body.style.cursor = "url('./src/image/c-clownFish.png'), auto"
      this.canvas.addEventListener('click', this.createFish)
    } 
    if (click.classList.value === 'decorate'){
      this.canvas.removeEventListener('click', this.createFood)
      this.canvas.removeEventListener('click', this.createFish)
      this.canvas.removeEventListener('click', this.destroy)
      this.grid.style.display = 'flex';
      this.body.style.cursor = "url('./src/image/c-decoration.png'), auto"
      document.addEventListener('click', this.createDecoration)
    }else{
      this.grid.style.display = 'none';
    }
    if (click.classList.value === 'delete') {
      this.canvas.removeEventListener('click', this.createFood)
      this.canvas.removeEventListener('click', this.createFish)
      this.canvas.removeEventListener('click', this.createDecoration)
      this.canvas.addEventListener('click', this.destroy)
      this.body.style.cursor = "url('./src/image/c-delete.png'), auto"

    }
    if (click.classList.value === 'imgexit') {
      this.canvas.removeEventListener('click', this.createFish)
      this.canvas.removeEventListener('click', this.createDecoration)
      this.canvas.removeEventListener('click', this.destroy)
      this.canvas.removeEventListener('click', this.createFood)
      this.body.style.cursor = 'pointer'

    }

  }

  destroy(e){
    let targetX = e.clientX - 200;
    let targetY = e.clientY;
    console.log(targetX, targetY)
    let pos = [targetX, targetY]
    Object.values(this.fish).forEach((el) => {
      if (el.status === 'dead')
        if (targetX < el.posX + 200 && targetX > el.posX - 100 && targetY < el.posY + 100 && targetY > el.posY){
        delete this.fish[el.name]; 
      }
    })
  }

  
  createFood(e){
    // console.log(this.canvas.getBoundingClientRect().width)
    console.log(e.clientX)
    let foodX = e.clientX - 300;
    let foodY = e.clientY - 40;
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
    if (this.navbar.style.display === 'flex'){
      this.grid.style.marginLeft = '9.9vw'
    }
    let zone;
    if (e.target === this.item1){
      zone = 1;
    }
    if (e.target === this.item2) {
      zone = 2;
    } 
    if (e.target === this.item3) {
      zone = 3;
    } 
    if (e.target === this.item4) {
      zone = 4;
    }
    if (this.dec.length < Game.MAX_DEC) {
      this.addDecoration(zone)
    }

    if (this.dec.length === Game.MAX_DEC){
      this.grid.style.display = 'none'
    }
  }


  createFish (e) {
 
      // let fishX = (this.canvas.getBoundingClientRect().width * .1) + e.clientX;
      // let fishY = (this.canvas.getBoundingClientRect().height * .1) + e.clientY;
      let fishX = e.clientX - (this.canvas.width * .1);
      let fishY = e.clientY - (this.canvas.height * .1);
      // console.log(this.canvas.getBoundingClientRect().width, 'width')
      console.log(this.canvas.width, 'width')
      console.log(this.canvas.height,'height')
      let pos = [fishX,fishY];
      let fishName = `fish${this.count}`;
      this.count++;
      if (Object.keys(this.fish).length === Game.MAX_FISH){
        this.body.style.cursor = 'pointer'
      }
  
      if (!this.isOutOfBounds(pos) && Object.keys(this.fish).length < Game.MAX_FISH){
        this.addFish(pos, fishName);
      }
    }
  
 
  addFish (pos, fishName) {
    const fish = new Fish(pos, fishName)

    
    this.fish[fishName] = fish
  }

  addDecoration(zone){
    if (zone){
        const dec = new Decoration(zone);
        const empty = true;
        this.dec.forEach(checker => {
          if (checker.zone === dec.zone){
            empty = false;
          }
        })
        if (empty){
          this.dec.push(dec);
        }
      }
    }

  randomPosition() {
    let x = Math.floor(Math.random() * (this.canvas.getBoundingClientRect().width));
    // let y = Math.floor(Math.random() * (Game.DIM_Y + 1));
    let y = this.canvas.getBoundingClientRect().height;
    return [x, y]
  }
  

  draw (ctx) {
    // ctx.clearRect(0, 0, 1500, 800);
    ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
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
      if (el.health > 0){
        if (this.food.length > 0 && el.hunger){
          this.food.forEach(food =>{
            if (el.hunger){
              el.chase(food.pos);
              if (el.posX >= (food.pos[0] - 30) && el.posX <= (food.pos[0] + 30) && el.posY >= (food.pos[1] - 30) && el.posY <= (food.pos[1] + 30)){
                if (el.size < 3){
                  el.size += 1;
                }
                el.hunger = false;
                el.health = 60;
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
      }
      else{
        el.move();
      }
    })
    };
 
  

  isOutOfBounds(pos) {
    return (pos[0] < 0) || (pos[1] < 0) ||
      (pos[0] > this.canvas.getBoundingClientRect().width) || (pos[1] > this.canvas.getBoundingClientRect().height);
  };

}

export {Game};