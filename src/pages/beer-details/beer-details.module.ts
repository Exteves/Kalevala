import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BeerDetailsPage } from './beer-details';

@NgModule({
  declarations: [
    BeerDetailsPage,
  ],
  imports: [
    IonicPageModule.forChild(BeerDetailsPage),
  ],
})
export class BeerDetailsPageModule {}
