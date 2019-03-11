import { Component, OnInit } from '@angular/core';
import { DeviceService } from '../../services/devices.service';
import { Toggle } from 'ionic-angular';
import { MqttService } from '../../services/mqtt.service';

@Component({
  selector: 'page-devices',
  templateUrl: 'devices.html',
})
export class DevicesPage {
  loads: Array<any> = [];
  message: any;

  constructor(private deviceService: DeviceService, private mqttService: MqttService) {
    if (!this.mqttService.isConnectionEstablished()) {
      this.mqttService.onConnect();
    }
  }

  ionViewDidLoad() {
    this.loads = this.deviceService.getAllLoads();
  }

  onDeviceTurnOnOff(event: Toggle, index: number) {
    let devices = this.loads[index];
    if (event.value) {
      this.mqttService.onPublishData(devices.topic, devices.onState);
      this.deviceService.updateData(index, event.value);
    } else {
      this.mqttService.onPublishData(devices.topic, devices.offState);
      this.deviceService.updateData(index, event.value);
    }
  }

}
