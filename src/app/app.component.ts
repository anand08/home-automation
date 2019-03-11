import { Component, ViewChild } from '@angular/core';
import { Platform, NavController, MenuController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { SigninPage } from '../pages/signin/signin';
import { SignupPage } from '../pages/signup/signup';
import firebase from 'firebase';
import { AuthService } from '../services/auth.service';
import { TabPage } from '../pages/tabs/tabs.page';
import { MqttService } from '../services/mqtt.service';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootpage: any = SigninPage;
  signUpPage = SignupPage;
  devicesPage = TabPage;
  isAuthenticated: boolean = false;

  @ViewChild('nav') nav: NavController;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, private menuCrtl: MenuController,
    private authService: AuthService, private mqttService: MqttService) {
    firebase.initializeApp({
      apiKey: "AIzaSyBoN4BslsyK9_Ho4vY5DNu-19oz7B3IxEM",
      authDomain: "home-automation-e7e29.firebaseapp.com"
    });
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.isAuthenticated = true;
        this.rootpage = TabPage;
      } else {
        this.isAuthenticated = false;
        this.rootpage = SigninPage;
      }
    });
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }

  onLoad(page: any) {
    if (page == TabPage) {
      this.mqttService.onDisconnect();
    }
    setTimeout(() => {
      this.nav.setRoot(page);
      this.menuCrtl.close();
    }, 1000);

  }

  onLogout() {
    setTimeout(() => {
      this.authService.onLogout();
      this.menuCrtl.close();
      this.nav.setRoot(SigninPage);
    }, 1000);
    this.mqttService.onDisconnect();
  }
}

