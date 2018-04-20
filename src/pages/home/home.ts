import { Component } from '@angular/core';
import { NavController, Loading } from 'ionic-angular';
import { ListPage } from '../list/list';

import { IntroPage } from '../intro/intro';
import { Storage } from '@ionic/storage';
import { Geolocation, GeolocationOptions } from '@ionic-native/geolocation';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';

import {
  FormGroup,
  FormControl,
  Validators
} from '@angular/forms';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  form;
  params: Object;
  pushPage:any;
  navCtrl: any;

  selectedCity: string = "";
  selectedState: string = "";
  lat: any;
  long: any;
  addressJson:any;
  locationJson: any;
  userInput:string = "";
  geoLocation:string = "";
  zipCode:any;
  first:any;


  constructor(navCtrl: NavController, public geo: Geolocation, public http: HttpClient, public storage: Storage) {
    this.params = {id:this.geoLocation};
    this.pushPage = ListPage;
    this.getCoordinates();
    this.form = new FormGroup({
      selectedCity: new FormControl("", Validators.required),
      selectedState: new FormControl("", Validators.required)
    });
    this.userInput = this.selectedCity + " " +this.selectedState;
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
    this.params = {id:this.userInput};
    this.pushPage = ListPage;
    
    // let data: Observable<any> = this.http.get('https://maps.googleapis.com/maps/api/geocode/json?address='+this.geoLocation+'&key=AIzaSyAoDH7pW6AzXoIUqg0EXyMNWfNbrLSlL4U');
    // data.subscribe(result => {
    //   this.addressJson = result;
    // });
  }

  //take result array and get address_component, type, postal_code from it and set as location to be passed to backend
  getLocation(){
    let data: Observable<any> = this.http.get('https://maps.googleapis.com/maps/api/geocode/json?latlng='+this.lat+','+this.long+'&key=AIzaSyAoDH7pW6AzXoIUqg0EXyMNWfNbrLSlL4U');
    data.subscribe(result => {
      this.locationJson = result;
      console.log(this.locationJson);
      
    });
  }
  mapResults(array:any){
    
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
