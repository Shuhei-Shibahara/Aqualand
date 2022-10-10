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
    this.size = 1;
    // this.color = options.color;
    // this.game = Game();
  }
  
  draw(ctx) {

    const nemo = new Image();
    const nemo2 = new Image();
    nemo.style.id = 'nemo'
    nemo2.style.id = 'nemo2'
    nemo.src = 'src/image/l-clownFish.png'
    nemo2.src = 'src/image/r-clownFish.png'

    if (this.velX > 0 && this.size === 1){
      ctx.drawImage(nemo2, this.posX, this.posY, 20, 30)
    }
    if (this.velX < 0 && this.size === 1){
      ctx.drawImage(nemo, this.posX, this.posY, 20, 30)
    }
    if (this.velX > 0 && this.size === 2) {
      ctx.drawImage(nemo2, this.posX, this.posY, 30, 50)
    }
    if (this.velX < 0 && this.size === 2) {
      ctx.drawImage(nemo, this.posX, this.posY, 30, 50)
    }
    if (this.velX > 0 && this.size === 3) {
      ctx.drawImage(nemo2, this.posX, this.posY, 20, 30)
    }
    if (this.velX < 0 && this.size === 3) {
      ctx.drawImage(nemo, this.posX, this.posY, 20, 30)
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
    
    this.posX += this.velX;
    this.posY += this.vel[1];
    if (this.posX - 5 < 0 && this.velX < 0 ){
      this.velX = (-this.velX);
    } 
    if (this.posX + 20 > 880 && this.velX > 0) {
      this.velX = (-this.velX);
    } 
    if (this.posY - 20 < 0 && this.vel[1] < 0) {
      this.vel[1] = (-this.vel[1]);
    } 
    if (this.posY + 20 > 500 && this.vel[1] > 0) {
      this.vel[1] = (-this.vel[1]);
    }
  };
  
}

export {Fish}

