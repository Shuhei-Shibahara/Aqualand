import {Util} from "./util.js"

class Fish {
  constructor (pos,name){
    this.posX = pos[0];
    this.posY = pos[1];
    this.vel = Util.randomVec(5);
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
    if (this.vel[0] > 0){
      ctx.drawImage(nemo2, this.posX, this.posY, 20, 30)
    }
    if (this.vel[0] < 0){
      ctx.drawImage(nemo, this.posX, this.posY, 20, 30)
    }
  };

  chase(pos){
    let foodX = pos[0];
    let foodY = pos[1];

    if (this.hunger){
      let velX = (foodX - this.posX);
      let velY = (foodY - this.posY);
      let distance = Math.sqrt((velY**2) + (velY**2));
      let directionAngle = 2;
      this.posX += velX/distance;
      this.posY += velY/distance;
    } 
  }

 


  move() {
    this.posX += this.vel[0]
    this.posY += this.vel[1]
    if (this.posX - 5 < 0 && this.vel[0] < 0 ){
      this.vel[0] = (-this.vel[0]);
    } 
    if (this.posX + 20 > 880 && this.vel[0] > 0) {
      this.vel[0] = (-this.vel[0]);
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

