import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Tasting } from '../../model/Tasting';
import { CountryProvider } from '../../providers/country/country';
import { Country } from '../../model/Country';
import { Beer } from '../../model/Beer';
import { BeerProvider } from '../../providers/beer/beer';

@IonicPage()
@Component({
  selector: 'page-tasting-details',
  templateUrl: 'tasting-details.html',
})
export class TastingDetailsPage {

  private taste : Tasting
  private country : Country
  private beer : Beer

  constructor(
    public navCtrl: NavController,
    public params: NavParams,
    private countryProv: CountryProvider,
    private garcom : BeerProvider) {
  }

  ngOnInit(){
    this.taste = this.params.data

    this.countryProv.getCountry(this.taste.location)
      .subscribe(data => {
      this.country = data['resp']
    })

    this.garcom.getBeer(this.taste.id)
      .subscribe(data => {
        this.beer = data['resp']
      })

  }

  public getNotes(){
    return this.taste.notes
  }

  public getRating(){
    return this.taste.rating
  }

  public getBeerDegrees(){
    return this.taste.beerDegrees
  }

}
