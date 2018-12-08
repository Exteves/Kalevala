import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LoginComponent } from '../pages/home/components/login/login';
import { AuthLoginProvider } from '../providers/auth-login/auth-login';

import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { StorageProvider } from '../providers/storage/storage';
import { IonicStorageModule } from '@ionic/storage';
import { RegisterPage } from '../pages/register/register';
import { RegisterPageModule } from '../pages/register/register.module';
import { TastingProvider } from '../providers/tasting/tasting';
import { CountryProvider } from '../providers/country/country';
import { BeerProvider } from '../providers/beer/beer';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule,
    HttpModule,
    IonicStorageModule.forRoot(),
    RegisterPageModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginComponent,
    RegisterPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthLoginProvider,
    StorageProvider,
    TastingProvider,
    CountryProvider,
    BeerProvider
  ]
})
export class AppModule {}
