var m = require("mithril")

class Guest {
    view(vnode) {
        return(
            <li class="dropdown">
                <a href="#!" class="dropdown-toggle" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Guest
                    <span class="caret"></span>
                </a>
                <ul class="dropdown-menu">
                    <li><a href="#!/login">Login</a></li>
                    <li><a href="#!/signup">Signup</a></li>
                </ul>
            </li>
        )
    }
}

module.exports = Guest