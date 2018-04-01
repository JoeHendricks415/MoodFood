import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ListPage } from '../list/list';
import { IntroPage } from '../intro/intro';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public storage: Storage) {

  }

  itemPush(){
    this.navCtrl.setRoot(ListPage);
  }

  ionViewDidLoad(){
  this.storage.get('intro-done').then(done => {
    if(!done){
      this.storage.set('intro-done', true);
      this.navCtrl.setRoot(IntroPage);
    }
  });
}
}
