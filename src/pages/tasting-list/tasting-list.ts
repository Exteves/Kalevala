import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { AuthLoginProvider } from '../../providers/auth-login/auth-login';
import { StorageProvider } from '../../providers/storage/storage';
import { User } from '../../model/User';
import { TastingProvider } from '../../providers/tasting/tasting';
import { TastingAddPage } from '../tasting-add/tasting-add';
import { BeerPage } from '../beer/beer';
import { Tasting } from '../../model/Tasting';
import { TastingDetailsPage } from '../tasting-details/tasting-details';

@IonicPage()
@Component({
  selector: 'page-tasting-list',
  templateUrl: 'tasting-list.html',
})
export class TastingListPage {

  private user : User;
  private tasting : Tasting

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
    this.storage.get('user').then((usr) => {
      this.user = usr 
      console.log(this.user);
    })
    // this.storage.get('user').then((usr) => {
    //   console.log(usr)
    //   this.user = usr      
      this.taste.getTastingList(this.params.data.token)
      .subscribe(data => {
        this.tasting = data['resp']         
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
    this.authLogin.logout(this.params.data.token)
      .subscribe(data => {
        console.log(data)
        this.storage.remove('user')
        this.navCtrl.pop()
      })
  }

  public addTasting(){
    this.navCtrl.push(TastingAddPage, { token : this.params.data.token })
  }

  public beerList(){
    this.navCtrl.push(BeerPage)
  }

  public getTasting(){
    return this.tasting
  }

  public detailTasting(taste : Tasting){
    this.navCtrl.push(TastingDetailsPage, taste)
  }

}
