import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TastingListPage } from './tasting-list';
import { TastingAddPageModule } from '../tasting-add/tasting-add.module';
import { BeerPageModule } from '../beer/beer.module';
import { TastingDetailsPageModule } from '../tasting-details/tasting-details.module';

@NgModule({
  declarations: [
    TastingListPage,
  ],
  imports: [
    IonicPageModule.forChild(TastingListPage),
    TastingAddPageModule,
    BeerPageModule,
    TastingDetailsPageModule
  ],
})
export class TastingListPageModule {}
