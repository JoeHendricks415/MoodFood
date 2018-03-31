import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { LoadingController } from 'ionic-angular';
import { Storage } from '@ionic/storage';

import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { EatsPage } from '../pages/eats/eats';
import { DestinyPage } from '../pages/destiny/destiny';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;
  activePage: any;
  loader: any;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen, public loadingCtrl: LoadingController, public storage: Storage) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Location', component: HomePage },
      { title: 'Mood', component: ListPage },
      { title: 'Local Eats', component: EatsPage },
      { title: 'Your Destiny', component: DestinyPage }
    ];
    this.activePage = this.pages[0];
  
  this.presentLoading();

  this.platform.ready().then(() => {

    this.storage.get('introShown').then((result) => {

  if(result){
      this.rootPage = 'HomePage';
    } else {
      this.rootPage = 'Intro';
      this.storage.set('introShown', true);
    }
    this.loader.dismiss();
  });
});
  }
  presentLoading(){
    this.loader = this.loadingCtrl.create({
      content: "Authenticating..."
    });
    this.loader.present();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
    this.activePage = page;
  }

  checkActive(page){
    return page == this.activePage;
  }

}
