import * as Blockly from 'blockly';
import AprilTags from './custom_blocks/april_tags';
import LEDRing from './custom_blocks/led_ring';
import MQTTClient from './mqtt/mqtt_client';
import Utils from './utils';

window.activeTag = -1;
window.tagXDistance;
window.tagYDistance;
window.tagZDistance;
window.mqttClient;
window.utils = Utils;

const delayWithPromise = function(milliseconds) {
  return new Promise(resolve => {
      setTimeout(() => { resolve('') }, milliseconds);
  });
}

const delay = async function(milliseconds) {
  await delayWithPromise(milliseconds);
}

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
    window.mqttClient = new MQTTClient();
  });

  // Button to disconnect from MQTT broker
  document.getElementById('mqttDisconnectButton').addEventListener('click', function() {
    window.mqttClient.disconnect();
  });

  // Execute the block code on the canvas
  document.getElementById('executeCodeButton').addEventListener('click', function() {
    const code = Blockly['JavaScript'].workspaceToCode(workspace);
    eval(code);
  });

  // Instantiate April Tag blocks
  let aprilTags = new AprilTags(Blockly);

  // Instantiate LED Ring blocks
  let ledRing = new LEDRing(Blockly);

  // Temporarily populate the workspace for testing purposes
  var workspaceBlocks = document.getElementById("workspaceBlocks"); 
  Blockly.Xml.domToWorkspace(workspaceBlocks, workspace);
    
});