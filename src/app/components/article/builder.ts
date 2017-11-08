import * as m from 'mithril';
import {binds} from "../../common/util";
import { InputBox } from "../primitives/input";
import {ArticlePresenter} from "./presenter";
import { GenericForm as Form } from "../primitives/form";

export class ArticleBuilder {

    prsntr: ArticlePresenter

    constructor(vnode) {
        this.prsntr = new ArticlePresenter()
    }

    create(event) {
        event.preventDefault();
        this.prsntr.create(this)
    }

    view(vnode){
        return (
            m(".article", m(
                Form, {prop: {onchange: binds(this)}},
                [
                    "Write up a review for a college",
                    m("br"),
                    "Name of the college",
                    m("br"),
                    m(InputBox, {type: 'text', name:'collegename'}),
                    m("br"),
                    "Address",
                    m("br"),
                    m(InputBox, {type: 'text', name:'address'}),
                    m("br"),
                    "Email",
                    m("br"),
                    m(InputBox, {type: 'text', name:'email'}),
                    m("br"),
                    "Phone",
                    m("br"),
                    m(InputBox, {type: 'text', name:'phone'}),
                    m("br"),
                    "Review",
                    m("br"),
                    m(InputBox, {type: 'text', name:'text'}),
                    m("br"),
                    m("button", {onclick: this.create.bind(this)}, "Submit"),
                ]                
            ))
        )
    }
}
