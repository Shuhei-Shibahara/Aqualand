
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
    if (this.posY < 200){
      ctx.drawImage(bubble, this.posX, this.posY, 40, 70);

    }
    if (this.posY >= 200) {
      ctx.drawImage(bubble2, this.posX, this.posY, 40, 70);
      this.left = true;
    }
  };

  move(){
    this.posY -= 0.5
  }
}

export {Bubble};