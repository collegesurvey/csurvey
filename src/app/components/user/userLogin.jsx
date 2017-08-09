var m = require('mithril')
var ClassicUserModel = require("./model.js")

//data binding helper function
function binds(data) {
  return function(e) {
    data[e.target.name] = e.target.value;
  }
};


class UserLogin {
    constructor() {
        this.user = {
          username: "",
          password: ""
        }
    }

    register(event) {
      event.preventDefault()
      return new ClassicUserModel().login(this.user.username, this.user.password)
    }

    view(vnode) {
        return (
           <div>
            <form id="login" onchange={binds(this.user)}>
                UserName:<br />
                <input type="text" name="username" value={this.username}/><br />
                Password:<br />
                <input type="password" name="password" value={this.password}/>
                <button onclick={this.register.bind(this)}>Submit</button>
                <div class="g-recaptcha" data-sitekey="6LfMPCYUAAAAAMH_Ji68_q6lcQ2ReE7dO_RVHmYv"></div>
            </form>
          </div>
        )
    }
}
module.exports = UserLogin