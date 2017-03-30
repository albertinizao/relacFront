webpackJsonp([1,4],{

/***/ 145:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http_src_base_request_options__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RelationService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var RelationService = (function () {
    function RelationService(http) {
        this.http = http;
    }
    RelationService.prototype.createRelationWith = function (owner, other) {
        var authToken = localStorage.getItem('token');
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]({ 'Content-Type': 'application/json' });
        headers.append('X-AUTH-TOKEN', localStorage.getItem("token"));
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http_src_base_request_options__["a" /* RequestOptions */]({ headers: headers });
        return this.http.post(__WEBPACK_IMPORTED_MODULE_3__app_component__["b" /* AppSettings */].API_ENDPOINT + __WEBPACK_IMPORTED_MODULE_3__app_component__["b" /* AppSettings */].API_CHARACTER + "/" + owner + "/" + __WEBPACK_IMPORTED_MODULE_3__app_component__["b" /* AppSettings */].API_RELATIONSHIP + "/" + other, null, options)
            .map(function () { return true; });
    };
    RelationService.prototype.saveRelation = function (owner, other, relation) {
        var authToken = localStorage.getItem('token');
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]({ 'Content-Type': 'application/json' });
        headers.append('X-AUTH-TOKEN', localStorage.getItem("token"));
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http_src_base_request_options__["a" /* RequestOptions */]({ headers: headers });
        return this.http.put(__WEBPACK_IMPORTED_MODULE_3__app_component__["b" /* AppSettings */].API_ENDPOINT + __WEBPACK_IMPORTED_MODULE_3__app_component__["b" /* AppSettings */].API_CHARACTER + "/" + owner + "/" + __WEBPACK_IMPORTED_MODULE_3__app_component__["b" /* AppSettings */].API_RELATIONSHIP + "/" + other + "/" + __WEBPACK_IMPORTED_MODULE_3__app_component__["b" /* AppSettings */].API_RELATION + "/" + relation.date, relation, options)
            .map(function () { return true; });
    };
    RelationService.prototype.getRelationList = function (owner, other) {
        var authToken = localStorage.getItem('token');
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]({ 'Content-Type': 'application/json' });
        headers.append('X-AUTH-TOKEN', localStorage.getItem("token"));
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http_src_base_request_options__["a" /* RequestOptions */]({ headers: headers });
        return this.http.get(__WEBPACK_IMPORTED_MODULE_3__app_component__["b" /* AppSettings */].API_ENDPOINT + __WEBPACK_IMPORTED_MODULE_3__app_component__["b" /* AppSettings */].API_CHARACTER + "/" + owner + "/" + __WEBPACK_IMPORTED_MODULE_3__app_component__["b" /* AppSettings */].API_RELATIONSHIP + "/" + other + "/" + __WEBPACK_IMPORTED_MODULE_3__app_component__["b" /* AppSettings */].API_RELATION, options)
            .map(this.extractDates);
    };
    RelationService.prototype.extractDates = function (res) {
        return res.json();
    };
    RelationService.prototype.handleError = function (error) {
        alert("error characters: ");
        // In a real world app, we might use a remote logging infrastructure
        var errMsg;
        if (error instanceof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Response"]) {
            var body = error.json() || '';
            var err = body.error || JSON.stringify(body);
            errMsg = error.status + " - " + (error.statusText || '') + " " + err;
        }
        else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__["Observable"].throw(errMsg);
    };
    RelationService.prototype.getRelation = function (owner, other, relationId) {
        var authToken = localStorage.getItem('token');
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]({ 'Content-Type': 'application/json' });
        headers.append('X-AUTH-TOKEN', localStorage.getItem("token"));
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http_src_base_request_options__["a" /* RequestOptions */]({ headers: headers });
        return this.http.get(__WEBPACK_IMPORTED_MODULE_3__app_component__["b" /* AppSettings */].API_ENDPOINT + __WEBPACK_IMPORTED_MODULE_3__app_component__["b" /* AppSettings */].API_CHARACTER + "/" + owner + "/" + __WEBPACK_IMPORTED_MODULE_3__app_component__["b" /* AppSettings */].API_RELATIONSHIP + "/" + other + "/" + __WEBPACK_IMPORTED_MODULE_3__app_component__["b" /* AppSettings */].API_RELATION + "/" + relationId, options)
            .map(this.extractRelation);
    };
    RelationService.prototype.extractRelation = function (res) {
        return res.json();
    };
    return RelationService;
}());
RelationService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === "function" && _a || Object])
], RelationService);

var _a;
//# sourceMappingURL=/home/acebrian/workspace2/relacfrontgithub/relacFront/src/relation.service.js.map

/***/ }),

/***/ 152:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)();
// imports


// module
exports.push([module.i, "@CHARSET \"UTF-8\";\n\n.background-relation-working {\n    background-color: grey;\n}\n\n.panel-relation-working {\n    border-color: grey;\n}\n\n.color-working {\n    color: grey;\n}\n\n.background-relation-confidential {\n    background-color: blue;\n}\n\n.panel-relation-confidential {\n    border-color: blue;\n}\n\n.color-confidential {\n    color: blue;\n}\n\n\n.panel-heading {\n    color: #fff;\n}\n\n.background-relation-loyalty {\n    background-color: maroon;\n}\n\n.panel-relation-loyalty {\n    border-color: maroon;\n}\n\n.color-loyalty {\n    color: maroon;\n}\n\n\n.background-relation-trust{\n    background-color: green;\n}\n\n.panel-relation-trust {\n    border-color: green;\n}\n\n.color-trust {\n    color: green;\n}\n\n\n.background-relation-respect {\n    background-color: purple;\n}\n\n.panel-relation-respect {\n    border-color: purple;\n}\n\n.color-respect {\n    color: purple;\n}\n\n\n.background-relation-funny {\n    background-color: #DAA520;\n}\n\n.panel-relation-funny {\n    border-color: #DAA520;\n}\n\n.color-funny {\n    color: #DAA520;\n}\n\n\n.background-relation-affection {\n    background-color: red;\n}\n\n.panel-relation-affection {\n    border-color: red;\n}\n\n.color-affection {\n    color: red;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 21:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__ = __webpack_require__(30);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return AppSettings; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = (function () {
    function AppComponent(translate) {
        this.title = 'app works!';
        this.loaded = false;
        translate.addLangs(["es", "en"]);
        // this language will be used as a fallback when a translation isn't found in the current language
        translate.setDefaultLang('en');
        var browserLang = translate.getBrowserLang();
        // the lang to use, if the lang isn't available, it will use the current loader to get them
        translate.use(browserLang.match(/en|es/) ? browserLang : 'en');
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(601),
        styles: [__webpack_require__(578)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__["c" /* TranslateService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__["c" /* TranslateService */]) === "function" && _a || Object])
], AppComponent);

var AppSettings = (function () {
    function AppSettings() {
    }
    return AppSettings;
}());

AppSettings.API_ENDPOINT = 'https://pacific-atoll-54145.herokuapp.com/';
// public static API_ENDPOINT='http://localhost:8080/';
AppSettings.API_GAME = 'game';
AppSettings.API_CHARACTER = 'character';
AppSettings.API_RELATIONSHIP = 'relationship';
AppSettings.API_RELATION = 'relation';
AppSettings.API_LOGIN = 'login';
AppSettings.API_USER = 'user';
var _a;
//# sourceMappingURL=/home/acebrian/workspace2/relacfrontgithub/relacFront/src/app.component.js.map

/***/ }),

/***/ 212:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http_src_base_request_options__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__(21);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GameService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var GameService = (function () {
    function GameService(http) {
        this.http = http;
    }
    GameService.prototype.getGames = function () {
        var authToken = localStorage.getItem('token');
        var headers = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["Headers"]({ 'Content-Type': 'application/json' });
        headers.append('X-AUTH-TOKEN', localStorage.getItem("token"));
        var options = new __WEBPACK_IMPORTED_MODULE_0__angular_http_src_base_request_options__["a" /* RequestOptions */]({ headers: headers });
        return this.http.get(__WEBPACK_IMPORTED_MODULE_6__app_component__["b" /* AppSettings */].API_ENDPOINT + __WEBPACK_IMPORTED_MODULE_6__app_component__["b" /* AppSettings */].API_GAME, options)
            .map(this.extractNames);
    };
    GameService.prototype.extractNames = function (res) {
        return res.json();
    };
    GameService.prototype.handleError = function (error) {
        alert("error games: ");
        // In a real world app, we might use a remote logging infrastructure
        var errMsg;
        if (error instanceof __WEBPACK_IMPORTED_MODULE_3__angular_http__["Response"]) {
            var body = error.json() || '';
            var err = body.error || JSON.stringify(body);
            errMsg = error.status + " - " + (error.statusText || '') + " " + err;
        }
        else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw(errMsg);
    };
    return GameService;
}());
GameService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__angular_http__["Http"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_http__["Http"]) === "function" && _a || Object])
], GameService);

var _a;
//# sourceMappingURL=/home/acebrian/workspace2/relacfrontgithub/relacFront/src/game.service.js.map

/***/ }),

/***/ 330:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(21);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var LoginService = (function () {
    function LoginService(http) {
        this.http = http;
    }
    LoginService.prototype.login = function (login) {
        return this.http.post(__WEBPACK_IMPORTED_MODULE_5__app_component__["b" /* AppSettings */].API_ENDPOINT + __WEBPACK_IMPORTED_MODULE_5__app_component__["b" /* AppSettings */].API_LOGIN, JSON.stringify(login))
            .map(this.handleSuccess);
    };
    LoginService.prototype.extractToken = function (res) {
        var body = res.json();
        return body.data || {};
    };
    LoginService.prototype.handleSuccess = function (response) {
        return response.headers.get("X-Auth-Token");
    };
    LoginService.prototype.handleError = function (error) {
        return new __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"](function (observe) { observe.next(error.json().error); observe.complete(); });
    };
    return LoginService;
}());
LoginService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_http__["Http"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_http__["Http"]) === "function" && _a || Object])
], LoginService);

var _a;
//# sourceMappingURL=/home/acebrian/workspace2/relacfrontgithub/relacFront/src/login.service.js.map

/***/ }),

/***/ 331:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http_src_base_request_options__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__(21);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var UserService = (function () {
    function UserService(http) {
        this.http = http;
    }
    UserService.prototype.createUser = function (user) {
        var headers = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["Headers"]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_0__angular_http_src_base_request_options__["a" /* RequestOptions */]({ headers: headers });
        return this.http.post(__WEBPACK_IMPORTED_MODULE_6__app_component__["b" /* AppSettings */].API_ENDPOINT + __WEBPACK_IMPORTED_MODULE_6__app_component__["b" /* AppSettings */].API_USER, JSON.stringify(user), options)
            .map(function () { return true; });
    };
    UserService.prototype.handleError = function (error) {
        // In a real world app, we might use a remote logging infrastructure
        var errMsg;
        if (error instanceof __WEBPACK_IMPORTED_MODULE_3__angular_http__["Response"]) {
            var body = error.json() || '';
            var err = body.error || JSON.stringify(body);
            errMsg = error.status + " - " + (error.statusText || '') + " " + err;
        }
        else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw(errMsg);
    };
    return UserService;
}());
UserService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__angular_http__["Http"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_http__["Http"]) === "function" && _a || Object])
], UserService);

var _a;
//# sourceMappingURL=/home/acebrian/workspace2/relacfrontgithub/relacFront/src/user.service.js.map

/***/ }),

/***/ 346:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)();
// imports


// module
exports.push([module.i, "\n\n.col-center {\n\tdisplay: inline-block;\n\tfloat: none;\n}\n.without-align {\n\tmargin: 0px;\n\tpadding: 0px;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 347:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)();
// imports


// module
exports.push([module.i, ".panel-primary>.panel-heading {\n\tcolor: #fff;\n\tbackground-color: #2e3436;\n\tborder-color: #2e3436;\n}\n\n.panel-primary {\n\tborder-color: #2e3436;\n}\n\n\n.row-center {\n\tpadding: 0px;\n\ttext-align: center;\n}\n\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 348:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 349:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)();
// imports


// module
exports.push([module.i, ".panel-primary>.panel-heading {\n    color: #fff;\n    background-color: #2e3436;\n    border-color: #2e3436;\n}\n\n.panel-primary {\n    border-color: #2e3436;\n}\n\n\na:hover {\n    text-decoration: none;\n}\n\n/* make sidebar nav vertical */\n@media ( min-width : 768px) {\n\t.sidebar-nav {\n\t\tposition: fixed;\n\t\twidth: 100%;\n\t}\n\t.sidebar-nav .navbar .navbar-collapse {\n\t\tpadding: 0;\n\t\tmax-height: none;\n\t}\n\t.sidebar-nav .navbar {\n\t\tbackground-color: black;\n\t\tborder-radius: 0;\n\t\tmargin-bottom: 0;\n\t\tborder: 0;\n\t\theight: 100%;\n\t}\n\t.sidebar-nav .navbar ul {\n\t\tfloat: none;\n\t\tdisplay: block;\n\t}\n\t.sidebar-nav .navbar li {\n\t\tfloat: none;\n\t\tdisplay: block;\n\t}\n\t.sidebar-nav .navbar li a {\n\t\tpadding-top: 12px;\n\t\tpadding-bottom: 12px;\n\t}\n}\n\n@media ( min-width : 1220px) {\n\t.navbar-nav {\n\t\tmargin: 0;\n\t}\n\t.navbar-collapse {\n\t\tpadding: 0;\n\t}\n\t.sidebar-nav .navbar li a>.caret {\n\t\tmargin-top: 8px;\n\t}\n}\n\n.brillo a:hover {\n\tcolor: white;\n\ttext-shadow: 0 0 10px #fff, 0 0 20px #fff, 0 0 30px #fff;\n}\n\n.brillo .selected {\n\tcolor: #e0e0e0;\n\ttext-shadow: 0 0 10px #666, 0 0 20px #666, 0 0 30px #666;\n}\n\n.menu-element {\n\tfont-size: large;\n}\n\n.sidebar-nav {\n\theight: 100%;\n}\n\n.black-background  {\n\tbackground-color: black;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 35:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CharacterSelectedService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var CharacterSelectedService = (function () {
    function CharacterSelectedService() {
    }
    CharacterSelectedService.prototype.characterIsOwn = function () {
        return this.ownCharacters && this.ownCharacters.indexOf(this.characterSelected) > -1;
    };
    return CharacterSelectedService;
}());
CharacterSelectedService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
], CharacterSelectedService);

//# sourceMappingURL=/home/acebrian/workspace2/relacfrontgithub/relacFront/src/character-selected.service.js.map

/***/ }),

/***/ 365:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 365;


/***/ }),

/***/ 366:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(453);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(483);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(513);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=/home/acebrian/workspace2/relacfrontgithub/relacFront/src/main.js.map

/***/ }),

/***/ 46:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Button; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var Button = (function () {
    function Button(message, glyphicon, fa, routerLink, onClick, access) {
        if (routerLink === void 0) { routerLink = null; }
        if (access === void 0) { access = true; }
        this.click = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.message = message;
        this.glyphicon = glyphicon;
        this.fa = fa;
        this.routerLink = routerLink;
        this.onClick = onClick;
        this.access = access;
    }
    Button.prototype.getStyle = function () {
        if (this.glyphicon) {
            return 'glyphicon glyphicon-' + this.glyphicon;
        }
        else if (this.fa) {
            return 'fa fa-' + this.fa;
        }
        return '';
    };
    return Button;
}());

__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", Object)
], Button.prototype, "onClick", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) === "function" && _a || Object)
], Button.prototype, "click", void 0);
var _a;
//# sourceMappingURL=/home/acebrian/workspace2/relacfrontgithub/relacFront/src/button.js.map

/***/ }),

/***/ 483:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__generic_chart_line_chart_component__ = __webpack_require__(502);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(142);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angular2_fontawesome_angular2_fontawesome__ = __webpack_require__(520);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angular2_fontawesome_angular2_fontawesome___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_angular2_fontawesome_angular2_fontawesome__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ng2_charts_ng2_charts__ = __webpack_require__(599);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ng2_charts_ng2_charts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_ng2_charts_ng2_charts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_common__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__oAuth_canActivateGuard__ = __webpack_require__(510);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__app_component__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__menu_menu_component__ = __webpack_require__(509);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__character_main_maincharacter_component__ = __webpack_require__(488);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__character_relationship_relation_bar_relation_bar_component__ = __webpack_require__(490);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__character_relationship_relation_single_relation_single_component__ = __webpack_require__(492);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__character_relationship_relation_single_relation_single_update_component__ = __webpack_require__(491);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__character_relationship_relation_relation_component__ = __webpack_require__(494);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__character_relationship_relation_relation_update_component__ = __webpack_require__(493);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__generic_title_title_component__ = __webpack_require__(505);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__character_relationship_resume_relationshipresume_component__ = __webpack_require__(499);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__character_relationship_resume_relationshipresume_update_component__ = __webpack_require__(498);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__character_relationship_relationship_relationship_component__ = __webpack_require__(497);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__character_relationship_relationHelp_relationHelp_component__ = __webpack_require__(495);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__character_relationship_relationship_relationship_update_component__ = __webpack_require__(496);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__generic_button_button_component__ = __webpack_require__(501);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__generic_helpBox_helpBox_component__ = __webpack_require__(503);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__generic_loading_loading_component__ = __webpack_require__(504);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__character_relationship_character_relation_character_relation_component__ = __webpack_require__(489);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__character_main_character_update_component__ = __webpack_require__(487);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__character_list_list_page_component__ = __webpack_require__(486);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__index_index_page_component__ = __webpack_require__(506);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__login_login_component__ = __webpack_require__(507);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__character_withoutgame_withoutgame_component__ = __webpack_require__(500);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__user_user_component__ = __webpack_require__(511);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__character_services_character_selected_service__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__character_services_character_service__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__character_services_relation_service__ = __webpack_require__(145);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__character_services_game_service__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__login_login_service__ = __webpack_require__(330);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__user_user_service__ = __webpack_require__(331);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40_ng2_auto_complete__ = __webpack_require__(595);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40_ng2_auto_complete___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_40_ng2_auto_complete__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41__ngx_translate_core__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_42__ngx_translate_http_loader__ = __webpack_require__(514);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_43_angular2_flash_messages__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_43_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_43_angular2_flash_messages__);
/* unused harmony export HttpLoaderFactory */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












































var appRoutes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_30__index_index_page_component__["a" /* IndexPageComponent */] },
    { path: 'user', component: __WEBPACK_IMPORTED_MODULE_33__user_user_component__["a" /* UserComponent */] },
    { path: 'new', component: __WEBPACK_IMPORTED_MODULE_28__character_main_character_update_component__["a" /* CharacterUpdateComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_9__oAuth_canActivateGuard__["a" /* CanActivateViaOAuthGuard */]] },
    { path: 'character', component: __WEBPACK_IMPORTED_MODULE_29__character_list_list_page_component__["a" /* ListPageComponent */] },
    { path: 'character/:characterName', component: __WEBPACK_IMPORTED_MODULE_32__character_withoutgame_withoutgame_component__["a" /* WithoutgameComponent */] },
    { path: 'game/:game', component: __WEBPACK_IMPORTED_MODULE_29__character_list_list_page_component__["a" /* ListPageComponent */] },
    { path: 'game/:game/new', component: __WEBPACK_IMPORTED_MODULE_28__character_main_character_update_component__["a" /* CharacterUpdateComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_9__oAuth_canActivateGuard__["a" /* CanActivateViaOAuthGuard */]] },
    { path: 'game/:game/character/:characterName', component: __WEBPACK_IMPORTED_MODULE_12__character_main_maincharacter_component__["a" /* MainCharacterComponent */] },
    { path: 'game/:game/character/:characterName/new', component: __WEBPACK_IMPORTED_MODULE_27__character_relationship_character_relation_character_relation_component__["a" /* CharacterRelationComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_9__oAuth_canActivateGuard__["a" /* CanActivateViaOAuthGuard */]] },
    { path: 'game/:game/character/:characterName/relationship/:other', component: __WEBPACK_IMPORTED_MODULE_21__character_relationship_relationship_relationship_component__["a" /* RelationshipComponent */] },
    { path: 'game/:game/character/:characterName/relationship/:other/new', component: __WEBPACK_IMPORTED_MODULE_23__character_relationship_relationship_relationship_update_component__["a" /* RelationshipUpdateComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_9__oAuth_canActivateGuard__["a" /* CanActivateViaOAuthGuard */]] }
];
// AoT requires an exported function for factories
function HttpLoaderFactory(http) {
    return new __WEBPACK_IMPORTED_MODULE_42__ngx_translate_http_loader__["a" /* TranslateHttpLoader */](http);
}
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_10__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_11__menu_menu_component__["a" /* MenuComponent */],
            __WEBPACK_IMPORTED_MODULE_12__character_main_maincharacter_component__["a" /* MainCharacterComponent */],
            __WEBPACK_IMPORTED_MODULE_18__generic_title_title_component__["a" /* TitleComponent */],
            __WEBPACK_IMPORTED_MODULE_19__character_relationship_resume_relationshipresume_component__["a" /* RelationshipResumeComponent */],
            __WEBPACK_IMPORTED_MODULE_16__character_relationship_relation_relation_component__["a" /* RelationComponent */],
            __WEBPACK_IMPORTED_MODULE_14__character_relationship_relation_single_relation_single_component__["a" /* RelationSingleComponent */],
            __WEBPACK_IMPORTED_MODULE_13__character_relationship_relation_bar_relation_bar_component__["a" /* RelationBarComponent */],
            __WEBPACK_IMPORTED_MODULE_21__character_relationship_relationship_relationship_component__["a" /* RelationshipComponent */],
            __WEBPACK_IMPORTED_MODULE_23__character_relationship_relationship_relationship_update_component__["a" /* RelationshipUpdateComponent */],
            __WEBPACK_IMPORTED_MODULE_24__generic_button_button_component__["a" /* ButtonComponent */],
            __WEBPACK_IMPORTED_MODULE_25__generic_helpBox_helpBox_component__["a" /* HelpBoxComponent */],
            __WEBPACK_IMPORTED_MODULE_0__generic_chart_line_chart_component__["a" /* LineChartComponent */],
            __WEBPACK_IMPORTED_MODULE_17__character_relationship_relation_relation_update_component__["a" /* RelationUpdateComponent */],
            __WEBPACK_IMPORTED_MODULE_15__character_relationship_relation_single_relation_single_update_component__["a" /* RelationSingleUpdateComponent */],
            __WEBPACK_IMPORTED_MODULE_20__character_relationship_resume_relationshipresume_update_component__["a" /* RelationshipResumeUpdateComponent */],
            __WEBPACK_IMPORTED_MODULE_27__character_relationship_character_relation_character_relation_component__["a" /* CharacterRelationComponent */],
            __WEBPACK_IMPORTED_MODULE_28__character_main_character_update_component__["a" /* CharacterUpdateComponent */],
            __WEBPACK_IMPORTED_MODULE_29__character_list_list_page_component__["a" /* ListPageComponent */],
            __WEBPACK_IMPORTED_MODULE_31__login_login_component__["a" /* LoginComponent */],
            __WEBPACK_IMPORTED_MODULE_26__generic_loading_loading_component__["a" /* LoadingComponent */],
            __WEBPACK_IMPORTED_MODULE_33__user_user_component__["a" /* UserComponent */],
            __WEBPACK_IMPORTED_MODULE_30__index_index_page_component__["a" /* IndexPageComponent */],
            __WEBPACK_IMPORTED_MODULE_32__character_withoutgame_withoutgame_component__["a" /* WithoutgameComponent */],
            __WEBPACK_IMPORTED_MODULE_22__character_relationship_relationHelp_relationHelp_component__["a" /* RelationHelpComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormsModule"],
            __WEBPACK_IMPORTED_MODULE_4__angular_http__["HttpModule"],
            __WEBPACK_IMPORTED_MODULE_5__angular_router__["a" /* RouterModule */].forRoot(appRoutes),
            __WEBPACK_IMPORTED_MODULE_6_angular2_fontawesome_angular2_fontawesome__["Angular2FontawesomeModule"],
            __WEBPACK_IMPORTED_MODULE_7_ng2_charts_ng2_charts__["ChartsModule"],
            __WEBPACK_IMPORTED_MODULE_40_ng2_auto_complete__["Ng2AutoCompleteModule"],
            __WEBPACK_IMPORTED_MODULE_43_angular2_flash_messages__["FlashMessagesModule"],
            __WEBPACK_IMPORTED_MODULE_41__ngx_translate_core__["a" /* TranslateModule */].forRoot({
                loader: {
                    provide: __WEBPACK_IMPORTED_MODULE_41__ngx_translate_core__["b" /* TranslateLoader */],
                    useFactory: HttpLoaderFactory,
                    deps: [__WEBPACK_IMPORTED_MODULE_4__angular_http__["Http"]]
                }
            })
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_34__character_services_character_selected_service__["a" /* CharacterSelectedService */], __WEBPACK_IMPORTED_MODULE_35__character_services_character_service__["a" /* CharacterService */], __WEBPACK_IMPORTED_MODULE_36__character_services_relation_service__["a" /* RelationService */], __WEBPACK_IMPORTED_MODULE_38__login_login_service__["a" /* LoginService */], __WEBPACK_IMPORTED_MODULE_39__user_user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_37__character_services_game_service__["a" /* GameService */], __WEBPACK_IMPORTED_MODULE_8__angular_common__["DatePipe"], __WEBPACK_IMPORTED_MODULE_9__oAuth_canActivateGuard__["a" /* CanActivateViaOAuthGuard */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_10__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=/home/acebrian/workspace2/relacfrontgithub/relacFront/src/app.module.js.map

/***/ }),

/***/ 484:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__relationship__ = __webpack_require__(485);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GenericCharacter; });

var GenericCharacter = (function () {
    function GenericCharacter() {
        this.relationships = [new __WEBPACK_IMPORTED_MODULE_0__relationship__["a" /* Relationship */]()];
    }
    return GenericCharacter;
}());

//# sourceMappingURL=/home/acebrian/workspace2/relacfrontgithub/relacFront/src/genericcharacter.js.map

/***/ }),

/***/ 485:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__relation__ = __webpack_require__(61);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Relationship; });

var Relationship = (function () {
    function Relationship() {
        this.relation = [new __WEBPACK_IMPORTED_MODULE_0__relation__["a" /* Relation */]()];
    }
    return Relationship;
}());

//# sourceMappingURL=/home/acebrian/workspace2/relacfrontgithub/relacFront/src/relationship.js.map

/***/ }),

/***/ 486:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_switchMap__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_switchMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_switchMap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__generic_button_button__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_character_service__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_character_selected_service__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ngx_translate_core__ = __webpack_require__(30);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListPageComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var ListPageComponent = (function () {
    function ListPageComponent(route, characterSelectedService, characterService, translateService) {
        this.route = route;
        this.characterSelectedService = characterSelectedService;
        this.characterService = characterService;
        this.translateService = translateService;
        this.buttonNew = new __WEBPACK_IMPORTED_MODULE_3__generic_button_button__["a" /* Button */]('BUTTON.NEW', 'plus', null, ['new'], null, true);
        this.buttonNewNotLogged = new __WEBPACK_IMPORTED_MODULE_3__generic_button_button__["a" /* Button */]('BUTTON.NEW', 'plus', null, ['new'], null, false);
        this.buttonHome = new __WEBPACK_IMPORTED_MODULE_3__generic_button_button__["a" /* Button */]('BUTTON.HOME', 'home', null, ['/'], null);
    }
    ListPageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (param) {
            _this.game = param['game'];
        });
        this.characterSelectedService.characterSelected = null;
        this.characterSelectedService.relationshipSelected = null;
        this.characterSelectedService.relationSelected = null;
        this.characterService.getCharacters(null, this.game).subscribe(function (characters) { _this.characters = characters; }, function (error) { _this.errorMessage = error; });
        var user = localStorage.getItem("username");
        if (user) {
            this.characterService.getCharacters(user, null).subscribe(function (characters) { return _this.characterSelectedService.ownCharacters = characters; }, function (error) { return _this.errorMessage = error; });
        }
    };
    ListPageComponent.prototype.getTittle = function () {
        var obs;
        if (this.game) {
            obs = this.translateService.get('HEADER.LIST.TITLE.WITHGAME', { game: this.game.charAt(0).toUpperCase() + this.game.substr(1).toLowerCase() });
        }
        else {
            obs = this.translateService.get('HEADER.LIST.TITLE.WITHOUTGAME');
        }
        var result;
        obs.subscribe(function (m) { return result = m; });
        return result;
    };
    ListPageComponent.prototype.getSubtittle = function () {
        var obs;
        if (this.game) {
            obs = this.translateService.get('HEADER.LIST.SUBTITLE.WITHGAME', { game: this.game.charAt(0).toUpperCase() + this.game.substr(1).toLowerCase() });
        }
        else {
            obs = this.translateService.get('HEADER.LIST.SUBTITLE.WITHOUTGAME');
        }
        var result;
        obs.subscribe(function (m) { return result = m; });
        return result;
    };
    ListPageComponent.prototype.isLogged = function () {
        return (localStorage.getItem("token") === null) ? false : true;
    };
    ListPageComponent.prototype.toColor = function (str) {
        var hash = 0;
        for (var i = 0; i < str.length; i++) {
            hash = str.charCodeAt(i) + ((hash << 5) - hash);
        }
        var colour = '#';
        for (var i = 0; i < 3; i++) {
            var value = (hash >> (i * 8)) & 0xFF;
            colour += ('00' + value.toString(16)).substr(-2);
        }
        return colour;
    };
    return ListPageComponent;
}());
ListPageComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
        selector: 'app-list-page',
        template: __webpack_require__(602),
        styles: [__webpack_require__(579)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_5__services_character_selected_service__["a" /* CharacterSelectedService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__services_character_selected_service__["a" /* CharacterSelectedService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__services_character_service__["a" /* CharacterService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_character_service__["a" /* CharacterService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_6__ngx_translate_core__["c" /* TranslateService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__ngx_translate_core__["c" /* TranslateService */]) === "function" && _d || Object])
], ListPageComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=/home/acebrian/workspace2/relacfrontgithub/relacFront/src/list-page.component.js.map

/***/ }),

/***/ 487:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_character_service__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_game_service__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__generic_button_button__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_switchMap__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_switchMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_switchMap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__data_genericcharacter__ = __webpack_require__(484);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_character_selected_service__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_component__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ngx_translate_core__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_angular2_flash_messages__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_angular2_flash_messages__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CharacterUpdateComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var CharacterUpdateComponent = (function () {
    function CharacterUpdateComponent(route, gameService, characterService, router, translateService, flashMessagesService, characterSelectedService) {
        var _this = this;
        this.route = route;
        this.gameService = gameService;
        this.characterService = characterService;
        this.router = router;
        this.translateService = translateService;
        this.flashMessagesService = flashMessagesService;
        this.characterSelectedService = characterSelectedService;
        this.gameGiven = false;
        this.validated = false;
        this.buttonHome = new __WEBPACK_IMPORTED_MODULE_2__generic_button_button__["a" /* Button */]('BUTTON.HOME', 'home', null, ['/'], null);
        this.onSuccess = function (response) {
            var message;
            if (response) {
                var user = localStorage.getItem("username");
                if (user) {
                    _this.characterService.getCharacters(user, null).subscribe(function (characters) {
                        _this.characterSelectedService.ownCharacters = characters;
                        _this.translateService.get('MESSAGES.SAVE.CORRECT').subscribe(function (m) { return message = m; });
                        _this.flashMessagesService.show(message, { cssClass: 'alert alert-dismissible alert-success', timeout: 10000 });
                        _this.router.navigateByUrl(_this.buildCharacterLink() + '/' + __WEBPACK_IMPORTED_MODULE_8__app_component__["b" /* AppSettings */].API_CHARACTER + '/' + _this.character.name);
                    });
                }
            }
        };
        this.onFailure = function (error) {
            var message;
            try {
                _this.translateService.get('MESSAGES.' + error.status).subscribe(function (m) { return message = m; });
            }
            catch (errorNew) {
                _this.translateService.get('MESSAGES.SAVE.INCORRECT').subscribe(function (m) { return message = m; });
            }
            _this.flashMessagesService.show(message, { cssClass: 'alert alert-dismissible alert-danger', timeout: 10000 });
        };
    }
    CharacterUpdateComponent.prototype.save = function () {
        this.validated = false;
        if (this.character.name) {
            this.character.relationships = null;
            this.characterService.create(this.character.name, this.character).subscribe(this.onSuccess, this.onFailure);
        }
        this.validated = true;
    };
    CharacterUpdateComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (param) {
            _this.character = new __WEBPACK_IMPORTED_MODULE_6__data_genericcharacter__["a" /* GenericCharacter */]();
            _this.character.game = param['game'];
            _this.gameGiven = _this.character.game != null;
            _this.buttonCancel = new __WEBPACK_IMPORTED_MODULE_2__generic_button_button__["a" /* Button */]('BUTTON.CANCEL', 'remove', null, [_this.buildCharacterLink()], null);
            _this.buttonSave = new __WEBPACK_IMPORTED_MODULE_2__generic_button_button__["a" /* Button */]('BUTTON.SAVE', 'save', null, [_this.buildCharacterLink()], null);
        });
        this.gameService.getGames().subscribe(function (games) {
            _this.suggestedGames = games;
        });
    };
    CharacterUpdateComponent.prototype.buildCharacterLink = function () {
        if (this.character.game) {
            return '/' + __WEBPACK_IMPORTED_MODULE_8__app_component__["b" /* AppSettings */].API_GAME + '/' + this.character.game;
        }
        else {
            return '';
        }
    };
    CharacterUpdateComponent.prototype.buildRouterLink = function () {
        if (this.character) {
            return [this.buildCharacterLink() + '/character', this.character.name];
        }
        else {
            return [this.buildCharacterLink() + '/character'];
        }
    };
    return CharacterUpdateComponent;
}());
CharacterUpdateComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__angular_core__["Component"])({
        selector: 'app-character-update',
        template: __webpack_require__(603),
        styles: [__webpack_require__(580), __webpack_require__(76)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_5__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__angular_router__["c" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__services_game_service__["a" /* GameService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_game_service__["a" /* GameService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__services_character_service__["a" /* CharacterService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__services_character_service__["a" /* CharacterService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_5__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__angular_router__["b" /* Router */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_9__ngx_translate_core__["c" /* TranslateService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_9__ngx_translate_core__["c" /* TranslateService */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_10_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_10_angular2_flash_messages__["FlashMessagesService"]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_7__services_character_selected_service__["a" /* CharacterSelectedService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__services_character_selected_service__["a" /* CharacterSelectedService */]) === "function" && _g || Object])
], CharacterUpdateComponent);

var _a, _b, _c, _d, _e, _f, _g;
//# sourceMappingURL=/home/acebrian/workspace2/relacfrontgithub/relacFront/src/character-update.component.js.map

/***/ }),

/***/ 488:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__data_relation__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__generic_button_button__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_switchMap__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_switchMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_switchMap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_character_selected_service__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_character_service__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_component__ = __webpack_require__(21);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MainCharacterComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var MainCharacterComponent = (function () {
    function MainCharacterComponent(characterSelectedService, characterService, route, location) {
        this.characterSelectedService = characterSelectedService;
        this.characterService = characterService;
        this.route = route;
        this.location = location;
        this.loaded = false;
        this.buttonHome = new __WEBPACK_IMPORTED_MODULE_1__generic_button_button__["a" /* Button */]('BUTTON.HOME', 'home', null, ['/'], null);
        this.buttonNew = new __WEBPACK_IMPORTED_MODULE_1__generic_button_button__["a" /* Button */]('BUTTON.NEW', 'plus', null, ['new'], null, true);
        this.buttonNewNotOwner = new __WEBPACK_IMPORTED_MODULE_1__generic_button_button__["a" /* Button */]('BUTTON.NEW', 'plus', null, ['new'], null, false);
    }
    MainCharacterComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (param) {
            _this.characterSelectedService.characterSelected = param['characterName'];
            _this.game = param['game'];
            if (_this.game && _this.game != "null") {
                _this.buttonGame = new __WEBPACK_IMPORTED_MODULE_1__generic_button_button__["a" /* Button */]('' + _this.game, 'book', null, ['/' + __WEBPACK_IMPORTED_MODULE_8__app_component__["b" /* AppSettings */].API_GAME + '/' + _this.game], null);
            }
            _this.getCharacter();
        });
    };
    MainCharacterComponent.prototype.getCharacter = function () {
        var _this = this;
        this.characterService.getCharacter(this.characterSelectedService.characterSelected)
            .subscribe(function (character) {
            _this.character = character;
            _this.character.relationships.forEach(function (item, indez) {
                if (!item.relation) {
                    item.relation = [new __WEBPACK_IMPORTED_MODULE_0__data_relation__["a" /* Relation */]()];
                }
            });
            _this.loaded = true;
            _this.subtitleParam = { value: _this.character.user };
            _this.owner = _this.character.user;
            _this.isOwner = _this.characterSelectedService.characterIsOwn();
        });
    };
    return MainCharacterComponent;
}());
MainCharacterComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__angular_core__["Component"])({
        selector: 'app-maincharacter',
        template: __webpack_require__(604),
        styles: [__webpack_require__(581)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_6__services_character_selected_service__["a" /* CharacterSelectedService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__services_character_selected_service__["a" /* CharacterSelectedService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_7__services_character_service__["a" /* CharacterService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__services_character_service__["a" /* CharacterService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_router__["c" /* ActivatedRoute */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_5__angular_common__["Location"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__angular_common__["Location"]) === "function" && _d || Object])
], MainCharacterComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=/home/acebrian/workspace2/relacfrontgithub/relacFront/src/maincharacter.component.js.map

/***/ }),

/***/ 489:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__generic_button_button__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_switchMap__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_switchMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_switchMap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_relation_service__ = __webpack_require__(145);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ngx_translate_core__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angular2_flash_messages__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_angular2_flash_messages__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CharacterRelationComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var CharacterRelationComponent = (function () {
    function CharacterRelationComponent(route, relationService, router, translateService, flashMessagesService) {
        var _this = this;
        this.route = route;
        this.relationService = relationService;
        this.router = router;
        this.translateService = translateService;
        this.flashMessagesService = flashMessagesService;
        this.validated = false;
        this.onSuccess = function (response) {
            var message;
            if (response) {
                _this.translateService.get('MESSAGES.SAVE.CORRECT').subscribe(function (m) { return message = m; });
                _this.flashMessagesService.show(message, { cssClass: 'alert alert-dismissible alert-success', timeout: 10000 });
                _this.router.navigateByUrl(_this.buttonSave.routerLink[0] + '/' + _this.newName);
            }
        };
        this.onFailure = function (error) {
            var message;
            try {
                _this.translateService.get('MESSAGES.' + error.status).subscribe(function (m) { return message = m; });
            }
            catch (errorNew) {
                _this.translateService.get('MESSAGES.SAVE.INCORRECT').subscribe(function (m) { return message = m; });
            }
            _this.flashMessagesService.show(message, { cssClass: 'alert alert-dismissible alert-danger', timeout: 10000 });
        };
    }
    CharacterRelationComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (param) {
            _this.ownerName = param['characterName'];
            _this.game = param['game'];
        });
        this.buttonHome = new __WEBPACK_IMPORTED_MODULE_0__generic_button_button__["a" /* Button */]('BUTTON.HOME', 'home', null, ['/'], null);
        if (this.game && this.game != 'null') {
            this.buttonGame = new __WEBPACK_IMPORTED_MODULE_0__generic_button_button__["a" /* Button */]('' + this.game, 'book', null, ['/' + __WEBPACK_IMPORTED_MODULE_5__app_component__["b" /* AppSettings */].API_GAME + '/' + this.game], null);
        }
        this.buttonCancel = new __WEBPACK_IMPORTED_MODULE_0__generic_button_button__["a" /* Button */]('BUTTON.CANCEL', 'remove', null, ['/' + __WEBPACK_IMPORTED_MODULE_5__app_component__["b" /* AppSettings */].API_GAME + '/' + this.game + '/' + __WEBPACK_IMPORTED_MODULE_5__app_component__["b" /* AppSettings */].API_CHARACTER + '/' + this.ownerName], null);
        this.buttonSave = new __WEBPACK_IMPORTED_MODULE_0__generic_button_button__["a" /* Button */]('BUTTON.SAVE', 'save', null, ['/' + __WEBPACK_IMPORTED_MODULE_5__app_component__["b" /* AppSettings */].API_GAME + '/' + this.game + '/' + __WEBPACK_IMPORTED_MODULE_5__app_component__["b" /* AppSettings */].API_CHARACTER + '/' + this.ownerName + '/' + __WEBPACK_IMPORTED_MODULE_5__app_component__["b" /* AppSettings */].API_RELATIONSHIP], this.save);
        this.translateService.get('HEADER.NEWRELATION.TITLE', { character: this.ownerName }).subscribe(function (m) { return _this.titleMessage = m; });
        this.subtitleMessage = { character: this.ownerName };
    };
    CharacterRelationComponent.prototype.save = function () {
        if (this.newName) {
            this.relationService.createRelationWith(this.ownerName, this.newName)
                .subscribe(this.onSuccess, this.onFailure);
        }
        this.validated = true;
    };
    CharacterRelationComponent.prototype.buildRouterLink = function () {
        if (this.newName) {
            return ['../', 'relationship', this.newName];
        }
        else {
            return ['../', 'relationship'];
        }
    };
    return CharacterRelationComponent;
}());
CharacterRelationComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Component"])({
        selector: 'app-character-relation',
        template: __webpack_require__(605),
        styles: [__webpack_require__(582), __webpack_require__(76)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__services_relation_service__["a" /* RelationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_relation_service__["a" /* RelationService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_6__ngx_translate_core__["c" /* TranslateService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__ngx_translate_core__["c" /* TranslateService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_7_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7_angular2_flash_messages__["FlashMessagesService"]) === "function" && _e || Object])
], CharacterRelationComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=/home/acebrian/workspace2/relacfrontgithub/relacFront/src/character-relation.component.js.map

/***/ }),

/***/ 490:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RelationBarComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var RelationBarComponent = (function () {
    function RelationBarComponent() {
        this.show = false;
    }
    return RelationBarComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], RelationBarComponent.prototype, "value", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], RelationBarComponent.prototype, "name", void 0);
RelationBarComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-relation-bar',
        template: __webpack_require__(606),
        styles: [__webpack_require__(583), __webpack_require__(152)],
        animations: [
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["trigger"])('enterAnimation', [
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["state"])('*', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["style"])({ 'width': '100%' })),
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["state"])('void', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["style"])({ 'width': '0%' })),
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["transition"])('* => void', [
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["style"])({ width: '*' }),
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["animate"])(1000, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["style"])({ width: 0 }))
                ]),
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["transition"])('void => *', [
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["style"])({ width: '0' }),
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["animate"])(1000, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["style"])({ width: '*' }))
                ])
            ])
        ]
    })
], RelationBarComponent);

//# sourceMappingURL=/home/acebrian/workspace2/relacfrontgithub/relacFront/src/relation-bar.component.js.map

/***/ }),

/***/ 491:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RelationSingleUpdateComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var RelationSingleUpdateComponent = (function () {
    function RelationSingleUpdateComponent() {
        this.notify = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    return RelationSingleUpdateComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], RelationSingleUpdateComponent.prototype, "value", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], RelationSingleUpdateComponent.prototype, "name", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) === "function" && _a || Object)
], RelationSingleUpdateComponent.prototype, "notify", void 0);
RelationSingleUpdateComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-relation-single-update',
        template: __webpack_require__(607),
        styles: [__webpack_require__(346), __webpack_require__(152)]
    })
], RelationSingleUpdateComponent);

var _a;
//# sourceMappingURL=/home/acebrian/workspace2/relacfrontgithub/relacFront/src/relation-single-update.component.js.map

/***/ }),

/***/ 492:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RelationSingleComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var RelationSingleComponent = (function () {
    function RelationSingleComponent() {
        this.valueActual = 0;
    }
    RelationSingleComponent.prototype.ngOnInit = function () {
        this.timeout();
    };
    RelationSingleComponent.prototype.timeout = function () {
        var _this = this;
        if (this.valueActual < +this.value) {
            setTimeout(function () { _this.valueActual = _this.valueActual + 1; _this.timeout(); }, 100);
        }
    };
    return RelationSingleComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], RelationSingleComponent.prototype, "value", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], RelationSingleComponent.prototype, "valueActual", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], RelationSingleComponent.prototype, "name", void 0);
RelationSingleComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-relation-single',
        template: __webpack_require__(608),
        styles: [__webpack_require__(346), __webpack_require__(152)]
    })
], RelationSingleComponent);

//# sourceMappingURL=/home/acebrian/workspace2/relacfrontgithub/relacFront/src/relation-single.component.js.map

/***/ }),

/***/ 493:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__data_relation__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RelationUpdateComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var RelationUpdateComponent = (function () {
    function RelationUpdateComponent() {
    }
    RelationUpdateComponent.prototype.change = function (event, type) {
        if (type === 'working') {
            this.relation.working = event;
        }
        else if (type === 'confidential') {
            this.relation.confidential = event;
        }
        else if (type === 'loyalty') {
            this.relation.loyalty = event;
        }
        else if (type === 'trust') {
            this.relation.trust = event;
        }
        else if (type === 'respect') {
            this.relation.respect = event;
        }
        else if (type === 'funny') {
            this.relation.funny = event;
        }
        else if (type === 'affection') {
            this.relation.affection = event;
        }
    };
    ;
    return RelationUpdateComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__data_relation__["a" /* Relation */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__data_relation__["a" /* Relation */]) === "function" && _a || Object)
], RelationUpdateComponent.prototype, "relation", void 0);
RelationUpdateComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
        selector: 'app-relation-update',
        template: __webpack_require__(609),
        styles: [__webpack_require__(347)]
    })
], RelationUpdateComponent);

var _a;
//# sourceMappingURL=/home/acebrian/workspace2/relacfrontgithub/relacFront/src/relation-update.component.js.map

/***/ }),

/***/ 494:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__data_relation__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RelationComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var RelationComponent = (function () {
    function RelationComponent() {
    }
    return RelationComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__data_relation__["a" /* Relation */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__data_relation__["a" /* Relation */]) === "function" && _a || Object)
], RelationComponent.prototype, "relation", void 0);
RelationComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
        selector: 'app-relation',
        template: __webpack_require__(610),
        styles: [__webpack_require__(347)]
    })
], RelationComponent);

var _a;
//# sourceMappingURL=/home/acebrian/workspace2/relacfrontgithub/relacFront/src/relation.component.js.map

/***/ }),

/***/ 495:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__ = __webpack_require__(30);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RelationHelpComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var RelationHelpComponent = (function () {
    function RelationHelpComponent(translateService) {
        this.translateService = translateService;
        this.messages = [
            ["working", "", ""],
            ["confidential", "", ""],
            ["loyalty", "", ""],
            ["trust", "", ""],
            ["respect", "", ""],
            ["funny", "", ""],
            ["affection", "", ""]
        ];
    }
    RelationHelpComponent.prototype.ngOnInit = function () {
        for (var i = 0; i < this.messages.length; i++) {
            this.load(this.messages[i][0], i, 1);
            this.load(this.messages[i][0], i, 2);
        }
    };
    RelationHelpComponent.prototype.load = function (name, i, j) {
        var _this = this;
        if (j == 1) {
            this.translateService.get('RELATIONS.' + name + '.NAME').subscribe(function (m) { return _this.messages[i][j] = m; });
        }
        else if (j == 2) {
            this.translateService.get('RELATIONS.' + name + '.DESCRIPTION').subscribe(function (m) { return _this.messages[i][j] = m; });
        }
    };
    return RelationHelpComponent;
}());
RelationHelpComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-relation-help',
        template: __webpack_require__(611),
        styles: [__webpack_require__(584), __webpack_require__(152)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__["c" /* TranslateService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__["c" /* TranslateService */]) === "function" && _a || Object])
], RelationHelpComponent);

var _a;
//# sourceMappingURL=/home/acebrian/workspace2/relacfrontgithub/relacFront/src/relationHelp.component.js.map

/***/ }),

/***/ 496:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__generic_button_button__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__data_relation__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_character_selected_service__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_relation_service__ = __webpack_require__(145);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_common__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_component__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ngx_translate_core__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_angular2_flash_messages__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_angular2_flash_messages__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RelationshipUpdateComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var RelationshipUpdateComponent = (function () {
    function RelationshipUpdateComponent(characterSelectedService, relationService, route, datePipe, router, translateService, flashMessagesService) {
        var _this = this;
        this.characterSelectedService = characterSelectedService;
        this.relationService = relationService;
        this.route = route;
        this.datePipe = datePipe;
        this.router = router;
        this.translateService = translateService;
        this.flashMessagesService = flashMessagesService;
        this.relation = new __WEBPACK_IMPORTED_MODULE_1__data_relation__["a" /* Relation */]();
        //ownerName
        this.buttonHome = new __WEBPACK_IMPORTED_MODULE_0__generic_button_button__["a" /* Button */]('BUTTON.HOME', 'home', null, ['/'], null);
        this.buttonSave = new __WEBPACK_IMPORTED_MODULE_0__generic_button_button__["a" /* Button */]('BUTTON.SAVE', 'save', null, null, this.save);
        this.onSuccess = function (response) {
            var message;
            if (response) {
                _this.translateService.get('MESSAGES.SAVE.CORRECT').subscribe(function (m) { return message = m; });
                _this.flashMessagesService.show(message, { cssClass: 'alert alert-dismissible alert-success', timeout: 10000 });
                _this.router.navigateByUrl('/' + __WEBPACK_IMPORTED_MODULE_7__app_component__["b" /* AppSettings */].API_GAME + '/' + _this.game + '/' + __WEBPACK_IMPORTED_MODULE_7__app_component__["b" /* AppSettings */].API_CHARACTER + '/' + _this.ownerName + '/' + __WEBPACK_IMPORTED_MODULE_7__app_component__["b" /* AppSettings */].API_RELATIONSHIP + '/' + _this.otherName);
            }
        };
        this.onFailure = function (error) {
            var message;
            try {
                _this.translateService.get('MESSAGES.' + error.status).subscribe(function (m) { return message = m; });
            }
            catch (errorNew) {
                _this.translateService.get('MESSAGES.SAVE.INCORRECT').subscribe(function (m) { return message = m; });
            }
            _this.flashMessagesService.show(message, { cssClass: 'alert alert-dismissible alert-danger', timeout: 10000 });
        };
    }
    RelationshipUpdateComponent.prototype.save = function () {
        this.relation.date = new Date().getTime();
        this.relationService.saveRelation(this.ownerName, this.otherName, this.relation)
            .subscribe(this.onSuccess, this.onFailure);
    };
    RelationshipUpdateComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.relation = new __WEBPACK_IMPORTED_MODULE_1__data_relation__["a" /* Relation */]();
        this.route.params.subscribe(function (param) {
            _this.characterSelectedService.characterSelected = param['characterName'];
            _this.ownerName = _this.characterSelectedService.characterSelected;
            _this.game = param['game'];
            _this.otherName = param['other'];
            _this.titleParam = { character: _this.otherName };
            _this.subtitleParam = { owner: _this.ownerName, character: _this.otherName };
            if (_this.game && _this.game != 'null') {
                _this.buttonGame = new __WEBPACK_IMPORTED_MODULE_0__generic_button_button__["a" /* Button */]('' + _this.game, 'book', null, ['/' + __WEBPACK_IMPORTED_MODULE_7__app_component__["b" /* AppSettings */].API_GAME + '/' + _this.game], null);
            }
            _this.buttonCancel = new __WEBPACK_IMPORTED_MODULE_0__generic_button_button__["a" /* Button */]('BUTTON.CANCEL', 'remove', null, ['/' + __WEBPACK_IMPORTED_MODULE_7__app_component__["b" /* AppSettings */].API_GAME + '/' + _this.game + '/' + __WEBPACK_IMPORTED_MODULE_7__app_component__["b" /* AppSettings */].API_CHARACTER + '/' + _this.ownerName + '/' + __WEBPACK_IMPORTED_MODULE_7__app_component__["b" /* AppSettings */].API_RELATIONSHIP + '/' + _this.otherName], null);
            _this.buttonCharacter = new __WEBPACK_IMPORTED_MODULE_0__generic_button_button__["a" /* Button */](_this.ownerName, 'user', null, ['/' + __WEBPACK_IMPORTED_MODULE_7__app_component__["b" /* AppSettings */].API_GAME + '/' + _this.game + '/' + __WEBPACK_IMPORTED_MODULE_7__app_component__["b" /* AppSettings */].API_CHARACTER + '/' + _this.ownerName], null);
            _this.relationService.getRelationList(_this.ownerName, _this.otherName).subscribe(function (relIds) {
                if (relIds[0]) {
                    _this.relationService.getRelation(_this.ownerName, _this.otherName, relIds[0]).subscribe(function (relation) {
                        if (relation) {
                            _this.relation.working = relation.working;
                            _this.relation.confidential = relation.confidential;
                            _this.relation.loyalty = relation.loyalty;
                            _this.relation.trust = relation.trust;
                            _this.relation.respect = relation.respect;
                            _this.relation.funny = relation.funny;
                            _this.relation.affection = relation.affection;
                        }
                    });
                }
            });
        });
    };
    return RelationshipUpdateComponent;
}());
RelationshipUpdateComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__angular_core__["Component"])({
        selector: 'app-relationship-update',
        template: __webpack_require__(612),
        styles: [__webpack_require__(348), __webpack_require__(76)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__services_character_selected_service__["a" /* CharacterSelectedService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_character_selected_service__["a" /* CharacterSelectedService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_5__services_relation_service__["a" /* RelationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__services_relation_service__["a" /* RelationService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_6__angular_common__["DatePipe"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__angular_common__["DatePipe"]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_8__ngx_translate_core__["c" /* TranslateService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_8__ngx_translate_core__["c" /* TranslateService */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_9_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_9_angular2_flash_messages__["FlashMessagesService"]) === "function" && _g || Object])
], RelationshipUpdateComponent);

var _a, _b, _c, _d, _e, _f, _g;
//# sourceMappingURL=/home/acebrian/workspace2/relacfrontgithub/relacFront/src/relationship-update.component.js.map

/***/ }),

/***/ 497:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__generic_button_button__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_character_selected_service__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_relation_service__ = __webpack_require__(145);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ngx_translate_core__ = __webpack_require__(30);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RelationshipComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var RelationshipComponent = (function () {
    function RelationshipComponent(characterSelectedService, relationService, route, datePipe, translateService) {
        this.characterSelectedService = characterSelectedService;
        this.relationService = relationService;
        this.route = route;
        this.datePipe = datePipe;
        this.translateService = translateService;
        this.loaded = false;
        this.buttonHome = new __WEBPACK_IMPORTED_MODULE_0__generic_button_button__["a" /* Button */]('BUTTON.HOME', 'home', null, ['/'], null);
        this.buttonNew = new __WEBPACK_IMPORTED_MODULE_0__generic_button_button__["a" /* Button */]('BUTTON.NEW', 'plus', null, ['new'], null, true);
        this.buttonNewNotOwner = new __WEBPACK_IMPORTED_MODULE_0__generic_button_button__["a" /* Button */]('BUTTON.NEW', 'plus', null, ['new'], null, false);
        // lineChart
        this.lineChartData = [
            { data: [], name: 'working', },
            { data: [], name: 'confidential' },
            { data: [], name: 'loyalty' },
            { data: [], name: 'trust' },
            { data: [], name: 'respect' },
            { data: [], name: 'funny' },
            { data: [], name: 'affection' }
        ];
        this.lineChartLabels = [];
        this.lineChartsReady = false;
        this.nowLoaded = 0;
        this.toLoad = 0;
    }
    RelationshipComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.lineChartData.forEach(function (line) {
            _this.translateService.get('RELATIONS.' + line.name + '.NAME').subscribe(function (m) { return line.label = m.charAt(0).toUpperCase() + m.substr(1).toLowerCase(); });
        });
        this.route.params.subscribe(function (param) {
            _this.characterSelectedService.characterSelected = param['characterName'];
            _this.game = param['game'];
            _this.ownerName = _this.characterSelectedService.characterSelected;
            _this.buttonCharacter = new __WEBPACK_IMPORTED_MODULE_0__generic_button_button__["a" /* Button */](_this.ownerName, 'user', null, ['/' + __WEBPACK_IMPORTED_MODULE_6__app_component__["b" /* AppSettings */].API_GAME + '/' + _this.game + '/character/' + _this.ownerName], null);
            if (_this.game && _this.game != 'null') {
                _this.buttonGame = new __WEBPACK_IMPORTED_MODULE_0__generic_button_button__["a" /* Button */]('' + _this.game, 'book', null, ['/' + __WEBPACK_IMPORTED_MODULE_6__app_component__["b" /* AppSettings */].API_GAME + '/' + _this.game], null);
            }
            _this.otherName = param['other'];
            _this.translateService.get('HEADER.RELATIONSHIP.TITLE', { character: _this.otherName }).subscribe(function (m) { return _this.titleMessage = m; });
            _this.translateService.get('HEADER.RELATIONSHIP.SUBTITLE', { owner: _this.ownerName, character: _this.otherName }).subscribe(function (m) { return _this.subtitleMessage = m; });
            _this.nowLoaded = 0;
            _this.relationService.getRelationList(_this.ownerName, _this.otherName).subscribe(function (relIds) {
                _this.relations = [];
                _this.toLoad = relIds.length;
                relIds.forEach(function (item, index) {
                    _this.relationService.getRelation(_this.ownerName, _this.otherName, item).subscribe(function (relation) {
                        if (relation) {
                            _this.relations[index] = relation;
                            _this.lineChartLabels[relIds.length - index - 1] = _this.datePipe.transform(relation.date.toString(), 'dd-MM-yyyy HH:mm:ss');
                            _this.lineChartData.filter(function (f) { return 'working' === f.name; })[0].data[relIds.length - index - 1] = relation.working;
                            _this.lineChartData.filter(function (f) { return 'loyalty' === f.name; })[0].data[relIds.length - index - 1] = relation.loyalty;
                            _this.lineChartData.filter(function (f) { return 'trust' === f.name; })[0].data[relIds.length - index - 1] = relation.trust;
                            _this.lineChartData.filter(function (f) { return 'respect' === f.name; })[0].data[relIds.length - index - 1] = relation.respect;
                            _this.lineChartData.filter(function (f) { return 'funny' === f.name; })[0].data[relIds.length - index - 1] = relation.funny;
                            _this.lineChartData.filter(function (f) { return 'affection' === f.name; })[0].data[relIds.length - index - 1] = relation.affection;
                            _this.lineChartData.filter(function (f) { return 'confidential' === f.name; })[0].data[relIds.length - index - 1] = relation.confidential;
                        }
                    }, null, function () { return _this.nowLoaded++; });
                });
                _this.loaded = true;
            });
        });
    };
    return RelationshipComponent;
}());
RelationshipComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Component"])({
        selector: 'app-relationship',
        template: __webpack_require__(613),
        styles: [__webpack_require__(348)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__services_character_selected_service__["a" /* CharacterSelectedService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_character_selected_service__["a" /* CharacterSelectedService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__services_relation_service__["a" /* RelationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_relation_service__["a" /* RelationService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_5__angular_common__["DatePipe"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__angular_common__["DatePipe"]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_7__ngx_translate_core__["c" /* TranslateService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__ngx_translate_core__["c" /* TranslateService */]) === "function" && _e || Object])
], RelationshipComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=/home/acebrian/workspace2/relacfrontgithub/relacFront/src/relationship.component.js.map

/***/ }),

/***/ 498:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__data_relation__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RelationshipResumeUpdateComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var RelationshipResumeUpdateComponent = (function () {
    function RelationshipResumeUpdateComponent() {
    }
    return RelationshipResumeUpdateComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"])(),
    __metadata("design:type", Object)
], RelationshipResumeUpdateComponent.prototype, "name", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__data_relation__["a" /* Relation */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__data_relation__["a" /* Relation */]) === "function" && _a || Object)
], RelationshipResumeUpdateComponent.prototype, "relation", void 0);
RelationshipResumeUpdateComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
        selector: 'app-relationship-resume-update',
        template: __webpack_require__(614),
        styles: [__webpack_require__(349)]
    })
], RelationshipResumeUpdateComponent);

var _a;
//# sourceMappingURL=/home/acebrian/workspace2/relacfrontgithub/relacFront/src/relationshipresume-update.component.js.map

/***/ }),

/***/ 499:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__data_relation__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RelationshipResumeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var RelationshipResumeComponent = (function () {
    function RelationshipResumeComponent() {
        this.relation = new __WEBPACK_IMPORTED_MODULE_0__data_relation__["a" /* Relation */]();
    }
    return RelationshipResumeComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"])(),
    __metadata("design:type", Object)
], RelationshipResumeComponent.prototype, "name", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__data_relation__["a" /* Relation */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__data_relation__["a" /* Relation */]) === "function" && _a || Object)
], RelationshipResumeComponent.prototype, "relation", void 0);
RelationshipResumeComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
        selector: 'app-relationship-resume',
        template: __webpack_require__(615),
        styles: [__webpack_require__(349)]
    })
], RelationshipResumeComponent);

var _a;
//# sourceMappingURL=/home/acebrian/workspace2/relacfrontgithub/relacFront/src/relationshipresume.component.js.map

/***/ }),

/***/ 500:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_switchMap__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_switchMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_switchMap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_character_selected_service__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_character_service__ = __webpack_require__(62);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WithoutgameComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var WithoutgameComponent = (function () {
    function WithoutgameComponent(characterSelectedService, characterService, route, router, location) {
        this.characterSelectedService = characterSelectedService;
        this.characterService = characterService;
        this.route = route;
        this.router = router;
        this.location = location;
    }
    WithoutgameComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (param) {
            _this.characterSelectedService.characterSelected = param['characterName'];
            _this.getCharacter();
        });
    };
    WithoutgameComponent.prototype.getCharacter = function () {
        var _this = this;
        this.characterService.getCharacter(this.characterSelectedService.characterSelected)
            .subscribe(function (character) {
            _this.router.navigateByUrl('/game/' + character.game + '/character/' + character.name);
        });
    };
    return WithoutgameComponent;
}());
WithoutgameComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
        selector: 'app-withoutgame',
        template: __webpack_require__(616),
        styles: [__webpack_require__(585)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__services_character_selected_service__["a" /* CharacterSelectedService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_character_selected_service__["a" /* CharacterSelectedService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_5__services_character_service__["a" /* CharacterService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__services_character_service__["a" /* CharacterService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_3__angular_common__["Location"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_common__["Location"]) === "function" && _e || Object])
], WithoutgameComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=/home/acebrian/workspace2/relacfrontgithub/relacFront/src/withoutgame.component.js.map

/***/ }),

/***/ 501:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__button__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ButtonComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ButtonComponent = (function () {
    function ButtonComponent() {
    }
    return ButtonComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__button__["a" /* Button */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__button__["a" /* Button */]) === "function" && _a || Object)
], ButtonComponent.prototype, "button", void 0);
ButtonComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
        selector: 'app-button',
        template: __webpack_require__(617),
        styles: [__webpack_require__(76)]
    })
], ButtonComponent);

var _a;
//# sourceMappingURL=/home/acebrian/workspace2/relacfrontgithub/relacFront/src/button.component.js.map

/***/ }),

/***/ 502:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LineChartComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LineChartComponent = (function () {
    function LineChartComponent() {
        this.lineChartOptions = {
            responsive: true,
            tooltips: { position: 'nearest' },
            legend: {
                usePointStyle: false,
                display: false,
                labels: {
                    fontColor: 'rgb(255, 99, 132)'
                },
                reverse: true
            },
            reverse: true
        };
        this.lineChartColors = [
            {
                fill: false,
                backgroundColor: 'rgba(128,128,128,0)',
                borderColor: 'rgba(	128,128,128,1)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
            },
            {
                fill: false,
                backgroundColor: 'rgba(0,0,255,0)',
                borderColor: 'rgba(0,0,255,1)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
            },
            {
                fill: false,
                backgroundColor: 'rgba(	128,0,0,0)',
                borderColor: 'rgba(	128,0,0,1)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
            },
            {
                fill: false,
                backgroundColor: 'rgba(	0,128,0,0)',
                borderColor: 'rgba(	0,128,0,1)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
            },
            {
                fill: false,
                backgroundColor: 'rgba(	128,0,128,0)',
                borderColor: 'rgba(	128,0,128,1)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
            },
            {
                fill: false,
                backgroundColor: 'rgba(	218,165,32,0)',
                borderColor: 'rgba(	218,165,32,1)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
            },
            {
                fill: false,
                backgroundColor: 'rgba(	255,0,0,0)',
                borderColor: 'rgba(	255,0,0,1)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
            },
        ];
        this.lineChartType = 'line';
    }
    return LineChartComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], LineChartComponent.prototype, "lineChartData", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], LineChartComponent.prototype, "lineChartLabels", void 0);
LineChartComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-chart',
        template: __webpack_require__(618)
    })
], LineChartComponent);

//# sourceMappingURL=/home/acebrian/workspace2/relacfrontgithub/relacFront/src/line-chart.component.js.map

/***/ }),

/***/ 503:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HelpBoxComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HelpBoxComponent = (function () {
    function HelpBoxComponent() {
    }
    return HelpBoxComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], HelpBoxComponent.prototype, "title", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Array)
], HelpBoxComponent.prototype, "paragraphs", void 0);
HelpBoxComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-help-box',
        template: __webpack_require__(619),
        styles: [__webpack_require__(586)]
    })
], HelpBoxComponent);

//# sourceMappingURL=/home/acebrian/workspace2/relacfrontgithub/relacFront/src/helpBox.component.js.map

/***/ }),

/***/ 504:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoadingComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LoadingComponent = (function () {
    function LoadingComponent() {
        this.IMAGE = __webpack_require__(656);
    }
    return LoadingComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Boolean)
], LoadingComponent.prototype, "loaded", void 0);
LoadingComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-loading',
        template: __webpack_require__(620)
    })
], LoadingComponent);

//# sourceMappingURL=/home/acebrian/workspace2/relacfrontgithub/relacFront/src/loading.component.js.map

/***/ }),

/***/ 505:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TitleComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TitleComponent = (function () {
    function TitleComponent() {
    }
    return TitleComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], TitleComponent.prototype, "title", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], TitleComponent.prototype, "subtitle", void 0);
TitleComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-title',
        template: __webpack_require__(621),
        styles: [__webpack_require__(587)]
    })
], TitleComponent);

//# sourceMappingURL=/home/acebrian/workspace2/relacfrontgithub/relacFront/src/title.component.js.map

/***/ }),

/***/ 506:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_switchMap__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_switchMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_switchMap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__character_services_game_service__ = __webpack_require__(212);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IndexPageComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var IndexPageComponent = (function () {
    function IndexPageComponent(route, gameService) {
        this.route = route;
        this.gameService = gameService;
        this.loaded = false;
    }
    IndexPageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.loaded = false;
        this.gameService.getGames().subscribe(function (games) { _this.games = games; _this.loaded = true; }, function (error) { _this.errorMessage = error; _this.loaded = true; });
    };
    IndexPageComponent.prototype.toColor = function (str) {
        var hash = 0;
        for (var i = 0; i < str.length; i++) {
            hash = str.charCodeAt(i) + ((hash << 5) - hash);
        }
        var colour = '#';
        for (var i = 0; i < 3; i++) {
            var value = (hash >> (i * 8)) & 0xFF;
            colour += ('00' + value.toString(16)).substr(-2);
        }
        return colour;
    };
    return IndexPageComponent;
}());
IndexPageComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
        selector: 'app-index-page',
        template: __webpack_require__(622),
        styles: [__webpack_require__(588)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__character_services_game_service__["a" /* GameService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__character_services_game_service__["a" /* GameService */]) === "function" && _b || Object])
], IndexPageComponent);

var _a, _b;
//# sourceMappingURL=/home/acebrian/workspace2/relacfrontgithub/relacFront/src/index-page.component.js.map

/***/ }),

/***/ 507:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__login_service__ = __webpack_require__(330);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login__ = __webpack_require__(508);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__character_services_character_service__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__character_services_character_selected_service__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angular2_flash_messages__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ngx_translate_core__ = __webpack_require__(30);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var LoginComponent = (function () {
    function LoginComponent(router, loginService, characterSelectedService, characterService, flashMessagesService, translateService) {
        var _this = this;
        this.user = "";
        this.password = "";
        this.loginDisabled = false;
        this.welcome = { user: localStorage.getItem("username") };
        this.onSuccess = function (token) {
            if (token) {
                //Store the token in the db
                localStorage.setItem("token", token);
                localStorage.setItem("username", _this.user);
                var message_1;
                _this.translateService.get('MESSAGES.LOGIN.CORRECT', { username: _this.user }).subscribe(function (m) { return message_1 = m; });
                _this.flashMessagesService.show(message_1, { cssClass: 'alert alert-dismissible alert-success', timeout: 5000 });
                _this.welcome = { user: localStorage.getItem("username") };
                _this.reload();
            }
            else {
                _this.logout();
            }
        };
        this.onFailure = function (error) {
            _this.user = "";
            _this.password = "";
            var message;
            _this.translateService.get('MESSAGES.LOGIN.INVALID').subscribe(function (m) { return message = m; });
            _this.flashMessagesService.show(message, { cssClass: 'alert alert-dismissible alert-danger', timeout: 5000 });
        };
        this.characterSelectedService = characterSelectedService,
            this.characterService = characterService;
        this.router = router,
            this.loginService = loginService;
        this.flashMessagesService = flashMessagesService;
        this.translateService = translateService;
    }
    LoginComponent.prototype.login = function () {
        var login = new __WEBPACK_IMPORTED_MODULE_3__login__["a" /* Login */]();
        login.username = this.user;
        login.password = this.password;
        this.loginDisabled = true;
        try {
            this.loginService.login(login).subscribe(this.onSuccess, this.onFailure);
        }
        finally {
            this.loginDisabled = false;
        }
        this.loginDisabled = false;
    };
    LoginComponent.prototype.register = function () {
        this.router.navigateByUrl('user');
    };
    LoginComponent.prototype.isLogged = function () {
        return (localStorage.getItem("token") === null) ? false : true;
    };
    LoginComponent.prototype.getToken = function () {
        return localStorage.getItem("token");
    };
    LoginComponent.prototype.logout = function () {
        localStorage.removeItem("username");
        localStorage.removeItem("token");
        var message;
        this.translateService.get('MESSAGES.LOGIN.LOGOUT').subscribe(function (m) { return message = m; });
        this.flashMessagesService.show(message, { cssClass: 'alert alert-dismissible alert-success', timeout: 5000 });
        this.reload();
        //  location.reload();
    };
    LoginComponent.prototype.reload = function () {
        var _this = this;
        var user = localStorage.getItem("username");
        if (user) {
            this.characterService.getCharacters(user, null).subscribe(function (characters) { return _this.characterSelectedService.ownCharacters = characters; });
        }
        else {
            this.characterSelectedService.ownCharacters = null;
        }
        this.router.navigate(['']);
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
        selector: 'my-login',
        template: __webpack_require__(623),
        styles: [__webpack_require__(589), __webpack_require__(76)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__login_service__["a" /* LoginService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__login_service__["a" /* LoginService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_5__character_services_character_selected_service__["a" /* CharacterSelectedService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__character_services_character_selected_service__["a" /* CharacterSelectedService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__character_services_character_service__["a" /* CharacterService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__character_services_character_service__["a" /* CharacterService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_6_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6_angular2_flash_messages__["FlashMessagesService"]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_7__ngx_translate_core__["c" /* TranslateService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__ngx_translate_core__["c" /* TranslateService */]) === "function" && _f || Object])
], LoginComponent);

var _a, _b, _c, _d, _e, _f;
//# sourceMappingURL=/home/acebrian/workspace2/relacfrontgithub/relacFront/src/login.component.js.map

/***/ }),

/***/ 508:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Login; });
var Login = (function () {
    function Login() {
    }
    return Login;
}());

//# sourceMappingURL=/home/acebrian/workspace2/relacfrontgithub/relacFront/src/login.js.map

/***/ }),

/***/ 509:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__character_services_character_selected_service__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__character_services_character_service__ = __webpack_require__(62);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenuComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MenuComponent = (function () {
    function MenuComponent(characterSelectedService, characterService) {
        this.characterSelectedService = characterSelectedService;
        this.characterService = characterService;
    }
    MenuComponent.prototype.ngOnInit = function () {
        var _this = this;
        var user = localStorage.getItem("username");
        if (user) {
            this.characterService.getCharacters(user, null).subscribe(function (characters) { return _this.characterSelectedService.ownCharacters = characters; }, function (error) { return _this.errorMessage = error; });
        }
    };
    MenuComponent.prototype.getSelectedCharacter = function () {
        return this.characterSelectedService.characterSelected;
    };
    return MenuComponent;
}());
MenuComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-menu',
        template: __webpack_require__(624),
        styles: [__webpack_require__(590)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__character_services_character_selected_service__["a" /* CharacterSelectedService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__character_services_character_selected_service__["a" /* CharacterSelectedService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__character_services_character_service__["a" /* CharacterService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__character_services_character_service__["a" /* CharacterService */]) === "function" && _b || Object])
], MenuComponent);

var _a, _b;
//# sourceMappingURL=/home/acebrian/workspace2/relacfrontgithub/relacFront/src/menu.component.js.map

/***/ }),

/***/ 510:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(17);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CanActivateViaOAuthGuard; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CanActivateViaOAuthGuard = (function () {
    function CanActivateViaOAuthGuard(router) {
        this.router = router;
    }
    CanActivateViaOAuthGuard.prototype.canActivate = function () {
        if (localStorage.getItem("token") === null) {
            this.router.navigateByUrl('/login');
        }
        return (localStorage.getItem("token") === null) ? false : true;
    };
    return CanActivateViaOAuthGuard;
}());
CanActivateViaOAuthGuard = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object])
], CanActivateViaOAuthGuard);

var _a;
//# sourceMappingURL=/home/acebrian/workspace2/relacfrontgithub/relacFront/src/oAuth.canActivateGuard.js.map

/***/ }),

/***/ 511:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__generic_button_button__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_switchMap__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_switchMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_switchMap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__user__ = __webpack_require__(512);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__user_service__ = __webpack_require__(331);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ngx_translate_core__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angular2_flash_messages__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_angular2_flash_messages__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var UserComponent = (function () {
    function UserComponent(router, userService, translateService, flashMessagesService) {
        var _this = this;
        this.router = router;
        this.userService = userService;
        this.translateService = translateService;
        this.flashMessagesService = flashMessagesService;
        this.validated = false;
        this.minLength = { length: '5' };
        this.buttonHome = new __WEBPACK_IMPORTED_MODULE_0__generic_button_button__["a" /* Button */]('BUTTON.HOME', 'home', null, ['/'], null);
        this.buttonCancel = new __WEBPACK_IMPORTED_MODULE_0__generic_button_button__["a" /* Button */]('BUTTON.CANCEL', 'remove', null, ['/'], null);
        this.buttonSave = new __WEBPACK_IMPORTED_MODULE_0__generic_button_button__["a" /* Button */]('BUTTON.SAVE', 'save', null, ['/'], this.save);
        this.onSuccess = function (response) {
            var message;
            if (response) {
                _this.translateService.get('MESSAGES.SAVE.CORRECT').subscribe(function (m) { return message = m; });
                _this.flashMessagesService.show(message, { cssClass: 'alert alert-dismissible alert-success', timeout: 10000 });
                _this.router.navigate(['']);
            }
        };
        this.onFailure = function (error) {
            var message;
            try {
                alert(error);
                _this.translateService.get('MESSAGES.' + error.status).subscribe(function (m) { return message = m; });
            }
            catch (errorNew) {
                _this.translateService.get('MESSAGES.SAVE.INCORRECT').subscribe(function (m) { return message = m; });
            }
            _this.flashMessagesService.show(message, { cssClass: 'alert alert-dismissible alert-danger', timeout: 10000 });
        };
    }
    UserComponent.prototype.save = function () {
        if (this.username && this.password && this.password.length > 4) {
            this.user = new __WEBPACK_IMPORTED_MODULE_4__user__["a" /* User */]();
            this.user.username = this.username;
            this.user.password = this.password;
            this.userService.createUser(this.user)
                .subscribe(this.onSuccess, this.onFailure);
        }
        this.validated = true;
    };
    return UserComponent;
}());
UserComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Component"])({
        selector: 'app-user',
        template: __webpack_require__(625),
        styles: [__webpack_require__(591), __webpack_require__(76)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_5__user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__user_service__["a" /* UserService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_6__ngx_translate_core__["c" /* TranslateService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__ngx_translate_core__["c" /* TranslateService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_7_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7_angular2_flash_messages__["FlashMessagesService"]) === "function" && _d || Object])
], UserComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=/home/acebrian/workspace2/relacfrontgithub/relacFront/src/user.component.js.map

/***/ }),

/***/ 512:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return User; });
var User = (function () {
    function User() {
    }
    return User;
}());

//# sourceMappingURL=/home/acebrian/workspace2/relacfrontgithub/relacFront/src/user.js.map

/***/ }),

/***/ 513:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=/home/acebrian/workspace2/relacfrontgithub/relacFront/src/environment.js.map

/***/ }),

/***/ 578:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)();
// imports


// module
exports.push([module.i, ".topcorner{\n   position:absolute;\n   top:0;\n   right:0;\n  }\n\n#grayOutDiv\n{\n    background-color: #333;\n    opacity: 0.7;\n    position: fixed;\n    top: 0px;\n    left: 0px;\n    height: 100%;\n    width: 100%;\n    overflow: hidden;\n    z-index: 9999;\n}\n\n/* make sidebar nav vertical */\n@media (min-width: 768px){\n  .affix-content .container {\n    width: 700px;\n  }\n\n  html,body{\n    background-color: #f8f8f8;\n    height: 100%;\n    overflow: hidden;\n  }\n    .affix-content .container .page-header{\n    margin-top: 0;\n  }\n  .sidebar-nav{\n        position:fixed;\n        width:100%;\n  }\n  .affix-sidebar{\n    padding-right:0;\n    font-size:small;\n    padding-left: 0;\n  }\n  .affix-row, .affix-container, .affix-content{\n    height: 100%;\n    margin-left: 0;\n    margin-right: 0;\n  }\n  .affix-content{\n    background-color:white;\n  }\n  .sidebar-nav .navbar .navbar-collapse {\n    padding: 0;\n    max-height: none;\n  }\n  .sidebar-nav .navbar{\n    border-radius:0;\n    margin-bottom:0;\n    border:0;\n  }\n  .sidebar-nav .navbar ul {\n    float: none;\n    display: block;\n  }\n  .sidebar-nav .navbar li {\n    float: none;\n    display: block;\n  }\n  .sidebar-nav .navbar li a {\n    padding-top: 12px;\n    padding-bottom: 12px;\n  }\n}\n\n@media (min-width: 769px){\n  .affix-content .container {\n    width: 600px;\n  }\n    .affix-content .container .page-header{\n    margin-top: 0;\n  }\n}\n\n@media (min-width: 992px){\n  .affix-content .container {\n  width: 900px;\n  }\n    .affix-content .container .page-header{\n    margin-top: 0;\n  }\n}\n\n@media (min-width: 1220px){\n  .affix-row{\n    overflow: hidden;\n  }\n\n  .affix-content{\n    overflow: auto;\n  }\n\n  .affix-content .container {\n    width: 1000px;\n  }\n\n  .affix-content .container .page-header{\n    margin-top: 0;\n  }\n  .affix-content{\n    padding-right: 30px;\n    padding-left: 30px;\n  }\n  .affix-title{\n    border-bottom: 1px solid #ecf0f1;\n    padding-bottom:10px;\n  }\n  .navbar-nav {\n    margin: 0;\n  }\n  .navbar-collapse{\n    padding: 0;\n  }\n  .sidebar-nav .navbar li a:hover {\n    background-color: #428bca;\n    color: white;\n  }\n  .sidebar-nav .navbar li a > .caret {\n    margin-top: 8px;\n  }\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 579:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)();
// imports


// module
exports.push([module.i, ".character-title{\n  padding: 15px;\n  border-radius: 25px;\n  box-shadow: 5px 5px 5px #888888;\n}\n\n.character-padded{\n  padding:20px;\n}\n\n.character-link {\n\tfont-size: x-large;\n    color: black;\n    text-shadow: -1px 0 white, 0 1px white, 1px 0 white, 0 -1px white;\n    text-decoration: none;\n}\n\n.character-title:hover > .character-link {}\n\n.character-title:hover{\n  box-shadow: -5px -5px 5px #888888;\n    font-size: x-large;\n    color: white;\n    text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;\n      text-decoration: none;\n\n}\n\n\n.main-box {\n  margin-bottom: 90%;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 580:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)();
// imports


// module
exports.push([module.i, ".nameBox{\n  width:100%;\n}\n.superBox{\n  width:100%;\n  margin-bottom: 90%;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 581:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 582:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)();
// imports


// module
exports.push([module.i, ".nameBox{\n  width:100%;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 583:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)();
// imports


// module
exports.push([module.i, ".progress-bar {\n  \t-webkit-transition: all .25s ease-in-out;\n  \ttransition: all .25s ease-in-out;\n}\n\n.length-10 {\n\twidth: 10%;\n}\n\n.length-20 {\n\twidth: 20%;\n}\n\n.length-30 {\n\twidth: 30%;\n}\n\n.length-40 {\n\twidth: 40%;\n}\n\n.length-50 {\n\twidth: 50%;\n}\n\n.length-60 {\n\twidth: 60%;\n}\n\n.length-70 {\n\twidth: 70%;\n}\n\n.length-80 {\n\twidth: 80%;\n}\n\n.length-90 {\n\twidth: 90%;\n}\n\n.length-100 {\n    width: 100%;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 584:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)();
// imports


// module
exports.push([module.i, ".helpBox{\n  margin-top: 15px;\n  margin-bottom: 25px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 585:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 586:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)();
// imports


// module
exports.push([module.i, ".helpBox{\n  margin-top: 15px;\n  margin-bottom: 25px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 587:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 588:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)();
// imports


// module
exports.push([module.i, ".character-title{\n  padding: 15px;\n  border-radius: 25px;\n  box-shadow: 5px 5px 5px #888888;\n}\n\n.character-padded{\n  padding:20px;\n}\n\n.character-link {\n\tfont-size: x-large;\n    color: black;\n    text-shadow: -1px 0 white, 0 1px white, 1px 0 white, 0 -1px white;\n    text-decoration: none;\n}\n\n.character-title:hover > .character-link {}\n\n.character-title:hover{\n  box-shadow: -5px -5px 5px #888888;\n    font-size: x-large;\n    color: white;\n    text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;\n      text-decoration: none;\n\n}\n\n\n.main-box {\n  margin-bottom: 90%;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 589:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)();
// imports


// module
exports.push([module.i, ".top-margin-2 {\n  margin-top: 2%;\n}\n\n.top-margin-5px{\n  margin-top: 22px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 590:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)();
// imports


// module
exports.push([module.i, "/* make sidebar nav vertical */\n@media ( min-width : 768px) {\n\t.sidebar-nav {\n\t\tposition: fixed;\n\t\twidth: 100%;\n\t}\n\t.sidebar-nav .navbar .navbar-collapse {\n\t\tpadding: 0;\n\t\tmax-height: none;\n\t}\n\t.sidebar-nav .navbar {\n\t\tbackground-color: black;\n\t\tborder-radius: 0;\n\t\tmargin-bottom: 0;\n\t\tborder: 0;\n\t\theight: 100%;\n\t}\n\t.sidebar-nav .navbar ul {\n\t\tfloat: none;\n\t\tdisplay: block;\n\t}\n\t.sidebar-nav .navbar li {\n\t\tfloat: none;\n\t\tdisplay: block;\n\t}\n\t.sidebar-nav .navbar li a {\n\t\tpadding-top: 12px;\n\t\tpadding-bottom: 12px;\n\t}\n}\n\n@media ( min-width : 1220px) {\n\t.navbar-nav {\n\t\tmargin: 0;\n\t}\n\t.navbar-collapse {\n\t\tpadding: 0;\n\t}\n\t.sidebar-nav .navbar li a>.caret {\n\t\tmargin-top: 8px;\n\t}\n}\n\n.brillo a:hover {\n\tcolor: white;\n\ttext-shadow: 0 0 10px #fff, 0 0 20px #fff, 0 0 30px #fff;\n}\n\n.brillo .selected {\n\tcolor: #e0e0e0;\n\ttext-shadow: 0 0 10px #666, 0 0 20px #666, 0 0 30px #666;\n}\n\n.menu-element {\n\tfont-size: x-large;\n}\n\n.sidebar-nav {\n\theight: 100%;\n}\n\n.black-background  {\n\tbackground-color: black;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 591:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)();
// imports


// module
exports.push([module.i, ".nameBox{\n  width:100%;\n}\n\n.generalBox{\n  margin-bottom: 35%;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 601:
/***/ (function(module, exports) {

module.exports = "\n<div class=\"row affix-row\">\n\t<div class=\"col-sm-3 col-md-2 affix-sidebar\">\n\t\t<app-menu></app-menu>\n\t</div>\n\t<div class=\"col-sm-9 col-md-10 affix-content\">\n    <div class=\"row affix-row\">\n      <div class=\"col-md-5 col-sm-5 col-lg-5 col-xs-5\">\n        <h1>{{ 'HOME.TITLE' | translate}}</h1>\n      </div>\n      <div class=\"col-md-7 col-sm-7 col-lg-7 col-xs-7\">\n          <my-login></my-login>\n      </div>\n    </div>\n\t\t<router-outlet></router-outlet>\n\t</div>\n</div>\n<div class=\"topcorner\">\n  <flash-messages></flash-messages>\n</div>\n"

/***/ }),

/***/ 602:
/***/ (function(module, exports) {

module.exports = "<app-title [title]=\"getTittle()\" [subtitle]=\"getSubtittle()\"></app-title>\n\n\n\n<div class=\"col-md-12 col-sm-12 col-lg-12 col-xs-12\">\n\t<div class=\"pull-right\">\n    <app-button *ngIf=\"game!=null\" [button]=\"buttonHome\"></app-button>\n\t\t<app-button *ngIf=\"isLogged()\" [button]=\"buttonNew\"></app-button>\n\t\t<app-button *ngIf=\"!isLogged()\" [button]=\"buttonNewNotLogged\"></app-button>\n\t</div>\n</div>\n\n<div class=\"text-center\" style=\"widht:100%; display: block;margin: auto;\">\n  <div *ngFor=\"let character of characters\" class=\"col-md-3 col-xs-6 character-padded\">\n    <a [style.background]=\"toColor(character)\" class=\"col-md-12 col-sm-12 col-lg-12 col-xs-12 character-title character-link\" href=\"#\" [routerLink]=\"['character', character]\"  routerLinkActive=\"active\">{{character}}</a>\n  </div>\n</div>\n<div class=\"col-md-12 col-sm-12 col-lg-12 col-xs-12\" style=\"height:10%;\"></div>\n\n\n<app-help-box [title]=\"'LIST.TITLE'\"\n  [paragraphs]=\"['LIST.MESSAGE']\"></app-help-box>\n"

/***/ }),

/***/ 603:
/***/ (function(module, exports) {

module.exports = "<app-title [title]=\"'HEADER.NEWCHARACTER.TITLE' | translate\" [subtitle]=\"'HEADER.NEWCHARACTER.SUBTITLE' | translate\"></app-title>\n\n<div class=\"col-md-12 col-sm-12 col-lg-12 col-xs-12\">\n\t<div class=\"pull-right\">\n\t\t<app-button [button]=\"buttonHome\"></app-button>\n  \t<app-button [button]=\"buttonCancel\"></app-button>\n  <a\n  \tclass='btn btn-primary black-background white'\n  \t[ngClass]=\"buttonSave.getStyle()\" (click)=\"save()\" > {{buttonSave.message | translate}}</a>\n\t</div>\n</div>\n\n  <div class=\"col-md-12 col-sm-12 col-lg-12 col-xs-12\">\n    <div class=\"col-md-3 col-sm-3 col-lg-3 col-xs-3\">\n    </div>\n    <div class=\"col-md-6 col-sm-6 col-lg-6 col-xs-6\">\n      <h2 class=\"text-center\">{{'NEWCHARACTER.NEW' | translate}}</h2>\n      <h2><input class=\"nameBox\"  [(ngModel)]=\"character.name\" type=\"text\" autofocus=\"on\" required=\"on\" (keyup.enter)=\"save()\"></h2>\n      <div *ngIf=\"!character.name && validated\"  class=\"alert alert-dismissible alert-danger\">\n        {{'FIELD.MANDATORY' | translate}}\n      </div>\n    </div>\n    <div class=\"col-md-3 col-sm-3 col-lg-3 col-xs-3\">\n    </div>\n  </div>\n  <div class=\"col-md-12 col-sm-12 col-lg-12 col-xs-12\">\n    <div class=\"col-md-3 col-sm-3 col-lg-3 col-xs-3\">\n    </div>\n    <div class=\"col-md-6 col-sm-6 col-lg-6 col-xs-6\">\n        <h2 class=\"text-center\">{{'GENERIC.GAME' | translate}}</h2>\n        <h2><input auto-complete [source]=\"suggestedGames\" class=\"nameBox\"  [(ngModel)]=\"character.game\" type=\"text\" required=\"pff\" [disabled]=\"gameGiven\" (keyup.enter)=\"save()\"></h2>\n        <div *ngIf=\"character.game=='null' && validated\"  class=\"alert alert-dismissible alert-danger\">\n          {{'FIELD.INVALID' | translate}}\n        </div>\n    </div>\n    <div class=\"col-md-3 col-sm-3 col-lg-3 col-xs-3\">\n    </div>\n  </div>\n\n<app-help-box [title]=\"'NEWCHARACTER.TITLE'\"\n  [paragraphs]=\"['NEWCHARACTER.MESSAGE']\"></app-help-box>\n"

/***/ }),

/***/ 604:
/***/ (function(module, exports) {

module.exports = "<app-loading [loaded]=loaded></app-loading>\n<app-title [title]=\"character?.name\" [subtitle]=\"'HEADER.CHARACTER.SUBTITLE' | translate:subtitleParam\"></app-title>\n\n<div class=\"col-md-12 col-sm-12 col-lg-12 col-xs-12\">\n\t<div class=\"pull-right\">\n\t\t<app-button [button]=\"buttonHome\"></app-button>\n\t\t<app-button *ngIf=\"game && game!='null'\" [button]=\"buttonGame\"></app-button>\n\t\t<app-button *ngIf=\"owner && isOwner\" [button]=\"buttonNew\"></app-button>\n\t\t<app-button *ngIf=\"owner && !isOwner\" [button]=\"buttonNewNotOwner\"></app-button>\n\t</div>\n</div>\n\n<div\n\tclass=\"col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xs-offset-0 col-sm-offset-0 toppad\"\n\t*ngFor=\"let relationship of character?.relationships\">\n\t<app-relationship-resume [relation]=\"relationship?.relation[0]\"\n\t\t[name]=\"relationship?.characterName\"></app-relationship-resume>\n</div>\n\n<app-help-box *ngIf=\"loaded\"  [title]=\"'CHARACTER.TITLE'\"\n  [paragraphs]=\"['CHARACTER.MESSAGE1'\n    ,'CHARACTER.MESSAGE2']\"></app-help-box>\n<app-relation-help></app-relation-help>\n"

/***/ }),

/***/ 605:
/***/ (function(module, exports) {

module.exports = "<app-title [title]=\"titleMessage\" [subtitle]=\"'HEADER.NEWRELATION.SUBTITLE' | translate:subtitleMessage\"></app-title>\n<div class=\"col-md-12 col-sm-12 col-lg-12 col-xs-12\">\n\t<div class=\"pull-right\">\n\t\t<app-button [button]=\"buttonHome\"></app-button>\n\t\t<app-button *ngIf=\"buttonGame\" [button]=\"buttonGame\"></app-button>\n  \t<app-button [button]=\"buttonCancel\"></app-button>\n  <a *ngIf=\"buttonSave\"\n  \tclass='btn btn-primary black-background white'\n  \t[ngClass]=\"buttonSave.getStyle()\" (click)=\"save()\" > {{buttonSave?.message | translate}}</a>\n\t</div>\n</div>\n\n<div class=\"col-md-3 col-sm-3 col-lg-3 col-xs-3\">\n</div>\n<div class=\"col-md-6 col-sm-6 col-lg-6 col-xs-6\">\n  <h2 class=\"text-center\">{{'NEWRELATION.NEW' | translate}}</h2>\n  <h2><input class=\"nameBox\"  [(ngModel)]=\"newName\" type=\"text\" autofocus=\"on\" required=\"on\" (keyup.enter)=\"save()\"></h2>\n  <div *ngIf=\"!newName && validated\"  class=\"alert alert-dismissible alert-danger\">\n    {{'FIELD.MANDATORY' | translate}}\n  </div>\n</div>\n<div class=\"col-md-3 col-sm-3 col-lg-3 col-xs-3\">\n</div>\n\n<app-help-box [title]=\"'NEWRELATION.TITLE'\"\n  [paragraphs]=\"['NEWRELATION.MESSAGE']\"></app-help-box>\n"

/***/ }),

/***/ 606:
/***/ (function(module, exports) {

module.exports = "<div [@enterAnimation]=\"show\">\n\t<span class=\"label background-relation-{{name}} uppercase\">{{'RELATIONS.'+name+'.NAME' | translate}}</span>\n\t<div class=\"progress progress-striped\">\n\t\t<div\n\t\t\tclass=\"progress-bar progress-bar-info length-{{value}}0  background-relation-{{name}}\"></div>\n\t</div>\n</div>\n"

/***/ }),

/***/ 607:
/***/ (function(module, exports) {

module.exports = "\n<div class=\"col-xs-6 col-sm-3 col-md-4 col-lg-3 col-xl-2 col-center\" style=\"margin:-5px\">\n\t<div class=\"panel panel-relation-{{name}}\">\n\t\t<div class=\"panel-heading  background-relation-{{name}}\">\n\t\t\t<h3 class=\"panel-title uppercase\">{{'RELATIONS.'+name+'.NAME' | translate}}</h3>\n\t\t</div>\n\t\t<div class=\"panel-body text-center without-align\"><h1><input type=\"number\" required [(ngModel)]=\"value\" (change)=\"notify.emit(value)\" maxlength=\"2\" min=\"0\" max=\"10\"></h1></div>\n\t</div>\n</div>\n"

/***/ }),

/***/ 608:
/***/ (function(module, exports) {

module.exports = "\n<div class=\"col-xs-6 col-sm-3 col-md-4 col-lg-3 col-xl-2 col-center\" style=\"margin:-5px\">\n\t<div class=\"panel panel-relation-{{name}}\">\n\t\t<div class=\"panel-heading  background-relation-{{name}}\">\n\t\t\t<h3 class=\"panel-title uppercase\">{{'RELATIONS.'+name+'.NAME' | translate}}</h3>\n\t\t</div>\n\t\t<div class=\"panel-body text-center without-align\"><h1>{{valueActual}}</h1></div>\n\t</div>\n</div>\n"

/***/ }),

/***/ 609:
/***/ (function(module, exports) {

module.exports = "\n<div class=\"row row-center\">\n\t<app-relation-single-update [value]=\"(relation?.working)\" [name]=\"'working'\" (notify)=\"change($event,'working')\"></app-relation-single-update>\n\t<app-relation-single-update [value]=\"(relation?.confidential)\"\n\t\t[name]=\"'confidential'\" (notify)=\"change($event,'confidential')\"></app-relation-single-update>\n\t<app-relation-single-update [value]=\"(relation?.loyalty)\" [name]=\"'loyalty'\" (notify)=\"change($event,'loyalty')\"></app-relation-single-update>\n\t<app-relation-single-update [value]=\"(relation?.trust)\" [name]=\"'trust'\" (notify)=\"change($event,'trust')\"></app-relation-single-update>\n\t<app-relation-single-update [value]=\"(relation?.respect)\" [name]=\"'respect'\" (notify)=\"change($event,'respect')\"></app-relation-single-update>\n\t<app-relation-single-update [value]=\"(relation?.funny)\" [name]=\"'funny'\" (notify)=\"change($event,'funny')\"></app-relation-single-update>\n\t<app-relation-single-update [value]=\"(relation?.affection)\" [name]=\"'affection'\" (notify)=\"change($event,'affection')\"></app-relation-single-update>\n</div>\n\n<div\n\tclass=\"col-xs-12 col-sm-12 col-md-12 col-sm-12 col-lg-12 col-xs-12 col-lg-12 col-xl-12 col-center\"\n\tstyle=\"padding-left: 10%; padding-right: 10%;\">\n\t<app-relation-bar [value]=\"(relation?.working)\" [name]=\"'working'\"></app-relation-bar>\n\t<app-relation-bar [value]=\"(relation?.confidential)\" [name]=\"'confidential'\"></app-relation-bar>\n\t<app-relation-bar [value]=\"(relation?.loyalty)\" [name]=\"'loyalty'\"></app-relation-bar>\n\t<app-relation-bar [value]=\"(relation?.trust)\" [name]=\"'trust'\"></app-relation-bar>\n\t<app-relation-bar [value]=\"(relation?.respect)\" [name]=\"'respect'\"></app-relation-bar>\n\t<app-relation-bar [value]=\"(relation?.funny)\" [name]=\"'funny'\"></app-relation-bar>\n\t<app-relation-bar [value]=\"(relation?.affection)\" [name]=\"'affection'\"></app-relation-bar>\n</div>\n"

/***/ }),

/***/ 61:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Relation; });
var Relation = (function () {
    function Relation() {
        this.working = 0;
        this.confidential = 0;
        this.loyalty = 0;
        this.trust = 0;
        this.respect = 0;
        this.funny = 0;
        this.affection = 0;
    }
    return Relation;
}());

//# sourceMappingURL=/home/acebrian/workspace2/relacfrontgithub/relacFront/src/relation.js.map

/***/ }),

/***/ 610:
/***/ (function(module, exports) {

module.exports = "<div class=\"row row-center\">\n\t<app-relation-single [value]=\"(relation?.working)\" [name]=\"'working'\"></app-relation-single>\n\t<app-relation-single [value]=\"(relation?.confidential)\"\n\t\t[name]=\"'confidential'\"></app-relation-single>\n\t<app-relation-single [value]=\"(relation?.loyalty)\" [name]=\"'loyalty'\"></app-relation-single>\n\t<app-relation-single [value]=\"(relation?.trust)\" [name]=\"'trust'\"></app-relation-single>\n\t<app-relation-single [value]=\"(relation?.respect)\" [name]=\"'respect'\"></app-relation-single>\n\t<app-relation-single [value]=\"(relation?.funny)\" [name]=\"'funny'\"></app-relation-single>\n\t<app-relation-single [value]=\"(relation?.affection)\" [name]=\"'affection'\"></app-relation-single>\n</div>\n\n<div\n\tclass=\"col-xs-12 col-sm-12 col-md-12 col-sm-12 col-lg-12 col-xs-12 col-lg-12 col-xl-12 col-center\"\n\tstyle=\"padding-left: 10%; padding-right: 10%;\">\n\t<app-relation-bar [value]=\"(relation?.working)\" [name]=\"'working'\"></app-relation-bar>\n\t<app-relation-bar [value]=\"(relation?.confidential)\" [name]=\"'confidential'\"></app-relation-bar>\n\t<app-relation-bar [value]=\"(relation?.loyalty)\" [name]=\"'loyalty'\"></app-relation-bar>\n\t<app-relation-bar [value]=\"(relation?.trust)\" [name]=\"'trust'\"></app-relation-bar>\n\t<app-relation-bar [value]=\"(relation?.respect)\" [name]=\"'respect'\"></app-relation-bar>\n\t<app-relation-bar [value]=\"(relation?.funny)\" [name]=\"'funny'\"></app-relation-bar>\n\t<app-relation-bar [value]=\"(relation?.affection)\" [name]=\"'affection'\"></app-relation-bar>\n</div>\n"

/***/ }),

/***/ 611:
/***/ (function(module, exports) {

module.exports = "<div class=\"col-md-12 col-sm-12 col-lg-12 col-xs-12\">\n  <div class=\"well helpBox\">\n    <p *ngFor=\"let message of messages\">\n      <b class=\"color-{{message[0]}}\">- {{message[1].charAt(0).toUpperCase() + message[1].substr(1).toLowerCase()}}:</b> {{message[2]}}\n    </p>\n  </div>\n</div>\n"

/***/ }),

/***/ 612:
/***/ (function(module, exports) {

module.exports = "  <app-title [title]=\"'HEADER.NEWRELATIONSHIP.TITLE' | translate:titleParam\" [subtitle]=\"'HEADER.NEWRELATIONSHIP.SUBTITLE' | translate:subtitleParam\"></app-title>\n\n<div class=\"col-md-12 col-sm-12 col-lg-12 col-xs-12\">\n\t<div class=\"pull-right\">\n\t\t<app-button [button]=\"buttonHome\"></app-button>\n  \t<app-button *ngIf=\"buttonGame\" [button]=\"buttonGame\"></app-button>\n  \t<app-button [button]=\"buttonCharacter\"></app-button>\n  \t<app-button [button]=\"buttonCancel\"></app-button>\n  <a\n  \tclass='btn btn-primary black-background white'\n  \t[ngClass]=\"buttonSave.getStyle()\" (click)=\"save($event)\" > {{buttonSave.message | translate}}</a>\n\t</div>\n</div>\n<div class=\"col-xs-0 col-sm-0 col-md-3 col-lg-3\"></div>\n<div class=\"col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xs-offset-0 col-sm-offset-0 toppad\">\n\t<app-relationship-resume-update [relation]=\"relation\" [name]=\"\"></app-relationship-resume-update>\n</div>\n<div class=\"col-xs-0 col-sm-0 col-md-3 col-lg-3\"></div>\n\n<app-help-box [title]=\"'NEWRELATIONSHIP.TITLE'\"\n  [paragraphs]=\"['NEWRELATIONSHIP.MESSAGE']\"></app-help-box>\n\n  <app-relation-help></app-relation-help>\n"

/***/ }),

/***/ 613:
/***/ (function(module, exports) {

module.exports = "<app-loading [loaded]=\"loaded && (nowLoaded===0 || nowLoaded===toLoad)\"></app-loading>\n<app-title [title]=\"titleMessage\" [subtitle]=\"subtitleMessage\"></app-title>\n<div class=\"col-md-12 col-sm-12 col-lg-12 col-xs-12\">\n\t<div class=\"pull-right\">\n\t\t<app-button [button]=\"buttonHome\"></app-button>\n\t\t<app-button *ngIf=\"buttonGame\" [button]=\"buttonGame\"></app-button>\n  \t<app-button [button]=\"buttonCharacter\"></app-button>\n\t\t<app-button *ngIf=\"characterSelectedService.characterIsOwn()\" [button]=\"buttonNew\"></app-button>\n\t\t<app-button *ngIf=\"!characterSelectedService.characterIsOwn()\" [button]=\"buttonNewNotOwner\"></app-button>\n\t</div>\n</div>\n\n<div style=\"margin-top:30px;\">\n  <app-chart *ngIf=\"nowLoaded>0 && nowLoaded===toLoad\" [lineChartData]=\"lineChartData\" [lineChartLabels]=\"lineChartLabels\"></app-chart>\n</div>\n\n<div\n\tclass=\"col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xs-offset-0 col-sm-offset-0 toppad\"\n\t*ngFor=\"let relation of relations\">\n\t<app-relationship-resume [relation]=\"relation\" [name]=\"\"></app-relationship-resume>\n</div>\n\n<app-help-box [title]=\"'RELATIONSHIP.TITLE'\"\n  [paragraphs]=\"['RELATIONSHIP.MESSAGE']\"></app-help-box>\n<app-relation-help></app-relation-help>\n"

/***/ }),

/***/ 614:
/***/ (function(module, exports) {

module.exports = "\n\n\n<div class=\"panel panel-primary\">\n\t<div class=\"panel-heading\">\n\t\t<div class=\"row\">\n\t\t\t<div class=\"col-md-8 brillo\">\n\t\t\t\t<h3 *ngIf=\"name\" class=\"panel-title\">\n\t\t\t\t\t<a [routerLink]=\"['relationship', name]\"\n\t\t\t\t\t\trouterLinkActive=\"active\" class=\"menu-element\"><span\n\t\t\t\t\t\tclass=\"fa fa-address-card\"></span> {{name}}</a>\n\n\t\t\t\t</h3>\n\t\t\t</div>\n\t\t\t<div class=\"col-md-4 col-sm-4 col-lg-4 col-xs-4 text-right\">{{relation.date\n\t\t\t\t| date:'medium'}}</div>\n\t\t</div>\n\n\t</div>\n\t<div class=\"panel-body\">\n\t\t<div class=\"row row-centered\">\n\t\t\t<app-relation-update [relation]=\"relation\"></app-relation-update>\n\t\t</div>\n\n\t</div>\n</div>\n"

/***/ }),

/***/ 615:
/***/ (function(module, exports) {

module.exports = "\n\n<div class=\"panel panel-primary\">\n\t<div class=\"panel-heading\">\n\t\t<div class=\"row\">\n\t\t\t<div class=\"col-md-8 col-sm-8 col-lg-8 col-xs-8 brillo\">\n\t\t\t\t<h3 *ngIf=\"name\" class=\"panel-title\">\n\t\t\t\t\t<a [routerLink]=\"['relationship', name]\"\n\t\t\t\t\t\trouterLinkActive=\"active\" class=\"menu-element\"><span\n\t\t\t\t\t\tclass=\"fa fa-address-card\"></span> {{name}}</a>\n\n\t\t\t\t</h3>\n\t\t\t</div>\n\t\t\t<div *ngIf=\"relation && relation.date\" class=\"col-md-4 col-sm-4 col-lg-4 col-xs-4 text-right\">{{relation.date\n\t\t\t\t| date:'medium'}}</div>\n\t\t</div>\n\n\t</div>\n\t<div class=\"panel-body\">\n\t\t<div class=\"row row-centered\">\n\t\t\t<app-relation [relation]=\"relation\"></app-relation>\n\t\t</div>\n\n\t</div>\n</div>\n"

/***/ }),

/***/ 616:
/***/ (function(module, exports) {

module.exports = "\n"

/***/ }),

/***/ 617:
/***/ (function(module, exports) {

module.exports = "<a *ngIf=\"button?.routerLink && button?.access\" href=\"#\" [routerLink]=\"button?.routerLink\"\n\tclass='btn btn-primary black-background white'\n\t[ngClass]=\"button?.getStyle()\"> {{button?.message | translate}}</a>\n<a *ngIf=\"!button?.access\"\n\tclass='btn btn-primary black-background-disable white'\n\t[ngClass]=\"button?.getStyle()\" title=\"You don't have permission to do this\"> {{button?.message | translate}}</a>\n"

/***/ }),

/***/ 618:
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-md-12 col-sm-12 col-lg-12 col-xs-12\">\n    <div style=\"display: block;\">\n    <canvas baseChart width=\"400\" height=\"175\"\n                [datasets]=\"lineChartData\"\n                [labels]=\"lineChartLabels\"\n                [options]=\"lineChartOptions\"\n                [colors]=\"lineChartColors\"\n                [legend]=\"lineChartLegend\"\n                [chartType]=\"lineChartType\"\n                (chartHover)=\"chartHovered($event)\"\n                (chartClick)=\"chartClicked($event)\"></canvas>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ 619:
/***/ (function(module, exports) {

module.exports = "<div class=\"col-md-12 col-sm-12 col-lg-12 col-xs-12\">\n  <div class=\"well helpBox\">\n    <b *ngIf=\"title\">{{'HELP.'+title | translate}}</b>\n    <p>\n    <span *ngFor=\"let paragraph of paragraphs\" >{{'HELP.'+paragraph | translate}}</span>\n    </p>\n  </div>\n</div>\n"

/***/ }),

/***/ 62:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http_src_base_request_options__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__(21);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CharacterService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var CharacterService = (function () {
    function CharacterService(http) {
        this.http = http;
    }
    CharacterService.prototype.getCharacters = function (owner, game) {
        var authToken = localStorage.getItem('token');
        var headers = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["Headers"]({ 'Content-Type': 'application/json' });
        headers.append('X-AUTH-TOKEN', localStorage.getItem("token"));
        var parameters = "";
        if (owner || game) {
            parameters = "?";
            if (owner) {
                parameters = parameters + "owner=" + owner;
                if (game) {
                    parameters = parameters + "&";
                }
            }
            if (game) {
                parameters = parameters + "game=" + game;
            }
        }
        var options = new __WEBPACK_IMPORTED_MODULE_0__angular_http_src_base_request_options__["a" /* RequestOptions */]({ headers: headers });
        return this.http.get(__WEBPACK_IMPORTED_MODULE_6__app_component__["b" /* AppSettings */].API_ENDPOINT + __WEBPACK_IMPORTED_MODULE_6__app_component__["b" /* AppSettings */].API_CHARACTER + parameters, options)
            .map(this.extractNames);
    };
    CharacterService.prototype.create = function (name, character) {
        if (character === void 0) { character = null; }
        var authToken = localStorage.getItem('token');
        var headers = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["Headers"]({ 'Content-Type': 'application/json' });
        headers.append('X-AUTH-TOKEN', localStorage.getItem("token"));
        var options = new __WEBPACK_IMPORTED_MODULE_0__angular_http_src_base_request_options__["a" /* RequestOptions */]({ headers: headers });
        return this.http.post(__WEBPACK_IMPORTED_MODULE_6__app_component__["b" /* AppSettings */].API_ENDPOINT + __WEBPACK_IMPORTED_MODULE_6__app_component__["b" /* AppSettings */].API_CHARACTER + "/" + name, JSON.stringify(character), options)
            .map(function () { return true; });
    };
    CharacterService.prototype.extractNames = function (res) {
        return res.json();
    };
    CharacterService.prototype.handleError = function (error) {
        alert("error characters: ");
        // In a real world app, we might use a remote logging infrastructure
        var errMsg;
        if (error instanceof __WEBPACK_IMPORTED_MODULE_3__angular_http__["Response"]) {
            var body = error.json() || '';
            var err = body.error || JSON.stringify(body);
            errMsg = error.status + " - " + (error.statusText || '') + " " + err;
        }
        else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw(errMsg);
    };
    CharacterService.prototype.getCharacter = function (characterName) {
        var authToken = localStorage.getItem('token');
        var headers = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["Headers"]({ 'Content-Type': 'application/json' });
        headers.append('X-AUTH-TOKEN', localStorage.getItem("token"));
        var options = new __WEBPACK_IMPORTED_MODULE_0__angular_http_src_base_request_options__["a" /* RequestOptions */]({ headers: headers });
        return this.http.get(__WEBPACK_IMPORTED_MODULE_6__app_component__["b" /* AppSettings */].API_ENDPOINT + __WEBPACK_IMPORTED_MODULE_6__app_component__["b" /* AppSettings */].API_CHARACTER + "/" + characterName, options)
            .map(this.extractCharacter);
    };
    CharacterService.prototype.extractCharacter = function (res) {
        return res.json();
    };
    return CharacterService;
}());
CharacterService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__angular_http__["Http"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_http__["Http"]) === "function" && _a || Object])
], CharacterService);

var _a;
//# sourceMappingURL=/home/acebrian/workspace2/relacfrontgithub/relacFront/src/character.service.js.map

/***/ }),

/***/ 620:
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"!loaded\" style=\"height: 100%;\n    width: 100%;\n    left: 0;\n    top: 0;\n    overflow: hidden;\n    position: fixed;\n    background:black\">\n    <div  style=\"position: fixed; top: 50%; left: 50%;text-align: center;\">\n      <img [src]=\"IMAGE\">\n      <h2 style=\"fontColor:white;\">Loading</h2>\n    </div>\n</div>\n"

/***/ }),

/***/ 621:
/***/ (function(module, exports) {

module.exports = "<div class = \"page-header\">\n   <h1>\n      <span>{{title}}</span>\n      <small>{{subtitle}}</small>\n   </h1>\n</div>\n"

/***/ }),

/***/ 622:
/***/ (function(module, exports) {

module.exports = "<app-loading [loaded]=loaded></app-loading>\n<app-title [title]=\"'HEADER.INDEX.TITLE' | translate\" [subtitle]=\"'HEADER.INDEX.SUBTITLE' | translate\"></app-title>\n\n<div *ngIf=\"loaded\" class=\"col-md-12 col-sm-12 col-lg-12 col-xs-12 col-sm-12 col-lg-12 col-xs-12\">\n  <div *ngIf=\"loaded\" class=\"text-center\" style=\"widht:100%; display: block;margin: auto;\">\n    <div *ngFor=\"let game of games\" class=\"col-md-3 col-xs-6 character-padded\">\n      <a [style.background]=\"toColor(game)\" class=\"col-md-12 col-sm-12 col-lg-12 col-xs-12 character-title character-link\" href=\"#\" [routerLink]=\"['game', game]\"  routerLinkActive=\"active\">{{game}}</a>\n    </div>\n  </div>\n</div>\n<div *ngIf=\"loaded\"  class=\"col-md-12 col-sm-12 col-lg-12 col-xs-12\">\n<app-help-box *ngIf=\"loaded\"  [title]=\"'GAME.TITLE'\"\n  [paragraphs]=\"['GAME.MESSAGE']\"></app-help-box>\n</div>\n\n<div *ngIf=\"loaded\"  class=\"col-md-12 col-sm-12 col-lg-12 col-xs-12\" style=\"height:10%;\"></div>\n\n\n<div *ngIf=\"loaded\"  class=\"col-md-12 col-sm-12 col-lg-12 col-xs-12\">\n  <app-list-page></app-list-page>\n</div>\n"

/***/ }),

/***/ 623:
/***/ (function(module, exports) {

module.exports = "\n<div class=\"top-margin-2 pull-right\">\n  <form *ngIf=\"!isLogged()\" class=\"form-inline\">\n    <div class=\"form-group\">\n      <label for=\"user\">{{ 'USER.USERNAME' | translate}}:</label>\n      <input type=\"text\" [(ngModel)]=\"user\" name=\"user\" class=\"form-control\" id=\"user\" disabled=\"{{loginDisabled}}\" (keyup.enter)=\"login()\">\n    </div>\n    <div class=\"form-group\">\n      <label for=\"pwd\">{{ 'USER.PASSWORD' | translate}}:</label>\n      <input type=\"password\" class=\"form-control\" name=\"password\"  [(ngModel)]=\"password\"  id=\"pwd\" disabled=\"{{loginDisabled}}\" (keyup.enter)=\"login()\">\n    </div>\n    <a (click)=\"login()\"  *ngIf=\"!loginDisabled\"\n    \tclass='btn btn-primary black-background white' style=\"top-margin=50px;margin-top: 12px;\" ><i class=\"fa fa-sign-in\" aria-hidden=\"true\"></i> {{ 'BUTTON.LOGIN' | translate}}</a>\n    <a *ngIf=\"!loginDisabled\" (click)=\"register()\"\n    \tclass='btn btn-primary black-background white' style=\"top-margin=50px;margin-top: 12px;\" ><i class=\"fa fa-user-plus\" aria-hidden=\"true\"></i> {{ 'BUTTON.REGISTER' | translate}}</a>\n  </form>\n  <div *ngIf=\"isLogged()\" class=\"top-margin-2 pull-right\">\n    <p class=\"lead\" *ngIf=\"isLogged()\">{{ 'USER.WELCOME' | translate:welcome}}\n      <button *ngIf=\"isLogged()\"  class=\"btn btn-primary black-background white\" style=\"top-margin=50px;margin-top: 12px;\" (click)=\"logout()\" ><i class=\"fa fa-sign-out\" aria-hidden=\"true\"></i> {{ 'BUTTON.LOGOUT' | translate}}</button>\n    </p>\n  </div>\n</div>\n"

/***/ }),

/***/ 624:
/***/ (function(module, exports) {

module.exports = "\n<div class=\"sidebar-nav\">\n\t<div class=\"navbar navbar-default black-background\" role=\"navigation\">\n\t\t<div class=\"navbar-header\">\n\t\t\t<button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\"\n\t\t\t\tdata-target=\".sidebar-navbar-collapse\">\n\t\t\t\t<span class=\"sr-only\">{{ 'MENU.TOGGLE' | translate}}</span> <span\n\t\t\t\t\tclass=\"icon-bar\"></span> <span class=\"icon-bar\"></span> <span\n\t\t\t\t\tclass=\"icon-bar\"></span>\n\t\t\t</button>\n\t\t\t<span class=\"visible-xs navbar-brand\">{{ 'MENU.OWN' | translate}}</span>\n\t\t</div>\n\t\t<div class=\"navbar-collapse collapse sidebar-navbar-collapse\">\n\t\t\t<ul class=\"nav navbar-nav\" id=\"sidenav01\">\n\t\t\t\t<li *ngFor=\"let character of characterSelectedService.ownCharacters\" class=\"brillo\"><a\n\t\t\t\t\t[routerLink]=\"['character', character]\" routerLinkActive=\"active\"\n\t\t\t\t\tclass=\"menu-element\" [class.selected]=\"character === getSelectedCharacter()\"><span\n\t\t\t\t\t\tclass=\"glyphicon glyphicon-user\"></span> {{character}}</a></li>\n\t\t\t</ul>\n\t\t</div>\n\t\t<!--/.nav-collapse-->\n\t</div>\n</div>\n"

/***/ }),

/***/ 625:
/***/ (function(module, exports) {

module.exports = "<app-title [title]=\"'HEADER.USER.TITLE' | translate\" [subtitle]=\"'HEADER.USER.SUBTITLE' | translate\"></app-title>\n\n<div class=\"col-md-12 col-sm-12 col-lg-12 col-xs-12\">\n\t<div class=\"pull-right\">\n\t\t<app-button [button]=\"buttonHome\"></app-button>\n  \t<app-button [button]=\"buttonCancel\"></app-button>\n  <a\n  \tclass='btn btn-primary black-background white'\n  \t[ngClass]=\"buttonSave.getStyle()\" (click)=\"save()\" > {{buttonSave?.message | translate}}</a>\n\t</div>\n</div>\n  <div class=\"col-md-12 col-sm-12 col-lg-12 col-xs-12\">\n    <div class=\"col-md-3 col-sm-3 col-lg-3 col-xs-3\">\n    </div>\n    <div class=\"col-md-6 col-sm-6 col-lg-6 col-xs-6\">\n      <h2 class=\"text-center\">{{ 'USER.USERNAME' | translate}}</h2>\n      <h2><input class=\"nameBox\"  [(ngModel)]=\"username\" type=\"text\" autofocus=\"on\" required=\"on\" (keyup.enter)=\"save()\"></h2>\n      <div *ngIf=\"!username && validated\"  class=\"alert alert-dismissible alert-danger\">\n        {{'FIELD.MANDATORY' | translate}}\n      </div>\n    </div>\n    <div class=\"col-md-3 col-sm-3 col-lg-3 col-xs-3\"></div>\n  </div>\n  <div class=\"col-md-12 col-sm-12 col-lg-12 col-xs-12\">\n    <div class=\"col-md-3 col-sm-3 col-lg-3 col-xs-3\">\n    </div>\n    <div class=\"col-md-6 col-sm-6 col-lg-6 col-xs-6\">\n      <h2 class=\"text-center\">{{ 'USER.PASSWORD' | translate}}</h2>\n      <h2><input class=\"nameBox\"  [(ngModel)]=\"password\" type=\"password\" autofocus=\"on\" required=\"on\" (keyup.enter)=\"save()\"></h2>\n      <div *ngIf=\"!password && validated\"  class=\"alert alert-dismissible alert-danger\">\n        {{'FIELD.MANDATORY' | translate}}\n      </div>\n      <div *ngIf=\"password && password.length<=4 && validated\"  class=\"alert alert-dismissible alert-danger\">\n        {{'FIELD.LENGTH' | translate:minLength}}\n      </div>\n    </div>\n    <div class=\"col-md-3 col-sm-3 col-lg-3 col-xs-3\"></div>\n  </div>\n\n  <app-help-box [title]=\"'USER.TITLE'\"\n    [paragraphs]=\"['USER.MESSAGE1','USER.MESSAGE2']\"></app-help-box>\n"

/***/ }),

/***/ 656:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "loading.3f8d49367ede35abe167.gif";

/***/ }),

/***/ 658:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(366);


/***/ }),

/***/ 76:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)();
// imports


// module
exports.push([module.i, ".btn {\n\tmargin-top: -10px;\n\tmargin-bottom: 10px;\n}\n\n.black-background {\n\tbackground-color: #000000;\n}\n\n.white {\n\tcolor: #ffffff;\n}\n\n.black-background-disable {\n\tbackground-color: #979797;\n}\n.black-background-disable:HOVER {\n\tbackground-color: #979797;\n  cursor:default;\n\ttext-shadow: 0 0 10px #333, 0 0 20px #333, 0 0 30px #333;\n}\n\n.black-background:HOVER {\n\tbackground-color: #2e3436;\n\ttext-shadow: 0 0 10px #fff, 0 0 20px #fff, 0 0 30px #fff;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ })

},[658]);
//# sourceMappingURL=main.bundle.js.map