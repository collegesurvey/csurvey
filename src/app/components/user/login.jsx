var m  = require("mithril")
var UserRegistration = require("./userRegistration.jsx")

class LoginView {

    view() {
        return (
            <div>
                <UserRegistration />
            </div>
        )
    }
}

module.exports = LoginView
