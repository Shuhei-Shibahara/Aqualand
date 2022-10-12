

class Decoration{
  constructor (pos, zone){
    this.posX = pos[0];
    this.posY = 500;
    this.zone = zone;
  }

  draw(ctx) {
    if (this.posX < 450) {
      this.posX = 80;
      this.zone = 1;
    }
    if (this.posX >= 450 && this.posX < 750){
      this.posX = 450;
      this.zone = 2;
    }

    if (this.posX >= 750 && this.posX < 1100) {
      this.posX = 750;
      this.zone = 3;
    }

    if (this.posX >= 1150) {
      this.posX = 1150;
      this.zone = 4;
    }

    const dec = new Image();
    dec.src = 'src/image/palmtree.png'
    ctx.drawImage(dec, this.posX, this.posY, 120, 400)
  };

}

export {Decoration}