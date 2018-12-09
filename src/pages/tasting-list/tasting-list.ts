import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { AuthLoginProvider } from '../../providers/auth-login/auth-login';
import { StorageProvider } from '../../providers/storage/storage';
import { User } from '../../model/User';
import { TastingProvider } from '../../providers/tasting/tasting';
import { TastingAddPage } from '../tasting-add/tasting-add';
import { BeerPage } from '../beer/beer';

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
    private taste: TastingProvider,
    private params : NavParams
    ) {
  }

  ngOnInit(){
    // this.storage.get('user').then((usr) => {
    //   console.log(usr)
    //   this.user = usr      
      this.taste.getTastingList(this.params.data.token)
      .subscribe(data => {
        console.log(data);        
      })
    // }).catch((err) => {
    //   this.alertController.create({
    //     title: 'Erro',
    //     message: 'Erro para puxar o usuário do storage',
    //     buttons: [{
    //       text: 'Tentar novamente',
    //       role: 'cancel'
    //     }]
    //   }).present()
    // })
    // console.log(this.user.token);
  }

  public signOut(){
    this.authLogin.logout(this.user)
      .subscribe(data => {
        console.log(data)
        this.storage.remove('user')
        this.navCtrl.pop()
      })
  }

  public addTasting(){
    this.navCtrl.push(TastingAddPage)
  }

  public beerList(){
    this.navCtrl.push(BeerPage)
  }

}
