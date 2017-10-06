import * as m from 'mithril'

export class SideNav {

    view(vnode) {
        return m(".side-nav", vnode.children)
    }
}