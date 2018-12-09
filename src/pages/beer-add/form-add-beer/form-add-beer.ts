import { Component } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { CountryProvider } from '../../../providers/country/country';
import { Beer } from '../../../model/Beer';
import { BeerProvider } from '../../../providers/beer/beer';

@Component({
  selector: 'form-add-beer',
  templateUrl: 'form-add-beer.html'
})
export class FormAddBeerComponent {

  private beerForm : FormGroup;
  private beer : Beer

  constructor(
    private countryOrigin : CountryProvider,    
    private formBuilder: FormBuilder,
    private bartender : BeerProvider) {;
  }

  public ngOnInit(){
    this.countryOrigin.getCountryList()
      .subscribe(data => {
        console.log(data);        
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
    this.bartender.createBeer(this.beer)
      .subscribe(data => {
        console.log(data);
        
      })
  }
}
