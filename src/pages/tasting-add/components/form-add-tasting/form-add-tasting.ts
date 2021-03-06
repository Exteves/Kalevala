import { Component } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';

import { CountryProvider } from '../../../../providers/country/country';
import { TastingProvider } from '../../../../providers/tasting/tasting';
import { StorageProvider } from '../../../../providers/storage/storage';

import { Country } from '../../../../model/Country';
import { Tasting } from '../../../../model/Tasting';
import { User } from '../../../../model/User';
import { BeerProvider } from '../../../../providers/beer/beer';
import { Beer } from '../../../../model/Beer';
import { NavParams, NavController, AlertController } from 'ionic-angular';
import { TastingListPage } from '../../../tasting-list/tasting-list';

@Component({
  selector: 'form-add-tasting',
  templateUrl: 'form-add-tasting.html'
})
export class FormAddTastingComponent {

  private tastingForm: FormGroup
  private tasting : Tasting
  private user : User
  private locations : Country[]
  private beers : Beer[]
  private ratings = [1, 2, 3, 4, 5]

  constructor(
    private country : CountryProvider,    
    private formBuilder: FormBuilder,
    private sommelier : TastingProvider,
    private storage : StorageProvider,
    private garcom : BeerProvider,
    private params : NavParams,
    private navCtrl: NavController,
    private alertCtrl: AlertController
    ) {
  }

  public ngOnInit(){
    this.country.getCountryList()
      .subscribe(data => {
        this.locations = data['resp']
      })

    this.garcom.getBeerList()
      .subscribe(data => {
        this.beers = data['resp']
        console.log(this.beers)        
      })

    this.tastingForm = this.formBuilder.group({
      location: new FormControl(0, Validators.compose([Validators.required])),
      notes: new FormControl('', Validators.compose([Validators.required])),
      beerDegrees: new FormControl(0.0, Validators.compose([Validators.required])),
      rating: new FormControl(0, Validators.compose([Validators.required])),
      beer: new FormControl(0, Validators.compose([Validators.required]))
    });

      this.storage.get('user').then((usr) => {
        this.user = usr
      })
  }

  public addTasting(){
    this.tasting = this.tastingForm.value
    this.tasting.beerDegrees = parseFloat(this.tasting.beerDegrees)
    console.log(this.tasting)    
    this.sommelier.createTasting(this.params.data.token, this.tasting)
      .subscribe(data => {
        let alert = this.alertCtrl.create({
          title: 'Yo-ho-ho!',
          subTitle: 'Degustação adicionada com sucesso!',
          buttons: ['Fechar']
        });
        alert.present();
        this.navCtrl.push(TastingListPage, { token : this.user.token})
      },err => {
          let alert = this.alertCtrl.create({
            title: 'Que pena!',
            subTitle: 'Não foi possível adicionar sua degustação.',
            buttons: ['Fechar']
          });
          alert.present();
        }
      )
  }

  public getBeers(){
    return this.beers
  }

  public getLocations(){
    return this.locations
  }

  public getRatings(){
    return this.ratings
  }

}
