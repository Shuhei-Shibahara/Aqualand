
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
  }
}

export {GameView};