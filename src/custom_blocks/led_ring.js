import Utils from "../utils";

export default class LEDRing {
    constructor(blockly) {
        blockly.defineBlocksWithJsonArray([
            {
            "type": "led_color",
            "message0": "Set LED Color %1",
            "args0": [
                {
                "type": "field_colour",
                "name": "rgb",
                "colour": "#ff0000"
                }
            ],
            "previousStatement": null,
            "nextStatement": null,
            "colour": 230,
            "tooltip": "",
            "helpUrl": ""
            }
        ]);

        blockly.JavaScript['led_color'] = function(block) {
            let hexColor = block.getFieldValue('rgb');
            let rgbColor = Utils.hexToRGB(hexColor);
            let rgbString = "[0," + rgbColor + "]";
            return 'window.mqttClient.publish("vrc/pcc/set_base_color", \'{"wrgb": ' + rgbString + '}\')';
        };
    }
}