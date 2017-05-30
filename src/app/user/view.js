var m = require("mithril")

var UserModel = require("./model.js")

var UserView = {
    view: function() {
        return (
            m("div",
                [
                    "This is a user view",
                    m("usermodel")
                ]
            )
        )
    }
}

module.exports = UserView