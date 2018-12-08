import { Component } from '@angular/core';
import { CountryProvider } from '../../../../providers/country/country';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Tasting } from '../../../../model/Tasting';

@Component({
  selector: 'form-add-tasting',
  templateUrl: 'form-add-tasting.html'
})
export class FormAddTastingComponent {

  private tastingForm: FormGroup;
  private tasting : Tasting

  constructor(
    private location : CountryProvider,    
    private formBuilder: FormBuilder
    ) {
  }

  ngOnInit(){
    this.location.getCountryList()
      .subscribe(data => {
        console.log(data);        
      })

    this.tastingForm = this.formBuilder.group({
      location: new FormControl('', Validators.compose([Validators.required])),
      notes: new FormControl('', Validators.compose([Validators.required])),
      celsius: new FormControl('', Validators.compose([Validators.required])),
      rating: new FormControl('', Validators.compose([Validators.required])),
      beer: new FormControl('', Validators.compose([Validators.required]))
    });
  }

  addTasting(){
    this.tasting = this.tastingForm.value
    this.location.getCountryList()
      .subscribe(data => {
        console.log(data);        
      })
  }

}
