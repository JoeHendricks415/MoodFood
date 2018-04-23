import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { YelpProvider } from '../../providers/yelp/yelp';
import { DestinyPage } from '../destiny/destiny';


@Component({
  selector: 'page-eats',
  templateUrl: 'eats.html',
})
export class EatsPage {

  public items:any;
  public mood:any;
  selectedItem = "";
  stringURL = "";
  location: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public http: HttpClient, public yelpProvider: YelpProvider) {
    this.location = navParams.get("location");
    console.log(location);
    this.ionViewDidLoad();
    this.getData();

  }

  ionViewDidLoad(){
    if(this.navParams.get('title') === "Liquid Courage"){
      this.stringURL = "http://localhost:8080/restaurants?term=bar&location=08078";
      this.selectedItem = "Liquid Courage";
    } else if (this.navParams.get('title') === "Healthy"){
      this.stringURL = "http://localhost:8080/restaurants?term=healthy&location=08078";
      this.selectedItem = "Healthy";
    } else if (this.navParams.get('title') === "Celebration"){
      this.stringURL = "http://localhost:8080/restaurants?term=celebration&location=08078";
      this.selectedItem = "Celebration";
    } else if (this.navParams.get('title') === "Tired"){
      this.stringURL = "http://localhost:8080/restaurants?term=coffee&location=08078";
      this.selectedItem = "Tired";
    } else if (this.navParams.get('title') === "Fancy"){
      this.stringURL = "http://localhost:8080/restaurants?term=steak&location=08078";
      this.selectedItem = "Fancy";
    } else if(this.navParams.get('title') === "Hungover"){
      this.stringURL = "http://localhost:8080/restaurants?term=greasy&location=08078";
      this.selectedItem = "Hungover";
    } else if(this.navParams.get('title') === "In A Hurry"){
      this.stringURL = "http://localhost:8080/restaurants?term=fastfood&location=08078";
      this.selectedItem = "In A Hurry";
    } else if(this.navParams.get('title') === "Munchies"){
      this.stringURL = "http://localhost:8080/restaurants?term=munchie&location=08078";
      this.selectedItem = "Munchies";
    } else if(this.navParams.get('title') === "Sad"){
      this.stringURL = "http://localhost:8080/restaurants?term=icecream&location=08078";
      this.selectedItem = "Sad";
    } else if(this.navParams.get('title') === "Lo-On-Sugar"){
      this.stringURL = "http://localhost:8080/restaurants?term=candy&location=08078";
      this.selectedItem = "Lo-On-Sugar";
    }
  }

  goAnOtherPage() {
    this.navCtrl.push(DestinyPage);
  }

  getData(){
    let data: Observable<any> = this.http.get(this.stringURL);
    data.subscribe(result => {
      this.items = result;
    });
  }

  // callService(){
  //   this.ionViewDidLoad();
  //   this.items = this.yelpProvider.getRestaurants("icecream","08087");
  // }
}