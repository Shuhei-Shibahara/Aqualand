import {Util} from "./util.js"
class Fish {
  constructor (options){
    this.pos = options.pos;
    this.vel = options.vel;
    this.radius = options.radius;
  }

  draw(ctx) {
    ctx.fillStyle = 'orange';
    ctx.beginPath();
    ctx.arc(
      this.pos[0], this.pos[1], this.radius, 0, 2 * Math.PI, true
    );
    ctx.fill();
  };



}

export {Fish}

