var m = require("mithril")

class User {
    view(vnode) {
        return(
            <li class="dropdown">
                <a href="#!" class="dropdown-toggle" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    {vnode.attrs.name}
                    <span class="caret"></span>
                </a>
                <ul class="dropdown-menu">
                    <li><a href="#!/account/dash">Dashboard</a></li>
                    <li><a href="#!/account/profile">Profile</a></li>
                    <li role="separator" class="divider"></li>
                    <li><a href="#!/logout">Logout</a></li>
                </ul>
            </li>
        )
    }
}

module.exports = User