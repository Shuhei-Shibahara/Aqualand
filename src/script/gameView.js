
import {Game} from './game.js'

class GameView {
  constructor(ctx){
  this.ctx = ctx;
  this.game = new Game();
  }

  start () {
    setInterval(() => {
      this.game.moveObjects();
      this.game.draw(this.ctx);
    }, 50);
    setInterval(()=>{
      this.game.moveBubbles();
      this.game.drawBubbles(this.ctx);
    }, 100);
    setInterval(() => {
      this.game.createBubble();
    }, 3000);

  }
}

export {GameView};