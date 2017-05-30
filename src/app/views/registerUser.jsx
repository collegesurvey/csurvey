var m = require('mithril')
var ClassicUserModel = require("../models/user.js")

//data binding helper function
function binds(data) {
  return function(e) {
    data[e.target.name] = e.target.value;
  }
};


class UserRegistration {
    constructor() {
        this.user = {
          username: "",
          email: "",
          password: ""
        }
    }

    register(event) {
      event.preventDefault()
      return new ClassicUserModel().create(this.user.username, this.user.email, this.user.password)
    }

    view(vnode) {
        return (
           <div>
            <form id="registration" onchange={binds(this.user)}>
                UserName:<br />
                <input type="text" name="username" value={this.username}/><br />
                Email:<br />
                <input type="text" name="email" value={this.email} /><br />
                Password:<br />
                <input type="password" name="password" value={this.password}/>
                <button onclick={this.register.bind(this)}>Submit</button>
            </form>
          </div>
        )
    }
}
module.exports = UserRegistration