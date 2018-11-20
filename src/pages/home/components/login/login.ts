import { Component } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';

/**
 * Generated class for the LoginComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'login',
  templateUrl: 'login.html'
})
export class LoginComponent {

  private loginForm : FormGroup;

  constructor(
    private formBuilder: FormBuilder
  ) {
  }

  ngOnInit(){
    this.loginForm = this.formBuilder.group({
      email: new FormControl(null, Validators.compose([Validators.required, Validators.email])),
      senha: new FormControl(null, Validators.compose([Validators.required, Validators.minLength(4)]))
    });
  }

}
