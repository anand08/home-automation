webpackJsonp([0],{

/***/ 147:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 147;

/***/ }),

/***/ 188:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 188;

/***/ }),

/***/ 232:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SigninPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(57);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SigninPage = /** @class */ (function () {
    function SigninPage(authService, loadingCtrl, alertCtrl) {
        this.authService = authService;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
    }
    SigninPage.prototype.ngOnInit = function () {
        this.signInForm = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormGroup */]({
            'userName': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */](null, [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].minLength(2)]),
            'password': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */](null, [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].required])
        });
    };
    SigninPage.prototype.onLogin = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({
            content: 'Please wait, Signing in...'
        });
        loading.present();
        this.authService.onSignIn(this.signInForm.value.userName, this.signInForm.value.password).then(function (res) {
            loading.dismiss();
        }).catch(function (err) {
            var alert = _this.alertCtrl.create({
                title: 'Login failed',
                message: err.message,
                buttons: ['OK']
            });
            alert.present();
            loading.dismiss();
        });
    };
    SigninPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-signin',template:/*ion-inline-start:"E:\Udmey\homeAutomation\src\pages\signin\signin.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button icon-only menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Sign in</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <form [formGroup]="signInForm" (ngSubmit)="onLogin()">\n    <ion-list>\n      <ion-item>\n        <ion-label floating>Email</ion-label>\n        <ion-input type="email" formControlName="userName"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label floating>Password</ion-label>\n        <ion-input type="password" formControlName="password"></ion-input>\n      </ion-item>\n    </ion-list>\n    <button type="submit" ion-button block [disabled]="!signInForm.valid">Login</button>\n  </form>\n</ion-content>'/*ion-inline-end:"E:\Udmey\homeAutomation\src\pages\signin\signin.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["e" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["a" /* AlertController */]])
    ], SigninPage);
    return SigninPage;
}());

//# sourceMappingURL=signin.js.map

/***/ }),

/***/ 244:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(57);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SignupPage = /** @class */ (function () {
    function SignupPage(authService, loadingCtrl, alertCtrl) {
        this.authService = authService;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
    }
    SignupPage.prototype.ngOnInit = function () {
        this.signUpForm = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormGroup */]({
            'userName': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */](null, [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].minLength(2)]),
            'password': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */](null, [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].minLength(8)])
        });
    };
    SignupPage.prototype.onSignUp = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({
            content: 'Please wait, Signing up...'
        });
        loading.present();
        this.authService.onSignUp(this.signUpForm.value.userName, this.signUpForm.value.password).then(function (res) {
            loading.dismiss();
        }).catch(function (err) {
            var alert = _this.alertCtrl.create({
                title: 'Signup failed',
                message: err.message,
                buttons: ['OK']
            });
            alert.present();
            loading.dismiss();
        });
    };
    SignupPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-signup',template:/*ion-inline-start:"E:\Udmey\homeAutomation\src\pages\signup\signup.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button icon-only menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Sign up</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <form [formGroup]="signUpForm" (ngSubmit)="onSignUp()">\n    <ion-list>\n      <ion-item>\n        <ion-label floating>Email</ion-label>\n        <ion-input type="email" formControlName="userName"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label floating>Password</ion-label>\n        <ion-input type="password" formControlName="password"></ion-input>\n      </ion-item>\n    </ion-list>\n    <button type="submit" ion-button block [disabled]="!signUpForm.valid">Sign up</button>\n  </form>\n</ion-content>'/*ion-inline-end:"E:\Udmey\homeAutomation\src\pages\signup\signup.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["e" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["a" /* AlertController */]])
    ], SignupPage);
    return SignupPage;
}());

//# sourceMappingURL=signup.js.map

/***/ }),

/***/ 245:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__devices_devices__ = __webpack_require__(246);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__sensor_info_sensor_info__ = __webpack_require__(248);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var TabPage = /** @class */ (function () {
    function TabPage() {
        this.devicesPage = __WEBPACK_IMPORTED_MODULE_1__devices_devices__["a" /* DevicesPage */];
        this.sensorPage = __WEBPACK_IMPORTED_MODULE_2__sensor_info_sensor_info__["a" /* SensorInfoPage */];
    }
    TabPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-tabs',
            template: "\n        <ion-tabs>\n            <ion-tab [root]=\"devicesPage\" tabTitle=\"Devices\" tabIcon=\"star\"></ion-tab>\n            <ion-tab [root]=\"sensorPage\" tabTitle=\"Sensor\" tabIcon=\"book\"></ion-tab>\n        </ion-tabs>\n    "
        })
    ], TabPage);
    return TabPage;
}());

//# sourceMappingURL=tabs.page.js.map

/***/ }),

/***/ 246:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DevicesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_devices_service__ = __webpack_require__(247);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_mqtt_service__ = __webpack_require__(74);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DevicesPage = /** @class */ (function () {
    function DevicesPage(deviceService, mqttService) {
        this.deviceService = deviceService;
        this.mqttService = mqttService;
        this.loads = [];
        if (!this.mqttService.isConnectionEstablished()) {
            this.mqttService.onConnect();
        }
    }
    DevicesPage.prototype.ionViewDidLoad = function () {
        this.loads = this.deviceService.getAllLoads();
    };
    DevicesPage.prototype.onDeviceTurnOnOff = function (event, index) {
        var devices = this.loads[index];
        if (event.value) {
            this.mqttService.onPublishData(devices.topic, devices.onState);
            this.deviceService.updateData(index, event.value);
        }
        else {
            this.mqttService.onPublishData(devices.topic, devices.offState);
            this.deviceService.updateData(index, event.value);
        }
    };
    DevicesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-devices',template:/*ion-inline-start:"E:\Udmey\homeAutomation\src\pages\devices\devices.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button icon-only menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Devices</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-list>\n    <ion-item *ngFor="let devices of loads; let i=index">\n      <ion-icon [name]="devices.icon" item-left></ion-icon>\n      <ion-label>\n        <h2>{{ devices.name }}</h2>\n        <p>{{ devices.deviceName }}</p>\n      </ion-label>\n      <ion-toggle [checked]="devices.state" (ionChange)="onDeviceTurnOnOff($event, i)" item-right></ion-toggle>\n    </ion-item>\n  </ion-list>\n</ion-content>'/*ion-inline-end:"E:\Udmey\homeAutomation\src\pages\devices\devices.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_devices_service__["a" /* DeviceService */], __WEBPACK_IMPORTED_MODULE_2__services_mqtt_service__["a" /* MqttService */]])
    ], DevicesPage);
    return DevicesPage;
}());

//# sourceMappingURL=devices.js.map

/***/ }),

/***/ 247:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DeviceService; });
var DeviceService = /** @class */ (function () {
    function DeviceService() {
        this.loads = [
            {
                name: 'Load 1',
                deviceName: 'LED light',
                icon: 'bulb',
                state: 'false',
                offState: '0',
                onState: '1',
                topic: 'inTopic'
            },
            {
                name: 'Load 2',
                deviceName: 'Television',
                icon: 'easel',
                state: 'false',
                offState: '2',
                onState: '3',
                topic: 'inTopic'
            },
            {
                name: 'Load 3',
                deviceName: 'Computer',
                icon: 'laptop',
                state: 'false',
                offState: '4',
                onState: '5',
                topic: 'inTopic'
            },
            {
                name: 'Load 4',
                deviceName: 'Fans',
                icon: 'nuclear',
                state: 'false',
                offState: '6',
                onState: '7',
                topic: 'inTopic'
            },
            {
                name: 'Load 5',
                deviceName: 'All Appliances',
                icon: 'outlet',
                state: 'false',
                offState: '8',
                onState: '9',
                topic: 'inTopic'
            },
        ];
    }
    DeviceService.prototype.getAllLoads = function () {
        return this.loads.slice();
    };
    DeviceService.prototype.updateData = function (index, state) {
        this.loads[index].state = state;
    };
    return DeviceService;
}());

//# sourceMappingURL=devices.service.js.map

/***/ }),

/***/ 248:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SensorInfoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_mqtt_service__ = __webpack_require__(74);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SensorInfoPage = /** @class */ (function () {
    function SensorInfoPage(mqttService) {
        this.mqttService = mqttService;
        this.topicName = ['temperature-value', 'humidity-value', 'moisture-value', 'flame-value', 'gassensor-value'];
    }
    SensorInfoPage.prototype.ionViewDidLoad = function () {
        console.log('inside');
        // let i = 0;
        // while (i < this.topicName.length) {
        //   this.mqttService.onSubscribe(this.topicName[i]);
        //   setTimeout(() => {
        //     this.mqttService.onUnSubscribe(this.topicName[i]);
        //   }, 1000);
        // }
    };
    SensorInfoPage.prototype.onRefresh = function () {
        var _this = this;
        var i = 0;
        while (i < this.topicName.length) {
            this.mqttService.onSubscribe(this.topicName[i]);
            setTimeout(function () {
                _this.mqttService.onUnSubscribe(_this.topicName[i]);
            }, 1000);
        }
    };
    SensorInfoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-sensor-info',template:/*ion-inline-start:"E:\Udmey\homeAutomation\src\pages\sensor-info\sensor-info.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button icon-only menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Sensor info</ion-title>\n    <button ion-button icon-only item-left (click)="onRefresh()">\n      <ion-icon name="flower"></ion-icon>\n    </button>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-card ion-item class="sensor-card">\n    <ion-icon name="flower" item-left></ion-icon>\n    <ion-card-content>\n      <h2>Humidity</h2>\n    </ion-card-content>\n  </ion-card>\n  <ion-card ion-item class="sensor-card">\n    <ion-icon name="cloudy-night" item-left></ion-icon>\n    <ion-card-content>\n      <h2>Temperature</h2>\n    </ion-card-content>\n    <ion-badge item-end></ion-badge>\n  </ion-card>\n  <ion-card ion-item class="sensor-card">\n    <ion-icon name="ionic" item-left></ion-icon>\n    <ion-card-content>\n      <h2>Moisture</h2>\n    </ion-card-content>\n    <ion-badge item-end></ion-badge>\n  </ion-card>\n  <ion-card ion-item class="sensor-card">\n    <ion-icon name="flame" item-left></ion-icon>\n    <ion-card-content>\n      <h2>Flame</h2>\n    </ion-card-content>\n    <ion-badge item-end></ion-badge>\n  </ion-card>\n  <ion-card ion-item class="sensor-card">\n    <ion-icon name="flask" item-left></ion-icon>\n    <ion-card-content>\n      <h2>Gas Leak</h2>\n    </ion-card-content>\n    <ion-badge item-end></ion-badge>\n  </ion-card>\n</ion-content>'/*ion-inline-end:"E:\Udmey\homeAutomation\src\pages\sensor-info\sensor-info.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_mqtt_service__["a" /* MqttService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_mqtt_service__["a" /* MqttService */]) === "function" && _a || Object])
    ], SensorInfoPage);
    return SensorInfoPage;
    var _a;
}());

//# sourceMappingURL=sensor-info.js.map

/***/ }),

/***/ 249:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(250);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(272);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 272:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(228);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(231);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(322);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_devices_devices__ = __webpack_require__(246);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_signin_signin__ = __webpack_require__(232);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_signup_signup__ = __webpack_require__(244);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_sensor_info_sensor_info__ = __webpack_require__(248);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__services_auth_service__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__services_devices_service__ = __webpack_require__(247);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__services_mqtt_service__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_tabs_tabs_page__ = __webpack_require__(245);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_devices_devices__["a" /* DevicesPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_signin_signin__["a" /* SigninPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_signup_signup__["a" /* SignupPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_sensor_info_sensor_info__["a" /* SensorInfoPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_tabs_tabs_page__["a" /* TabPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */], {}, {
                    links: []
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_devices_devices__["a" /* DevicesPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_signin_signin__["a" /* SigninPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_signup_signup__["a" /* SignupPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_sensor_info_sensor_info__["a" /* SensorInfoPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_tabs_tabs_page__["a" /* TabPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_12__services_mqtt_service__["a" /* MqttService */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_10__services_auth_service__["a" /* AuthService */],
                __WEBPACK_IMPORTED_MODULE_11__services_devices_service__["a" /* DeviceService */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 322:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(231);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(228);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_signin_signin__ = __webpack_require__(232);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_signup_signup__ = __webpack_require__(244);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_firebase__ = __webpack_require__(233);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_auth_service__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_tabs_tabs_page__ = __webpack_require__(245);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services_mqtt_service__ = __webpack_require__(74);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen, menuCrtl, authService, mqttService) {
        var _this = this;
        this.menuCrtl = menuCrtl;
        this.authService = authService;
        this.mqttService = mqttService;
        this.rootpage = __WEBPACK_IMPORTED_MODULE_4__pages_signin_signin__["a" /* SigninPage */];
        this.signUpPage = __WEBPACK_IMPORTED_MODULE_5__pages_signup_signup__["a" /* SignupPage */];
        this.devicesPage = __WEBPACK_IMPORTED_MODULE_8__pages_tabs_tabs_page__["a" /* TabPage */];
        this.isAuthenticated = false;
        __WEBPACK_IMPORTED_MODULE_6_firebase___default.a.initializeApp({
            apiKey: "AIzaSyBoN4BslsyK9_Ho4vY5DNu-19oz7B3IxEM",
            authDomain: "home-automation-e7e29.firebaseapp.com"
        });
        __WEBPACK_IMPORTED_MODULE_6_firebase___default.a.auth().onAuthStateChanged(function (user) {
            if (user) {
                _this.isAuthenticated = true;
                _this.rootpage = __WEBPACK_IMPORTED_MODULE_8__pages_tabs_tabs_page__["a" /* TabPage */];
            }
            else {
                _this.isAuthenticated = false;
                _this.rootpage = __WEBPACK_IMPORTED_MODULE_4__pages_signin_signin__["a" /* SigninPage */];
            }
        });
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp.prototype.onLoad = function (page) {
        var _this = this;
        if (page == __WEBPACK_IMPORTED_MODULE_8__pages_tabs_tabs_page__["a" /* TabPage */]) {
            this.mqttService.onDisconnect();
        }
        setTimeout(function () {
            _this.nav.setRoot(page);
            _this.menuCrtl.close();
        }, 1000);
    };
    MyApp.prototype.onLogout = function () {
        var _this = this;
        setTimeout(function () {
            _this.authService.onLogout();
            _this.menuCrtl.close();
            _this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_4__pages_signin_signin__["a" /* SigninPage */]);
        }, 1000);
        this.mqttService.onDisconnect();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('nav'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"E:\Udmey\homeAutomation\src\app\app.html"*/'<ion-menu [content]="nav">\n    <ion-header>\n        <ion-toolbar>\n            <ion-title>Menu</ion-title>\n        </ion-toolbar>\n    </ion-header>\n    <ion-content>\n        <ion-list>\n            <button ion-item ion-left (click)="onLoad(rootpage)" *ngIf="!isAuthenticated">\n                <ion-icon name="log-in"></ion-icon>\n                Signin\n            </button>\n            <button ion-item ion-left (click)="onLoad(signUpPage)" *ngIf="!isAuthenticated">\n                <ion-icon name="person"></ion-icon>\n                Signup\n            </button>\n            <button ion-item ion-left (click)="onLoad(devicesPage)" *ngIf="isAuthenticated">\n                Appliances\n            </button>\n            <button ion-item ion-left (click)="onLogout()" *ngIf="isAuthenticated">\n                <ion-icon name="log-out"></ion-icon>\n                Logout\n            </button>\n        </ion-list>\n    </ion-content>\n</ion-menu>\n\n\n<ion-nav [root]="rootpage" #nav></ion-nav>'/*ion-inline-end:"E:\Udmey\homeAutomation\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* MenuController */],
            __WEBPACK_IMPORTED_MODULE_7__services_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_9__services_mqtt_service__["a" /* MqttService */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 67:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_firebase__ = __webpack_require__(233);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_firebase__);

var AuthService = /** @class */ (function () {
    function AuthService() {
    }
    AuthService.prototype.onSignUp = function (email, password) {
        return __WEBPACK_IMPORTED_MODULE_0_firebase___default.a.auth().createUserWithEmailAndPassword(email, password);
    };
    AuthService.prototype.onSignIn = function (email, password) {
        return __WEBPACK_IMPORTED_MODULE_0_firebase___default.a.auth().signInWithEmailAndPassword(email, password);
    };
    AuthService.prototype.onLogout = function () {
        __WEBPACK_IMPORTED_MODULE_0_firebase___default.a.auth().signOut();
    };
    return AuthService;
}());

//# sourceMappingURL=auth.service.js.map

/***/ }),

/***/ 74:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MqttService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__node_modules_ng2_mqtt_mqttws31__ = __webpack_require__(375);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__node_modules_ng2_mqtt_mqttws31___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__node_modules_ng2_mqtt_mqttws31__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MqttService = /** @class */ (function () {
    function MqttService() {
        this.client = new __WEBPACK_IMPORTED_MODULE_0__node_modules_ng2_mqtt_mqttws31__["Paho"].MQTT.Client("broker.mqtt-dashboard.com", 8000, "myclientid_" + Math.random() * 100);
        this.temperature = [];
        this.humidity = [];
        this.moisture = [];
        this.flame = [];
        this.gassensor = [];
        this.subscribeOptions = {
            qos: 0,
            invocationContext: { foo: true },
            onSuccess: this.onSubscriptionSuccess,
            onFailure: this.onSubscriptionFailed,
            timeout: 10
        };
        this.unsubscribeOptions = {
            invocationContext: { foo: true },
            onSuccess: this.onSubscriptionSuccess,
            onFailure: this.onSubscriptionFailed,
            timeout: 10
        };
        this.isConnected = false;
        this.client.onConnectionLost = function (responseObject) {
            console.log(responseObject);
        };
        this.client.onMessageArrived = function (message) {
            if (this.currentTopic == 'temperature-value') {
                console.log(message);
            }
        };
    }
    MqttService.prototype.onSubscriptionSuccess = function () {
        console.log('success');
    };
    MqttService.prototype.onSubscriptionFailed = function () {
        console.log('failed');
    };
    MqttService.prototype.onConnectionFailed = function () {
        this.isConnected = false;
        console.log('connection failed');
    };
    MqttService.prototype.onConnectionEstablished = function () {
        this.isConnected = true;
        console.log('connection success');
    };
    MqttService.prototype.onConnect = function () {
        if (!this.isConnected) {
            this.client.connect({
                onSuccess: this.onConnectionEstablished,
                mqttVersion: 3
            });
        }
    };
    MqttService.prototype.onPublishData = function (topic, data) {
        this.message = new __WEBPACK_IMPORTED_MODULE_0__node_modules_ng2_mqtt_mqttws31__["Paho"].MQTT.Message(data);
        this.message.destinationName = topic;
        this.message.qos = 2;
        this.client.send(this.message);
    };
    MqttService.prototype.onSubscribe = function (topic) {
        this.currentTopic = topic;
        this.client.subscribe(topic, this.subscribeOptions);
    };
    MqttService.prototype.onUnSubscribe = function (topic) {
        this.client.unsubscribe(topic, this.unsubscribeOptions);
    };
    MqttService.prototype.isConnectionEstablished = function () {
        return this.isConnected;
    };
    MqttService.prototype.onDisconnect = function () {
        this.client.disconnect();
    };
    MqttService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], MqttService);
    return MqttService;
}());

//# sourceMappingURL=mqtt.service.js.map

/***/ })

},[249]);
//# sourceMappingURL=main.js.map