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
import { NavController, NavParams } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
var EatsPage = /** @class */ (function () {
    function EatsPage(navCtrl, navParams, http) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.stringURL = "";
        this.ionViewDidLoad();
        this.getData();
    }
    EatsPage.prototype.ionViewDidLoad = function () {
        if (this.navParams.get('title') === "Liquid Courage") {
            //console.log("found match");
            this.stringURL = "assets/mock/barsTest.json";
            //console.log(this.stringURL);
            //this.selectedItem = 'assets/mock/bars.json';
        }
        else if (this.navParams.get('title') === "Healthy") {
            this.stringURL = 'assets/mock/healthy.json';
            //console.log(this.navParams.get('title'));
        }
    };
    EatsPage.prototype.getData = function () {
        var _this = this;
        //this.ionViewDidLoad();
        //console.log(this.stringURL);
        //let url = 'assets/mock/bars.json';
        var data = this.http.get(this.stringURL);
        data.subscribe(function (result) {
            _this.items = result;
        });
    };
    EatsPage = __decorate([
        Component({
            selector: 'page-eats',
            templateUrl: 'eats.html',
        }),
        __metadata("design:paramtypes", [NavController, NavParams, HttpClient])
    ], EatsPage);
    return EatsPage;
}());
export { EatsPage };
//# sourceMappingURL=eats.js.map