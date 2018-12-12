import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Beer } from '../../model/Beer';
import { CountryProvider } from '../../providers/country/country';
import { Country } from '../../model/Country';
import { ColorProvider } from '../../providers/color/color';
import { Color } from '../../model/Color';
import { PackingProvider } from '../../providers/packing/packing';
import { Packing } from '../../model/Packing';
import { StyleProvider } from '../../providers/style/style';
import { Style } from '../../model/Style';
import { AromaProvider } from '../../providers/aroma/aroma';
import { FlavorProvider } from '../../providers/flavor/flavor';

@IonicPage()
@Component({
  selector: 'page-beer-details',
  templateUrl: 'beer-details.html',
})
export class BeerDetailsPage {

  private beer : Beer
  private country : Country
  private color : Color
  private packing : Packing
  private style : Style
  private aroma : Style
  private flavor : Style

  constructor(
    private navCtrl: NavController,
    private params: NavParams,
    private countryProv: CountryProvider,
    private colorProv : ColorProvider,
    private packingProv : PackingProvider,
    private styleProv : StyleProvider,
    private aromaProv : AromaProvider,
    private flavorProv : FlavorProvider
    ) {
  }

  ngOnInit(){
    this.beer = this.params.data
    console.log(this.beer);

    this.countryProv.getCountry(this.beer.countryOrigin)
      .subscribe(data => {
        this.country = data['resp']
      })

    this.colorProv.getColor(this.beer.color)
      .subscribe(data => {
        this.color = data['resp']
      })

    this.packingProv.getPacking(this.beer.packing)
      .subscribe(data => {
        this.packing = data['resp']
      })

    this.styleProv.getStyle(this.beer.style)
      .subscribe(data => {
        this.style = data['resp']
      })

    this.aromaProv.getAroma(this.beer.aroma)
      .subscribe(data => {
        this.aroma = data['resp']
      })

    this.flavorProv.getFlavor(this.beer.flavor)
      .subscribe(data => {
        this.flavor = data['resp']
      })   
  }

}
