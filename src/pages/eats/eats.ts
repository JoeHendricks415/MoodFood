import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { YelpProvider } from '../../providers/yelp/yelp';


@Component({
  selector: 'page-eats',
  templateUrl: 'eats.html',
})
export class EatsPage {

  public items:any;
  public mood:any;
  selectedItem: string;
  stringURL = "";

  constructor(public navCtrl: NavController, public navParams: NavParams, public http: HttpClient, public yelpProvider: YelpProvider) {
    this.ionViewDidLoad();
    this.getData();
  }

  ionViewDidLoad(){
    if(this.navParams.get('title') === "Liquid Courage"){
      this.stringURL = "http://localhost:8080/restaurants?term=bar&location=08087";
      //this.selectedItem = 'assets/mock/bars.json';
    } else if (this.navParams.get('title') === "Healthy"){
      this.stringURL = "http://localhost:8080/restaurants?term=healthy&location=08087";
    } else if (this.navParams.get('title') === "Celebration"){
      this.stringURL = "http://localhost:8080/restaurants?term=celebration&location=08087";
    } else if (this.navParams.get('title') === "Tired"){
      this.stringURL = "http://localhost:8080/restaurants?term=coffee&location=08087";
    } else if (this.navParams.get('title') === "Fancy"){
      this.stringURL = "http://localhost:8080/restaurants?term=steak&location=08087";
    } else if(this.navParams.get('title') === "Hungover"){
      this.stringURL = "http://localhost:8080/restaurants?term=greasy&location=08087";
    } else if(this.navParams.get('title') === "In A Hurry"){
      this.stringURL = "http://localhost:8080/restaurants?term=fastfood&location=08087";
    } else if(this.navParams.get('title') === "Munchies"){
      this.stringURL = "http://localhost:8080/restaurants?term=munchie&location=08087";
    } else if(this.navParams.get('title') === "Sad"){
      this.stringURL = "http://localhost:8080/restaurants?term=icecream&location=08087";
    } else if(this.navParams.get('title') === "Lo-On-Sugar"){
      this.stringURL = "http://localhost:8080/restaurants?term=candy&location=08087";
    }
  }

  getData(){
    //this.ionViewDidLoad();
    //console.log(this.stringURL);
    //let url = 'assets/mock/bars.json';
    let data: Observable<any> = this.http.get(this.stringURL);
    data.subscribe(result => {
      this.items = result;
    });
  }
  callService(){
    this.yelpProvider.getRestaurants(null,null);

  }
  
}