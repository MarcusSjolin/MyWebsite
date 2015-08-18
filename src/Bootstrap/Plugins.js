var fs = require("fs")

exports = module.exports = function(app) {
    return {
        applyPlugins: function() {
            var plugins = this.getPlugins()
            for (var i in plugins) {
                app.use(require(process.cwd() + "/node_modules/"+plugins[i]))
            }
        },
        getPlugins: function () {
            var dirs = fs.readdirSync(process.cwd() + "/node_modules/")

            var tmp = []
            for (var i in dirs) {
                if (dirs[i].match(/^website-plugin-.*$/)) {
                    tmp.push(dirs[i])
                }
            }
            return tmp;
        }
    }
}