import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { EatsPage } from '../eats/eats';
import { MyApp } from '../../app/app.component';
import { YelpProvider } from '../../providers/yelp/yelp';

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
  userInput:string = "";



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

  itemPushBars(){
    // for(let i = 0; i < this.items.length; i++){
    //   if(this.items[i] === {title: 'Tired', icon: 'cafe'}){
    //     this.navCtrl.push(EatsPage);
    //   } else {
        
    //   }
    // }
    let barsSelected = {
      title: 'bars'
    };
    this.navCtrl.setRoot(EatsPage, barsSelected);
    //  item: item
  }

  itemPushHealthy(){
    let healthySelected = {
      title: 'healthy'
    };
    this.navCtrl.setRoot(EatsPage, healthySelected);
  }

  getSelectedItem(){
    return this.selectedItem;
  }

  itemSelected(item: string) {

    console.log("Selected Item", item);
    this.navCtrl.push(YelpProvider, item);
  }
}
