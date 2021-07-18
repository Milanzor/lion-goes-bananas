(self["webpackChunkthicc_wack_toe"] = self["webpackChunkthicc_wack_toe"] || []).push([["index"],{

/***/ "./frontend/src/index.js":
/*!*******************************!*\
  !*** ./frontend/src/index.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_index_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style/index.scss */ "./frontend/src/style/index.scss");

const Phaser = __webpack_require__(/*! phaser */ "./node_modules/phaser/dist/phaser.js");
var config = {
    type: Phaser.AUTO,
    width: 1200,
    height: 1200,

    physics: {
        default: 'arcade',
        arcade: {
            gravity: {y: 200}
        }
    },
    scene: {
        preload: preload,
        create: create
    },
    parent: 'thicc-wack-toe',
    autoCenter: true,
    backgroundColor: '#bada55',
};

const game = new Phaser.Game(config);

function preload() {
}

function create() {

}


/***/ }),

/***/ "./frontend/src/style/index.scss":
/*!***************************************!*\
  !*** ./frontend/src/style/index.scss ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors"], () => (__webpack_exec__("./frontend/src/index.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90aGljYy13YWNrLXRvZS8uL2Zyb250ZW5kL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly90aGljYy13YWNrLXRvZS8uL2Zyb250ZW5kL3NyYy9zdHlsZS9pbmRleC5zY3NzP2QyOWQiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBNEI7QUFDNUIsZUFBZSxtQkFBTyxDQUFDLG9EQUFRO0FBQy9CO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQjtBQUN0QjtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7Ozs7Ozs7Ozs7OztBQzdCQSIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAnLi9zdHlsZS9pbmRleC5zY3NzJztcbmNvbnN0IFBoYXNlciA9IHJlcXVpcmUoJ3BoYXNlcicpO1xudmFyIGNvbmZpZyA9IHtcbiAgICB0eXBlOiBQaGFzZXIuQVVUTyxcbiAgICB3aWR0aDogMTIwMCxcbiAgICBoZWlnaHQ6IDEyMDAsXG5cbiAgICBwaHlzaWNzOiB7XG4gICAgICAgIGRlZmF1bHQ6ICdhcmNhZGUnLFxuICAgICAgICBhcmNhZGU6IHtcbiAgICAgICAgICAgIGdyYXZpdHk6IHt5OiAyMDB9XG4gICAgICAgIH1cbiAgICB9LFxuICAgIHNjZW5lOiB7XG4gICAgICAgIHByZWxvYWQ6IHByZWxvYWQsXG4gICAgICAgIGNyZWF0ZTogY3JlYXRlXG4gICAgfSxcbiAgICBwYXJlbnQ6ICd0aGljYy13YWNrLXRvZScsXG4gICAgYXV0b0NlbnRlcjogdHJ1ZSxcbiAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjYmFkYTU1Jyxcbn07XG5cbmNvbnN0IGdhbWUgPSBuZXcgUGhhc2VyLkdhbWUoY29uZmlnKTtcblxuZnVuY3Rpb24gcHJlbG9hZCgpIHtcbn1cblxuZnVuY3Rpb24gY3JlYXRlKCkge1xuXG59XG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiXSwic291cmNlUm9vdCI6IiJ9