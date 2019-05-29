(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-authentication-authentication-module"],{

/***/ "./src/app/core/http/authentication/authentication-http.service.ts":
/*!*************************************************************************!*\
  !*** ./src/app/core/http/authentication/authentication-http.service.ts ***!
  \*************************************************************************/
/*! exports provided: AuthenticationHttpService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticationHttpService", function() { return AuthenticationHttpService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");






var AuthenticationHttpService = /** @class */ (function () {
    function AuthenticationHttpService(http) {
        this.http = http;
        this.endpoint = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].apiUrl + '/auth';
    }
    AuthenticationHttpService.prototype.checkAvailableEmail = function (mail) {
        var _this = this;
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["timer"])(1000)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])(function () {
            return _this.http.get(_this.endpoint + "/user/email?email=" + mail);
        }));
    };
    AuthenticationHttpService.prototype.checkAvailableUsername = function (name) {
        var _this = this;
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["timer"])(1000)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])(function () {
            return _this.http.get(_this.endpoint + "/user/username?name=" + name);
        }));
    };
    AuthenticationHttpService.prototype.signup = function (user) {
        return this.http.post(this.endpoint + "/signup", user);
    };
    AuthenticationHttpService.prototype.login = function (credentials) {
        return this.http.post(this.endpoint + "/login", credentials)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(function (err) {
            if (err.error) {
                var error = err.error;
                if (error.status === 404 || error.status === 401) {
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(error);
                }
            }
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err);
        }));
    };
    AuthenticationHttpService.prototype.getAuthentication = function (token) {
        return this.http.get(this.endpoint + "/user", {
            headers: {
                'Authorization': 'Bearer ' + token
            }
        }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(function (err) {
            if (err.error) {
                var error = err.error;
                if (error.status === 401) {
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(error);
                }
            }
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err);
        }));
    };
    AuthenticationHttpService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], AuthenticationHttpService);
    return AuthenticationHttpService;
}());



/***/ }),

/***/ "./src/app/modules/authentication/authentication-routing.module.ts":
/*!*************************************************************************!*\
  !*** ./src/app/modules/authentication/authentication-routing.module.ts ***!
  \*************************************************************************/
/*! exports provided: AuthenticationRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticationRoutingModule", function() { return AuthenticationRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _pages_login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/login/login.component */ "./src/app/modules/authentication/pages/login/login.component.ts");
/* harmony import */ var _pages_signup_signup_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/signup/signup.component */ "./src/app/modules/authentication/pages/signup/signup.component.ts");





var routes = [{
        path: 'login',
        component: _pages_login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"]
    }, {
        path: 'signup',
        component: _pages_signup_signup_component__WEBPACK_IMPORTED_MODULE_4__["SignupComponent"]
    }, {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
    }];
var AuthenticationRoutingModule = /** @class */ (function () {
    function AuthenticationRoutingModule() {
    }
    AuthenticationRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AuthenticationRoutingModule);
    return AuthenticationRoutingModule;
}());



/***/ }),

/***/ "./src/app/modules/authentication/authentication.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/modules/authentication/authentication.module.ts ***!
  \*****************************************************************/
/*! exports provided: AuthenticationModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticationModule", function() { return AuthenticationModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _authentication_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./authentication-routing.module */ "./src/app/modules/authentication/authentication-routing.module.ts");
/* harmony import */ var _pages_login_login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/login/login.component */ "./src/app/modules/authentication/pages/login/login.component.ts");
/* harmony import */ var _pages_signup_signup_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/signup/signup.component */ "./src/app/modules/authentication/pages/signup/signup.component.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "./node_modules/@fortawesome/angular-fontawesome/fesm5/angular-fontawesome.js");
/* harmony import */ var _core_http_authentication_authentication_http_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../core/http/authentication/authentication-http.service */ "./src/app/core/http/authentication/authentication-http.service.ts");










var AuthenticationModule = /** @class */ (function () {
    function AuthenticationModule() {
    }
    AuthenticationModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_pages_login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"], _pages_signup_signup_component__WEBPACK_IMPORTED_MODULE_6__["SignupComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _authentication_routing_module__WEBPACK_IMPORTED_MODULE_4__["AuthenticationRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_8__["FontAwesomeModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"]
            ],
            providers: [
                _core_http_authentication_authentication_http_service__WEBPACK_IMPORTED_MODULE_9__["AuthenticationHttpService"]
            ]
        })
    ], AuthenticationModule);
    return AuthenticationModule;
}());



/***/ }),

/***/ "./src/app/modules/authentication/pages/login/login.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/modules/authentication/pages/login/login.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"authentication-container m-5\">\n    <div class=\"card\">\n      <div class=\"card-body\">\n        <h2 class=\"card-title\">Iniciar sesión</h2>\n        <div class=\"row\">\n          <div class=\"col-12\">\n            <div class=\"alert\" [ngClass]=\"{ 'alert-warning': formError.type === 'warning', 'alert-danger': formError.type === 'danger' }\" role=\"alert\" *ngIf=\"formError\">\n              {{ formError.message }}\n            </div>\n          </div>\n        </div>\n\n        <form class=\"row\" [formGroup]=\"loginForm\">\n          <div class=\"form-group col-12\">\n            <label for=\"loginEmail\">Correo Electrónico</label>\n            <input\n              type=\"email\"\n              class=\"form-control\"\n              id=\"loginEmail\"\n              placeholder=\"Correo Electrónico\"\n              [formControlName]=\"'email'\"\n            />\n            <small\n              class=\"form-text text-danger\"\n              *ngIf=\"loginForm.get('email').hasError('email')\"\n            >\n              Introduce un correo electronico válido.\n            </small>\n            <small\n              class=\"form-text text-danger\"\n              *ngIf=\"\n                loginForm.get('email').hasError('required') && submittedForm\n              \"\n              >Este campo es requerido.</small\n            >\n          </div>\n          <div class=\"form-group col-12 form-group-icon-field\">\n            <label for=\"loginPasswordConfirm\">Contraseña</label>\n            <app-password-preview>\n              <span class=\"form-group-icon\" appPasswordPreview>\n                <fa-icon icon=\"eye\"></fa-icon>\n              </span>\n              <input\n                type=\"password\"\n                class=\"form-control\"\n                id=\"loginPasswordConfirm\"\n                placeholder=\"Contraseña\"\n                [formControlName]=\"'password'\"\n                #input\n              />\n            </app-password-preview>\n            <small\n              class=\"form-text text-danger\"\n              *ngIf=\"\n                loginForm.get('password').hasError('required') &&\n                submittedForm\n              \"\n            >\n              Este campo es requerido.\n            </small>\n          </div>\n          <div class=\"col-12 text-center pt-3\">\n            <button class=\"btn btn-primary btn-block\" (click)=\"submit()\">Aceptar</button>\n          </div>\n        </form>\n        <div class=\"row\">\n          <div class=\"col-12 pt-3 text-right\">\n            <a class=\"btn btn-info\" [routerLink]=\"['/signup']\">Registrarse</a>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/modules/authentication/pages/login/login.component.scss":
/*!*************************************************************************!*\
  !*** ./src/app/modules/authentication/pages/login/login.component.scss ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYXV0aGVudGljYXRpb24vcGFnZXMvbG9naW4vbG9naW4uY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/modules/authentication/pages/login/login.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/modules/authentication/pages/login/login.component.ts ***!
  \***********************************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _core_http_authentication_authentication_http_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../core/http/authentication/authentication-http.service */ "./src/app/core/http/authentication/authentication-http.service.ts");
/* harmony import */ var _core_authentication_authentication_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../core/authentication/authentication.service */ "./src/app/core/authentication/authentication.service.ts");






var LoginComponent = /** @class */ (function () {
    function LoginComponent(fb, authHttpService, authService, router) {
        this.fb = fb;
        this.authHttpService = authHttpService;
        this.authService = authService;
        this.router = router;
        this.formError = null;
        this.submittedForm = false;
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.buildForm();
    };
    LoginComponent.prototype.buildForm = function () {
        var _this = this;
        this.loginForm = this.fb.group({
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]]
        });
        this.loginForm.valueChanges
            .subscribe(function (value) {
            _this.formError = null;
            _this.submittedForm = false;
        });
    };
    LoginComponent.prototype.submit = function () {
        var _this = this;
        if (this.loginForm.invalid) {
            this.formError = {
                type: 'warning',
                message: 'Hay errores en algunos campos'
            };
            return;
        }
        this.authHttpService.login(this.loginForm.value)
            .subscribe(function (res) {
            //console.log(res);
            _this.authService.setToken(res);
            _this.authHttpService.getAuthentication(res.token)
                .subscribe(function (user) {
                _this.authService.setUser(user);
                _this.router.navigate(['/home']);
            });
        }, function (err) {
            if (err.status) {
                _this.formError = {
                    type: 'danger',
                    message: 'Usuario y/o contraseña incorrectos'
                };
            }
        });
    };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/modules/authentication/pages/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.scss */ "./src/app/modules/authentication/pages/login/login.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _core_http_authentication_authentication_http_service__WEBPACK_IMPORTED_MODULE_4__["AuthenticationHttpService"],
            _core_authentication_authentication_service__WEBPACK_IMPORTED_MODULE_5__["AuthenticationService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/modules/authentication/pages/signup/signup.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/modules/authentication/pages/signup/signup.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"authentication-container m-5\">\n    <div class=\"card\">\n      <div class=\"card-body\">\n        <h2 class=\"card-title\">Registro</h2>\n        <div class=\"row\">\n          <div class=\"col-12\">\n            <div class=\"alert alert-warning\" role=\"alert\" *ngIf=\"formError\">\n              {{ formError }}\n            </div>\n          </div>\n        </div>\n\n        <form class=\"row\" [formGroup]=\"signupForm\">\n          <div class=\"form-group col-12 form-group-icon-field\">\n            <label for=\"loginEmail\">Correo Electrónico</label>\n            <span class=\"form-group-icon\">\n              <fa-icon\n                icon=\"times\"\n                class=\"text-danger\"\n                *ngIf=\"signupForm.get('email').hasError('emailExists')\"\n              ></fa-icon>\n              <fa-icon\n                icon=\"check\"\n                class=\"text-success\"\n                *ngIf=\"signupForm.get('email').status === 'VALID'\"\n              ></fa-icon>\n              <fa-icon\n                icon=\"spinner\"\n                class=\"text-info\"\n                [spin]=\"true\"\n                *ngIf=\"signupForm.get('email').status === 'PENDING'\"\n              ></fa-icon>\n            </span>\n            <input\n              type=\"email\"\n              class=\"form-control\"\n              id=\"loginEmail\"\n              placeholder=\"Correo Electrónico\"\n              [formControlName]=\"'email'\"\n            />\n            <small\n              class=\"form-text text-danger\"\n              *ngIf=\"signupForm.get('email').hasError('email')\"\n            >\n              Introduce un correo electronico válido.\n            </small>\n            <small\n              class=\"form-text text-danger\"\n              *ngIf=\"\n                signupForm.get('email').hasError('required') && submittedForm\n              \"\n              >Este campo es requerido.</small\n            >\n          </div>\n          <div class=\"form-group col-12 form-group-icon-field\">\n            <label for=\"loginUsername\">Nombre de usuario</label>\n            <span class=\"form-group-icon\">\n              <fa-icon\n                icon=\"times\"\n                class=\"text-danger\"\n                *ngIf=\"signupForm.get('username').hasError('usernameExists')\"\n              ></fa-icon>\n              <fa-icon\n                icon=\"check\"\n                class=\"text-success\"\n                *ngIf=\"signupForm.get('username').status === 'VALID'\"\n              ></fa-icon>\n              <fa-icon\n                icon=\"spinner\"\n                class=\"text-info\"\n                [spin]=\"true\"\n                *ngIf=\"signupForm.get('username').status === 'PENDING'\"\n              ></fa-icon>\n            </span>\n            <input\n              type=\"text\"\n              class=\"form-control\"\n              id=\"loginUsername\"\n              placeholder=\"Nombre de usuario\"\n              [formControlName]=\"'username'\"\n            />\n            <small\n              class=\"form-text text-danger\"\n              *ngIf=\"\n                signupForm.get('username').hasError('required') && submittedForm\n              \"\n            >\n              Este campo es requerido.\n            </small>\n          </div>\n          <div class=\"form-group col-12\">\n            <label for=\"loginFirstName\">Nombre(s)</label>\n            <input\n              type=\"text\"\n              class=\"form-control\"\n              id=\"loginFirstName\"\n              placeholder=\"Nombre(s)\"\n              [formControlName]=\"'firstName'\"\n            />\n            <small\n              class=\"form-text text-danger\"\n              *ngIf=\"\n                signupForm.get('firstName').hasError('required') &&\n                submittedForm\n              \"\n            >\n              Este campo es requerido.\n            </small>\n          </div>\n          <div class=\"form-group col-12 col-md-6\">\n            <label for=\"loginLastName\">Apellido paterno</label>\n            <input\n              type=\"text\"\n              class=\"form-control\"\n              id=\"loginLastName\"\n              placeholder=\"Apellido paterno\"\n              [formControlName]=\"'lastName'\"\n            />\n            <small\n              class=\"form-text text-danger\"\n              *ngIf=\"\n                signupForm.get('lastName').hasError('required') && submittedForm\n              \"\n            >\n              Este campo es requerido.\n            </small>\n          </div>\n          <div class=\"form-group col-12 col-md-6\">\n            <label for=\"loginSecondLastName\">Apellido materno</label>\n            <input\n              type=\"text\"\n              class=\"form-control\"\n              id=\"loginSecondLastName\"\n              placeholder=\"Apellido materno\"\n              [formControlName]=\"'secondLastName'\"\n            />\n            <small\n              class=\"form-text text-danger\"\n              *ngIf=\"\n                signupForm.get('secondLastName').hasError('required') &&\n                submittedForm\n              \"\n            >\n              Este campo es requerido.\n            </small>\n          </div>\n          <ng-container [formGroupName]=\"'passwords'\">\n            <div class=\"form-group col-12 form-group-icon-field\">\n              <span class=\"form-group-icon\">\n                <fa-icon\n                  [icon]=\"passwordsPreviews.psw ? 'eye' : 'eye-slash'\"\n                  (click)=\"toggleField('psw')\"\n                ></fa-icon>\n              </span>\n              <label for=\"loginPassword\">Contraseña</label>\n              <input\n                [type]=\"passwordsPreviews.psw ? 'password' : 'text'\"\n                class=\"form-control\"\n                id=\"loginPassword\"\n                placeholder=\"Contraseña\"\n                [formControlName]=\"'password'\"\n              />\n              <small\n                class=\"form-text text-danger\"\n                *ngIf=\"\n                  signupForm.get('passwords.password').hasError('required') &&\n                  submittedForm\n                \"\n              >\n                Este campo es requerido.\n              </small>\n            </div>\n            <div class=\"form-group col-12 form-group-icon-field\">\n              <label for=\"loginPasswordConfirm\">Confirmar Contraseña</label>\n              <app-password-preview>\n                <span class=\"form-group-icon\" appPasswordPreview>\n                  <fa-icon icon=\"eye\"></fa-icon>\n                </span>\n                <input\n                  type=\"password\"\n                  class=\"form-control\"\n                  id=\"loginPasswordConfirm\"\n                  placeholder=\"Confirmar Contraseña\"\n                  [formControlName]=\"'confirm'\"\n                  #input\n                />\n              </app-password-preview>\n\n              <small\n                class=\"form-text text-danger\"\n                *ngIf=\"\n                  signupForm.get('passwords.confirm').hasError('required') &&\n                  submittedForm\n                \"\n              >\n                Este campo es requerido.\n              </small>\n              <small\n                class=\"form-text text-danger\"\n                *ngIf=\"signupForm.get('passwords').hasError('notSame')\"\n              >\n                Las contraseñas no coinciden\n              </small>\n            </div>\n          </ng-container>\n\n          <div class=\"col-12 text-center pt-3\">\n            <button class=\"btn btn-primary\" (click)=\"submit()\">Aceptar</button>\n          </div>\n        </form>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/modules/authentication/pages/signup/signup.component.scss":
/*!***************************************************************************!*\
  !*** ./src/app/modules/authentication/pages/signup/signup.component.scss ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYXV0aGVudGljYXRpb24vcGFnZXMvc2lnbnVwL3NpZ251cC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/modules/authentication/pages/signup/signup.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/modules/authentication/pages/signup/signup.component.ts ***!
  \*************************************************************************/
/*! exports provided: SignupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupComponent", function() { return SignupComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _core_http_authentication_authentication_http_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../core/http/authentication/authentication-http.service */ "./src/app/core/http/authentication/authentication-http.service.ts");
/* harmony import */ var _core_authentication_authentication_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../core/authentication/authentication.service */ "./src/app/core/authentication/authentication.service.ts");







var SignupComponent = /** @class */ (function () {
    function SignupComponent(fb, authHttpService, authService, router) {
        this.fb = fb;
        this.authHttpService = authHttpService;
        this.authService = authService;
        this.router = router;
        this.formError = '';
        this.submittedForm = false;
        this.passwordsPreviews = {
            psw: true,
            confirm: true
        };
    }
    SignupComponent.prototype.ngOnInit = function () {
        this.buildForm();
    };
    SignupComponent.prototype.buildForm = function () {
        var _this = this;
        this.signupForm = this.fb.group({
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required], this.checkAvailableEmail()],
            username: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required], this.checkAvailableUsername()],
            firstName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            lastName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            secondLastName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            passwords: this.fb.group({
                password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
                confirm: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]]
            }, {
                validator: function (group) {
                    var psw = group.get('password').value;
                    var confirm = group.get('confirm').value;
                    return psw === confirm ? null : { notSame: true };
                }
            })
        });
        this.signupForm.valueChanges
            .subscribe(function (value) {
            _this.formError = '';
            _this.submittedForm = false;
        });
    };
    SignupComponent.prototype.submit = function () {
        var _this = this;
        this.submittedForm = true;
        if (this.signupForm.invalid) {
            this.formError = 'Hay errores en algunos campos';
            return;
        }
        var user = Object.assign({}, this.signupForm.value);
        user.password = user.passwords.password;
        delete user.passwords;
        this.authHttpService.signup(user)
            .subscribe(function (res) {
            _this.authService.setToken(res);
            _this.authHttpService.getAuthentication(res.token)
                .subscribe(function (user) {
                _this.authService.setUser(user);
                _this.router.navigate(['/home']);
            });
        }, function (err) {
            console.log(err);
            _this.formError = 'Hubo un error';
        });
    };
    SignupComponent.prototype.toggleField = function (key) {
        this.passwordsPreviews[key] = !this.passwordsPreviews[key];
    };
    SignupComponent.prototype.checkAvailableEmail = function () {
        var _this = this;
        return function (control) {
            return _this.authHttpService.checkAvailableEmail(control.value)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) {
                return res.email ? { emailExists: true } : null;
            }));
        };
    };
    SignupComponent.prototype.checkAvailableUsername = function () {
        var _this = this;
        return function (control) {
            return _this.authHttpService.checkAvailableUsername(control.value)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) {
                return res.username ? { usernameExists: true } : null;
            }));
        };
    };
    SignupComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-signup',
            template: __webpack_require__(/*! ./signup.component.html */ "./src/app/modules/authentication/pages/signup/signup.component.html"),
            styles: [__webpack_require__(/*! ./signup.component.scss */ "./src/app/modules/authentication/pages/signup/signup.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _core_http_authentication_authentication_http_service__WEBPACK_IMPORTED_MODULE_5__["AuthenticationHttpService"],
            _core_authentication_authentication_service__WEBPACK_IMPORTED_MODULE_6__["AuthenticationService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], SignupComponent);
    return SignupComponent;
}());



/***/ })

}]);
//# sourceMappingURL=modules-authentication-authentication-module.js.map