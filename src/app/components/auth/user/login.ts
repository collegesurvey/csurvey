import * as m from 'mithril'
import { User } from "../../user/model"
import {User as userInterface} from "../../user/base"
import { Recaptcha } from "../../../common/captcha"

//data binding helper function
function binds(data) {
  return function(e) {
    data[e.target.name] = e.target.value;
  }
}


export class Login {
    
    user: userInterface;
    
    constructor() {
        this.user = {
            username: "",
            email: "",
            password: ""
        }
    }

    login(event) {
      event.preventDefault();
      return User.login(this.user.email, this.user.password)
    }

    view(vnode) {
        return (
            m("div",
                m("form.form-inline#login", {onchange: binds(this.user)},
                    m(".form-group]",
                        [
                            "Email",
                            m("br"),
                            m("input[type='text'][name='email']"),
                            m("br"),
                            "Password",
                            m("br"),
                            m("input[type='password'][name='password']"),
                            m("br"),
                            m("button", {onclick: this.login.bind(this)}, "Submit"),
                            m("br"),
                            m(Recaptcha)
                        ]
                    )
                )
            )
        )
    }
}
