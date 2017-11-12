import * as m from 'mithril'
import {binds} from "../../common/util";
import {Recaptcha} from "../../common/captcha";
import { InputBox } from "../primitives/input";
import { GenericForm as Form } from "../primitives/form";

export class Login {

    login(user) {
        throw new Error("NotImplementedError")
    }

    view(vnode) {
        return (
           m(
                Form, {prop: {onchange: binds(this)}},
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
    }
}
