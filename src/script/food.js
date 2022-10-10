class Food {
  constructor(pos) {
    this.pos = pos;
    this.posX = pos[0];
    this.posY = pos[1];
    this.life = 10;

  }

    draw(ctx) {

      const worm = new Image();
      worm.src = 'src/image/worm.png'
      if (this.life > 0){
      ctx.drawImage(worm, this.posX, this.posY, 30, 60);
      }
    }

  };

  export {Food};