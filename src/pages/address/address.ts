import { HomePage } from '../home/home';
import { NavController } from 'ionic-angular';


export class Address{

    street_number:any;
    route:any;
    locality:any;
    administrative_area_level_2:any;
    administrative_area_level_1:any;
    country:any;
    postal_code:any;

    constructor(navCtrl: NavController, public geo: Geolocation, public storage: Storage) {
    this.buildAddress();
    
    }

    buildAddress(){
        
    }
}