var m = require('mithril')

var Recaptcha = require("../../common/recaptcha.js")
var User = require("./model.js")

//data binding helper function
function binds(data) {
  return function(e) {
    data[e.target.name] = e.target.value;
  }
};


class Login {
    constructor() {
        this.user = {
          email: "",
          password: ""
        }
    }

    login(event) {
      event.preventDefault()
      return User.login(this.user.email, this.user.password)
    }

    view(vnode) {
        return (
           <div>
            <form class="form-inline" id="login" onchange={binds(this.user)}>
              <div class="form-group">
                  Email:<br />
                  <input type="text" name="email" value={this.email}/><br />
                  Password:<br />
                  <input type="password" name="password" value={this.password}/><br />
                  <button onclick={this.login.bind(this)}>Submit</button><br />
                  <Recaptcha />
              </div>
            </form>
          </div>
        )
    }
}

module.exports = Login