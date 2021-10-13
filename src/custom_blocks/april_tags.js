import * as Blockly from 'blockly';

export default class AprilTags {
  constructor() {

    Blockly.defineBlocksWithJsonArray(
      [{
        "type": "april_tag_x_distance",
        "message0": "april tag: x distance",
        "output": null,
        "colour": 230,
        "tooltip": "",
        "helpUrl": ""
      },
      {
        "type": "april_tag_y_distance",
        "message0": "april tag: y distance",
        "output": null,
        "colour": 230,
        "tooltip": "",
        "helpUrl": ""
      },
      {
        "type": "april_tag_id",
        "message0": "april tag: id",
        "output": null,
        "colour": 230,
        "tooltip": "",
        "helpUrl": ""
      },
      {
        "type": "april_tag_z_distance",
        "message0": "april tag: z distance",
        "output": null,
        "colour": 230,
        "tooltip": "",
        "helpUrl": ""
      }]
    );

    Blockly.JavaScript['april_tag_x_distance'] = function(block) {
      // TODO: Assemble JavaScript into code variable.
      var code = '...';
      // TODO: Change ORDER_NONE to the correct strength.
      return [code, Blockly.JavaScript.ORDER_NONE];
    };

    Blockly.JavaScript['april_tag_y_distance'] = function(block) {
      // TODO: Assemble JavaScript into code variable.
      var code = '...';
      // TODO: Change ORDER_NONE to the correct strength.
      return [code, Blockly.JavaScript.ORDER_NONE];
    };

    Blockly.JavaScript['april_tag_id'] = function(block) {
      // TODO: Assemble JavaScript into code variable.
      var code = '...';
      // TODO: Change ORDER_NONE to the correct strength.
      return [code, Blockly.JavaScript.ORDER_NONE];
    };

    Blockly.JavaScript['april_tag_z_distance'] = function(block) {
      // TODO: Assemble JavaScript into code variable.
      var code = '...';
      // TODO: Change ORDER_NONE to the correct strength.
      return [code, Blockly.JavaScript.ORDER_NONE];
    };
  }
}