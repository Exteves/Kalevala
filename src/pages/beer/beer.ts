import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { BeerProvider } from '../../providers/beer/beer';
import { BeerAddPage } from '../beer-add/beer-add';
import { Beer } from '../../model/Beer';
import { BeerDetailsPage } from '../beer-details/beer-details';

@IonicPage()
@Component({
  selector: 'page-beer',
  templateUrl: 'beer.html',
})
export class BeerPage {

  private beerList : Beer[]

  constructor(
    private navCtrl: NavController,
    private navParams: NavParams,
    private beer : BeerProvider
    ) {
  }
  
  public ngOnInit(){
    this.beer.getBeerList()
      .subscribe(data => {
        this.beerList = data['resp']       
      })
  }

  public addBeer(){
    this.navCtrl.push(BeerAddPage)
  }

  public getBeers(){
    return this.beerList
  }

  public detailBeer(beer : Beer){
    this.navCtrl.push(BeerDetailsPage, beer)
  }
}
