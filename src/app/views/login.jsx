var m  = require("mithril")
var UserRegistration = require("./registerUser.jsx")

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
