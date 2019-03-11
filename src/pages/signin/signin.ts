import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { LoadingController, AlertController } from 'ionic-angular';

@Component({
  selector: 'page-signin',
  templateUrl: 'signin.html',
})
export class SigninPage implements OnInit {

  signInForm: FormGroup;

  constructor(private authService: AuthService, private loadingCtrl: LoadingController, private alertCtrl: AlertController) { }

  ngOnInit() {
    this.signInForm = new FormGroup({
      'userName': new FormControl(null, [Validators.required, Validators.minLength(2)]),
      'password': new FormControl(null, [Validators.required])
    });
  }

  onLogin() {
    const loading = this.loadingCtrl.create({
      content: 'Please wait, Signing in...'
    });
    loading.present();
    this.authService.onSignIn(this.signInForm.value.userName, this.signInForm.value.password).then((res: any) => {
      loading.dismiss();
    }).catch((err) => {
      const alert = this.alertCtrl.create({
        title: 'Login failed',
        message: err.message,
        buttons: ['OK']
      });
      alert.present();
      loading.dismiss();
    })
  }
}
