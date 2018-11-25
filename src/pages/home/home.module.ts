import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HomePage } from './home';
import { LoginComponent } from './components/login/login';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/compiler/src/core';
import { TastingListPageModule } from '../tasting-list/tasting-list.module';
import { RegisterPageModule } from '../register/register.module';
import { RegisterPage } from '../register/register';

@NgModule({
  declarations: [
    HomePage,
    LoginComponent,
    RegisterPage
  ],
  imports: [
    IonicPageModule.forChild(HomePage),
    LoginComponent,
    TastingListPageModule,
    RegisterPageModule
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
    NO_ERRORS_SCHEMA
	]
})
export class HomePageModule {}
