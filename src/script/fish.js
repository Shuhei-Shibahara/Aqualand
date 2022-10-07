import {Util} from "./util.js"
class Fish {
  constructor (pos){
    this.pos = pos;
    this.vel = [10,10];
    this.radius = 10;
    // this.color = options.color;
    // this.game = options.game;
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
  };
  


}



export {Fish}

