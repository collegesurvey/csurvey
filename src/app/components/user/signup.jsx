var m = require('mithril')
var Recaptcha = require("../../common/recaptcha.js")
var ClassicUserModel = require("./model.js")

//data binding helper function
function binds(data) {
  return function(e) {
    data[e.target.name] = e.target.value;
  }
};


class Signup {
    oninit() {
        this.user = {
          username: "",
          email: "",
          password: "",
        }
        this.captcha = {
          meta: ""
        }
    }

    register(event) {
      event.preventDefault()
      return new ClassicUserModel().create(this.user.username, this.user.email, this.user.password)
    }

    view(vnode) {
        return (
           <div>
            <form class="form-inline" id="signup" onchange={binds(this.user)}>
              <div class="form-group">
                  UserName:<br />
                  <input type="text" name="username" value={this.username}/><br />
                  Email:<br />
                  <input type="text" name="email" value={this.email} /><br />
                  Password:<br />
                  <input type="password" name="password" value={this.password}/><br />
                  <button onclick={this.register.bind(this)}>Submit</button><br />
                  <Recaptcha />
              </div>
            </form>
          </div>
        )
    }
}

module.exports = Signup
