import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { DevicesPage } from '../pages/devices/devices';
import { SigninPage } from '../pages/signin/signin';
import { SignupPage } from '../pages/signup/signup';
import { SensorInfoPage } from '../pages/sensor-info/sensor-info';
import { AuthService } from '../services/auth.service';
import { DeviceService } from '../services/devices.service';
import { MqttService } from '../services/mqtt.service';
import { TabPage } from '../pages/tabs/tabs.page';

@NgModule({
  declarations: [
    MyApp,
    DevicesPage,
    SigninPage,
    SignupPage,
    SensorInfoPage,
    TabPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    DevicesPage,
    SigninPage,
    SignupPage,
    SensorInfoPage,
    TabPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    MqttService,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    AuthService,
    DeviceService
  ]
})
export class AppModule { }
