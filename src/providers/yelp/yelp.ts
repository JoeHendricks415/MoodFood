import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ListPage } from '../../pages/list/list';
import { HomePage } from '../../pages/home/home';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class YelpProvider {

  term:string = "";

  location:any;
  paramData: any;
  data: any;
  public items:any;

  endpoint = "https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json";


  constructor(public http: HttpClient) {
    let item = this.term;
  }

  getRestaurants(term:String, location:String){
      const endpointTwo = "http://localhost:8080/restaurants?term="+term+"&location="+location;

      let data: Observable<any> = this.http.get(endpointTwo);
      data.subscribe(result => {
      this.items = result;
      });
    return this.items;
    }
    getCities() {
      return this.http.get(this.endpoint);
    }
}
