
import {Game} from './game.js'

class GameView {
  construction(game,ctx){
  this.ctx = ctx;
  this.game = new Game();
  }

  start () {
    setInterval(() => {
      this.game.moveObjects();
      this.game.draw(this.drawingContext);
    }, 20);
  }
}

export {GameView};