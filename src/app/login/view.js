var m  = require("mithril")


class LoginView {

    constructor() {
        this.status = false
    }

    view() {
        if(this.status) {
            return this.success()
        }
        return this.fail()
    }

    success() {
        return m("div", "Login Success")
    }

    fail() {
        return m("div", "Login fail")
    }
}

module.exports = LoginView
