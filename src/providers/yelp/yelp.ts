import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ListPage } from '../../pages/list/list';
import { HomePage } from '../../pages/home/home';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class YelpProvider {

  term:string = "";
<<<<<<< HEAD
  location:any;
  paramData: any;

=======
  location:string = "";
  data: any;
  public items:any;
>>>>>>> master
  constructor(public http: HttpClient) {
    let item = this.term;
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

<<<<<<< HEAD
    this.http.get(endpoint).subscribe(data => function(data){
      console.log('hello')
        console.log(data);
        this.data = data;
        console.log(data); 
    })
  }
  setLocation(){
    
  }
=======
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
>>>>>>> master
}
