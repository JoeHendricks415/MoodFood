import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { EatsPage } from '../eats/eats';
import { MyApp } from '../../app/app.component';

@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {
  selectedItem: any;
  icons: string[];
  moods: string[];
  items: Array<{title: string, icon: string}>;


  constructor(public navCtrl: NavController, public navParams: NavParams) {
    // If we navigated to this page, we will have an item available as a nav param
    this.selectedItem = navParams.get('item');

    this.icons = ['trophy', 'cafe', 'bowtie', 'nutrition', 'pizza', 'car',
    'beer', 'boat', 'sad', 'ice-cream'];
    this.moods = ['Celebration', 'Tired', 'Fancy', 'Healthy', 'Hungover', 'In A Hurry',
    'Liquid Courage', 'Munchies', 'Sad', 'Lo-On-Sugar'];

    this.items = [];
    for (let i = 0; i < 10; i++) {
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

  itemPush(){
    this.navCtrl.setRoot(EatsPage);
  }

}
