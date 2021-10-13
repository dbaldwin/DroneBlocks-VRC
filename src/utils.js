export default class Utils {

    static hexToRGB(hex) {
        let result = hex.replace(/'/g,''); // Remove single quotes, in value input cases Blockly will wrap in single quotes
        result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(result);
        return result ? ("" + parseInt(result[1], 16) + "," + parseInt(result[2], 16) + "," + parseInt(result[3], 16)) : null;
    }

    // Could never get these to work due to eval and async/await
    // Console error: await is only valid in async functions and the top level bodies of modules
    // Would be nice to revisit in the future instead of use setTimeout

    // static delayWithPromise(milliseconds) {
    //     return new Promise(resolve => {
    //         setTimeout(() => { resolve('') }, milliseconds);
    //     });
    // }

    // static async delay(milliseconds) {
    //     await Utils.delayWithPromise(milliseconds);
    // }

}