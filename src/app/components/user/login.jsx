var m = require('mithril')

var Recaptcha = require("../../common/recaptcha.js")
var ClassicUserModel = require("./model.js")

//data binding helper function
function binds(data) {
  return function(e) {
    data[e.target.name] = e.target.value;
  }
};


class Login {
    constructor() {
        this.user = {
          username: "",
          password: ""
        }
    }

    login(event) {
      event.preventDefault()
      return new ClassicUserModel().login(this.user.username, this.user.password)
    }

    view(vnode) {
        return (
           <div>
            <form class="form-inline" id="login" onchange={binds(this.user)}>
              <div class="form-group">
                  UserName:<br />
                  <input type="text" name="username" value={this.username}/><br />
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