import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { BeerProvider } from '../../providers/beer/beer';
import { BeerAddPage } from '../beer-add/beer-add';

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
    this.beer.getBeerList()
      .subscribe(data => {
        console.log(data);        
      })
  }

  public addBeer(){
    this.navCtrl.push(BeerAddPage)
  }
}
