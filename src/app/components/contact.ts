import * as m from 'mithril'
import {Feedback} from "./feedback";

export class Contact {
    view(vnode) {
        return m(".contact", [
            m("contact-info", "Contact info to be added here"),
            m(Feedback)
        ])
    }
}