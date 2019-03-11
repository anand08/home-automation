import { Paho } from '../../node_modules/ng2-mqtt/mqttws31';
import { Injectable } from '@angular/core';

@Injectable()
export class MqttService {

    isConnected: boolean;
    message: any;
    client = new Paho.MQTT.Client("broker.mqtt-dashboard.com", 8000, "myclientid_" + Math.random() * 100);
    currentTopic: string;

    temperature: Array<any> = [];
    humidity: Array<any> = [];
    moisture: Array<any> = [];
    flame: Array<any> = [];
    gassensor: Array<any> = [];

    subscribeOptions = {
        qos: 0,  // QoS
        invocationContext: { foo: true },  // Passed to success / failure callback
        onSuccess: this.onSubscriptionSuccess,
        onFailure: this.onSubscriptionFailed,
        timeout: 10
    };

    unsubscribeOptions = {
        invocationContext: { foo: true },  // Passed to success / failure callback
        onSuccess: this.onSubscriptionSuccess,
        onFailure: this.onSubscriptionFailed,
        timeout: 10
    };

    constructor() {
        this.isConnected = false;

        this.client.onConnectionLost = function (responseObject: any) {
            console.log(responseObject);
        };

        this.client.onMessageArrived = function (message) {
            if (this.currentTopic == 'temperature-value') {
                console.log(message);
            }
        };

    }

    onSubscriptionSuccess() {
        console.log('success');
    }

    onSubscriptionFailed() {
        console.log('failed');
    }

    onConnectionFailed() {
        this.isConnected = false;
        console.log('connection failed');
    }

    onConnectionEstablished() {
        this.isConnected = true;
        console.log('connection success');
    }

    onConnect() {
        if (!this.isConnected) {
            this.client.connect({
                onSuccess: this.onConnectionEstablished,
                mqttVersion: 3
            });
        }
    }

    onPublishData(topic: string, data: string) {
        this.message = new Paho.MQTT.Message(data);
        this.message.destinationName = topic;
        this.message.qos = 2;

        this.client.send(this.message);
    }

    onSubscribe(topic: string) {
        this.currentTopic = topic;
        this.client.subscribe(topic, this.subscribeOptions);
    }

    onUnSubscribe(topic: string) {
        this.client.unsubscribe(topic, this.unsubscribeOptions);
    }

    isConnectionEstablished(): boolean {
        return this.isConnected;
    }

    onDisconnect() {
        this.client.disconnect();
    }

}