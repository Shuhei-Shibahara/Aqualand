import {Util} from "./util.js"

class Fish {
  constructor (pos){
    this.pos = pos;
    this.vel = Util.randomVec(5);
    this.radius = 10;
    // this.color = options.color;
    // this.game = Game();
  }
  
  draw(ctx) {
    const nemo = new Image();
    const nemo2 = new Image();
    nemo.src = 'src/image/l-clownFish.png'
    nemo2.src = 'src/image/r-clownFish.png'
    if (this.vel[0] > 0){
      ctx.drawImage(nemo2, this.pos[0], this.pos[1], 20, 30)
    }
    if (this.vel[0] < 0){
      ctx.drawImage(nemo, this.pos[0], this.pos[1], 20, 30)
    }
  };

 


  move() {
    this.pos[0] += this.vel[0]
    this.pos[1] += this.vel[1]
    if (this.pos[0] - 5 < 0 && this.vel[0] < 0 ){
      this.vel[0] = (-this.vel[0]);
    } 
    if (this.pos[0] + 20 > 880 && this.vel[0] > 0) {
      this.vel[0] = (-this.vel[0]);
    } 
    if (this.pos[1] - 20 < 0 && this.vel[1] < 0) {
      this.vel[1] = (-this.vel[1]);
    } 
    if (this.pos[1] + 20 > 500 && this.vel[1] > 0) {
      this.vel[1] = (-this.vel[1]);
    }
  };
  
}

export {Fish}

