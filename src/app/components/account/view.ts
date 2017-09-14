import * as m from 'mithril'
import {Factory} from "../user/factory"

export class Account {

    user_factory: Factory;

    constructor() {
        this.user_factory = new Factory()
    }

    view(vnode) {
        let Component = this.user_factory.getComponent(vnode.attrs.name);
        return m(Component, {name: vnode.attrs.name});
    }
}
