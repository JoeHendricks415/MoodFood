import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { YelpProvider } from '../../providers/yelp/yelp';
import { DestinyPage } from '../destiny/destiny';
import { HomePage } from '../home/home';
import { Storage } from '@ionic/storage';


@Component({
  selector: 'page-eats',
  templateUrl: 'eats.html',
})
export class EatsPage {

  public items:any;
  public mood:any;
  selectedItem = "";
  titleItem = "";
  stringURL = "";

  userInput:string = "";

  itemList: any;
  city= "";
  state= "";
  cityAndState = "";
  
  constructor(public navCtrl: NavController, public navParams: NavParams, public http: HttpClient, public yelpProvider: YelpProvider, public storage: Storage) {
    
    }

    checkForStorageInput(){
        return this.storage.get('location').then((list) => {
          console.log(list);
          this.cityAndState = list;
        
        });
    }

    ionViewDidLoad(){
      console.log(this.items)
      this.checkForStorageInput().then((res) => {
        this.checkForSelectedItem();
      
        // This one for getData returns Yelp data fast but does not use a Provider.
        this.getData(this.selectedItem, this.cityAndState);
        
        // Use this one for the Yelp Provider ... it's not returning data fast enough. Needs fix
        // this.getDataTest(this.selectedItem, this.cityAndState);
      });   
  }

  checkForSelectedItem(){
    if(this.navParams.get('title') === "Liquid Courage"){
      this.selectedItem = "bar";
      this.titleItem = "Liquid Courage";
    } else if (this.navParams.get('title') === "Healthy"){
      this.selectedItem = "healthy";
      this.titleItem = "Healthy";
    } else if (this.navParams.get('title') === "Celebration"){
      this.selectedItem = "celebration";
      this.titleItem = "Celebration";
    } else if (this.navParams.get('title') === "Tired"){
      this.selectedItem = "coffee";
      this.titleItem = "Tired";
    } else if (this.navParams.get('title') === "Fancy"){
      this.selectedItem = "steak";
      this.titleItem = "Fancy";
    } else if(this.navParams.get('title') === "Hungover"){
      this.selectedItem = "greasy";
      this.titleItem = "Hungover";
    } else if(this.navParams.get('title') === "In A Hurry"){
      this.selectedItem = "fastfood";
      this.titleItem = "In A Hurry";
    } else if(this.navParams.get('title') === "Munchies"){
      this.selectedItem = "munchies";
      this.titleItem = "Munchies";
    } else if(this.navParams.get('title') === "Sad"){
      this.selectedItem = "icecream";
      this.titleItem = "Sad";
    } else if(this.navParams.get('title') === "Lo-On-Sugar"){
      this.selectedItem = "candy";
      this.titleItem = "Lo-On-Sugar";
    } else if(this.navParams.get('title') === "Fruity"){
      this.selectedItem = "fruits";
      this.titleItem = "Fruity";
    } else if(this.navParams.get('title') === "Broke"){
      this.selectedItem = "dollar store";
      this.titleItem = "Broke";
    } else if(this.navParams.get('title') === "Lazy"){
      this.selectedItem = "delivery";
      this.titleItem = "Lazy";
    } else if(this.navParams.get('title') === "Fishy"){
      this.selectedItem = "sushi";
      this.titleItem = "Fishy";
    } else if(this.navParams.get('title') === "Morning Delight"){
      this.selectedItem = "breakfast";
      this.titleItem = "Morning Delight";
    } else if(this.navParams.get('title') === "Organic"){
      this.selectedItem = "organic";
      this.titleItem = "Organic";
    }
  }

  getDataTest(term:String, location:String){
    this.items = this.yelpProvider.getRestaurants(term, location);
  }

  getData(term:String, location:String){
    const endpointTwo = "https://mood-foods.herokuapp.com/restaurants?term="+term+"&location="+location;
    let data: Observable<any> = this.http.get(endpointTwo);
    data.subscribe(result => {
      
      this.items = result;
      console.log(this.items)
    });
  }
}