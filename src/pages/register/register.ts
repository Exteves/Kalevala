import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthLoginProvider } from '../../providers/auth-login/auth-login';
import { StorageProvider } from '../../providers/storage/storage';
import { User } from '../../model/User';
import { TastingListPage } from '../tasting-list/tasting-list';

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})

export class RegisterPage {

  private registerForm: FormGroup
  private user: User
  private validUser : Boolean

  constructor(
    public navCtrl: NavController,
    private formBuilder: FormBuilder,
    private authProvider: AuthLoginProvider,
    private storage: StorageProvider
    ) {
      this.validUser = true
  }

  ngOnInit(){
    this.registerForm = this.formBuilder.group({
      name: new FormControl('', Validators.compose([Validators.required, Validators.minLength(3)])),
      email: new FormControl('',Validators.compose([Validators.required,Validators.email])),
      passwd: new FormControl('',Validators.compose([Validators.required,Validators.minLength(6)]))
    })
  }

  signUp(){
    this.user = this.registerForm.value
    this.user.token = ""
    this.authProvider.register(this.user)
    .subscribe(
      data => {
        this.user.token = data['resp']
        if(this.user.token){
          this.validUser = true
          this.storage.set('user', this.user)
          this.navCtrl.push(TastingListPage, { token : this.user.token})
        }else{
          this.validUser = false
        }
      },
      err => {
        this.validUser = false
      }
    )
  }

  public invalidRegister(){
    return this.validUser
  }

}
