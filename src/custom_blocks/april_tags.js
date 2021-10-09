

export default class AprilTags {
  constructor(blockly) {

    blockly.defineBlocksWithJsonArray(
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

    blockly.JavaScript['april_tag_x_distance'] = function(block) {
      // TODO: Assemble JavaScript into code variable.
      var code = '...';
      // TODO: Change ORDER_NONE to the correct strength.
      return [code, blockly.JavaScript.ORDER_NONE];
    };

    blockly.JavaScript['april_tag_y_distance'] = function(block) {
      // TODO: Assemble JavaScript into code variable.
      var code = '...';
      // TODO: Change ORDER_NONE to the correct strength.
      return [code, blockly.JavaScript.ORDER_NONE];
    };

    blockly.JavaScript['april_tag_id'] = function(block) {
      // TODO: Assemble JavaScript into code variable.
      var code = '...';
      // TODO: Change ORDER_NONE to the correct strength.
      return [code, blockly.JavaScript.ORDER_NONE];
    };

    blockly.JavaScript['april_tag_z_distance'] = function(block) {
      // TODO: Assemble JavaScript into code variable.
      var code = '...';
      // TODO: Change ORDER_NONE to the correct strength.
      return [code, blockly.JavaScript.ORDER_NONE];
    };
  }
}