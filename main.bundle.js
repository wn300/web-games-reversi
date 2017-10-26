webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	return new Promise(function(resolve, reject) { reject(new Error("Cannot find module '" + req + "'.")); });
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__games_reversi_reversi_component__ = __webpack_require__("../../../../../src/app/games/reversi/reversi.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__page_page_component__ = __webpack_require__("../../../../../src/app/page/page.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var routes = [
    {
        path: "WebGames",
        component: __WEBPACK_IMPORTED_MODULE_3__page_page_component__["a" /* PageComponent */],
    },
    {
        path: "gameReversi",
        component: __WEBPACK_IMPORTED_MODULE_2__games_reversi_reversi_component__["a" /* ReversiComponent */]
    },
    {
        path: '',
        redirectTo: '/WebGames',
        pathMatch: 'full'
    }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forRoot(routes, { useHash: true })],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]]
    })
], AppRoutingModule);

//# sourceMappingURL=app-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n<router-outlet></router-outlet>\r\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
    }
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_fontawesome_angular2_fontawesome__ = __webpack_require__("../../../../angular2-fontawesome/angular2-fontawesome.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_fontawesome_angular2_fontawesome___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_fontawesome_angular2_fontawesome__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__page_header_header_component__ = __webpack_require__("../../../../../src/app/page/header/header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__page_footer_footer_component__ = __webpack_require__("../../../../../src/app/page/footer/footer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__page_body_body_component__ = __webpack_require__("../../../../../src/app/page/body/body.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__games_reversi_reversi_component__ = __webpack_require__("../../../../../src/app/games/reversi/reversi.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__page_page_component__ = __webpack_require__("../../../../../src/app/page/page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__services_reversi_service__ = __webpack_require__("../../../../../src/app/services/reversi.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





//components






//service

//routing

var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_6__page_header_header_component__["a" /* HeaderComponent */],
            __WEBPACK_IMPORTED_MODULE_7__page_footer_footer_component__["a" /* FooterComponent */],
            __WEBPACK_IMPORTED_MODULE_8__page_body_body_component__["a" /* BodyComponent */],
            __WEBPACK_IMPORTED_MODULE_9__games_reversi_reversi_component__["a" /* ReversiComponent */],
            __WEBPACK_IMPORTED_MODULE_10__page_page_component__["a" /* PageComponent */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_http__["c" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_12__app_routing_module__["a" /* AppRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_3_angular2_fontawesome_angular2_fontawesome__["Angular2FontawesomeModule"],
            __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormsModule */]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_11__services_reversi_service__["a" /* reversiService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/games/reversi/reversi.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".next{\r\n    margin-top: 80px !important;\r\n}\r\n\r\n.gamers{\r\n    margin-top: 80px;\r\n    color: #FFFFFF !important;\r\n    text-shadow: 1px 1px 2px #164EC9, 0 0 25px #FFFFFF, 0 0 5px #4DE4FF !important;\r\n    font-family: \"Kaushan Script\", \"Helvetica Neue\", Helvetica, Arial, cursive !important;\r\n    font-size: 30px;\r\n}\r\n\r\n.imput-gamers{\r\n    color: rgb(0, 0, 0) !important;\r\n    text-shadow: 1px 1px 2px #164EC9, 0 0 25px #FFFFFF, 0 0 5px #4DE4FF !important;\r\n    font-size: 30px;\r\n    background: transparent !important;\r\n    text-align: center;\r\n    border-top: none;\r\n    border-left: none;\r\n    border-right: none;\r\n    border-bottom: 3px solid #FFFFFF;\r\n    outline:0px;\r\n    width: 200px\r\n}\r\n\r\n#reversi{\r\n    background: linear-gradient(to top, #33ccff 0%, #0000cc 100%);\r\n    width: 100% !important;\r\n    min-height: 662px !important;\r\n}\r\n\r\nh1{\r\n    margin-top: 30px;\r\n    font-size: 80px;\r\n    color: #FFFFFF !important;\r\n    text-shadow: 1px 1px 2px #164EC9, 0 0 25px #FFFFFF, 0 0 5px #4DE4FF !important;\r\n    font-family: \"Kaushan Script\", \"Helvetica Neue\", Helvetica, Arial, cursive !important;\r\n}\r\n\r\n.tab{\r\n    text-align: center;\r\n    cursor: pointer;\r\n    width: 60px;\r\n    height: 60px; \r\n    border: 5px solid #D5E6E6;\r\n    box-shadow:         1px 0px 30px 0px rgba(255, 255, 255, 1);\r\n}\r\n\r\n.tab:hover{  \r\n    text-align: center;  \r\n    cursor: pointer;\r\n    width: 60px;\r\n    height: 60px; /* Safari */ /* Opera 11.6 to 12.0 */ /* Firefox 3.6 to 15 */\r\n    background: radial-gradient(circle, rgb(7, 245, 106), rgb(7, 245, 106), transparent); /* Standard syntax */\r\n}\r\n\r\n.return{\r\n    cursor: pointer;\r\n    width: 200px;\r\n    height: 60px;\r\n    display: inline-block;\r\n    margin-top: 20%;\r\n    border-radius: 8px;\r\n    background-color: #ebe841;\r\n    box-shadow: 0 8px 0 #c5ab37, 0 15px 20px rgba(255, 255, 255, 0.35);\r\n    transition: box-shadow .1s ease-in-out;\r\n    font-size: 50px;\r\n    color: #fff;\r\n    text-align: center; \r\n    padding: 10px  ;\r\n    font-family: \"Kaushan Script\", \"Helvetica Neue\", Helvetica, Arial, cursive !important;  \r\n}\r\n\r\n.delete{ \r\n    cursor: pointer;\r\n    width: 200px;\r\n    height: 60px;\r\n    display: inline-block;\r\n    margin-top: 20%;\r\n    border-radius: 8px;\r\n    background-color: #dd41eb;\r\n    box-shadow: 0 8px 0 #c037c5, 0 15px 20px rgba(255, 255, 255, 0.35);\r\n    transition: box-shadow .1s ease-in-out;\r\n    font-size: 50px;\r\n    color: #fff;\r\n    text-align: center; \r\n    padding: 10px    ;\r\n    font-family: \"Kaushan Script\", \"Helvetica Neue\", Helvetica, Arial, cursive !important;\r\n}\r\n\r\n.exit{\r\n    cursor: pointer;\r\n    width: 200px;\r\n    height: 60px;\r\n    display: inline-block;\r\n    margin-top: 20%;\r\n    border-radius: 8px;\r\n    background-color: #eb4141;\r\n    box-shadow: 0 8px 0 #c53737, 0 15px 20px rgba(255, 255, 255, 0.35);\r\n    transition: box-shadow .1s ease-in-out;\r\n    font-size: 50px;\r\n    color: #fff;\r\n    text-align: center; \r\n    padding: 10px  ;\r\n    font-family: \"Kaushan Script\", \"Helvetica Neue\", Helvetica, Arial, cursive !important;  \r\n}\r\n\r\n.return:hover{ background-color: #ecdf6a;\r\n    text-shadow: 0 -1px 1px rgba(175, 137, 49, 0.9), 0 0 5px rgba(255, 255, 255, 0.8);\r\n    color:#FFF;\r\n}\r\n\r\n.delete:hover{ background-color: #dd6aec;\r\n    text-shadow: 0 -1px 1px rgba(175, 49, 175, 0.9), 0 0 5px rgba(255, 255, 255, 0.8);\r\n    color:#FFF;\r\n}\r\n\r\n.exit:hover{ background-color: #ec6a6a;\r\n    text-shadow: 0 -1px 1px rgba(175, 49, 49, 0.9), 0 0 5px rgba(255, 255, 255, 0.8);\r\n    color:#FFF;\r\n}\r\n\r\n.return:active, .delete:active, .exit:active {\r\n    box-shadow: 0 5px #666;\r\n    -webkit-transform: translateY(4px);\r\n            transform: translateY(4px);\r\n}\r\n\r\n.white{\r\n    margin-left: 20%;\r\n    width: 60%;\r\n    height: 60%;\r\n    background-color: #FFFFFF;\r\n    box-shadow:         1px 0px 30px 0px rgb(38, 241, 255);\r\n    border-radius: 100px;\r\n}\r\n\r\n.black{\r\n    margin-left: 20%;\r\n    width: 60%;\r\n    height: 60%;\r\n    background-color: #000000;\r\n    box-shadow:         1px 0px 30px 0px rgb(248, 38, 255);\r\n    border-radius: 100px;\r\n}\r\n\r\n.name-gamer{  \r\n    font-size: 35px;  \r\n    font-family: \"Kaushan Script\", \"Helvetica Neue\", Helvetica, Arial, cursive !important;\r\n    color: #FFFFFF;\r\n    text-shadow: 1px 1px 2px #164EC9, 0 0 25px #FFFFFF, 0 0 5px #4DE4FF !important;\r\n    margin-left: 5%\r\n}\r\n\r\n.error{\r\n    font-size: 20px;\r\n    text-shadow: 1px 1px 2px rgb(201, 22, 22), 0 0 25px #FFFFFF, 0 0 5px rgb(255, 77, 77) !important;  \r\n}\r\n\r\n.gamer-white, .gamer-black{    \r\n    padding-top:5px; \r\n    padding-left:8px; \r\n    margin-left: 10%;\r\n    width: 40px;\r\n    height: 40px;\r\n    font-size: 20px;  \r\n    border-radius: 100px;\r\n    font-family: \"Kaushan Script\", \"Helvetica Neue\", Helvetica, Arial, cursive !important;\r\n}\r\n\r\n.gamer-white{\r\n    background-color: #FFFFFF;\r\n    box-shadow:         1px 0px 30px 0px rgb(38, 241, 255);\r\n    color: #000000;    \r\n}\r\n\r\n.gamer-black{\r\n    background-color: #000000;\r\n    box-shadow:         1px 0px 30px 0px rgb(248, 38, 255);\r\n    color: #FFFFFF;\r\n}\r\n\r\n@media screen and (max-width: 3000px) and (min-width: 1500px)  {\r\n    h1{\r\n        font-size: 100px !important;\r\n    }\r\n\r\n    #reversi{\r\n        height: 1300px !important;\r\n    }\r\n\r\n    .tab{\r\n        width: 90px;\r\n        height: 90px; \r\n    }\r\n    \r\n    .tab:hover{    \r\n        width: 90px;\r\n        height: 90px; \r\n    }\r\n\r\n    h3{\r\n        font-size: 50px;\r\n    }\r\n\r\n    .return, .delete, .exit{\r\n        width: 90%;\r\n        height: 90px;\r\n        display: inline-block;\r\n        margin-top: 5%;        \r\n        padding: 10px    \r\n    }    \r\n}\r\n\r\n\r\n@media screen and (max-width: 1200px) and (min-width: 1000px)  and (max-height: 1400px) and (min-height: 1200px){\r\n    h1{\r\n        margin-top:100px;\r\n        font-size: 110px !important;\r\n    }\r\n\r\n    #reversi{\r\n        height: 1300px !important;\r\n    }\r\n\r\n    .tab{\r\n        width:80px;\r\n        height: 80px; \r\n    }\r\n    \r\n    .tab:hover{    \r\n        width: 80px;\r\n        height: 80px; \r\n    }\r\n\r\n    h3{\r\n        font-size: 35px;\r\n    }\r\n\r\n    .return{\r\n        height: 70px;\r\n        display: inline-block;\r\n        margin-top: 100px;        \r\n        padding: 10px    \r\n    }\r\n\r\n    .delete{\r\n        height: 70px;\r\n        display: inline-block;    \r\n        padding: 10px;\r\n        margin-top: 10%;    \r\n     }\r\n\r\n     #bodi-reversi{\r\n        margin-top: 100px;\r\n    }\r\n\r\n    .gamers{\r\n        margin-top: 100px;\r\n        font-size: 70px;\r\n    }\r\n \r\n    .next{\r\n        margin-top: 60px !important;\r\n    }\r\n \r\n    .imput-gamers{\r\n        font-size: 40px;\r\n        width: 300px\r\n    }\r\n\r\n    .name-gamer{  \r\n        font-size: 30px;  \r\n        margin-left: 0%\r\n    }\r\n    \r\n    .gamer-white, .gamer-black, .name-gamer, fa {    \r\n        margin-top: 80px\r\n    }\r\n}\r\n\r\n@media screen and (max-width: 1400px) and (min-width: 1000px) and (max-height: 1100px) and (min-height: 1000px){\r\n    h1{\r\n        font-size: 150px !important;\r\n    }\r\n\r\n    #reversi{\r\n        height: 1030px !important;\r\n    }\r\n\r\n    .tab{\r\n        width: 95px;\r\n        height: 95px; \r\n    }\r\n    \r\n    .tab:hover{    \r\n        width: 95px;\r\n        height: 95px; \r\n    }\r\n\r\n    h3{\r\n        font-size: 35px;\r\n    }\r\n\r\n    .return, .delete, .exit{\r\n        width: 90%;\r\n        height: 70px;\r\n        display: inline-block;\r\n        margin-top: 0%;        \r\n        padding: 10px    \r\n    }\r\n\r\n\r\n    .delete{\r\n        margin-top: 10%; \r\n    }    \r\n\r\n    .gamers{\r\n        margin-top: 100px;\r\n        font-size: 70px;\r\n    }\r\n \r\n    .next{\r\n        margin-top: 60px !important;\r\n    }\r\n \r\n    .imput-gamers{\r\n        font-size: 40px;\r\n        width: 300px\r\n    }\r\n}\r\n\r\n@media screen and (max-width: 1200px) and (min-width: 1000px) and (max-height: 800px) and (min-height: 600px){\r\n    h1{\r\n        font-size: 100px !important;\r\n    }\r\n\r\n    #reversi{\r\n        height: 800px !important;\r\n    }\r\n\r\n    .tab{\r\n        width: 70px;\r\n        height: 70px; \r\n    }\r\n    \r\n    .tab:hover{    \r\n        width: 70px;\r\n        height: 70px; \r\n    }\r\n\r\n    h3{\r\n        font-size: 35px;\r\n    }\r\n\r\n    .return, .delete, .exit{  \r\n        width: 100%;    \r\n        height: 70px;\r\n        display: inline-block;\r\n        margin-top: 0%;        \r\n        padding: 10px    \r\n    }\r\n\r\n    .delete{\r\n         margin-top: 10%;    \r\n     }\r\n\r\n    .gamers{\r\n        margin-top: 80px;\r\n        font-size: 60px;\r\n    }\r\n\r\n    .next{\r\n        margin-top: 60px !important;\r\n    }\r\n\r\n    .imput-gamers{\r\n        font-size: 40px;\r\n        width: 300px\r\n    }\r\n}\r\n\r\n@media (max-width: 800px) {\r\n    h1{\r\n        font-size: 120px;\r\n    }\r\n\r\n    #reversi{\r\n        height: 1100px !important;\r\n    }\r\n\r\n    .tab{\r\n        width: 80px;\r\n        height: 80px; \r\n    }\r\n    \r\n    .tab:hover{    \r\n        width: 80px;\r\n        height: 80px; \r\n    }\r\n\r\n    #bodi-reversi{\r\n        margin-top: 40px;\r\n    }\r\n\r\n    h3{\r\n        font-size: 40px;\r\n    }\r\n\r\n    .return, .delete, .exit{\r\n        width: 45%;\r\n        height: 70px;\r\n        display: inline-block;\r\n        margin-top: 5%;        \r\n        padding: 10px    \r\n    }\r\n\r\n    .gamers{\r\n        margin-top: 80px;\r\n        font-size: 70px;\r\n    }\r\n\r\n    .next{\r\n        margin-top: 60px !important;\r\n    }\r\n\r\n    .imput-gamers{\r\n        font-size: 60px;\r\n        width: 400px\r\n    }\r\n\r\n    .gamer-white, .gamer-black {    \r\n        margin-left: 20% !important\r\n    }\r\n}\r\n\r\n\r\n@media (max-width: 699px) {\r\n    h1{\r\n        margin-top: 0px;\r\n        font-size: 80px;\r\n    }\r\n\r\n    #reversi{\r\n        height: 750px !important;\r\n    }\r\n\r\n    .tab{\r\n        width: 48px;\r\n        height: 48px; \r\n    }\r\n    \r\n    .tab:hover{    \r\n        width: 48px;\r\n        height: 48px; \r\n    }\r\n\r\n    #bodi-reversi{\r\n        margin-top: 0px;\r\n    }\r\n\r\n    h3{\r\n        font-size: 30px;\r\n    }\r\n\r\n    .return, .delete, .exit{\r\n        width: 90%;\r\n        height: 40px;\r\n        display: inline-block;\r\n        margin-top: 5%;        \r\n        font-size: 10px !important;\r\n        padding: 2px    \r\n    }\r\n\r\n    .gamers{\r\n        margin-top: 80px;\r\n        font-size: 30px;\r\n    }\r\n\r\n    .next{\r\n        margin-top: 50px !important;\r\n    }\r\n\r\n    .imput-gamers{\r\n        font-size: 30px;\r\n        width: 200px\r\n    }\r\n\r\n    .name-gamer{ \r\n        margin-top: 5px; \r\n        font-size: 20px;  \r\n        margin-left: 0%\r\n    }\r\n\r\n    fa {  \r\n        font-size: 12px;  \r\n    }\r\n\r\n    .gamer-white, .gamer-black {    \r\n        padding-top:4px; \r\n        padding-left:6px; \r\n        margin-left: 0%;\r\n        width: 35px;\r\n        height: 35px;\r\n        font-size: 18px;  \r\n    }\r\n}\r\n\r\n@media (max-width: 399px) {\r\n    h1{\r\n        margin-top: 10px;\r\n        font-size: 60px;\r\n    }\r\n\r\n    #reversi{\r\n        height: 700px !important;\r\n    }\r\n\r\n    .tab{\r\n        width: 40px;\r\n        height: 40px; \r\n    }\r\n    \r\n    .tab:hover{    \r\n        width: 40px;\r\n        height: 40px; \r\n    }\r\n\r\n    #bodi-reversi{\r\n        margin-top: 20px;\r\n    }\r\n\r\n    h3{\r\n        font-size: 30px;\r\n    }\r\n\r\n    .return, .delete, .exit{\r\n        width: 80%;\r\n        height: 40px;\r\n        display: inline-block;\r\n        margin-top: 10%;        \r\n        padding: 2px    \r\n    }\r\n\r\n    .gamers{\r\n        margin-top: 80px;\r\n        font-size: 30px;\r\n    }\r\n\r\n    .next{\r\n        margin-top: 50px !important;\r\n    }\r\n\r\n    .imput-gamers{\r\n        font-size: 30px;\r\n        width: 200px\r\n    }\r\n\r\n    .name-gamer{ \r\n        margin-top: 5px; \r\n        font-size: 20px;  \r\n        margin-left: 0%\r\n    }\r\n\r\n    fa {  \r\n        font-size: 12px;  \r\n    }\r\n\r\n    .gamer-white, .gamer-black {    \r\n        padding-top:4px; \r\n        padding-left:6px; \r\n        margin-left: 0%;\r\n        width: 25px;\r\n        height: 25px;\r\n        font-size: 12px;  \r\n    }\r\n}\r\n\r\n@media (max-width: 321px) {\r\n    h1{\r\n        font-size: 60px;\r\n    }\r\n\r\n    #reversi{\r\n        height: 700px !important;\r\n    }\r\n\r\n    .tab{\r\n        width: 35px;\r\n        height: 35px; \r\n    }\r\n    \r\n    .tab:hover{    \r\n        width: 35px;\r\n        height: 35px; \r\n    }\r\n\r\n    #bodi-reversi{\r\n        margin-top: 20px;\r\n    }\r\n\r\n    h3{\r\n        font-size: 30px;\r\n    }\r\n    .return, .delete, .exit{\r\n        width: 80%;\r\n        height: 40px;\r\n        display: inline-block;\r\n        margin-top: 5%;        \r\n        font-size: 10px !important;\r\n        padding: 2px    \r\n    }\r\n\r\n    .gamers{\r\n        margin-top: 10px;\r\n        font-size: 30px;\r\n    }\r\n\r\n    .next{\r\n        margin-top: 30px !important;\r\n    }\r\n\r\n    .imput-gamers{\r\n        font-size: 30px;\r\n        width: 200px\r\n    }\r\n\r\n   \r\n}\r\n\r\n.btn-modal-close, .btn-modal-init{\r\n    margin-top: 20px;\r\n    width: 90%\r\n}\r\n\r\n.winner{\r\n    margin-left: 0px;\r\n    width: 100%\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/games/reversi/reversi.component.html":
/***/ (function(module, exports) {

module.exports = "<section id=\"game-reversi\">\r\n  <div id=\"reversi\" class=\"continer\">\r\n    <div class=\"row justify-content-center\">\r\n      <h1>REVERSI</h1>\r\n    </div>\r\n    <div *ngIf=\"viewGame == 'false'\" class=\"row justify-content-center\">\r\n      <div *ngIf=\"viewRequired != 'false'\" class=\"col-12 name-gamer error text-center\">\r\n         {{viewRequired}}\r\n      </div>\r\n      <div class=\"col-12\">\r\n        <div class=\"row justify-content-center\">\r\n          <div class=\"col-12 col-lg-4 text-center\">\r\n              <div class=\"form-group\">\r\n                <label class=\"gamers\">Jugador 1:</label>\r\n                <input type=\"text\" maxlength=\"8\" [(ngModel)]=\"playerWhite\" class=\"gamers imput-gamers\" placeholder=\"Ingrese Nombre\" (keyup)=\"gamers()\"/>\r\n              </div>\r\n          </div>\r\n          <div class=\"col-12 col-lg-4 text-center\">\r\n              <div class=\"form-group\">\r\n                <label class=\"gamers\">Jugador 2:</label>\r\n                <input type=\"text\" maxlength=\"8\" [(ngModel)]=\"playerBlack\" class=\"gamers imput-gamers\" placeholder=\"Ingrese Nombre\" (keyup)=\"gamers()\"/>\r\n              </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"row justify-content-center\">\r\n          <div class=\"col-12 col-lg-3 text-center\">\r\n              <div class=\"btn-reversi exit next\" (click)=\"exitGame()\">\r\n                <h3>Salir</h3>\r\n              </div>\r\n          </div>\r\n          <div class=\"col-12 col-lg-3 text-center\">\r\n            <div class=\"btn-reversi return next\" (click)=\"startGame()\">\r\n              <h3 *ngIf=\"statusReversi.whiteCount == null && statusReversi.blackCount == null\">Comenzar!</h3>\r\n              <h3 *ngIf=\"statusReversi.whiteCount != null && statusReversi.blackCount != null\">Reanudar</h3>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div *ngIf=\"viewGame == 'true'\" class=\"row justify-content-md-center\">\r\n      <div class=\"col-12 col-lg-3\">\r\n        <div class=\"row\">\r\n          <div class=\"col-6 col-lg-12\">\r\n              <div class=\"form-inline\">                  \r\n                <div class=\"gamer-white\">\r\n                  {{statusReversi.whiteCount}}\r\n                </div>\r\n                <label class=\"name-gamer\">{{playerWhite}}</label>\r\n                <fa *ngIf=\"statusReversi.currentPlayer == 'WHITE'\" [name]=\"'rocket'\" [fw]=true [size]=2 style=\"color:rgb(240, 58, 58)\"></fa>\r\n              </div>  \r\n          </div>          \r\n          <div class=\"col-6 col-lg-12\">\r\n            <div class=\"form-inline\">\r\n                <div class=\"gamer-black\">\r\n                    {{statusReversi.blackCount}}\r\n                </div>\r\n                <label class=\"name-gamer\">{{playerBlack}}</label>\r\n                <fa *ngIf=\"statusReversi.currentPlayer == 'BLACK'\" [name]=\"'rocket'\" [fw]=true [size]=2 style=\"color:rgb(240, 58, 58)\"></fa>\r\n            </div>            \r\n          </div>          \r\n        </div>\r\n      </div>\r\n      <div class=\"col-12 col-lg-6\">\r\n        <div id=\"bodi-reversi\" class=\"row justify-content-center\">\r\n          <div *ngIf=\"viewError != 'false'\" class=\"col-12 name-gamer error text-center\">\r\n              {{viewError}}\r\n          </div>\r\n          <table>\r\n            <tr *ngFor=\"let rowsStatusReversi of statusReversi.boardRows; let indexRow = index\" >\r\n              <td class=\"tab text-center\" *ngFor=\"let cellStatusReversi of rowsStatusReversi; let indexCell = index\"  (click)=\"postMovement(indexCell,indexRow)\">  \r\n                  <ng-container [ngSwitch]=\"true\">\r\n                    <ng-container *ngSwitchCase=\"cellStatusReversi === '_'\"></ng-container>\r\n                    <ng-container *ngSwitchCase=\"cellStatusReversi === 'W'\">\r\n                      <div class=\"white\">\r\n\r\n                      </div>\r\n                    </ng-container>\r\n                    <ng-container *ngSwitchCase=\"cellStatusReversi === 'B'\">\r\n                      <div class=\"black\">\r\n                        \r\n                      </div>\r\n                    </ng-container>\r\n                </ng-container>                 \r\n              </td>\r\n            </tr>\r\n          </table>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-12 col-lg-3\">\r\n        <div class=\"row justify-content-center\">\r\n          <div class=\"btn-reversi return\" (click)=\"returnGame()\">\r\n            <h3>Regresar</h3>\r\n          </div>\r\n          <div class=\"btn-reversi delete\" (click)=\"restartGame()\">\r\n            <h3>Reiniciar</h3>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <button id=\"btn-action-modal\"  data-toggle=\"modal\" data-target=\"#modal-finish\" style=\"display: none\">\r\n  </button>\r\n  <div id=\"modal-finish\" class=\"modal fade\">\r\n      <div class=\"modal-dialog\" role=\"document\">\r\n          <div class=\"continer\">\r\n              <div class=\"reversi-details\" style=\"margin-left:0;\">\r\n                  <h2 class=\"reversi-details-line\">Final!!!</h2>\r\n                  <div class=\"row justify-content-end\">\r\n                      <div class=\"col-12 text-center\">\r\n                          <label class=\"name-gamer winner\"> \r\n                            <div *ngIf=\"statusReversi.whiteCount > statusReversi.blackCount\">\r\n                                Felicitaciones has ganado {{playerWhite}}\r\n                            </div>\r\n                            <div *ngIf=\"statusReversi.whiteCount < statusReversi.blackCount\">\r\n                                Felicitaciones has ganado {{playerBlack}}\r\n                            </div>\r\n                            <div *ngIf=\"statusReversi.whiteCount == statusReversi.blackCount\">\r\n                               Ups Empate !!!\r\n                            </div>\r\n                          </label>\r\n                      </div>\r\n                  </div>\r\n                  <div class=\"row justify-content-center\">\r\n                      <div class=\"col-12 text-center\">\r\n                          <div class=\"btn-modal-init\" (click)=\"restartGame()\" data-dismiss=\"modal\">\r\n                              <h3>Jugar de Nuevo!</h3>\r\n                          </div>\r\n                          <div id=\"close-modal\" class=\"btn-modal-close\" data-dismiss=\"modal\">\r\n                              <h3>Cerrar</h3>\r\n                          </div>\r\n                      </div>\r\n                  </div>\r\n              </div>\r\n          </div>\r\n      </div>\r\n  </div>\r\n</section>"

/***/ }),

/***/ "../../../../../src/app/games/reversi/reversi.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReversiComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_reversi_service__ = __webpack_require__("../../../../../src/app/services/reversi.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ReversiComponent = (function () {
    function ReversiComponent(_reversiService, route, router) {
        this._reversiService = _reversiService;
        this.route = route;
        this.router = router;
        this.playerWhite = "";
        this.playerBlack = "";
        this.viewError = "false";
        this.viewRequired = "false";
        this.statusReversi = [];
    }
    ReversiComponent.prototype.getStatusGameReversi = function () {
        var _this = this;
        this._reversiService.getGameStatus().subscribe(function (data) {
            _this.statusReversi = data;
            if (data.gameState == "FINALIZED") {
                document.getElementById("btn-action-modal").click();
            }
            console.log(data);
        }, function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            if (args[0].status == 401) {
                console.log("Invalid token");
            }
        });
    };
    ReversiComponent.prototype.ngOnInit = function () {
        if ((localStorage.getItem("playerWhite") == null || localStorage.getItem("playerWhite") == "undefined") || (localStorage.getItem("playerBlack") == null || localStorage.getItem("playerBlack") == "undefined")) {
            this.viewGame = "false";
        }
        else {
            this.playerWhite = localStorage.getItem("playerWhite");
            this.playerBlack = localStorage.getItem("playerBlack");
            this.getStatusGameReversi();
            this.viewGame = "true";
        }
    };
    ReversiComponent.prototype.postMovement = function (_x, _y) {
        var _this = this;
        this.viewError = "false";
        this._reversiService.postMovementsGame(_x, _y).subscribe(function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            _this.viewError = "false";
            _this.getStatusGameReversi();
        }, function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            _this.viewError = "Movimiento invalido";
            if (args[0].status == 400) {
                _this.viewError = "Movimiento invalido";
                console.log("The movement is invalid");
            }
            if (args[0].status == 401) {
                _this.viewError = "Invalid token";
                console.log("Invalid token");
            }
            if (args[0].status == 409) {
                _this.viewError = "El juego ya finalizo o la posición no esta vacia";
                console.log("Game is finished or position is not empty");
            }
        });
    };
    ReversiComponent.prototype.restartGame = function () {
        var _this = this;
        this._reversiService.restartGame().subscribe(function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            _this.getStatusGameReversi();
        }, function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            if (args[0].status == 401) {
                console.log("Invalid token");
            }
        });
    };
    ReversiComponent.prototype.startGame = function () {
        if (this.playerWhite.trim() == "" || this.playerBlack.trim() == "") {
            this.viewRequired = "Los nombres de los jugadores son obligatorios";
            this.viewGame = "false";
        }
        else {
            localStorage.setItem("playerWhite", this.playerWhite);
            localStorage.setItem("playerBlack", this.playerBlack);
            this.getStatusGameReversi();
            this.viewGame = "true";
            this.viewRequired = "false";
        }
    };
    ReversiComponent.prototype.returnGame = function () {
        this.viewGame = "false";
    };
    ReversiComponent.prototype.exitGame = function () {
        localStorage.removeItem("playerWhite");
        localStorage.removeItem("playerBlack");
        this.restartGame();
        this.router.navigate(['/WebGames']);
        this.viewGame = "false";
    };
    ReversiComponent.prototype.gamers = function () {
        if (this.playerWhite.trim() != "" && this.playerBlack.trim() != "") {
            this.viewRequired = "false";
        }
    };
    return ReversiComponent;
}());
ReversiComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-reversi',
        template: __webpack_require__("../../../../../src/app/games/reversi/reversi.component.html"),
        styles: [__webpack_require__("../../../../../src/app/games/reversi/reversi.component.css")],
        providers: [__WEBPACK_IMPORTED_MODULE_1__services_reversi_service__["a" /* reversiService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_reversi_service__["a" /* reversiService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_reversi_service__["a" /* reversiService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _c || Object])
], ReversiComponent);

var _a, _b, _c;
//# sourceMappingURL=reversi.component.js.map

/***/ }),

/***/ "../../../../../src/app/page/body/body.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".reversi{\r\n    color:rgba(255, 123, 123, 0.986) !important;\r\n    text-shadow: 1px 0px 30px rgba(255, 255, 255, 1);\r\n    font-family: \"Kaushan Script\", \"Helvetica Neue\", Helvetica, Arial, cursive !important; \r\n}\r\n\r\n.reversi-muted{\r\n    color:#c5ab37 !important; \r\n    text-shadow: 1px 0px 30px rgba(255, 255, 255, 1); \r\n    font-family: \"Kaushan Script\", \"Helvetica Neue\", Helvetica, Arial, cursive !important; \r\n}\r\n\r\n.juegos{\r\n    color:#c5ab37 !important; \r\n    text-shadow: 1px 0px 30px rgba(255, 255, 255, 1); \r\n}\r\n\r\n.bg-img-reversi{\r\n    background: red; /* For browsers that do not support gradients */ /* For Safari 5.1 to 6.0 */ /* For Opera 11.1 to 12.0 */ /* For Firefox 3.6 to 15 */\r\n    background: linear-gradient(to right, rgb(255, 115, 0) , rgb(145, 255, 0)); /* Standard syntax */\r\n}\r\n\r\n.bg-img-inicio{\r\nbackground-image:  url(" + __webpack_require__("../../../../../src/assets/images/games5.png") + ") !important;\r\nbackground-repeat: no-repeat !important;\r\nbackground-attachment: fixed !important;\r\nbackground-position: center center !important;\r\nbackground-size: 100% 100% !important;\r\n-o-background-size:100% 100% !important;\r\ntext-align: center !important;\r\ncolor: border-left !important;\r\n}\r\n\r\n.bg-inicio{\r\n    background-color: #021422\r\n}\r\n\r\n.play-now:hover {   \r\n    opacity: 1;\r\n}\r\n\r\n.main-container-advertising{    \r\n    /* background-image:  url('assets/images/games3.png') !important; */ /* For Safari 5.1 to 6.0 */ /* For Opera 11.1 to 12.0 */ /* For Firefox 3.6 to 15 */\r\n    background: linear-gradient(to right, rgb(255, 115, 0) , rgb(145, 255, 0)); /* Standard syntax */\r\n    border-radius: 10px; \r\n}\r\n\r\n.text-advertising{\r\n    color:#FFF !important; \r\n    text-shadow: 1px 0px 30px rgba(255, 255, 255, 1); \r\n    font-family: \"Kaushan Script\", \"Helvetica Neue\", Helvetica, Arial, cursive !important; \r\n}\r\n\r\n.img-games{\r\n    width: 100%;\r\n    height: 500px\r\n}\r\n\r\n.height-fluid{\r\n    width: 100%;\r\n    height: 100%\r\n}\r\n\r\n.bg-games {\r\n    background: rgba(0, 0, 0, 0.5);\r\n    border-radius: 20px;\r\n    margin-bottom: 37px;\r\n}\r\n\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/page/body/body.component.html":
/***/ (function(module, exports) {

module.exports = "<section id=\"Reversi\" class=\"bg-img-reversi\">\r\n    <div class=\"container\">\r\n        <div class=\"row\">\r\n            <div class=\"col-lg-12 text-center\">\r\n                <h1 class=\"section-heading reversi\">Nuestro nuevo juego !!!</h1>\r\n                <h2 class=\"section-heading reversi\">REVERSI</h2>\r\n            </div>\r\n        </div>\r\n        <div class=\"row text-center\">\r\n            <div class=\"col-lg-8 col-md-12 col-12\">\r\n                <img src=\"assets/images/dispositivos.png\" class=\"img-fluid\" />\r\n            </div>\r\n            <div class=\"col-lg-4 col-md-12 col-12\">\r\n                <h3 class=\"section-heading text-muted reversi-muted\">Disponible en tu pc, tablet y celular !!!</h3>\r\n                <p class=\"description\">\r\n                    Tu objetivo es hacer cambiar de color las fichas de tu contraincante, colocando dos de tus fichas a los lados de las del\r\n                    contrario.\r\n                </p>\r\n                <div id=\"btn-active-reversi\" class=\"btn-modal-reversi\" data-toggle=\"modal\" data-target=\"#modal-reversi\">\r\n                    <h3>Jugar Ya !!</h3>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</section>\r\n<section id=\"Juegos\" class=\"bg-img-inicio\">\r\n    <div class=\"container\">\r\n        <div class=\"row\">\r\n            <div class=\"col-lg-12 text-center\">\r\n                <h2 class=\"section-heading\">JUEGOS</h2>\r\n            </div>\r\n        </div>\r\n        <div class=\"row justify-content-end\">\r\n            <div class=\"col-lg-4 col-md-6 text-center bg-games\">\r\n                <span class=\"fa-stack fa-4x\">\r\n                    <fa [name]=\"'rocket'\" [fw]=true [size]=2 style=\"color:rgb(240, 58, 58)\"></fa>\r\n                </span>\r\n                <div id=\"btn-active-reversi\" class=\"btn-modal-reversi\" data-toggle=\"modal\" data-target=\"#modal-reversi\">\r\n                    <h3>Jugar</h3>\r\n                </div>\r\n                <div class=\"img-games\">\r\n                    <img src=\"assets/images/reversi.png\" class=\"img-fluid height-fluid\" />\r\n                </div>\r\n            </div>\r\n            <div class=\"col-lg-4 col-md-6 text-center bg-games\">\r\n                <span class=\"fa-stack fa-4x\">\r\n                    <fa [name]=\"'diamond'\" [fw]=true [size]=2 style=\"color:rgb(237, 240, 58)\"></fa>\r\n                </span>\r\n                <div id=\"btn-active-reversi\" class=\"btn-modal-reversi\">\r\n                    <h3>Jugar</h3>\r\n                </div>\r\n                <div class=\"img-games\">\r\n                    <img src=\"assets/images/fasty.png\" class=\"img-fluid height-fluid\" />\r\n                </div>\r\n            </div>\r\n            <div class=\"col-lg-4 col-md-6 text-center bg-games\">\r\n                <span class=\"fa-stack fa-4x\">\r\n                    <fa [name]=\"'cubes'\" [fw]=true [size]=2 style=\"color:rgb(94, 240, 58)\"></fa>\r\n                </span>\r\n                <div id=\"btn-active-reversi\" class=\"btn-modal-reversi\">\r\n                    <h3>Jugar</h3>\r\n                </div>\r\n                <div class=\"img-games\">\r\n                    <img src=\"assets/images/clash.png\" class=\"img-fluid height-fluid\" />\r\n                </div>\r\n            </div>\r\n            <div class=\"col-lg-4 col-md-6 text-center bg-games\">\r\n                <span class=\"fa-stack fa-4x\">\r\n                    <fa [name]=\"'paper-plane-o'\" [fw]=true [size]=2 style=\"color:rgb(106, 253, 253)\"></fa>\r\n                </span>\r\n                <div id=\"btn-active-reversi\" class=\"btn-modal-reversi\">\r\n                    <h3>Jugar</h3>\r\n                </div>\r\n                <div class=\"img-games\">\r\n                    <img src=\"assets/images/mahjong.png\" class=\"img-fluid height-fluid\" />\r\n                </div>\r\n            </div>\r\n            <div class=\"col-lg-4 col-md-6 text-center bg-games\">\r\n                <span class=\"fa-stack fa-4x\">\r\n                    <fa [name]=\"'user-secret'\" [fw]=true [size]=2 style=\"color:rgb(240, 58, 240)\"></fa>\r\n                </span>\r\n                <div id=\"btn-active-reversi\" class=\"btn-modal-reversi\">\r\n                    <h3>Jugar</h3>\r\n                </div>\r\n                <div class=\"img-games\">\r\n                    <img src=\"assets/images/chess.png\" class=\"img-fluid height-fluid\" />\r\n                </div>\r\n            </div>\r\n            <div class=\"col-lg-4 col-md-6 text-center bg-games\">\r\n                <span class=\"fa-stack fa-4x\">\r\n                    <fa [name]=\"'qq'\" [fw]=true [size]=2 style=\"color:rgb(240, 167, 58)\"></fa>\r\n                </span>\r\n                <div id=\"btn-active-reversi\" class=\"btn-modal-reversi\">\r\n                    <h3>Jugar</h3>\r\n                </div>\r\n                <div class=\"img-games\">\r\n                    <img src=\"assets/images/domino.png\" class=\"img-fluid height-fluid\" />\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <button id=\"execute-advertising\" data-toggle=\"modal\" data-target=\"#modal-advertising\" style=\"display: none\">\r\n    </button>\r\n\r\n    <div id=\"modal-advertising\" class=\"modal fade\">\r\n        <div class=\"modal-dialog modal-lg\" role=\"document\">\r\n            <div class=\"main-container-advertising continer\">\r\n                <div class=\"reversi-details\" style=\"margin-left:0;\">\r\n                    <h2 class=\"reversi-details-line\">Aburrido???</h2>\r\n                    <div class=\"row justify-content-end\">\r\n                        <div class=\"col-12 col-lg-6 text-center\">\r\n                            <img src=\"assets/images/dispositivos.png\" class=\"img-fluid\" />\r\n                        </div>\r\n                        <div class=\"col-12 col-lg-6\">\r\n                            <img src=\"assets/images/pcinit.png\" class=\"img-fluid\" />\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"row justify-content-end\">\r\n                        <div class=\"col-12 text-center\">\r\n                            <h2 class=\"text-advertising\">Conoce nuestro nuevo juego Reversi y sal de la rutina</h2>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"row justify-content-end\">\r\n                        <div class=\"col-12\">\r\n                            <div class=\"btn-modal-init\" (click)=\"play()\">\r\n                                <h3>Jugar ya!</h3>\r\n                            </div>\r\n                            <div class=\"btn-modal-info\" (click)=\"moreInfo()\" data-dismiss=\"modal\">\r\n                                <h3>Mas información</h3>\r\n                            </div>\r\n                            <div id=\"close-modal-advertising\" class=\"btn-modal-close\" data-dismiss=\"modal\">\r\n                                <h3>Cerrar</h3>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n    <div id=\"modal-reversi\" class=\"modal fade\">\r\n        <div class=\"modal-dialog modal-lg\" role=\"document\">\r\n            <div class=\"main-container continer\">\r\n                <div class=\"reversi-details\" style=\"margin-left:0;\">\r\n                    <h2 class=\"reversi-details-line\">Reversi</h2>\r\n                    <div class=\"row justify-content-end\">\r\n                        <div class=\"col-12 col-lg-3 text-center\">\r\n                            <img src=\"assets/images/reversi.png\" class=\"img-fluid\" />\r\n                        </div>\r\n                        <div class=\"col-12 col-lg-9\">\r\n                            <p>Los jugadores comparten 64 fichas iguales, de caras distintas, que se van colocando por turnos\r\n                                en un tablero dividido en 64 escaques. Las caras de las fichas se distinguen por su color\r\n                                y cada jugador tiene asignado uno de esos colores, ganando quien tenga más fichas sobre el\r\n                                tablero al finalizar la partida. Se clasifica como juego de tablero, abstracto y territorial;\r\n                                al igual que el go y las amazonas.</p>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"row justify-content-end\">\r\n                        <div class=\"col-12 text-left\">\r\n                            <ul>\r\n                                <li>Se necesitan 2 jugadores.</li>\r\n                                <li>La movilidad media de un jugador a lo largo de la partida es de 8 movimientos.</li>\r\n                                <li>En total se pueden hacer 60 movimientos.</li>\r\n                            </ul>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"row justify-content-end\">\r\n                        <div class=\"col-12\">\r\n                            <div class=\"btn-modal-init\" routerLink=\"/gameReversi\" routerLinkActive=\"active\" data-dismiss=\"modal\">\r\n                                <h3>Entendido Comenzar Ya</h3>\r\n                            </div>\r\n                            <div id=\"close-modal\" class=\"btn-modal-close\" data-dismiss=\"modal\">\r\n                                <h3>Cerrar</h3>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n</section>"

/***/ }),

/***/ "../../../../../src/app/page/body/body.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BodyComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var BodyComponent = (function () {
    function BodyComponent() {
    }
    BodyComponent.prototype.ngOnInit = function () {
        setTimeout(function () {
            document.getElementById("execute-advertising").click();
        }, 2000);
    };
    BodyComponent.prototype.moreInfo = function () {
        document.getElementById("newReversi").click();
    };
    BodyComponent.prototype.play = function () {
        document.getElementById("btn-active-reversi").click();
        document.getElementById("close-modal-advertising").click();
    };
    return BodyComponent;
}());
BodyComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-body',
        template: __webpack_require__("../../../../../src/app/page/body/body.component.html"),
        styles: [__webpack_require__("../../../../../src/app/page/body/body.component.css")]
    }),
    __metadata("design:paramtypes", [])
], BodyComponent);

//# sourceMappingURL=body.component.js.map

/***/ }),

/***/ "../../../../../src/app/page/footer/footer.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/page/footer/footer.component.html":
/***/ (function(module, exports) {

module.exports = " <footer>\r\n    <div class=\"container\">\r\n      <div class=\"row\">\r\n        <div class=\"col-lg-8 col-md-10 mx-auto\">\r\n          <ul class=\"list-inline text-center\">\r\n            <li class=\"list-inline-item\">\r\n              <a href=\"#\">\r\n                <span class=\"fa-stack fa-lg\">\r\n                  <i class=\"fa fa-circle fa-stack-2x\"></i>\r\n                  <i class=\"fa fa-twitter fa-stack-1x fa-inverse\"></i>\r\n                </span>\r\n              </a>\r\n            </li>\r\n            <li class=\"list-inline-item\">\r\n              <a href=\"#\">\r\n                <span class=\"fa-stack fa-lg\">\r\n                  <i class=\"fa fa-circle fa-stack-2x\"></i>\r\n                  <i class=\"fa fa-facebook fa-stack-1x fa-inverse\"></i>\r\n                </span>\r\n              </a>\r\n            </li>\r\n            <li class=\"list-inline-item\">\r\n              <a href=\"#\">\r\n                <span class=\"fa-stack fa-lg\">\r\n                  <i class=\"fa fa-circle fa-stack-2x\"></i>\r\n                  <i class=\"fa fa-github fa-stack-1x fa-inverse\"></i>\r\n                </span>\r\n              </a>\r\n            </li>\r\n          </ul>\r\n          <p class=\"copyright text-muted\">Copyright &copy; Your Website 2017</p>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </footer>\r\n"

/***/ }),

/***/ "../../../../../src/app/page/footer/footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    return FooterComponent;
}());
FooterComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-footer',
        template: __webpack_require__("../../../../../src/app/page/footer/footer.component.html"),
        styles: [__webpack_require__("../../../../../src/app/page/footer/footer.component.css")]
    }),
    __metadata("design:paramtypes", [])
], FooterComponent);

//# sourceMappingURL=footer.component.js.map

/***/ }),

/***/ "../../../../../src/app/page/header/header.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\r\n.header {  \r\n    height: 637px !important;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/page/header/header.component.html":
/***/ (function(module, exports) {

module.exports = "<nav id=\"mainNav\" class=\"navbar fixed-top navbar-toggleable-sm navbar-inverse bg-primary mb-3\">\r\n    <button class=\"navbar-toggler navbar-toggler-right\" type=\"button\" data-toggle=\"collapse\" data-target=\"#collapsingNavbar\">\r\n        <span class=\"navbar-toggler-icon\"></span>\r\n    </button>\r\n    <div class=\"flex-row d-flex\">\r\n        <a class=\"navbar-brand\" href=\"\" title=\"WebGames.com\">WebGames.com</a>\r\n    </div>\r\n    <div class=\"navbar-collapse collapse justify-content-end\" id=\"collapsingNavbar\">\r\n        <ul class=\"navbar-nav\">\r\n            <li class=\"nav-item\">\r\n                <a class=\"nav-link\" href=\"#Inicio\">Inicio</a>\r\n            </li>\r\n            <li class=\"nav-item\">\r\n                <a id=\"newReversi\" class=\"nav-link\" href=\"#Reversi\">Lo Nuevo</a>\r\n            </li>\r\n            <li class=\"nav-item\">\r\n              <a class=\"nav-link\" href=\"#Juegos\">Juegos</a>\r\n            </li>\r\n        </ul>\r\n    </div>\r\n  </nav>\r\n\r\n<header id=\"Inicio\" class=\"masthead header\" style=\"background-image: url('../../assets/images/games0.png')\">\r\n    <div class=\"container\">\r\n        <div class=\"row\">\r\n        <div class=\"col-lg-8 col-md-10 mx-auto\">\r\n            <div class=\"site-heading\">\r\n            <h1>Web Games</h1>\r\n            <span class=\"subheading\">Aprovecha los nuevos estrenos gratis ya!!!</span>\r\n            </div>\r\n        </div>\r\n        </div>\r\n    </div>\r\n</header>\r\n\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/page/header/header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HeaderComponent = (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    return HeaderComponent;
}());
HeaderComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-header',
        template: __webpack_require__("../../../../../src/app/page/header/header.component.html"),
        styles: [__webpack_require__("../../../../../src/app/page/header/header.component.css")]
    }),
    __metadata("design:paramtypes", [])
], HeaderComponent);

//# sourceMappingURL=header.component.js.map

/***/ }),

/***/ "../../../../../src/app/page/page.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/page/page.component.html":
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\r\n<app-body></app-body>\r\n<app-footer></app-footer>"

/***/ }),

/***/ "../../../../../src/app/page/page.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PageComponent = (function () {
    function PageComponent() {
    }
    PageComponent.prototype.ngOnInit = function () {
    };
    return PageComponent;
}());
PageComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-page',
        template: __webpack_require__("../../../../../src/app/page/page.component.html"),
        styles: [__webpack_require__("../../../../../src/app/page/page.component.css")]
    }),
    __metadata("design:paramtypes", [])
], PageComponent);

//# sourceMappingURL=page.component.js.map

/***/ }),

/***/ "../../../../../src/app/services/reversi.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return reversiService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var reversiService = (function () {
    function reversiService(http) {
        this.http = http;
    }
    reversiService.prototype.getGameStatus = function () {
        return this.http.get("http://35.163.129.163:9000/reversi/game?token=10295817-da64-41d6-9e00-6cc2b71d67e1")
            .map(function (res) { return res.json(); });
    };
    reversiService.prototype.postMovementsGame = function (_x, _y) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        headers.append('Access-Control-Allow-Origin', '*');
        return this.http.post("http://35.163.129.163:9000/reversi/game/movements?token=10295817-da64-41d6-9e00-6cc2b71d67e1&x=" + _x + "&y=" + _y, headers)
            .map(function (res) { return res.json(); });
    };
    reversiService.prototype.restartGame = function () {
        return this.http.delete("http://35.163.129.163:9000/reversi/game?token=10295817-da64-41d6-9e00-6cc2b71d67e1")
            .map(function (res) { return res.json(); });
    };
    return reversiService;
}());
reversiService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], reversiService);

var _a;
//# sourceMappingURL=reversi.service.js.map

/***/ }),

/***/ "../../../../../src/assets/images/games5.png":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "games5.9aa53619f8b6ef81049d.png";

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map
