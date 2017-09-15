import * as m from 'mithril'
import {User} from "../../user/model"
import {User as userInterface} from '../../user/base'
import {Recaptcha} from "../../../common/captcha"

//data binding helper function
function binds(data) {
  return function(e) {
    data[e.target.name] = e.target.value;
  }
}


export class Signup {

    user: userInterface;

    constructor() {
        this.user = {
          username: "",
          email: "",
          password: "",
        };
    }

    register(event) {
      event.preventDefault();
      return User.create(this.user.username, this.user.email, this.user.password)
    }

    view(vnode) {
        return (
            m("div",
                m("form.form-inline[id='signup']", {onchange: binds(this.user)},
                    m(".form-group",
                        [
                            "Username",
                            m("br"),
                            m("input[name='username'][type='text']"),
                            m("br"),
                            "Email",
                            m("br"),
                            m("input[name='email'][type='text']"),
                            m("br"),
                            "Password",
                            m("br"),
                            m("input[name='password'][type='password']"),
                            m("br"),
                            m("button", {onclick: this.register.bind(this)}, "Submit"),
                            m("br"),
                            m(Recaptcha)
                        ]
                    )
                )
            )
        )
    }
}
