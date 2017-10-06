import * as m from 'mithril'

export class StudentProfile {

    userName: string;

    constructor(vnode) {
        this.userName = vnode.attrs.user;
    }

    view(vnode) {
        return m("div", "Hello " + this.userName, ". This is your profile")
    }
}