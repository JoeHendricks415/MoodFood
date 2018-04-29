import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { EatsPage } from '../eats/eats';
import { MyApp } from '../../app/app.component';
//import { YelpProvider } from '../../providers/yelp/yelp';

@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {
  selectedItem: string;
  icons: string[];
  moods: string[];
  items: Array<{title: string, icon: string}>;
  icons2: string[];
  
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    // If we navigated to this page, we will have an item available as a nav param
    this.selectedItem = navParams.get('item');
    this.icons = ['trophy', 'cafe', 'bowtie', 'nutrition', 'pizza', 'car',
    'beer', 'glasses', 'ice-cream', 'ice-cream', 'nutrition', 'cash', 'car', 'boat',
    'egg', 'rose'];
    this.moods = ['Celebration', 'Tired', 'Fancy', 'Healthy', 'Hungover', 'In A Hurry',
    'Liquid Courage', 'Munchies', 'Sad', 'Lo-On-Sugar', 'Fruity', 'Broke', 'Lazy',
     'Fishy', 'Morning Delight', 'Organic'];

    this.items = [];
    for (let i = 0; i < 16; i++) {
      this.items.push({
        title: this.moods[i],
        icon: this.icons[i]
      });
    }
  }

  getSelectedItem(){
    return this.selectedItem;
  }

  itemSelected(item: string) {
    console.log("Selected Item", item);
    this.navCtrl.push(EatsPage, item);
  }
}
