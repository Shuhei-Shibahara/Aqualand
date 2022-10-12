import {Util} from "./util.js"

class Fish {
  constructor (pos,name){
    this.pos = pos;
    this.posX = pos[0];
    this.posY = pos[1];
    this.vel = Util.randomVec(5);
    this.velX = this.vel[0];
    this.radius = 10;
    this.name = name
    this.hunger = true;
    this.health = 10;
    this.size = 1;
    this.status = 'alive'
    this.resetHunger();
    this.healthClock();
  }
  
  resetHunger(){
    if (!this.hunger){
      setInterval(() => {
      }, 30000)
        this.hunger = true;
    }
  }

  healthClock(){
    if (this.hunger === true){
      setInterval(() => {
        this.health--;
      }, 1000)
    }
  }
  

  draw(ctx) {

    const nemo = new Image();
    const nemo2 = new Image();
    nemo.src = 'src/image/l-clownFish.png'
    nemo2.src = 'src/image/r-clownFish.png'

    const deadFish = new Image();
    deadFish.src = 'src/image/deadFish.png'

  if (this.health > 0){
    if (this.velX > 0 && this.size === 1){
      ctx.drawImage(nemo2, this.posX, this.posY, 40, 60)
    }
    if (this.velX < 0 && this.size === 1){
      ctx.drawImage(nemo, this.posX, this.posY, 40, 60)
    }
    if (this.velX > 0 && this.size === 2) {
      ctx.drawImage(nemo2, this.posX, this.posY, 60, 80)
    }
    if (this.velX < 0 && this.size === 2) {
      ctx.drawImage(nemo, this.posX, this.posY, 60, 80)
    }
    if (this.velX > 0 && this.size === 3) {
      ctx.drawImage(nemo2, this.posX, this.posY, 100, 120)
    }
    if (this.velX < 0 && this.size === 3) {
      ctx.drawImage(nemo, this.posX, this.posY, 100, 120)
    }
  }
  if (this.health <= 0) {
    this.status = 'dead'
    ctx.drawImage(deadFish, this.posX, this.posY, 80, 40)
  }
    
 
  };

  chase(pos){
    let foodX = pos[0];
    let foodY = pos[1];
    let veldiffX = (foodX - this.posX);
    let veldiffY = (foodY - this.posY);
    let distance = Math.sqrt((veldiffX**2) + (veldiffY**2));
    let velX = veldiffX / distance;
    let velY = veldiffY / distance;
    this.velX = velX;
    this.posX += velX;
    this.posY += velY;

  }

 


  move() {
    // console.log(this.posX)
    if (this.health > 0){
      this.posX += this.velX;
      this.posY += this.vel[1];
      if (this.size === 1){
        if (this.posX - 5 < 0 && this.velX < 0 ){
          this.velX = (-this.velX);
        } 
        if (this.posX + 40 > 1400 && this.velX > 0) {
          this.velX = (-this.velX);
        } 
        if (this.posY < 0 && this.vel[1] < 0) {
          this.vel[1] = (-this.vel[1]);
        } 
        if (this.posY + 70 > 900 && this.vel[1] > 0) {
          this.vel[1] = (-this.vel[1]);
        }
      }
      if (this.size === 2){
        if (this.posX < 0 && this.velX < 0) {
          this.velX = (-this.velX);
        }
        if (this.posX + 70 > 1400 && this.velX > 0) {
          this.velX = (-this.velX);
        }
        if (this.posY - 5 < 0 && this.vel[1] < 0) {
          this.vel[1] = (-this.vel[1]);
        }
        if (this.posY + 80 > 900 && this.vel[1] > 0) {
          this.vel[1] = (-this.vel[1]);
        }
      }
      if (this.size === 3) {
        if (this.posX < 0 && this.velX < 0) {
          this.velX = (-this.velX);
        }
        if (this.posX + 90 > 1400 && this.velX > 0) {
          this.velX = (-this.velX);
        }
        if (this.posY - 5 < 0 && this.vel[1] < 0) {
          this.vel[1] = (-this.vel[1]);
        }
        if (this.posY + 110 > 900 && this.vel[1] > 0) {
          this.vel[1] = (-this.vel[1]);
        }
      }
    }else{
      if (this.posY > 0 && this.posY <= 15){
        this.posY ++;
      }else{
        this.posY --;
        console.log(this.posY)
      }
    }
  
  };
  
}

export {Fish}

