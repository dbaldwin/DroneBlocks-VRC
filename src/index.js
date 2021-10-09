import * as Blockly from 'blockly';
import AprilTags from './custom_blocks/april_tags';
import MQTTClient from './mqtt/mqtt_client';

// Wait for DOM to finish and then inject Blockly
document.addEventListener("DOMContentLoaded", function () {
    
  // Construct the workspace
  const workspace = Blockly.inject('blocklyDiv', {
    toolbox: document.getElementById('toolbox'),
    media: 'media/'
  });

  // Button to render workspace to code
  document.getElementById('blocklyButton').addEventListener('click', function () {
    const code = Blockly['JavaScript'].workspaceToCode(workspace);
    console.log(code);
  });

  // Button to connect to MQTT broker
  document.getElementById('mqttButton').addEventListener('click', function() {
    new MQTTClient();
  });

  // Instantiate the AprilTag blocks
  let aprilTags = new AprilTags(Blockly);

  // Temporarily populate the workspace for testing purposes
  var workspaceBlocks = document.getElementById("workspaceBlocks"); 
  Blockly.Xml.domToWorkspace(workspaceBlocks, workspace);
    
});