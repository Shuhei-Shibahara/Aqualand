
class Fish{
  constructor(pos){
    this.pos = pos;
    this.speed = 1;
    this.radius = 50;
  }
  
  function draw(ctx) {
    ctx.beginPath();
    ctx.arc(this.pos[0], this.pos[1], this.radius, 0, Math.PI * 2, true);
    ctx.fillStyle = this.color;
    ctx.fill();
  }
  function move() {
    this.pos[0] += this.vel[0]
    this.pos[1] += this.vel[1]
  };
}

