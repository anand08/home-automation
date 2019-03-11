import { Component } from "@angular/core";
import { DevicesPage } from "../devices/devices";
import { SensorInfoPage } from "../sensor-info/sensor-info";

@Component({
    selector: 'page-tabs',
    template: `
        <ion-tabs>
            <ion-tab [root]="devicesPage" tabTitle="Devices" tabIcon="star"></ion-tab>
            <ion-tab [root]="sensorPage" tabTitle="Sensor" tabIcon="book"></ion-tab>
        </ion-tabs>
    `
})

export class TabPage {
    devicesPage = DevicesPage;
    sensorPage = SensorInfoPage;
}