import * as m from 'mithril'

import {binds} from "../../common/util";
import {Recaptcha} from "../../common/captcha";

export class Signup {

    register(resource) {
        throw new Error("NotImplementedError")
    }

    view(vnode) {
        return (
            m("div",
                m("form.form-inline[id='signup']", {onchange: binds(this)},
                    m(".form-group",
                        [
                            "Username",
                            m("br"),
                            m("input[name='username'][type='text']"),
                            m("br"),
                            "Email",
                            m("br"),
                            m("input[name='id'][type='text']"),
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