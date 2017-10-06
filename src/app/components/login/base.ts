import * as m from 'mithril'
import {binds} from "../../common/util";
import {Recaptcha} from "../../common/captcha";


export class Login {

    login(user) {
        throw new Error("NotImplementedError")
    }

    view(vnode) {
        return (
            m("div",
                m("form.form-inline#login", {onchange: binds(this)},
                    m(".form-group]",
                        [
                            "Email",
                            m("br"),
                            m("input[type='text'][name='id']"),
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
