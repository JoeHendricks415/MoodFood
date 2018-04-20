var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ListPage } from '../list/list';
import { IntroPage } from '../intro/intro';
import { Storage } from '@ionic/storage';
import { Geolocation } from '@ionic-native/geolocation';
import { HttpClient } from '@angular/common/http';
var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, geo, http, storage) {
        this.navCtrl = navCtrl;
        this.geo = geo;
        this.http = http;
        this.storage = storage;
        this.inputValue = "";
        this.getCoordinates();
    }
    HomePage.prototype.getCoordinates = function () {
        var _this = this;
        var options = {
            timeout: 50000,
            enableHighAccuracy: false
        };
        this.geo.getCurrentPosition(options).then(function (pos) {
            _this.lat = pos.coords.latitude;
            _this.long = pos.coords.longitude;
            console.log(pos.coords.latitude);
            console.log(pos.coords.longitude);
        }).catch(function (err) { return console.log(err); });
    };
    HomePage.prototype.getData = function () {
        var _this = this;
        var data = this.http.get('https://maps.googleapis.com/maps/api/geocode/json?latlng=' + this.lat + ',' + this.long + '&key=AIzaSyAoDH7pW6AzXoIUqg0EXyMNWfNbrLSlL4U');
        data.subscribe(function (result) {
            _this.locationJson = result;
            console.log(_this.locationJson);
        });
    };
    HomePage.prototype.getCity = function () {
        this.city = this.locationJson.results.address_components[3].long_name;
        console.log(this.city);
    };
    HomePage.prototype.itemPush = function () {
        this.navCtrl.setRoot(ListPage);
    };
    HomePage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.storage.get('intro-done').then(function (done) {
            if (!done) {
                _this.storage.set('intro-done', true);
                _this.navCtrl.setRoot(IntroPage);
            }
        });
    };
    HomePage.prototype.setInputValue = function () {
        this.inputValue;
    };
    HomePage.prototype.getInputValue = function () {
        console.log(this.inputValue);
    };
    HomePage = __decorate([
        Component({
            selector: 'page-home',
            templateUrl: 'home.html'
        }),
        __metadata("design:paramtypes", [NavController, Geolocation, HttpClient, Storage])
    ], HomePage);
    return HomePage;
}());
export { HomePage };
//# sourceMappingURL=home.js.map