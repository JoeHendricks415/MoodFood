import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  templateUrl: 'intro.html',
})
export class IntroPage {
  
slides = [
  {
    description: "Welcome To Mood Food!",
    image : "",
  },
  {
    description: "Pick a location or use your current location.",
    image: "",
  },
  {
    title: "",
    description: "Based on your current mood, we'll suggest food in your area that will a-peel to you.",
    image: "",
  }
];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

goToHome(){
  this.navCtrl.setRoot('HomePage');
}

}
