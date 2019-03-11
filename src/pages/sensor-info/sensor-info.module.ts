import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SensorInfoPage } from './sensor-info';

@NgModule({
  declarations: [
    SensorInfoPage,
  ],
  imports: [
    IonicPageModule.forChild(SensorInfoPage),
  ],
})
export class SensorInfoPageModule {}
