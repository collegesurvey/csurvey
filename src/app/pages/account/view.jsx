var m = require("mithril")

var Account = {
    oninit: function(vnode) {
        // console.log(vnode.attrs.name)
    },
    view: function(vnode) {
        return (
            <div class="btn-group">
            <button class="btn btn-info dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                {vnode.attrs.name}
                <span class="caret"></span>
            </button>
            <ul class="dropdown-menu" aria-labelledby="dropdownMenu1">
                <li><a href="#!/account/dash">Dashboard</a></li>
                <li><a href="#!/account/profile">Profile</a></li>
                <li role="separator" class="divider"></li>
                <li><a href="#!/account/logout">Logout</a></li>
            </ul>
            </div>
        )
    }
}

module.exports = Account
