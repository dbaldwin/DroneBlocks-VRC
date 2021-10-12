import * as Blockly from 'blockly';
import AprilTags from './custom_blocks/april_tags';
import MQTTClient from './mqtt/mqtt_client';

global.activeTag = -1;
global.tagXDistance;
global.tagYDistance;
global.tagZDistance;
global.mqttClient;

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
  document.getElementById('mqttConnectButton').addEventListener('click', function() {
    global.mqttClient = new MQTTClient();
  });

  // Button to disconnect from MQTT broker
  document.getElementById('mqttDisconnectButton').addEventListener('click', function() {
    global.mqttClient.disconnect();
  });

  // Execute the block code on the canvas
  document.getElementById('executeCodeButton').addEventListener('click', function() {
    console.log("This is where we'd run the loop");
  });

  // Instantiate the AprilTag blocks
  let aprilTags = new AprilTags(Blockly);

  // Temporarily populate the workspace for testing purposes
  var workspaceBlocks = document.getElementById("workspaceBlocks"); 
  Blockly.Xml.domToWorkspace(workspaceBlocks, workspace);
    
});