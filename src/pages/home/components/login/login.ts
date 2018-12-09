import { Component, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { AuthLoginProvider } from '../../../../providers/auth-login/auth-login';
import { NavController, AlertController } from 'ionic-angular';
import { User } from '../../../../model/User';
import { StorageProvider } from '../../../../providers/storage/storage';
import { TastingListPage } from '../../../tasting-list/tasting-list';
import { RegisterPage } from '../../../register/register';

@Component({
  selector: 'login',
  templateUrl: 'login.html'
})
export class LoginComponent {

  private loginForm : FormGroup;
  private showTopBar = new EventEmitter<boolean>();
  private user : User;

  constructor(
    private formBuilder: FormBuilder,
    private authLogin: AuthLoginProvider,
    private navCtrl : NavController,
    private storage: StorageProvider,
    private alertController: AlertController
  ) {
  }

  ngOnInit(){
    this.loginForm = this.formBuilder.group({
      email: new FormControl('', Validators.compose([Validators.required, Validators.email])),
      passwd: new FormControl('', Validators.compose([Validators.required, Validators.minLength(4)]))
    });
  }

  signIn(){
    this.user = this.loginForm.value
    this.authLogin.loginIn(this.user)
    .subscribe(
      data => {
        this.user.token = data['resp']
        if(this.user.token){
          this.storage.set('user', this.user)
          this.navCtrl.push(TastingListPage, { token : this.user.token})
        }else{
          this.alertController.create({
            title: 'Deu ruim',
            message: 'Não foi possível efetuar o login',
            buttons: [{
              text: 'Tentar novamente',
              role: 'cancel'
            }]
          }).present()
        }
      }
    ),
    error => {
      this.alertController.create({
        title: 'Erro',
        message: 'Azedou no login',
        buttons: [{
          text: 'Tentar novamente',
          role: 'cancel'
        }]
      }).present()
    };
  }

  signUp(){
    this.navCtrl.push(RegisterPage)
  }

}
