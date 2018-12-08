import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { AuthLoginProvider } from '../../providers/auth-login/auth-login';
import { StorageProvider } from '../../providers/storage/storage';
import { User } from '../../model/User';
import { TastingProvider } from '../../providers/tasting/tasting';
import { TastingAddPage } from '../tasting-add/tasting-add';

@IonicPage()
@Component({
  selector: 'page-tasting-list',
  templateUrl: 'tasting-list.html',
})
export class TastingListPage {

  private user : User;

  constructor(
    private navCtrl: NavController,
    private authLogin: AuthLoginProvider,
    private storage: StorageProvider,
    private alertController: AlertController,
    private taste: TastingProvider
    ) {
  }

  ngOnInit(){
    this.storage.get('user').then((usr) => {
      this.user = usr;
      console.log(this.user)
      console.log(this.user.token)      
      this.taste.getTastingList(this.user)
      .subscribe(data => {
        console.log(data);        
      })
    }).catch((err) => {
      this.alertController.create({
        title: 'Erro',
        message: err,
        buttons: [{
          text: 'Tentar novamente',
          role: 'cancel'
        }]
      }).present()
    })
  }

  public signOut(){
    this.authLogin.logout(this.user)
      .subscribe(data => {
        console.log(data)
        this.navCtrl.pop()
      })
  }

  public addTasting(){
    this.navCtrl.push(TastingAddPage)
  }

}
