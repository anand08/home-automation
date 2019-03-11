import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { LoadingController, AlertController } from 'ionic-angular';

@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage implements OnInit {

  signUpForm: FormGroup;

  constructor(private authService: AuthService, private loadingCtrl: LoadingController, private alertCtrl: AlertController) { }

  ngOnInit() {
    this.signUpForm = new FormGroup({
      'userName': new FormControl(null, [Validators.required, Validators.minLength(2)]),
      'password': new FormControl(null, [Validators.required, Validators.minLength(8)])
    });
  }

  onSignUp() {
    const loading = this.loadingCtrl.create({
      content: 'Please wait, Signing up...'
    });
    loading.present();
    this.authService.onSignUp(this.signUpForm.value.userName, this.signUpForm.value.password).then((res: any) => {
      loading.dismiss();
    }).catch((err: any) => {
      const alert = this.alertCtrl.create({
        title: 'Signup failed',
        message: err.message,
        buttons: ['OK']
      });
      alert.present();
      loading.dismiss();
    });
  }

}
