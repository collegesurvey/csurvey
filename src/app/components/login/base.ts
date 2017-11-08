import * as m from 'mithril'
import {binds} from "../../common/util";
import {Recaptcha} from "../../common/captcha";
import { InputBox } from "../input";

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
                            m(InputBox, {type: 'text', name:'id'}),
                            m("br"),
                            "Password",
                            m("br"),
                            m(InputBox, {type: 'password', name:'password'}),
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
