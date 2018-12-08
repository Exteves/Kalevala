import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TastingListPage } from './tasting-list';
import { TastingAddPageModule } from '../tasting-add/tasting-add.module';

@NgModule({
  declarations: [
    TastingListPage,
  ],
  imports: [
    IonicPageModule.forChild(TastingListPage),
    TastingAddPageModule
  ],
})
export class TastingListPageModule {}
