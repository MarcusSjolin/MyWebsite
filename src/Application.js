var Plugins = require("./Bootstrap/Plugins")

var application = {
    webpack: require("./Webpack"),
    
    applyPlugins: function () {
        Plugins(this).applyPlugins()
    },
    bootstrapPlugins: function () {
        
    },
    use: function (component) {
        component(this, this.done)
    },
    done: function() {
        console.log("done")
    }
}

module.exports = application