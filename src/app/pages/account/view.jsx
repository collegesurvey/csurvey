var m = require("mithril")
var UserDropdownFactory = require("../../components/user/userDropdownFactory.js")

var Account = {
    view: function(vnode) {
        var Component = UserDropdownFactory.getComponent(vnode.attrs.name)
        return <Component name={vnode.attrs.name} />
    }
}

module.exports = Account
