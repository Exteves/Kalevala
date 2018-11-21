import { Component } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { AuthLoginProvider } from '../../../../providers/auth-login/auth-login';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'login',
  templateUrl: 'login.html'
})
export class LoginComponent {

  private loginForm : FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private authLogin: AuthLoginProvider,
    private navCtrl : NavController
  ) {
  }

  ngOnInit(){
    this.loginForm = this.formBuilder.group({
      email: new FormControl('', Validators.compose([Validators.required, Validators.email])),
      senha: new FormControl('', Validators.compose([Validators.required, Validators.minLength(4)]))
    });
  }

  signIn(){
    console.log(this.authLogin.loginIn(this.loginForm.value));
  }

}
