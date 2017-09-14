import * as m from 'mithril'

export class GuestView {

    static view(vnode) {
        return(
            m("li.dropdown", [
            //    children
                m("a.dropdown-toggle[href=#!][role=button][data-toggle=dropdown][aria-haspopup=true][aria-expanded=false]", [
                        "Guest",
                        m("span.caret")
                ]),
                m("ul.dropdown-menu", [
                    m("li", [m("a[href=#!/login]", "Login")]),
                    m("li", [m("a[href=#!/signup]", "Signup")])
                ])
            ])
        )
    }
}
