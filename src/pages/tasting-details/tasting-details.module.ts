import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TastingDetailsPage } from './tasting-details';

@NgModule({
  declarations: [
    TastingDetailsPage,
  ],
  imports: [
    IonicPageModule.forChild(TastingDetailsPage),
  ],
})
export class TastingDetailsPageModule {}
