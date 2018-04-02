import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ListPage } from '../list/list';

import { IntroPage } from '../intro/intro';
import { Storage } from '@ionic/storage';

import { Geolocation } from '@ionic-native/geolocation';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {


  inputValue: string = "";
  lat: any;
  long: any;
  locationJson: any;
  city: any;
  state: any;


  constructor(public navCtrl: NavController, public geo: Geolocation, public http: HttpClient, public storage: Storage) {
    this.getCoordinates();
  }

  getCoordinates(){
    let options = {
      timeout:50000,
      enableHighAccuracy:false
    };
    this.geo.getCurrentPosition(options).then( pos => {
      this.lat = pos.coords.latitude;
      this.long = pos.coords.longitude;
      console.log(pos.coords.latitude);
      console.log(pos.coords.longitude);
    }).catch( err => console.log(err));
  }

  getData(){
    let data: Observable<any> = this.http.get('https://maps.googleapis.com/maps/api/geocode/json?latlng='+this.lat+','+this.long+'&key=AIzaSyAoDH7pW6AzXoIUqg0EXyMNWfNbrLSlL4U');
    data.subscribe(result => {
      this.locationJson = result;
      console.log(this.locationJson);
    });
  }

  getCity(){
    this.city = this.locationJson.results.address_components[3].long_name;
    console.log(this.city);
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

  setInputValue(){
    this.inputValue;
  }

  getInputValue(){
    console.log(this.inputValue);
  }


}
