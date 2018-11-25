import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-tasting-list',
  templateUrl: 'tasting-list.html',
})
export class TastingListPage {

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams
    ) {
  }

}
