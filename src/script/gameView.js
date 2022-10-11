
import { set } from 'core-js/core/dict';
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
    }, 50);
    setInterval(() => {
      this.game.createBubble();
      this.game.deleteBubble();
    }, 8000);
    setInterval(()=>{
      this.game.decreaseFoodLife()
    }, 800);
  }
}

export {GameView};