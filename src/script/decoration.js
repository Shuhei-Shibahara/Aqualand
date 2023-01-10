

class Decoration{
  constructor (zone, dim){
    this.posX = 0;
    this.dimX = dim[0]
    this.posY = dim[1] * .487;
    this.zone = zone;
  }

  draw(ctx) {
    if (this.zone === 1) {
      this.posX = this.dimX * 0.1;
    }
    if (this.zone === 2){
      this.posX = this.dimX * 0.35;
    }

    if (this.zone === 3) {
      this.posX = this.dimX * 0.6;
    }

    if (this.zone === 4) {
      this.posX = this.dimX * 0.85;
    }

    const dec = new Image();
    dec.src = 'src/image/palmtree.png'
    ctx.drawImage(dec, this.posX, this.posY, 120, 400)
  };

}

export {Decoration}