import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TastingAddPage } from './tasting-add';
import { FormAddTastingComponent } from './components/form-add-tasting/form-add-tasting';

@NgModule({
  declarations: [
    TastingAddPage,
    FormAddTastingComponent
  ],
  imports: [
    IonicPageModule.forChild(TastingAddPage)
  ],
  exports: [
    FormAddTastingComponent
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
    NO_ERRORS_SCHEMA
	]
})
export class TastingAddPageModule {}
