import * as m from 'mithril'


export class Feedback {
    email: string;

    constructor (vnode) {
        this.email = "feedback@csurvey.in"
    }

    view(vnode) {
        return m(".feedback", "Feedback form goes here")
    }
}