import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BeerPage } from './beer';
import { BeerAddPageModule } from '../beer-add/beer-add.module';

@NgModule({
  declarations: [
    BeerPage,
  ],
  imports: [
    IonicPageModule.forChild(BeerPage),
    BeerAddPageModule
  ],
})
export class BeerPageModule {}
