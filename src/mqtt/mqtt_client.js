import mqtt from 'mqtt';

export default class MQTTClient {

    constructor() {
        this.host = '192.168.86.23';
        this.port = 9001;
        this.connectionString = 'ws://' + this.host + ':' + this.port;
        this.client = mqtt.connect(this.connectionString);

        // Subscribe to the topic
        this.client.subscribe("vrc/apriltags/raw");
        this.client.subscribe("vrc/apriltags/fps");

        // Handle messages
        this.client.on("message", function (topic, payload) {
            //console.log([topic, payload].join(": "));
            //window.activeTag = 9;
        })

        // Stop trying to connect if there's an error
        this.client.stream.on('error', (error) => {
            // This does trigger when the URL is invalid
            console.error('Connection error:', error);
            this.client.end();
        });
    }

    disconnect() {
        this.client.end();
    }

    publish(topic, value) {
        this.client.publish(topic, value);
    }
}