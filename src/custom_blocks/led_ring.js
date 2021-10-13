import * as Blockly from 'blockly';
import Utils from "../utils";

export default class LEDRing {
    constructor() {
        Blockly.defineBlocksWithJsonArray([
            {
                "type": "led_color",
                "message0": "Set LED color %1",
                "args0": [
                    {
                        "type": "field_colour",
                        "name": "rgb",
                        "colour": "#00ff00"
                    }
                ],
                "previousStatement": null,
                "nextStatement": null,
                "colour": 230,
                "tooltip": "",
                "helpUrl": ""
            },
            {
                "type": "led_color_delay",
                "message0": "Set LED color %1 after %2 ms",
                "args0": [
                    {
                        "type": "field_colour",
                        "name": "rgb",
                        "colour": "#00ff00"
                    },
                    {
                        "type": "input_value",
                        "name": "milliseconds"
                    }
                ],
                "previousStatement": null,
                "nextStatement": null,
                "colour": 230,
                "tooltip": "",
                "helpUrl": ""
            }
        ]);

        Blockly.JavaScript['led_color'] = function(block) {
            let hexColor = block.getFieldValue('rgb');
            let rgbColor = Utils.hexToRGB(hexColor);
            let rgbString = "[0," + rgbColor + "]";
            return 'window.mqttClient.publish("vrc/pcc/set_base_color", \'{"wrgb": ' + rgbString + '}\');';
        };

        Blockly.JavaScript['led_color_delay'] = function(block) {
            let hexColor = block.getFieldValue('rgb');
            let rgbColor = Utils.hexToRGB(hexColor);
            let rgbString = "[0," + rgbColor + "]";
            let mqttPublishCommand = 'window.mqttClient.publish("vrc/pcc/set_base_color", \'{"wrgb": ' + rgbString + '}\');';
            let delay = Blockly.JavaScript.valueToCode(block, 'milliseconds', Blockly.JavaScript.ORDER_NONE);
            
            return `setTimeout(function() { ${mqttPublishCommand} }, ${delay});`;
            
            
            // let rgbString = "[0," + rgbColor + "]";
            // return 'window.mqttClient.publish("vrc/pcc/set_base_color", \'{"wrgb": ' + rgbString + '}\');';
        };

    }
}