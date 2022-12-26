
class Bubble {
  constructor(pos) {
    this.posX = pos[0];
    this.posY = pos[1];

  }

  draw(ctx) {

    const bubble = new Image();
    bubble.src = 'src/image/bubble.png'
    const bubble2 = new Image();
    bubble2.src = 'src/image/bubble2.png'
    if (this.posY < 75){
      ctx.drawImage(bubble, this.posX, this.posY, 20, 50);
    }
    if (this.posY >= 75 && this.posY < 125) {
      ctx.drawImage(bubble2, this.posX, this.posY, 20, 50);
    }
    if (this.posY >= 125 && this.posY < 200) {
      ctx.drawImage(bubble, this.posX, this.posY, 20, 50);
    }
    if (this.posY >= 200 && this.posY < 275) {
      ctx.drawImage(bubble2, this.posX, this.posY, 20, 50);
    }
    if (this.posY >= 275 && this.posY < 325) {
      ctx.drawImage(bubble, this.posX, this.posY, 20, 50);
    } 
    if (this.posY >= 325 && this.posY < 400){
      ctx.drawImage(bubble, this.posX, this.posY, 20, 50);
    }
    if (this.posY >= 400) {
      ctx.drawImage(bubble, this.posX, this.posY, 20, 50);
    }

  };

  move(){
    this.posY -= 1.5
  }

}

export {Bubble};