var m = require("mithril")
var UserDropdownFactory = require("../../components/user/userDropdownFactory.js")

var Account = {
    oninit: function(vnode) {
        // get the component to be loaded from the factory based on the user
        vnode.attrs.Dropdown = UserDropdownFactory.getComponent(vnode.attrs.name)
    },
    view: function(vnode) {
        var Component = vnode.attrs.Dropdown
        return <Component name={vnode.attrs.name} />
    }
}

module.exports = Account
