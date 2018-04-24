import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ListPage } from '../../pages/list/list';
import { HomePage } from '../../pages/home/home';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class YelpProvider {

  term:string = "";
  location:string = "";
  data: any;
  public items:any;

  constructor(public http: HttpClient) {
    let item = this.term;
  }

  getRestaurants(term:String, location:String){
    //  const endpoint = `http://localhost:8080/restaurants?term=${term}&location=${location}`;
      const endpointTwo = "http://localhost:8080/restaurants?term="+term+"&location="+location;

      let data: Observable<any> = this.http.get(endpointTwo);
      data.subscribe(result => {
      this.items = result;
      });
    return this.items;
    }
}
