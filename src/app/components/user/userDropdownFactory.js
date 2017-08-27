var m = require("mithril")

var UserView = require("./user.jsx")
var GuestView = require("./guest.jsx")

class UserDropdownFactory {
    
    getComponent(name) {
        if (name=="Guest") {
            return GuestView
        } else {
            return UserView
        }        
    }
}

module.exports = new UserDropdownFactory()