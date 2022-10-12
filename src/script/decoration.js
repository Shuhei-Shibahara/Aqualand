

class Decoration{
  constructor (zone){
    this.posX = 0;
    this.posY = 500;
    this.zone = zone;
  }

  draw(ctx) {
    if (this.zone === 1) {
      this.posX = 120;
    }
    if (this.zone === 2){
      this.posX = 450;
    }

    if (this.zone === 3) {
      this.posX = 800;
    }

    if (this.zone === 4) {
      this.posX = 1180;
    }

    const dec = new Image();
    dec.src = 'src/image/palmtree.png'
    ctx.drawImage(dec, this.posX, this.posY, 120, 400)
  };

}

export {Decoration}