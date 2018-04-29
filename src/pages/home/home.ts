import { Component, OnInit } from '@angular/core';
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
export class HomePage implements OnInit{

  form:FormGroup;
  params: Object;
  pushPage:any;
  navCtrl: any;

  selectedCityAndState: string = "";
  lat: any;
  long: any;
  locationJson: any;
  city:string;
  state:string;
  location:string;
  currentInput:any;
  
  cities = [];
  filteredCities = [];
 
  constructor(navCtrl: NavController, public geo: Geolocation, public http: HttpClient, public storage: Storage, public yelpProvider: YelpProvider) {
    this.pushPage = ListPage;
    this.getCoordinates();
    this.currentInput = "Searching location...";
    this.form = new FormGroup({
      selectedCityAndState: new FormControl("", [Validators.required, Validators.pattern('[a-zA-Z ]*')])
    });
    //this.userInput = this.selectedCity + " " +this.selectedState;
    // this.storage.get('location').then((val) =>{
    //   if (val != null){
    //     let location = JSON.parse(val);
    //     this.selectedCity = location.city;
    //     this.selectedState = location.state;
    //   } else {
    //     this.selectedCity = "Beach Haven";
    //     this.selectedState = 'NJ';
    //   }
    // });
    
  }
  ngOnInit() {
    this.yelpProvider.getCities().subscribe( data =>  this.cities = [].slice.call(data));
  }

  onKey(element) { 
    this.currentInput = element.value;
    if(this.currentInput !== ""){
      const regExpression = new RegExp(this.currentInput, 'gi');
      const matchedCities = this.cities.filter( place => place.city.match(regExpression) || place.state.match(regExpression));
      this.filteredCities = matchedCities;
    }
    else {
      this.filteredCities = [];
    }
    console.log(this.filteredCities);
  }

  saveAutoComplete(city: string, state: string){
    console.log(city + state);
    this.selectedCityAndState = city + " " + state;
    this.currentInput = "";
    this.onKey(this.currentInput);
    this.filteredCities = [];
  }

  saveLocationManually(){
    let location = this.selectedCityAndState;
    console.log(location)
    this.storage.set('location', JSON.stringify(location));
    console.log(this.location);
  }

  saveLocationGeo(){
    let location = this.location;
    console.log(location);
    console.log(this.selectedCityAndState);

    this.storage.set('location', JSON.stringify(location));

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

  userLocation(location: string) {
    this.navCtrl.push(EatsPage, {
    userInput: this.selectedCityAndState
    });  
  } 

  getLocation(){
    let data: Observable<any> = this.http.get('https://maps.googleapis.com/maps/api/geocode/json?latlng='+this.lat+','+this.long+'&key=AIzaSyAoDH7pW6AzXoIUqg0EXyMNWfNbrLSlL4U');
    data.subscribe(result => {
      this.locationJson = result;
      console.log(this.locationJson);
      this.city = this.mapCity(this.locationJson);
      this.state = this.mapState(this.locationJson);
      this.location = this.city + this.state;
      this.currentInput = this.city + " " + this.state;
      console.log(this.location);
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

