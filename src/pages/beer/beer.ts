import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { BeerProvider } from '../../providers/beer/beer';

@IonicPage()
@Component({
  selector: 'page-beer',
  templateUrl: 'beer.html',
})
export class BeerPage {

  constructor(
    private navCtrl: NavController,
    private navParams: NavParams,
    private beer : BeerProvider) {
  }
  
  public ngOnInit(){
    
  }
}
