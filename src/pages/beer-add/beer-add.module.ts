import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BeerAddPage } from './beer-add';
import { FormAddBeerComponent } from './form-add-beer/form-add-beer';

@NgModule({
  declarations: [
    BeerAddPage,
    FormAddBeerComponent
  ],
  imports: [
    IonicPageModule.forChild(BeerAddPage),
  ],
  exports: [
    FormAddBeerComponent
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
    NO_ERRORS_SCHEMA
	]
})
export class BeerAddPageModule {}
