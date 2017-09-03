var m = require('mithril')
var User = require("./model.js")
var constants = require("../../common/constants.js")


class Logout {

    view(vnode) {
        localStorage.removeItem(constants.USER)
        m.route.set("/")

    }
}

module.exports = Logout