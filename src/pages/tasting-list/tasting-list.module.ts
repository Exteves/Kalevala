import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TastingListPage } from './tasting-list';

@NgModule({
  declarations: [
    TastingListPage,
  ],
  imports: [
    IonicPageModule.forChild(TastingListPage),
  ],
})
export class TastingListPageModule {}
