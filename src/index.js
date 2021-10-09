import * as Blockly from 'blockly';
import AprilTags from './custom_blocks/april_tags';

// For for DOM to finish and then inject Blockly
document.addEventListener("DOMContentLoaded", function () {
    
  // Construct the workspace
  const workspace = Blockly.inject('blocklyDiv',
  {
      toolbox: document.getElementById('toolbox'),
      media: 'media/'
  });

  // Temporary button to render workspace to code
  const lang = 'JavaScript';
  const button = document.getElementById('blocklyButton');
  button.addEventListener('click', function () {
      const code = Blockly[lang].workspaceToCode(workspace);
      console.log(code);
  })

  // Instantiate the AprilTag blocks
  let aprilTags = new AprilTags(Blockly);

  // Temporarily populate the workspace for testing purposes
  var workspaceBlocks = document.getElementById("workspaceBlocks"); 
  Blockly.Xml.domToWorkspace(workspaceBlocks, workspace);
    
});