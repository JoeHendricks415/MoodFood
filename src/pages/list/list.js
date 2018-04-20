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
import { EatsPage } from '../eats/eats';
var ListPage = /** @class */ (function () {
    function ListPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        // If we navigated to this page, we will have an item available as a nav param
        this.selectedItem = navParams.get('item');
        this.icons = ['trophy', 'cafe', 'bowtie', 'nutrition', 'pizza', 'car',
            'beer', 'boat', 'sad', 'ice-cream'];
        this.moods = ['Celebration', 'Tired', 'Fancy', 'Healthy', 'Hungover', 'In A Hurry',
            'Liquid Courage', 'Munchies', 'Sad', 'Lo-On-Sugar'];
        this.items = [];
        for (var i = 0; i < 10; i++) {
            this.items.push({
                title: this.moods[i],
                icon: this.icons[i]
            });
        }
    }
    // itemTapped(event, item) {
    //  
    //   this.navCtrl.push(EatsPage, {
    //     item: item
    //   });
    // }
    ListPage.prototype.itemPushBars = function () {
        // for(let i = 0; i < this.items.length; i++){
        //   if(this.items[i] === {title: 'Tired', icon: 'cafe'}){
        //     this.navCtrl.push(EatsPage);
        //   } else {
        //   }
        // }
        var barsSelected = {
            title: 'bars'
        };
        this.navCtrl.setRoot(EatsPage, barsSelected);
        //  item: item
    };
    ListPage.prototype.itemPushHealthy = function () {
        var healthySelected = {
            title: 'healthy'
        };
        this.navCtrl.setRoot(EatsPage, healthySelected);
    };
    ListPage.prototype.getSelectedItem = function () {
        return this.selectedItem;
    };
    ListPage.prototype.itemSelected = function (item) {
        console.log("Selected Item", item);
        this.navCtrl.push(EatsPage, item);
    };
    ListPage = __decorate([
        Component({
            selector: 'page-list',
            templateUrl: 'list.html'
        }),
        __metadata("design:paramtypes", [NavController, NavParams])
    ], ListPage);
    return ListPage;
}());
export { ListPage };
//# sourceMappingURL=list.js.map