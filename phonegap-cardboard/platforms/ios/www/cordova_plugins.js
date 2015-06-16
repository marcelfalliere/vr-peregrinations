cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "file": "plugins/de.codevise.cordova.volume/www/volume.js",
        "id": "de.codevise.cordova.volume.Volume",
        "clobbers": [
            "plugin.volume"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "cordova-plugin-whitelist": "1.0.1-dev",
    "de.codevise.cordova.volume": "0.0.1"
}
// BOTTOM OF METADATA
});