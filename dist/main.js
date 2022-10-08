/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _script_fish_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./script/fish.js */ \"./src/script/fish.js\");\n/* harmony import */ var _script_gameView_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./script/gameView.js */ \"./src/script/gameView.js\");\n\n\ndocument.addEventListener(\"DOMContentLoaded\", () => {\n  const canvas = document.getElementById('canvas');\n  const ctx = canvas.getContext(\"2d\");\n  canvas.height = 500;\n  canvas.width = 880; // const img = new Image();\n  // img.src = \"./image/backround.jpg\"\n  // img.onload = function(){\n  //   layout.drawImage(img, 100, 100, 500, 880)\n  // }\n\n  const burger = document.querySelector('.burger');\n  const nav = document.querySelector('.navbar');\n  burger.addEventListener('mouseover', function () {\n    nav.style.display = 'flex';\n  });\n  nav.addEventListener('mouseout', function () {\n    nav.style.display = 'none';\n  });\n  const gameview = new _script_gameView_js__WEBPACK_IMPORTED_MODULE_1__.GameView(ctx);\n  gameview.start();\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7O0FBQUE7QUFFQTtBQUVBRSxRQUFRLENBQUNDLGdCQUFULENBQTBCLGtCQUExQixFQUE4QyxNQUFNO0VBQ2xELE1BQU1DLE1BQU0sR0FBR0YsUUFBUSxDQUFDRyxjQUFULENBQXdCLFFBQXhCLENBQWY7RUFDQSxNQUFNQyxHQUFHLEdBQUdGLE1BQU0sQ0FBQ0csVUFBUCxDQUFrQixJQUFsQixDQUFaO0VBQ0FILE1BQU0sQ0FBQ0ksTUFBUCxHQUFnQixHQUFoQjtFQUNBSixNQUFNLENBQUNLLEtBQVAsR0FBZSxHQUFmLENBSmtELENBTWxEO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7O0VBQ0EsTUFBTUMsTUFBTSxHQUFHUixRQUFRLENBQUNTLGFBQVQsQ0FBdUIsU0FBdkIsQ0FBZjtFQUNBLE1BQU1DLEdBQUcsR0FBR1YsUUFBUSxDQUFDUyxhQUFULENBQXVCLFNBQXZCLENBQVo7RUFDQUQsTUFBTSxDQUFDUCxnQkFBUCxDQUF3QixXQUF4QixFQUFxQyxZQUFVO0lBQzdDUyxHQUFHLENBQUNDLEtBQUosQ0FBVUMsT0FBVixHQUFvQixNQUFwQjtFQUNELENBRkQ7RUFHQUYsR0FBRyxDQUFDVCxnQkFBSixDQUFxQixVQUFyQixFQUFpQyxZQUFVO0lBQ3pDUyxHQUFHLENBQUNDLEtBQUosQ0FBVUMsT0FBVixHQUFvQixNQUFwQjtFQUNELENBRkQ7RUFHQSxNQUFNQyxRQUFRLEdBQUcsSUFBSWQseURBQUosQ0FBYUssR0FBYixDQUFqQjtFQUNBUyxRQUFRLENBQUNDLEtBQVQ7QUFDRCxDQXJCRCIsInNvdXJjZXMiOlsid2VicGFjazovL2phdmFzY3JpcHRwcm9qZWN0Ly4vc3JjL2luZGV4LmpzP2I2MzUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtGaXNofSBmcm9tIFwiLi9zY3JpcHQvZmlzaC5qc1wiO1xuXG5pbXBvcnQge0dhbWVWaWV3fSBmcm9tIFwiLi9zY3JpcHQvZ2FtZVZpZXcuanNcIjtcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgKCkgPT4ge1xuICBjb25zdCBjYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2FudmFzJylcbiAgY29uc3QgY3R4ID0gY2FudmFzLmdldENvbnRleHQoXCIyZFwiKTsgXG4gIGNhbnZhcy5oZWlnaHQgPSA1MDA7XG4gIGNhbnZhcy53aWR0aCA9IDg4MDtcbiAgXG4gIC8vIGNvbnN0IGltZyA9IG5ldyBJbWFnZSgpO1xuICAvLyBpbWcuc3JjID0gXCIuL2ltYWdlL2JhY2tyb3VuZC5qcGdcIlxuICAvLyBpbWcub25sb2FkID0gZnVuY3Rpb24oKXtcbiAgLy8gICBsYXlvdXQuZHJhd0ltYWdlKGltZywgMTAwLCAxMDAsIDUwMCwgODgwKVxuICAvLyB9XG4gIGNvbnN0IGJ1cmdlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5idXJnZXInKVxuICBjb25zdCBuYXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmF2YmFyJylcbiAgYnVyZ2VyLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlb3ZlcicsIGZ1bmN0aW9uKCl7XG4gICAgbmF2LnN0eWxlLmRpc3BsYXkgPSAnZmxleCc7XG4gIH0pXG4gIG5hdi5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW91dCcsIGZ1bmN0aW9uKCl7XG4gICAgbmF2LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gIH0pXG4gIGNvbnN0IGdhbWV2aWV3ID0gbmV3IEdhbWVWaWV3KGN0eClcbiAgZ2FtZXZpZXcuc3RhcnQoKTtcbn0pO1xuXG4iXSwibmFtZXMiOlsiRmlzaCIsIkdhbWVWaWV3IiwiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwiY2FudmFzIiwiZ2V0RWxlbWVudEJ5SWQiLCJjdHgiLCJnZXRDb250ZXh0IiwiaGVpZ2h0Iiwid2lkdGgiLCJidXJnZXIiLCJxdWVyeVNlbGVjdG9yIiwibmF2Iiwic3R5bGUiLCJkaXNwbGF5IiwiZ2FtZXZpZXciLCJzdGFydCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/script/fish.js":
/*!****************************!*\
  !*** ./src/script/fish.js ***!
  \****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Fish\": function() { return /* binding */ Fish; }\n/* harmony export */ });\n/* harmony import */ var _util_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./util.js */ \"./src/script/util.js\");\n\n\nclass Fish {\n  constructor(pos, name) {\n    this.pos = pos;\n    this.vel = _util_js__WEBPACK_IMPORTED_MODULE_0__.Util.randomVec(5);\n    this.radius = 10;\n    this.name = name; // this.color = options.color;\n    // this.game = Game();\n  }\n\n  draw(ctx) {\n    const nemo = new Image();\n    const nemo2 = new Image();\n    nemo.style.id = 'nemo';\n    nemo2.style.id = 'nemo2';\n    nemo.src = 'src/image/l-clownFish.png';\n    nemo2.src = 'src/image/r-clownFish.png';\n\n    if (this.vel[0] > 0) {\n      ctx.drawImage(nemo2, this.pos[0], this.pos[1], 20, 30);\n    }\n\n    if (this.vel[0] < 0) {\n      ctx.drawImage(nemo, this.pos[0], this.pos[1], 20, 30);\n    }\n  }\n\n  move() {\n    this.pos[0] += this.vel[0];\n    this.pos[1] += this.vel[1];\n\n    if (this.pos[0] - 5 < 0 && this.vel[0] < 0) {\n      this.vel[0] = -this.vel[0];\n    }\n\n    if (this.pos[0] + 20 > 880 && this.vel[0] > 0) {\n      this.vel[0] = -this.vel[0];\n    }\n\n    if (this.pos[1] - 20 < 0 && this.vel[1] < 0) {\n      this.vel[1] = -this.vel[1];\n    }\n\n    if (this.pos[1] + 20 > 500 && this.vel[1] > 0) {\n      this.vel[1] = -this.vel[1];\n    }\n  }\n\n}\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0L2Zpc2guanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTs7QUFFQSxNQUFNQyxJQUFOLENBQVc7RUFDVEMsV0FBVyxDQUFFQyxHQUFGLEVBQU1DLElBQU4sRUFBVztJQUNwQixLQUFLRCxHQUFMLEdBQVdBLEdBQVg7SUFDQSxLQUFLRSxHQUFMLEdBQVdMLG9EQUFBLENBQWUsQ0FBZixDQUFYO0lBQ0EsS0FBS08sTUFBTCxHQUFjLEVBQWQ7SUFDQSxLQUFLSCxJQUFMLEdBQVlBLElBQVosQ0FKb0IsQ0FLcEI7SUFDQTtFQUNEOztFQUVESSxJQUFJLENBQUNDLEdBQUQsRUFBTTtJQUVSLE1BQU1DLElBQUksR0FBRyxJQUFJQyxLQUFKLEVBQWI7SUFDQSxNQUFNQyxLQUFLLEdBQUcsSUFBSUQsS0FBSixFQUFkO0lBQ0FELElBQUksQ0FBQ0csS0FBTCxDQUFXQyxFQUFYLEdBQWdCLE1BQWhCO0lBQ0FGLEtBQUssQ0FBQ0MsS0FBTixDQUFZQyxFQUFaLEdBQWlCLE9BQWpCO0lBQ0FKLElBQUksQ0FBQ0ssR0FBTCxHQUFXLDJCQUFYO0lBQ0FILEtBQUssQ0FBQ0csR0FBTixHQUFZLDJCQUFaOztJQUNBLElBQUksS0FBS1YsR0FBTCxDQUFTLENBQVQsSUFBYyxDQUFsQixFQUFvQjtNQUNsQkksR0FBRyxDQUFDTyxTQUFKLENBQWNKLEtBQWQsRUFBcUIsS0FBS1QsR0FBTCxDQUFTLENBQVQsQ0FBckIsRUFBa0MsS0FBS0EsR0FBTCxDQUFTLENBQVQsQ0FBbEMsRUFBK0MsRUFBL0MsRUFBbUQsRUFBbkQ7SUFDRDs7SUFDRCxJQUFJLEtBQUtFLEdBQUwsQ0FBUyxDQUFULElBQWMsQ0FBbEIsRUFBb0I7TUFDbEJJLEdBQUcsQ0FBQ08sU0FBSixDQUFjTixJQUFkLEVBQW9CLEtBQUtQLEdBQUwsQ0FBUyxDQUFULENBQXBCLEVBQWlDLEtBQUtBLEdBQUwsQ0FBUyxDQUFULENBQWpDLEVBQThDLEVBQTlDLEVBQWtELEVBQWxEO0lBQ0Q7RUFDRjs7RUFLRGMsSUFBSSxHQUFHO0lBQ0wsS0FBS2QsR0FBTCxDQUFTLENBQVQsS0FBZSxLQUFLRSxHQUFMLENBQVMsQ0FBVCxDQUFmO0lBQ0EsS0FBS0YsR0FBTCxDQUFTLENBQVQsS0FBZSxLQUFLRSxHQUFMLENBQVMsQ0FBVCxDQUFmOztJQUNBLElBQUksS0FBS0YsR0FBTCxDQUFTLENBQVQsSUFBYyxDQUFkLEdBQWtCLENBQWxCLElBQXVCLEtBQUtFLEdBQUwsQ0FBUyxDQUFULElBQWMsQ0FBekMsRUFBNEM7TUFDMUMsS0FBS0EsR0FBTCxDQUFTLENBQVQsSUFBZSxDQUFDLEtBQUtBLEdBQUwsQ0FBUyxDQUFULENBQWhCO0lBQ0Q7O0lBQ0QsSUFBSSxLQUFLRixHQUFMLENBQVMsQ0FBVCxJQUFjLEVBQWQsR0FBbUIsR0FBbkIsSUFBMEIsS0FBS0UsR0FBTCxDQUFTLENBQVQsSUFBYyxDQUE1QyxFQUErQztNQUM3QyxLQUFLQSxHQUFMLENBQVMsQ0FBVCxJQUFlLENBQUMsS0FBS0EsR0FBTCxDQUFTLENBQVQsQ0FBaEI7SUFDRDs7SUFDRCxJQUFJLEtBQUtGLEdBQUwsQ0FBUyxDQUFULElBQWMsRUFBZCxHQUFtQixDQUFuQixJQUF3QixLQUFLRSxHQUFMLENBQVMsQ0FBVCxJQUFjLENBQTFDLEVBQTZDO01BQzNDLEtBQUtBLEdBQUwsQ0FBUyxDQUFULElBQWUsQ0FBQyxLQUFLQSxHQUFMLENBQVMsQ0FBVCxDQUFoQjtJQUNEOztJQUNELElBQUksS0FBS0YsR0FBTCxDQUFTLENBQVQsSUFBYyxFQUFkLEdBQW1CLEdBQW5CLElBQTBCLEtBQUtFLEdBQUwsQ0FBUyxDQUFULElBQWMsQ0FBNUMsRUFBK0M7TUFDN0MsS0FBS0EsR0FBTCxDQUFTLENBQVQsSUFBZSxDQUFDLEtBQUtBLEdBQUwsQ0FBUyxDQUFULENBQWhCO0lBQ0Q7RUFDRjs7QUE1Q1EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9qYXZhc2NyaXB0cHJvamVjdC8uL3NyYy9zY3JpcHQvZmlzaC5qcz9lYTkzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7VXRpbH0gZnJvbSBcIi4vdXRpbC5qc1wiXG5cbmNsYXNzIEZpc2gge1xuICBjb25zdHJ1Y3RvciAocG9zLG5hbWUpe1xuICAgIHRoaXMucG9zID0gcG9zO1xuICAgIHRoaXMudmVsID0gVXRpbC5yYW5kb21WZWMoNSk7XG4gICAgdGhpcy5yYWRpdXMgPSAxMDtcbiAgICB0aGlzLm5hbWUgPSBuYW1lXG4gICAgLy8gdGhpcy5jb2xvciA9IG9wdGlvbnMuY29sb3I7XG4gICAgLy8gdGhpcy5nYW1lID0gR2FtZSgpO1xuICB9XG4gIFxuICBkcmF3KGN0eCkge1xuXG4gICAgY29uc3QgbmVtbyA9IG5ldyBJbWFnZSgpO1xuICAgIGNvbnN0IG5lbW8yID0gbmV3IEltYWdlKCk7XG4gICAgbmVtby5zdHlsZS5pZCA9ICduZW1vJ1xuICAgIG5lbW8yLnN0eWxlLmlkID0gJ25lbW8yJ1xuICAgIG5lbW8uc3JjID0gJ3NyYy9pbWFnZS9sLWNsb3duRmlzaC5wbmcnXG4gICAgbmVtbzIuc3JjID0gJ3NyYy9pbWFnZS9yLWNsb3duRmlzaC5wbmcnXG4gICAgaWYgKHRoaXMudmVsWzBdID4gMCl7XG4gICAgICBjdHguZHJhd0ltYWdlKG5lbW8yLCB0aGlzLnBvc1swXSwgdGhpcy5wb3NbMV0sIDIwLCAzMClcbiAgICB9XG4gICAgaWYgKHRoaXMudmVsWzBdIDwgMCl7XG4gICAgICBjdHguZHJhd0ltYWdlKG5lbW8sIHRoaXMucG9zWzBdLCB0aGlzLnBvc1sxXSwgMjAsIDMwKVxuICAgIH1cbiAgfTtcblxuIFxuXG5cbiAgbW92ZSgpIHtcbiAgICB0aGlzLnBvc1swXSArPSB0aGlzLnZlbFswXVxuICAgIHRoaXMucG9zWzFdICs9IHRoaXMudmVsWzFdXG4gICAgaWYgKHRoaXMucG9zWzBdIC0gNSA8IDAgJiYgdGhpcy52ZWxbMF0gPCAwICl7XG4gICAgICB0aGlzLnZlbFswXSA9ICgtdGhpcy52ZWxbMF0pO1xuICAgIH0gXG4gICAgaWYgKHRoaXMucG9zWzBdICsgMjAgPiA4ODAgJiYgdGhpcy52ZWxbMF0gPiAwKSB7XG4gICAgICB0aGlzLnZlbFswXSA9ICgtdGhpcy52ZWxbMF0pO1xuICAgIH0gXG4gICAgaWYgKHRoaXMucG9zWzFdIC0gMjAgPCAwICYmIHRoaXMudmVsWzFdIDwgMCkge1xuICAgICAgdGhpcy52ZWxbMV0gPSAoLXRoaXMudmVsWzFdKTtcbiAgICB9IFxuICAgIGlmICh0aGlzLnBvc1sxXSArIDIwID4gNTAwICYmIHRoaXMudmVsWzFdID4gMCkge1xuICAgICAgdGhpcy52ZWxbMV0gPSAoLXRoaXMudmVsWzFdKTtcbiAgICB9XG4gIH07XG4gIFxufVxuXG5leHBvcnQge0Zpc2h9XG5cbiJdLCJuYW1lcyI6WyJVdGlsIiwiRmlzaCIsImNvbnN0cnVjdG9yIiwicG9zIiwibmFtZSIsInZlbCIsInJhbmRvbVZlYyIsInJhZGl1cyIsImRyYXciLCJjdHgiLCJuZW1vIiwiSW1hZ2UiLCJuZW1vMiIsInN0eWxlIiwiaWQiLCJzcmMiLCJkcmF3SW1hZ2UiLCJtb3ZlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/script/fish.js\n");

/***/ }),

/***/ "./src/script/game.js":
/*!****************************!*\
  !*** ./src/script/game.js ***!
  \****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Game\": function() { return /* binding */ Game; }\n/* harmony export */ });\n/* harmony import */ var _fish_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fish.js */ \"./src/script/fish.js\");\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n//handles functionality of what my clicks would be doing\n\n\nclass Game {\n  constructor() {\n    this.fish = {};\n    this.canvas = document.getElementById('canvas');\n    this.createFish = this.createFish.bind(this);\n    this.canvas.addEventListener('click', this.createFish);\n  }\n\n  createFish(e) {\n    Object.values(this.fish).includes(e.target);\n    let fishX = e.clientX - 50;\n    let fishY = e.clientY - 40;\n    let pos = [fishX, fishY];\n\n    if (!this.isOutOfBounds(pos) && Object.keys(this.fish).length < Game.NUM_FISH) {\n      this.addFish(pos);\n    }\n  } // checkFish(pos){\n  //   this.fish.forEach(el => {\n  //     if (el.pos === pos){\n  //       console.log('fish exist')\n  //     }else{\n  //     console.log('doesnt exist')\n  //     }\n  //   })\n  // }\n\n\n  addFish(pos) {\n    const fish = new _fish_js__WEBPACK_IMPORTED_MODULE_0__.Fish(pos, `fish${Object.values(this.fish).length}`);\n    this.fish[`fish${Object.values(this.fish).length}`] = fish;\n    let fishp = document.createElement('p');\n    fishp.id = `fish${Object.values(this.fish).length}`;\n  }\n\n  randomPosition() {\n    let x = Math.floor(Math.random() * (Game.DIM_X + 1));\n    let y = Math.floor(Math.random() * (Game.DIM_Y + 1));\n    return [x, y];\n  }\n\n  draw(ctx) {\n    ctx.clearRect(0, 0, Game.DIM_X, Game.DIM_Y);\n    Object.values(this.fish).forEach(el => {\n      el.draw(ctx);\n    }); // ctx.fillRect(0, 0, Game.DIM_X, Game.DIM_Y);\n  }\n\n  moveObjects() {\n    Object.values(this.fish).forEach(el => {\n      el.move(); // debugger\n    });\n  }\n\n  isOutOfBounds(pos) {\n    return pos[0] < 0 || pos[1] < 0 || pos[0] > Game.DIM_X || pos[1] > Game.DIM_Y;\n  }\n\n}\n\n_defineProperty(Game, \"DIM_X\", 880);\n\n_defineProperty(Game, \"DIM_Y\", 500);\n\n_defineProperty(Game, \"NUM_FISH\", 10);\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFFLENBQUNFLElBQUgsR0FEdUMsQ0FFdkM7SUFFRCxDQUpEO0VBS0Q7O0VBRUR0QixhQUFhLENBQUNELEdBQUQsRUFBTTtJQUNqQixPQUFRQSxHQUFHLENBQUMsQ0FBRCxDQUFILEdBQVMsQ0FBVixJQUFpQkEsR0FBRyxDQUFDLENBQUQsQ0FBSCxHQUFTLENBQTFCLElBQ0pBLEdBQUcsQ0FBQyxDQUFELENBQUgsR0FBU2xCLElBQUksQ0FBQ2dDLEtBRFYsSUFDcUJkLEdBQUcsQ0FBQyxDQUFELENBQUgsR0FBU2xCLElBQUksQ0FBQ2tDLEtBRDFDO0VBRUQ7O0FBeEVPOztnQkFBSmxDLGVBVVc7O2dCQVZYQSxlQVdXOztnQkFYWEEsa0JBWWMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9qYXZhc2NyaXB0cHJvamVjdC8uL3NyYy9zY3JpcHQvZ2FtZS5qcz9mMjAzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vaGFuZGxlcyBmdW5jdGlvbmFsaXR5IG9mIHdoYXQgbXkgY2xpY2tzIHdvdWxkIGJlIGRvaW5nXG5pbXBvcnQge0Zpc2h9IGZyb20gXCIuL2Zpc2guanNcIlxuXG5jbGFzcyBHYW1le1xuXG4gIGNvbnN0cnVjdG9yKCl7XG4gICAgdGhpcy5maXNoID0ge307XG4gICAgdGhpcy5jYW52YXMgPSAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NhbnZhcycpO1xuICAgIHRoaXMuY3JlYXRlRmlzaCA9IHRoaXMuY3JlYXRlRmlzaC5iaW5kKHRoaXMpO1xuICAgIHRoaXMuY2FudmFzLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5jcmVhdGVGaXNoKVxuXG4gIH1cblxuICBzdGF0aWMgRElNX1ggPSA4ODA7XG4gIHN0YXRpYyBESU1fWSA9IDUwMDtcbiAgc3RhdGljIE5VTV9GSVNIID0gMTA7XG5cbiAgY3JlYXRlRmlzaCAoZSkge1xuICAgICAgT2JqZWN0LnZhbHVlcyh0aGlzLmZpc2gpLmluY2x1ZGVzKGUudGFyZ2V0KVxuICAgICAgbGV0IGZpc2hYID0gZS5jbGllbnRYIC0gNTA7XG4gICAgICBsZXQgZmlzaFkgPSBlLmNsaWVudFkgLSA0MDtcbiAgICAgIGxldCBwb3MgPSBbZmlzaFgsZmlzaFldO1xuICAgICAgXG4gICAgICBpZiAoIXRoaXMuaXNPdXRPZkJvdW5kcyhwb3MpICYmIE9iamVjdC5rZXlzKHRoaXMuZmlzaCkubGVuZ3RoIDwgR2FtZS5OVU1fRklTSCl7XG4gICAgICAgIHRoaXMuYWRkRmlzaChwb3MpO1xuICAgICAgfVxuICAgIH1cbiAgXG5cbi8vIGNoZWNrRmlzaChwb3Mpe1xuLy8gICB0aGlzLmZpc2guZm9yRWFjaChlbCA9PiB7XG4vLyAgICAgaWYgKGVsLnBvcyA9PT0gcG9zKXtcbi8vICAgICAgIGNvbnNvbGUubG9nKCdmaXNoIGV4aXN0Jylcbi8vICAgICB9ZWxzZXtcbi8vICAgICBjb25zb2xlLmxvZygnZG9lc250IGV4aXN0Jylcbi8vICAgICB9XG4vLyAgIH0pXG4vLyB9XG5cbiAgYWRkRmlzaCAocG9zKSB7XG4gICAgY29uc3QgZmlzaCA9IG5ldyBGaXNoKHBvcywgYGZpc2gke09iamVjdC52YWx1ZXModGhpcy5maXNoKS5sZW5ndGh9YClcbiAgICBcbiAgICB0aGlzLmZpc2hbYGZpc2gke09iamVjdC52YWx1ZXModGhpcy5maXNoKS5sZW5ndGh9YF0gPSBmaXNoXG5cbiAgICBsZXQgZmlzaHAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcbiAgICBmaXNocC5pZCA9IGBmaXNoJHtPYmplY3QudmFsdWVzKHRoaXMuZmlzaCkubGVuZ3RofWBcblxuICB9XG5cbiAgcmFuZG9tUG9zaXRpb24oKSB7XG4gICAgbGV0IHggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAoR2FtZS5ESU1fWCArIDEpKTtcbiAgICBsZXQgeSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIChHYW1lLkRJTV9ZICsgMSkpO1xuICAgIHJldHVybiBbeCwgeV1cbiAgfVxuXG4gIGRyYXcgKGN0eCkge1xuICAgIGN0eC5jbGVhclJlY3QoMCwgMCwgR2FtZS5ESU1fWCwgR2FtZS5ESU1fWSk7XG4gICAgT2JqZWN0LnZhbHVlcyh0aGlzLmZpc2gpLmZvckVhY2goKGVsKSA9PiB7XG4gICAgICBlbC5kcmF3KGN0eCk7XG4gICAgfSk7XG4gICAgLy8gY3R4LmZpbGxSZWN0KDAsIDAsIEdhbWUuRElNX1gsIEdhbWUuRElNX1kpO1xuXG4gIH1cblxuICBtb3ZlT2JqZWN0cyAoKXtcbiAgICBPYmplY3QudmFsdWVzKHRoaXMuZmlzaCkuZm9yRWFjaCgoZWwpID0+IHtcbiAgICAgIGVsLm1vdmUoKTtcbiAgICAgIC8vIGRlYnVnZ2VyXG4gICAgICBcbiAgICB9KTtcbiAgfVxuXG4gIGlzT3V0T2ZCb3VuZHMocG9zKSB7XG4gICAgcmV0dXJuIChwb3NbMF0gPCAwKSB8fCAocG9zWzFdIDwgMCkgfHxcbiAgICAgIChwb3NbMF0gPiBHYW1lLkRJTV9YKSB8fCAocG9zWzFdID4gR2FtZS5ESU1fWSk7XG4gIH07XG5cbn1cblxuZXhwb3J0IHtHYW1lfTsiXSwibmFtZXMiOlsiRmlzaCIsIkdhbWUiLCJjb25zdHJ1Y3RvciIsImZpc2giLCJjYW52YXMiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiY3JlYXRlRmlzaCIsImJpbmQiLCJhZGRFdmVudExpc3RlbmVyIiwiZSIsIk9iamVjdCIsInZhbHVlcyIsImluY2x1ZGVzIiwidGFyZ2V0IiwiZmlzaFgiLCJjbGllbnRYIiwiZmlzaFkiLCJjbGllbnRZIiwicG9zIiwiaXNPdXRPZkJvdW5kcyIsImtleXMiLCJsZW5ndGgiLCJOVU1fRklTSCIsImFkZEZpc2giLCJmaXNocCIsImNyZWF0ZUVsZW1lbnQiLCJpZCIsInJhbmRvbVBvc2l0aW9uIiwieCIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsIkRJTV9YIiwieSIsIkRJTV9ZIiwiZHJhdyIsImN0eCIsImNsZWFyUmVjdCIsImZvckVhY2giLCJlbCIsIm1vdmVPYmplY3RzIiwibW92ZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/script/game.js\n");

/***/ }),

/***/ "./src/script/gameView.js":
/*!********************************!*\
  !*** ./src/script/gameView.js ***!
  \********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"GameView\": function() { return /* binding */ GameView; }\n/* harmony export */ });\n/* harmony import */ var _game_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game.js */ \"./src/script/game.js\");\n\n\nclass GameView {\n  constructor(ctx) {\n    this.ctx = ctx;\n    this.game = new _game_js__WEBPACK_IMPORTED_MODULE_0__.Game();\n  }\n\n  start() {\n    setInterval(() => {\n      this.game.moveObjects();\n      this.game.draw(this.ctx);\n    }, 50);\n  }\n\n}\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0L2dhbWVWaWV3LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQ0E7O0FBRUEsTUFBTUMsUUFBTixDQUFlO0VBQ2JDLFdBQVcsQ0FBQ0MsR0FBRCxFQUFLO0lBQ2hCLEtBQUtBLEdBQUwsR0FBV0EsR0FBWDtJQUNBLEtBQUtDLElBQUwsR0FBWSxJQUFJSiwwQ0FBSixFQUFaO0VBQ0M7O0VBRURLLEtBQUssR0FBSTtJQUNQQyxXQUFXLENBQUMsTUFBTTtNQUNoQixLQUFLRixJQUFMLENBQVVHLFdBQVY7TUFDQSxLQUFLSCxJQUFMLENBQVVJLElBQVYsQ0FBZSxLQUFLTCxHQUFwQjtJQUNELENBSFUsRUFHUixFQUhRLENBQVg7RUFJRDs7QUFYWSIsInNvdXJjZXMiOlsid2VicGFjazovL2phdmFzY3JpcHRwcm9qZWN0Ly4vc3JjL3NjcmlwdC9nYW1lVmlldy5qcz8wYmE0Il0sInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHtHYW1lfSBmcm9tICcuL2dhbWUuanMnXG5cbmNsYXNzIEdhbWVWaWV3IHtcbiAgY29uc3RydWN0b3IoY3R4KXtcbiAgdGhpcy5jdHggPSBjdHg7XG4gIHRoaXMuZ2FtZSA9IG5ldyBHYW1lKCk7XG4gIH1cblxuICBzdGFydCAoKSB7XG4gICAgc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgdGhpcy5nYW1lLm1vdmVPYmplY3RzKCk7XG4gICAgICB0aGlzLmdhbWUuZHJhdyh0aGlzLmN0eCk7XG4gICAgfSwgNTApO1xuICB9XG59XG5cbmV4cG9ydCB7R2FtZVZpZXd9OyJdLCJuYW1lcyI6WyJHYW1lIiwiR2FtZVZpZXciLCJjb25zdHJ1Y3RvciIsImN0eCIsImdhbWUiLCJzdGFydCIsInNldEludGVydmFsIiwibW92ZU9iamVjdHMiLCJkcmF3Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/script/gameView.js\n");

/***/ }),

/***/ "./src/script/util.js":
/*!****************************!*\
  !*** ./src/script/util.js ***!
  \****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Util\": function() { return /* binding */ Util; }\n/* harmony export */ });\nconst Util = {\n  randomVec(length) {\n    const degX = 2 * Math.PI * Math.random();\n    const degY = Math.random() * .6 - .3;\n    console.log(degY);\n    return Util.scale([Math.sin(degX) / 2, degY], length);\n  },\n\n  scale(vec, m) {\n    return [vec[0] * m, vec[1]];\n  }\n\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0L3V0aWwuanMuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE1BQU1BLElBQUksR0FBRztFQUNYQyxTQUFTLENBQUNDLE1BQUQsRUFBUztJQUNoQixNQUFNQyxJQUFJLEdBQUcsSUFBSUMsSUFBSSxDQUFDQyxFQUFULEdBQWNELElBQUksQ0FBQ0UsTUFBTCxFQUEzQjtJQUNBLE1BQU1DLElBQUksR0FBSUgsSUFBSSxDQUFDRSxNQUFMLEtBQWlCLEVBQWpCLEdBQXVCLEVBQXJDO0lBQ0FFLE9BQU8sQ0FBQ0MsR0FBUixDQUFZRixJQUFaO0lBR0EsT0FBT1AsSUFBSSxDQUFDVSxLQUFMLENBQVcsQ0FBQ04sSUFBSSxDQUFDTyxHQUFMLENBQVNSLElBQVQsSUFBZSxDQUFoQixFQUFtQkksSUFBbkIsQ0FBWCxFQUFxQ0wsTUFBckMsQ0FBUDtFQUNELENBUlU7O0VBVVhRLEtBQUssQ0FBQ0UsR0FBRCxFQUFNQyxDQUFOLEVBQVM7SUFDWixPQUFPLENBQUNELEdBQUcsQ0FBQyxDQUFELENBQUgsR0FBU0MsQ0FBVixFQUFhRCxHQUFHLENBQUMsQ0FBRCxDQUFoQixDQUFQO0VBQ0Q7O0FBWlUsQ0FBYiIsInNvdXJjZXMiOlsid2VicGFjazovL2phdmFzY3JpcHRwcm9qZWN0Ly4vc3JjL3NjcmlwdC91dGlsLmpzPzRiNWIiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgVXRpbCA9IHtcbiAgcmFuZG9tVmVjKGxlbmd0aCkge1xuICAgIGNvbnN0IGRlZ1ggPSAyICogTWF0aC5QSSAqIE1hdGgucmFuZG9tKCk7IFxuICAgIGNvbnN0IGRlZ1kgPSAoTWF0aC5yYW5kb20oKSAqICguNikgLSAuMyk7XG4gICAgY29uc29sZS5sb2coZGVnWSlcbiAgXG4gIFxuICAgIHJldHVybiBVdGlsLnNjYWxlKFtNYXRoLnNpbihkZWdYKS8yLCBkZWdZXSwgbGVuZ3RoKTtcbiAgfSxcblxuICBzY2FsZSh2ZWMsIG0pIHtcbiAgICByZXR1cm4gW3ZlY1swXSAqIG0sIHZlY1sxXV07XG4gIH0sXG5cblxufVxuXG5cbmV4cG9ydCB7VXRpbH07Il0sIm5hbWVzIjpbIlV0aWwiLCJyYW5kb21WZWMiLCJsZW5ndGgiLCJkZWdYIiwiTWF0aCIsIlBJIiwicmFuZG9tIiwiZGVnWSIsImNvbnNvbGUiLCJsb2ciLCJzY2FsZSIsInNpbiIsInZlYyIsIm0iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/script/util.js\n");

/***/ }),

/***/ "./src/index.scss":
/*!************************!*\
  !*** ./src/index.scss ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguc2Nzcy5qcyIsIm1hcHBpbmdzIjoiO0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9qYXZhc2NyaXB0cHJvamVjdC8uL3NyYy9pbmRleC5zY3NzPzk3NDUiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/index.scss\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	__webpack_require__("./src/index.js");
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.scss");
/******/ 	
/******/ })()
;