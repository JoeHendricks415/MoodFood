import { Component } from '@angular/core';
import { NavController, Loading, NavParams } from 'ionic-angular';
import { ListPage } from '../list/list';

import { IntroPage } from '../intro/intro';
import { Storage } from '@ionic/storage';
import { Geolocation, GeolocationOptions } from '@ionic-native/geolocation';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { YelpProvider } from '../../providers/yelp/yelp';
import { EatsPage } from '../eats/eats';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  form:FormGroup;
  params: Object;
  pushPage:any;
  navCtrl: any;

  selectedCity: string = "";
  selectedState: string = "";
  lat: any;
  long: any;
  locationJson: any;
  city:string;
  state:string;
  
 
 
  constructor(navCtrl: NavController, public geo: Geolocation, public http: HttpClient, public storage: Storage, public yelpProvider: YelpProvider, public navParams: NavParams) {
    
    this.pushPage = ListPage;
    this.getCoordinates();
    this.form = new FormGroup({
      selectedCity: new FormControl("", [Validators.required, Validators.pattern('[a-zA-Z ]*')]),
      selectedState: new FormControl("", [Validators.required, Validators.pattern('[a-zA-Z ]*')])
    });
    
  }


  getCoordinates(){
    let options = {
      timeout:50000,
      enableHighAccuracy:false
    };
      this.geo.getCurrentPosition(options).then( pos => {
      this.lat = pos.coords.latitude;
      this.long = pos.coords.longitude;
      
      this.getLocation();
    }).catch( err => console.log(err));
    
  }

//convert input from user to postal_code to be sent as location passed to backend
  setInput(){
    
    this.pushPage = ListPage; 
  
  }

  //take result array and get address_component, type, postal_code from it and set as location to be passed to backend
  getLocation(){
    let data: Observable<any> = this.http.get('https://maps.googleapis.com/maps/api/geocode/json?latlng='+this.lat+','+this.long+'&key=AIzaSyAoDH7pW6AzXoIUqg0EXyMNWfNbrLSlL4U');
    data.subscribe(result => {
      this.locationJson = result;
      console.log(this.locationJson);
      // console.log(JSON.stringify(this.locationJson));
      this.city = this.mapCity(this.locationJson);
      this.state = this.mapState(this.locationJson);
      console.log(this.city + " " + this.state);
      
    });
  }
  
  mapCity(array:any){
    let city;
    array.results[0].address_components.forEach(  (obj)  =>{
      if(obj.types.includes('locality')){
        city= obj.long_name;
      }
    });
    return city;
  }
  mapState(array:any){
    let state;
    array.results[0].address_components.forEach(element => {
      if(element.types.includes('administrative_area_level_1')){
        state = element.short_name;
      }
    });
    return state;
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
