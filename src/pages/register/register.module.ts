import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RegisterPage } from './register';
import { TastingListPageModule } from '../tasting-list/tasting-list.module';

@NgModule({
  declarations: [
    RegisterPage,
  ],
  imports: [
    IonicPageModule.forChild(RegisterPage),
    TastingListPageModule
  ],
})
export class RegisterPageModule {}
