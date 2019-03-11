import { Component } from '@angular/core';
import { MqttService } from '../../services/mqtt.service';

@Component({
  selector: 'page-sensor-info',
  templateUrl: 'sensor-info.html',
})
export class SensorInfoPage {

  topicName: Array<any> = ['temperature-value', 'humidity-value', 'moisture-value', 'flame-value', 'gassensor-value'];

  constructor(private mqttService: MqttService) {
  }

  ionViewDidLoad() {
    console.log('inside');
    // let i = 0;
    // while (i < this.topicName.length) {
    //   this.mqttService.onSubscribe(this.topicName[i]);
    //   setTimeout(() => {
    //     this.mqttService.onUnSubscribe(this.topicName[i]);
    //   }, 1000);
    // }
  }

  onRefresh() {
    let i = 0;
    while (i < this.topicName.length) {
      this.mqttService.onSubscribe(this.topicName[i]);
      setTimeout(() => {
        this.mqttService.onUnSubscribe(this.topicName[i]);
      }, 1000);
    }
  }

}
