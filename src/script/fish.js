import {Util} from "./util.js"
import {Game} from "./game.js"

class Fish {
  constructor (pos){
    this.pos = pos;
    this.vel = Util.randomVec(5);
    this.radius = 10;
    // this.color = options.color;
    // this.game = Game();
  }

  draw(ctx) {
    ctx.fillStyle = 'orange';
    ctx.beginPath();
    ctx.arc(
      this.pos[0], this.pos[1], this.radius, 0, 2 * Math.PI, true
    );
    ctx.fill();

  };


  move() {
    this.pos[0] += this.vel[0]
    this.pos[1] += this.vel[1]
    if (this.pos[0] - 10 < 0 && this.vel[0] < 0 ){
      this.vel[0] = (-this.vel[0]);
    } 
    if (this.pos[0] + 10 > 880 && this.vel[0] > 0) {
      this.vel[0] = (-this.vel[0]);
    } 
    if (this.pos[1] - 10 < 0 && this.vel[1] < 0) {
      this.vel[1] = (-this.vel[1]);
    } 
    if (this.pos[1] + 10 > 500 && this.vel[1] > 0) {
      this.vel[1] = (-this.vel[1]);
    }
  };
  
}

export {Fish}

