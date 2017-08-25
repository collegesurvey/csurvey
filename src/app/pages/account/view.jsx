var m = require("mithril")

var Account = {
    oninit: function(vnode) {
        console.log(vnode.attrs.name)
    },
    view: function(vnode) {
        return (
            <div class="account">
                {vnode.attrs.name}
            </div>
        )
    }
}

module.exports = Account
