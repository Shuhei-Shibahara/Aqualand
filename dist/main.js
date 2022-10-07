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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _script_fish_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./script/fish.js */ \"./src/script/fish.js\");\n/* harmony import */ var _script_gameView_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./script/gameView.js */ \"./src/script/gameView.js\");\n\n\ndocument.addEventListener(\"DOMContentLoaded\", () => {\n  const canvas = document.getElementById('canvas');\n  const ctx = canvas.getContext(\"2d\");\n  canvas.height = 500;\n  canvas.width = 880; // const img = new Image();\n  // img.src = \"./image/backround.jpg\"\n  // img.onload = function(){\n  //   layout.drawImage(img, 100, 100, 500, 880)\n  // }\n\n  const gameview = new _script_gameView_js__WEBPACK_IMPORTED_MODULE_1__.GameView(ctx);\n  gameview.start();\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7O0FBQUE7QUFFQTtBQUVBRSxRQUFRLENBQUNDLGdCQUFULENBQTBCLGtCQUExQixFQUE4QyxNQUFNO0VBQ2xELE1BQU1DLE1BQU0sR0FBR0YsUUFBUSxDQUFDRyxjQUFULENBQXdCLFFBQXhCLENBQWY7RUFDQSxNQUFNQyxHQUFHLEdBQUdGLE1BQU0sQ0FBQ0csVUFBUCxDQUFrQixJQUFsQixDQUFaO0VBQ0FILE1BQU0sQ0FBQ0ksTUFBUCxHQUFnQixHQUFoQjtFQUNBSixNQUFNLENBQUNLLEtBQVAsR0FBZSxHQUFmLENBSmtELENBTWxEO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7O0VBQ0EsTUFBTUMsUUFBUSxHQUFHLElBQUlULHlEQUFKLENBQWFLLEdBQWIsQ0FBakI7RUFDQUksUUFBUSxDQUFDQyxLQUFUO0FBQ0QsQ0FiRCIsInNvdXJjZXMiOlsid2VicGFjazovL2phdmFzY3JpcHRwcm9qZWN0Ly4vc3JjL2luZGV4LmpzP2I2MzUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtGaXNofSBmcm9tIFwiLi9zY3JpcHQvZmlzaC5qc1wiO1xuXG5pbXBvcnQge0dhbWVWaWV3fSBmcm9tIFwiLi9zY3JpcHQvZ2FtZVZpZXcuanNcIjtcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgKCkgPT4ge1xuICBjb25zdCBjYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2FudmFzJylcbiAgY29uc3QgY3R4ID0gY2FudmFzLmdldENvbnRleHQoXCIyZFwiKTsgXG4gIGNhbnZhcy5oZWlnaHQgPSA1MDA7XG4gIGNhbnZhcy53aWR0aCA9IDg4MDtcbiAgXG4gIC8vIGNvbnN0IGltZyA9IG5ldyBJbWFnZSgpO1xuICAvLyBpbWcuc3JjID0gXCIuL2ltYWdlL2JhY2tyb3VuZC5qcGdcIlxuICAvLyBpbWcub25sb2FkID0gZnVuY3Rpb24oKXtcbiAgLy8gICBsYXlvdXQuZHJhd0ltYWdlKGltZywgMTAwLCAxMDAsIDUwMCwgODgwKVxuICAvLyB9XG4gIGNvbnN0IGdhbWV2aWV3ID0gbmV3IEdhbWVWaWV3KGN0eClcbiAgZ2FtZXZpZXcuc3RhcnQoKTtcbn0pO1xuXG4iXSwibmFtZXMiOlsiRmlzaCIsIkdhbWVWaWV3IiwiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwiY2FudmFzIiwiZ2V0RWxlbWVudEJ5SWQiLCJjdHgiLCJnZXRDb250ZXh0IiwiaGVpZ2h0Iiwid2lkdGgiLCJnYW1ldmlldyIsInN0YXJ0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/script/fish.js":
/*!****************************!*\
  !*** ./src/script/fish.js ***!
  \****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Fish\": function() { return /* binding */ Fish; }\n/* harmony export */ });\n/* harmony import */ var _util_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./util.js */ \"./src/script/util.js\");\n/* harmony import */ var _game_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./game.js */ \"./src/script/game.js\");\n\n\n\nclass Fish {\n  constructor(pos) {\n    this.pos = pos;\n    this.vel = _util_js__WEBPACK_IMPORTED_MODULE_0__.Util.randomVec(5);\n    this.radius = 10; // this.color = options.color;\n    // this.game = Game();\n  }\n\n  draw(ctx) {\n    ctx.fillStyle = 'orange';\n    ctx.beginPath();\n    ctx.arc(this.pos[0], this.pos[1], this.radius, 0, 2 * Math.PI, true);\n    ctx.fill();\n  }\n\n  move() {\n    this.pos[0] += this.vel[0];\n    this.pos[1] += this.vel[1];\n\n    if (this.pos[0] - 10 < 0 && this.vel[0] < 0) {\n      this.vel[0] = -this.vel[0];\n    }\n\n    if (this.pos[0] + 10 > 880 && this.vel[0] > 0) {\n      this.vel[0] = -this.vel[0];\n    }\n\n    if (this.pos[1] - 10 < 0 && this.vel[1] < 0) {\n      this.vel[1] = -this.vel[1];\n    }\n\n    if (this.pos[1] + 10 > 500 && this.vel[1] > 0) {\n      this.vel[1] = -this.vel[1];\n    }\n  }\n\n}\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0L2Zpc2guanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7QUFDQTs7QUFFQSxNQUFNRSxJQUFOLENBQVc7RUFDVEMsV0FBVyxDQUFFQyxHQUFGLEVBQU07SUFDZixLQUFLQSxHQUFMLEdBQVdBLEdBQVg7SUFDQSxLQUFLQyxHQUFMLEdBQVdMLG9EQUFBLENBQWUsQ0FBZixDQUFYO0lBQ0EsS0FBS08sTUFBTCxHQUFjLEVBQWQsQ0FIZSxDQUlmO0lBQ0E7RUFDRDs7RUFFREMsSUFBSSxDQUFDQyxHQUFELEVBQU07SUFDUkEsR0FBRyxDQUFDQyxTQUFKLEdBQWdCLFFBQWhCO0lBQ0FELEdBQUcsQ0FBQ0UsU0FBSjtJQUNBRixHQUFHLENBQUNHLEdBQUosQ0FDRSxLQUFLUixHQUFMLENBQVMsQ0FBVCxDQURGLEVBQ2UsS0FBS0EsR0FBTCxDQUFTLENBQVQsQ0FEZixFQUM0QixLQUFLRyxNQURqQyxFQUN5QyxDQUR6QyxFQUM0QyxJQUFJTSxJQUFJLENBQUNDLEVBRHJELEVBQ3lELElBRHpEO0lBR0FMLEdBQUcsQ0FBQ00sSUFBSjtFQUNEOztFQUVEQyxJQUFJLEdBQUc7SUFDTCxLQUFLWixHQUFMLENBQVMsQ0FBVCxLQUFlLEtBQUtDLEdBQUwsQ0FBUyxDQUFULENBQWY7SUFDQSxLQUFLRCxHQUFMLENBQVMsQ0FBVCxLQUFlLEtBQUtDLEdBQUwsQ0FBUyxDQUFULENBQWY7O0lBQ0EsSUFBSSxLQUFLRCxHQUFMLENBQVMsQ0FBVCxJQUFjLEVBQWQsR0FBbUIsQ0FBbkIsSUFBd0IsS0FBS0MsR0FBTCxDQUFTLENBQVQsSUFBYyxDQUExQyxFQUE2QztNQUMzQyxLQUFLQSxHQUFMLENBQVMsQ0FBVCxJQUFlLENBQUMsS0FBS0EsR0FBTCxDQUFTLENBQVQsQ0FBaEI7SUFDRDs7SUFDRCxJQUFJLEtBQUtELEdBQUwsQ0FBUyxDQUFULElBQWMsRUFBZCxHQUFtQixHQUFuQixJQUEwQixLQUFLQyxHQUFMLENBQVMsQ0FBVCxJQUFjLENBQTVDLEVBQStDO01BQzdDLEtBQUtBLEdBQUwsQ0FBUyxDQUFULElBQWUsQ0FBQyxLQUFLQSxHQUFMLENBQVMsQ0FBVCxDQUFoQjtJQUNEOztJQUNELElBQUksS0FBS0QsR0FBTCxDQUFTLENBQVQsSUFBYyxFQUFkLEdBQW1CLENBQW5CLElBQXdCLEtBQUtDLEdBQUwsQ0FBUyxDQUFULElBQWMsQ0FBMUMsRUFBNkM7TUFDM0MsS0FBS0EsR0FBTCxDQUFTLENBQVQsSUFBZSxDQUFDLEtBQUtBLEdBQUwsQ0FBUyxDQUFULENBQWhCO0lBQ0Q7O0lBQ0QsSUFBSSxLQUFLRCxHQUFMLENBQVMsQ0FBVCxJQUFjLEVBQWQsR0FBbUIsR0FBbkIsSUFBMEIsS0FBS0MsR0FBTCxDQUFTLENBQVQsSUFBYyxDQUE1QyxFQUErQztNQUM3QyxLQUFLQSxHQUFMLENBQVMsQ0FBVCxJQUFlLENBQUMsS0FBS0EsR0FBTCxDQUFTLENBQVQsQ0FBaEI7SUFDRDtFQUNGOztBQWpDUSIsInNvdXJjZXMiOlsid2VicGFjazovL2phdmFzY3JpcHRwcm9qZWN0Ly4vc3JjL3NjcmlwdC9maXNoLmpzP2VhOTMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtVdGlsfSBmcm9tIFwiLi91dGlsLmpzXCJcbmltcG9ydCB7R2FtZX0gZnJvbSBcIi4vZ2FtZS5qc1wiXG5cbmNsYXNzIEZpc2gge1xuICBjb25zdHJ1Y3RvciAocG9zKXtcbiAgICB0aGlzLnBvcyA9IHBvcztcbiAgICB0aGlzLnZlbCA9IFV0aWwucmFuZG9tVmVjKDUpO1xuICAgIHRoaXMucmFkaXVzID0gMTA7XG4gICAgLy8gdGhpcy5jb2xvciA9IG9wdGlvbnMuY29sb3I7XG4gICAgLy8gdGhpcy5nYW1lID0gR2FtZSgpO1xuICB9XG5cbiAgZHJhdyhjdHgpIHtcbiAgICBjdHguZmlsbFN0eWxlID0gJ29yYW5nZSc7XG4gICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgIGN0eC5hcmMoXG4gICAgICB0aGlzLnBvc1swXSwgdGhpcy5wb3NbMV0sIHRoaXMucmFkaXVzLCAwLCAyICogTWF0aC5QSSwgdHJ1ZVxuICAgICk7XG4gICAgY3R4LmZpbGwoKTtcbiAgfTtcblxuICBtb3ZlKCkge1xuICAgIHRoaXMucG9zWzBdICs9IHRoaXMudmVsWzBdXG4gICAgdGhpcy5wb3NbMV0gKz0gdGhpcy52ZWxbMV1cbiAgICBpZiAodGhpcy5wb3NbMF0gLSAxMCA8IDAgJiYgdGhpcy52ZWxbMF0gPCAwICl7XG4gICAgICB0aGlzLnZlbFswXSA9ICgtdGhpcy52ZWxbMF0pO1xuICAgIH0gXG4gICAgaWYgKHRoaXMucG9zWzBdICsgMTAgPiA4ODAgJiYgdGhpcy52ZWxbMF0gPiAwKSB7XG4gICAgICB0aGlzLnZlbFswXSA9ICgtdGhpcy52ZWxbMF0pO1xuICAgIH0gXG4gICAgaWYgKHRoaXMucG9zWzFdIC0gMTAgPCAwICYmIHRoaXMudmVsWzFdIDwgMCkge1xuICAgICAgdGhpcy52ZWxbMV0gPSAoLXRoaXMudmVsWzFdKTtcbiAgICB9IFxuICAgIGlmICh0aGlzLnBvc1sxXSArIDEwID4gNTAwICYmIHRoaXMudmVsWzFdID4gMCkge1xuICAgICAgdGhpcy52ZWxbMV0gPSAoLXRoaXMudmVsWzFdKTtcbiAgICB9XG4gIH07XG4gIFxufVxuXG5leHBvcnQge0Zpc2h9XG5cbiJdLCJuYW1lcyI6WyJVdGlsIiwiR2FtZSIsIkZpc2giLCJjb25zdHJ1Y3RvciIsInBvcyIsInZlbCIsInJhbmRvbVZlYyIsInJhZGl1cyIsImRyYXciLCJjdHgiLCJmaWxsU3R5bGUiLCJiZWdpblBhdGgiLCJhcmMiLCJNYXRoIiwiUEkiLCJmaWxsIiwibW92ZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/script/fish.js\n");

/***/ }),

/***/ "./src/script/game.js":
/*!****************************!*\
  !*** ./src/script/game.js ***!
  \****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Game\": function() { return /* binding */ Game; }\n/* harmony export */ });\n/* harmony import */ var _fish_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fish.js */ \"./src/script/fish.js\");\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n//handles functionality of what my clicks would be doing\n\n\nclass Game {\n  constructor() {\n    this.fish = [];\n    this.create();\n  }\n\n  create() {\n    while (this.fish.length < Game.NUM_FISH) {\n      this.addFish();\n    }\n  }\n\n  addFish() {\n    const fish = new _fish_js__WEBPACK_IMPORTED_MODULE_0__.Fish(this.randomPosition());\n    this.fish.push(fish);\n  }\n\n  randomPosition() {\n    let x = Math.floor(Math.random() * (Game.DIM_X + 1));\n    let y = Math.floor(Math.random() * (Game.DIM_Y + 1));\n    return [x, y];\n  }\n\n  draw(ctx) {\n    ctx.clearRect(0, 0, Game.DIM_X, Game.DIM_Y);\n    this.fish.forEach(el => {\n      el.draw(ctx);\n    }); // ctx.fillRect(0, 0, Game.DIM_X, Game.DIM_Y);\n  }\n\n  moveObjects() {\n    this.fish.forEach(el => {\n      el.move();\n    });\n  }\n\n  isOutOfBounds(pos) {\n    return pos[0] < 0 || pos[1] < 0 || pos[0] > Game.DIM_X || pos[1] > Game.DIM_Y;\n  }\n\n}\n\n_defineProperty(Game, \"DIM_X\", 880);\n\n_defineProperty(Game, \"DIM_Y\", 500);\n\n_defineProperty(Game, \"NUM_FISH\", 10);\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0L2dhbWUuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBO0FBQ0E7O0FBRUEsTUFBTUMsSUFBTixDQUFVO0VBRVJDLFdBQVcsR0FBRTtJQUNYLEtBQUtDLElBQUwsR0FBWSxFQUFaO0lBQ0EsS0FBS0MsTUFBTDtFQUNEOztFQU1EQSxNQUFNLEdBQUk7SUFDUixPQUFPLEtBQUtELElBQUwsQ0FBVUUsTUFBVixHQUFtQkosSUFBSSxDQUFDSyxRQUEvQixFQUF5QztNQUN2QyxLQUFLQyxPQUFMO0lBQ0Q7RUFDRjs7RUFFREEsT0FBTyxHQUFJO0lBQ1QsTUFBTUosSUFBSSxHQUFHLElBQUlILDBDQUFKLENBQVMsS0FBS1EsY0FBTCxFQUFULENBQWI7SUFDQSxLQUFLTCxJQUFMLENBQVVNLElBQVYsQ0FBZU4sSUFBZjtFQUNEOztFQUVESyxjQUFjLEdBQUc7SUFDZixJQUFJRSxDQUFDLEdBQUdDLElBQUksQ0FBQ0MsS0FBTCxDQUFXRCxJQUFJLENBQUNFLE1BQUwsTUFBaUJaLElBQUksQ0FBQ2EsS0FBTCxHQUFhLENBQTlCLENBQVgsQ0FBUjtJQUNBLElBQUlDLENBQUMsR0FBR0osSUFBSSxDQUFDQyxLQUFMLENBQVdELElBQUksQ0FBQ0UsTUFBTCxNQUFpQlosSUFBSSxDQUFDZSxLQUFMLEdBQWEsQ0FBOUIsQ0FBWCxDQUFSO0lBQ0EsT0FBTyxDQUFDTixDQUFELEVBQUlLLENBQUosQ0FBUDtFQUNEOztFQUVERSxJQUFJLENBQUVDLEdBQUYsRUFBTztJQUNUQSxHQUFHLENBQUNDLFNBQUosQ0FBYyxDQUFkLEVBQWlCLENBQWpCLEVBQW9CbEIsSUFBSSxDQUFDYSxLQUF6QixFQUFnQ2IsSUFBSSxDQUFDZSxLQUFyQztJQUNBLEtBQUtiLElBQUwsQ0FBVWlCLE9BQVYsQ0FBbUJDLEVBQUQsSUFBUTtNQUN4QkEsRUFBRSxDQUFDSixJQUFILENBQVFDLEdBQVI7SUFDRCxDQUZELEVBRlMsQ0FLVDtFQUVEOztFQUVESSxXQUFXLEdBQUc7SUFDWixLQUFLbkIsSUFBTCxDQUFVaUIsT0FBVixDQUFtQkMsRUFBRCxJQUFRO01BQ3hCQSxFQUFFLENBQUNFLElBQUg7SUFDRCxDQUZEO0VBR0Q7O0VBRURDLGFBQWEsQ0FBQ0MsR0FBRCxFQUFNO0lBQ2pCLE9BQVFBLEdBQUcsQ0FBQyxDQUFELENBQUgsR0FBUyxDQUFWLElBQWlCQSxHQUFHLENBQUMsQ0FBRCxDQUFILEdBQVMsQ0FBMUIsSUFDSkEsR0FBRyxDQUFDLENBQUQsQ0FBSCxHQUFTeEIsSUFBSSxDQUFDYSxLQURWLElBQ3FCVyxHQUFHLENBQUMsQ0FBRCxDQUFILEdBQVN4QixJQUFJLENBQUNlLEtBRDFDO0VBRUQ7O0FBOUNPOztnQkFBSmYsZUFPVzs7Z0JBUFhBLGVBUVc7O2dCQVJYQSxrQkFTYyIsInNvdXJjZXMiOlsid2VicGFjazovL2phdmFzY3JpcHRwcm9qZWN0Ly4vc3JjL3NjcmlwdC9nYW1lLmpzP2YyMDMiXSwic291cmNlc0NvbnRlbnQiOlsiLy9oYW5kbGVzIGZ1bmN0aW9uYWxpdHkgb2Ygd2hhdCBteSBjbGlja3Mgd291bGQgYmUgZG9pbmdcbmltcG9ydCB7RmlzaH0gZnJvbSBcIi4vZmlzaC5qc1wiXG5cbmNsYXNzIEdhbWV7XG5cbiAgY29uc3RydWN0b3IoKXtcbiAgICB0aGlzLmZpc2ggPSBbXTtcbiAgICB0aGlzLmNyZWF0ZSgpO1xuICB9XG5cbiAgc3RhdGljIERJTV9YID0gODgwO1xuICBzdGF0aWMgRElNX1kgPSA1MDA7XG4gIHN0YXRpYyBOVU1fRklTSCA9IDEwO1xuXG4gIGNyZWF0ZSAoKSB7XG4gICAgd2hpbGUgKHRoaXMuZmlzaC5sZW5ndGggPCBHYW1lLk5VTV9GSVNIKSB7XG4gICAgICB0aGlzLmFkZEZpc2goKTtcbiAgICB9XG4gIH1cblxuICBhZGRGaXNoICgpIHtcbiAgICBjb25zdCBmaXNoID0gbmV3IEZpc2godGhpcy5yYW5kb21Qb3NpdGlvbigpKVxuICAgIHRoaXMuZmlzaC5wdXNoKGZpc2gpO1xuICB9XG5cbiAgcmFuZG9tUG9zaXRpb24oKSB7XG4gICAgbGV0IHggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAoR2FtZS5ESU1fWCArIDEpKTtcbiAgICBsZXQgeSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIChHYW1lLkRJTV9ZICsgMSkpO1xuICAgIHJldHVybiBbeCwgeV1cbiAgfVxuXG4gIGRyYXcgKGN0eCkge1xuICAgIGN0eC5jbGVhclJlY3QoMCwgMCwgR2FtZS5ESU1fWCwgR2FtZS5ESU1fWSk7XG4gICAgdGhpcy5maXNoLmZvckVhY2goKGVsKSA9PiB7XG4gICAgICBlbC5kcmF3KGN0eCk7XG4gICAgfSk7XG4gICAgLy8gY3R4LmZpbGxSZWN0KDAsIDAsIEdhbWUuRElNX1gsIEdhbWUuRElNX1kpO1xuXG4gIH1cblxuICBtb3ZlT2JqZWN0cyAoKXtcbiAgICB0aGlzLmZpc2guZm9yRWFjaCgoZWwpID0+IHtcbiAgICAgIGVsLm1vdmUoKTtcbiAgICB9KTtcbiAgfVxuXG4gIGlzT3V0T2ZCb3VuZHMocG9zKSB7XG4gICAgcmV0dXJuIChwb3NbMF0gPCAwKSB8fCAocG9zWzFdIDwgMCkgfHxcbiAgICAgIChwb3NbMF0gPiBHYW1lLkRJTV9YKSB8fCAocG9zWzFdID4gR2FtZS5ESU1fWSk7XG4gIH07XG5cbn1cblxuZXhwb3J0IHtHYW1lfTsiXSwibmFtZXMiOlsiRmlzaCIsIkdhbWUiLCJjb25zdHJ1Y3RvciIsImZpc2giLCJjcmVhdGUiLCJsZW5ndGgiLCJOVU1fRklTSCIsImFkZEZpc2giLCJyYW5kb21Qb3NpdGlvbiIsInB1c2giLCJ4IiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwiRElNX1giLCJ5IiwiRElNX1kiLCJkcmF3IiwiY3R4IiwiY2xlYXJSZWN0IiwiZm9yRWFjaCIsImVsIiwibW92ZU9iamVjdHMiLCJtb3ZlIiwiaXNPdXRPZkJvdW5kcyIsInBvcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/script/game.js\n");

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Util\": function() { return /* binding */ Util; }\n/* harmony export */ });\nconst Util = {\n  randomVec(length) {\n    const degX = 2 * Math.PI * Math.random();\n    const degY = Math.random() * (0.5 - -0.5) + 0.5;\n    console.log(degY);\n    debugger;\n    return Util.scale([Math.sin(degX), degY], length);\n  },\n\n  scale(vec, m) {\n    return [vec[0] * m, vec[1]];\n  }\n\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0L3V0aWwuanMuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE1BQU1BLElBQUksR0FBRztFQUNYQyxTQUFTLENBQUNDLE1BQUQsRUFBUztJQUNoQixNQUFNQyxJQUFJLEdBQUcsSUFBSUMsSUFBSSxDQUFDQyxFQUFULEdBQWNELElBQUksQ0FBQ0UsTUFBTCxFQUEzQjtJQUNBLE1BQU1DLElBQUksR0FBSUgsSUFBSSxDQUFDRSxNQUFMLE1BQWlCLE1BQU0sQ0FBQyxHQUF4QixJQUFnQyxHQUE5QztJQUNBRSxPQUFPLENBQUNDLEdBQVIsQ0FBWUYsSUFBWjtJQUNBO0lBRUEsT0FBT1AsSUFBSSxDQUFDVSxLQUFMLENBQVcsQ0FBQ04sSUFBSSxDQUFDTyxHQUFMLENBQVNSLElBQVQsQ0FBRCxFQUFpQkksSUFBakIsQ0FBWCxFQUFtQ0wsTUFBbkMsQ0FBUDtFQUNELENBUlU7O0VBVVhRLEtBQUssQ0FBQ0UsR0FBRCxFQUFNQyxDQUFOLEVBQVM7SUFDWixPQUFPLENBQUNELEdBQUcsQ0FBQyxDQUFELENBQUgsR0FBU0MsQ0FBVixFQUFhRCxHQUFHLENBQUMsQ0FBRCxDQUFoQixDQUFQO0VBQ0Q7O0FBWlUsQ0FBYiIsInNvdXJjZXMiOlsid2VicGFjazovL2phdmFzY3JpcHRwcm9qZWN0Ly4vc3JjL3NjcmlwdC91dGlsLmpzPzRiNWIiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgVXRpbCA9IHtcbiAgcmFuZG9tVmVjKGxlbmd0aCkge1xuICAgIGNvbnN0IGRlZ1ggPSAyICogTWF0aC5QSSAqIE1hdGgucmFuZG9tKCk7IFxuICAgIGNvbnN0IGRlZ1kgPSAoTWF0aC5yYW5kb20oKSAqICgwLjUtICgtMC41KSkgKyAwLjUpO1xuICAgIGNvbnNvbGUubG9nKGRlZ1kpXG4gICAgZGVidWdnZXJcbiAgXG4gICAgcmV0dXJuIFV0aWwuc2NhbGUoW01hdGguc2luKGRlZ1gpLCBkZWdZXSwgbGVuZ3RoKTtcbiAgfSxcblxuICBzY2FsZSh2ZWMsIG0pIHtcbiAgICByZXR1cm4gW3ZlY1swXSAqIG0sIHZlY1sxXV07XG4gIH0sXG5cblxufVxuXG5cbmV4cG9ydCB7VXRpbH07Il0sIm5hbWVzIjpbIlV0aWwiLCJyYW5kb21WZWMiLCJsZW5ndGgiLCJkZWdYIiwiTWF0aCIsIlBJIiwicmFuZG9tIiwiZGVnWSIsImNvbnNvbGUiLCJsb2ciLCJzY2FsZSIsInNpbiIsInZlYyIsIm0iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/script/util.js\n");

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