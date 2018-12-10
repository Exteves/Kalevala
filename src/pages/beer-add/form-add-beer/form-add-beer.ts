import { Component } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';

import { CountryProvider } from '../../../providers/country/country';
import { BeerProvider } from '../../../providers/beer/beer';

import { Beer } from '../../../model/Beer';
import { Country } from '../../../model/Country';
import { ColorProvider } from '../../../providers/color/color';
import { PackingProvider } from '../../../providers/packing/packing';
import { StyleProvider } from '../../../providers/style/style';
import { AromaProvider } from '../../../providers/aroma/aroma';
import { FlavorProvider } from '../../../providers/flavor/flavor';
import { Color } from '../../../model/Color';
import { Style } from '../../../model/Style';
import { Packing } from '../../../model/Packing';

@Component({
  selector: 'form-add-beer',
  templateUrl: 'form-add-beer.html'
})
export class FormAddBeerComponent {

  private beerForm : FormGroup
  private beer : Beer
  private countries : Country[]
  private colors : Color[]
  private styles: Style[]
  private aromas: Style[]
  private flavors: Style[]
  private packingTypes: Packing[]

  constructor(
    private countryOrigin : CountryProvider,    
    private formBuilder: FormBuilder,
    private bartender : BeerProvider,
    private colorProv: ColorProvider,
    private packingProv: PackingProvider,
    private styleProv: StyleProvider,
    private aromaProv: AromaProvider,
    private flavorProv: FlavorProvider
    ) {
  }

  public getCountries(){
    return this.countries
  }

  public getColors(){
    return this.colors
  }

  public getStyles(){
    return this.styles
  }

  public getAromas(){
    return this.aromas
  }

  public getFlavors(){
    return this.flavors
  }

  public getPackingTypes(){
    return this.packingTypes
  }

  public ngOnInit(){
    this.countryOrigin.getCountryList()
      .subscribe(data => {
        this.countries = data['resp']
      })

    this.colorProv.getColorList()
      .subscribe(data => {
        this.colors = data['resp']
      })
    
    this.packingProv.getPackingList()
      .subscribe(data => {
          this.packingTypes = data['resp']
      })

    this.aromaProv.getAromaList()
      .subscribe(data => {
        this.aromas = data['resp']
      })

    this.styleProv.getStyleList()
      .subscribe(data => {
        this.styles = data['resp']
      })
    
    this.flavorProv.getFlavorList()
      .subscribe(data => {
        this.flavors = data['resp']
      })

    this.beerForm = this.formBuilder.group({
      name: new FormControl('', Validators.compose([Validators.required])),
      brewery: new FormControl('', Validators.compose([Validators.required])),
      price: new FormControl('', Validators.compose([Validators.required])),
      countryOrigin: new FormControl('', Validators.compose([Validators.required])),
      beer: new FormControl('', Validators.compose([Validators.required])),
      abv: new FormControl('', Validators.compose([Validators.required])),
      ibu: new FormControl('', Validators.compose([Validators.required])),
      color: new FormControl('', Validators.compose([Validators.required])),
      packing: new FormControl('', Validators.compose([Validators.required])),
      style: new FormControl('', Validators.compose([Validators.required])),
      aroma: new FormControl('', Validators.compose([Validators.required])),
      flavor: new FormControl('', Validators.compose([Validators.required])),
      beerHead: new FormControl('', Validators.compose([Validators.required])),
    });
  }

  public addBeer(){
    this.beer = this.beerForm.value
    console.log(this.beer);    
    this.bartender.createBeer(this.beer)
      .subscribe(data => {
        console.log(data);
      })
  }
}
