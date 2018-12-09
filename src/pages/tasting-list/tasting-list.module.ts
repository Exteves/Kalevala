import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TastingListPage } from './tasting-list';
import { TastingAddPageModule } from '../tasting-add/tasting-add.module';
import { BeerPageModule } from '../beer/beer.module';

@NgModule({
  declarations: [
    TastingListPage,
  ],
  imports: [
    IonicPageModule.forChild(TastingListPage),
    TastingAddPageModule,
    BeerPageModule
  ],
})
export class TastingListPageModule {}
