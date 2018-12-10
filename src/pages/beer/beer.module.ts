import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BeerPage } from './beer';
import { BeerAddPageModule } from '../beer-add/beer-add.module';
import { BeerDetailsPageModule } from '../beer-details/beer-details.module';

@NgModule({
  declarations: [
    BeerPage,
  ],
  imports: [
    IonicPageModule.forChild(BeerPage),
    BeerAddPageModule,
    BeerDetailsPageModule
  ],
})
export class BeerPageModule {}
