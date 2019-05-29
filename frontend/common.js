(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

/***/ "./src/app/shared/animations/delete-slide.ts":
/*!***************************************************!*\
  !*** ./src/app/shared/animations/delete-slide.ts ***!
  \***************************************************/
/*! exports provided: deleteSlide */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteSlide", function() { return deleteSlide; });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");

var deleteSlide = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('deleteSlide', [
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':leave', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
            overflow: 'hidden'
        }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('0.1s', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
            transform: 'scaleY(0.5)',
        })),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('0.5s', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
            transform: 'scaleY(0.5) translateX(100%)',
        }))
    ])
]);


/***/ }),

/***/ "./src/app/shared/models/app/user.ts":
/*!*******************************************!*\
  !*** ./src/app/shared/models/app/user.ts ***!
  \*******************************************/
/*! exports provided: User */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
var User = /** @class */ (function () {
    function User(obj) {
        if (obj === void 0) { obj = {}; }
        Object.assign(this, obj);
    }
    User.prototype.getFullName = function () {
        return this.firstName + ' ' + this.lastName;
    };
    return User;
}());



/***/ })

}]);
//# sourceMappingURL=common.js.map