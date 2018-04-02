import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'page-eats',
  templateUrl: 'eats.html',
})
export class EatsPage {


  public items:any;
  public mood:any;
  selectedItem: string;
  stringURL = "";

  constructor(public navCtrl: NavController, public navParams: NavParams, public http: HttpClient) {
    this.ionViewDidLoad();
    this.getData();
  }

  ionViewDidLoad(){
    if(this.navParams.get('title') === "Liquid Courage"){
      //console.log("found match");
      this.stringURL = "assets/mock/barsTest.json";
      //console.log(this.stringURL);
      //this.selectedItem = 'assets/mock/bars.json';
    } else if (this.navParams.get('title') === "Healthy"){
      this.stringURL = 'assets/mock/healthy.json';
      //console.log(this.navParams.get('title'));
    }
  }

  getData(){
    //this.ionViewDidLoad();
    //console.log(this.stringURL);
    //let url = 'assets/mock/bars.json';
    let data: Observable<any> = this.http.get(this.stringURL);
    data.subscribe(result => {
      this.items = result;
    });
  }


  
}
