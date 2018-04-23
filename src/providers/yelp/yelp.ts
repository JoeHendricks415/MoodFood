import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
// import { LocationPage } from '../../pages/location/location';



@Injectable()
export class YelpProvider {

  data: any;
  public items:any;
  constructor(public http: HttpClient) {
    console.log('Hello YelpProvider Provider');
  }

  getRestaurants(term:String, location:String){

    //  const endpoint = `http://localhost:8080/restaurants?term=${term}&location=${location}`;
      const endpoint = `http://localhost:8080/restaurants?term=`+ term + `&location=` + location;
      const endpointTwo = "http://localhost:8080/restaurants?term="+term+"&location="+location;
  
      let data: Observable<any> = this.http.get(endpointTwo);
      data.subscribe(result => {
      this.items =result;
    });
    return this.items;
    }

  // getRestaurants(term:String, location:String){

  // //  const endpoint = `http://localhost:8080/restaurants?term=${term}&location=${location}`;
  //   const endpoint = `http://localhost:8080/restaurants?term=food&location=19107`;

  //   this.http.get(endpoint).subscribe(data => function(data){
  //     console.log('hello')
  //       console.log(data);
  //       this.data = data;
  //       console.log(data); 
  //   });
  // }
}
