import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Beer } from '../../model/Beer';

@IonicPage()
@Component({
  selector: 'page-beer-details',
  templateUrl: 'beer-details.html',
})
export class BeerDetailsPage {

  private beer : Beer

  constructor(public navCtrl: NavController, public params: NavParams) {
  }

  ngOnInit(){
    this.beer = this.params.data
    console.log(this.beer);
    
  }

}
