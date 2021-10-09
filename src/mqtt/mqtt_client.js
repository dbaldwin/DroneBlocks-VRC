import mqtt from 'mqtt';

export default class MQTTClient {

    constructor() {
        console.log("this is the mqtt constructor")
        this.host = '192.168.86.23';
        this.port = 9001;
        this.connectionString = 'ws://' + this.host + ':' + this.port;
        this.client = mqtt.connect(this.connectionString);

        // Subscribe to the topic
        //this.client.subscribe("vrc/apriltags/raw");
        this.client.subscribe("vrc/apriltags/fps");

        // Handle messages
        this.client.on("message", function (topic, payload) {
            console.log([topic, payload].join(": "));
        })
    }
}