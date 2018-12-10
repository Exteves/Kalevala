import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-beer-add',
  templateUrl: 'beer-add.html',
})
export class BeerAddPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
}
