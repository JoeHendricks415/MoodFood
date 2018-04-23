import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { EatsPage } from '../pages/eats/eats';
import { DestinyPage } from '../pages/destiny/destiny';
import { HttpClientModule } from '@angular/common/http';
import { Geolocation } from '@ionic-native/geolocation';
import { AboutPage } from '../pages/about/about';
//import { AddressPage } from '../pages/address/address';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { IonicStorageModule } from '@ionic/storage';
import { IntroPage } from '../pages/intro/intro';
import { YelpProvider } from '../providers/yelp/yelp';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    EatsPage,
    DestinyPage,
    IntroPage,
    AboutPage,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot(),
    HttpClientModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    EatsPage,
    DestinyPage,
    IntroPage,
    AboutPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Geolocation,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    YelpProvider
    
  ]
})
export class AppModule {}
