

class Decoration{
  constructor (pos){
    this.posX = pos[0];
    this.posY = 250;
  }

  draw(ctx) {
    if (this.posX < 237) {
      this.posX = 30;
    }
    if (this.posX >= 237 && this.posX < 475){
      this. posX = 250;
    }

    if (this.posX >= 475 && this.posX < 712) {
      this.posX = 505;
    }

    if (this.posX >= 712 && this.posX < 950) {
      this.posX = 752;
    }

    const dec = new Image();
    dec.src = 'src/image/palmtree.png'
    this.correctPos
    ctx.drawImage(dec, this.posX, this.posY, 100, 250)
  };

}

export {Decoration}