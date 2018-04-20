var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HttpEventType } from '@angular/common/http';
import { DataService } from '../service/data.service';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { EatsPage } from '../pages/eats/eats';
import { DestinyPage } from '../pages/destiny/destiny';
import { IntroPage } from '../pages/intro/intro';
var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen, dataService) {
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.dataService = dataService;
        this.rootPage = IntroPage;
        this.initializeApp();
        // used for an example of ngFor and navigation
        this.pages = [
            { title: 'Location', component: HomePage },
            { title: 'Mood', component: ListPage },
            { title: 'Local Eats', component: EatsPage },
            { title: 'Your Destiny', component: DestinyPage }
        ];
        this.activePage = this.pages[0];
    }
    MyApp.prototype.ngOnInit = function () {
        this.populateRestaurants();
    };
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
        });
    };
    MyApp.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component);
        this.activePage = page;
    };
    MyApp.prototype.checkActive = function (page) {
        return page == this.activePage;
    };
    MyApp.prototype.populateRestaurants = function () {
        var _this = this;
        this.dataService.getData().subscribe(function (event) {
            switch (event.type) {
                case HttpEventType.Sent:
                    console.log('Request sent!');
                    break;
                case HttpEventType.ResponseHeader:
                    console.log('Response header received!');
                    break;
                case HttpEventType.Response:
                    console.log('Done!', event.body);
                    _this.restaurants = event.body;
            }
        });
    };
    __decorate([
        ViewChild(Nav),
        __metadata("design:type", Nav)
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Component({
            templateUrl: 'app.html'
        }),
        __metadata("design:paramtypes", [Platform, StatusBar, SplashScreen, DataService])
    ], MyApp);
    return MyApp;
}());
export { MyApp };
//# sourceMappingURL=app.component.js.map