import * as m from 'mithril'

export class Footer {

    view(vnode) {
        return m("nav.navbar.navbar-default.navbar-fixed-bottom",
            m(".container-fluid",
                [
                    m(".navbar-header",
                        m("a.navbar-brand[href='/']", {oncreate: m.route.link}, "")
                    ),
                    m(".collapse.navbar-collapse[id='navbar']",
                        [
                            m("ul.nav.navbar-nav.navbar-right",
                                m("li",
                                    m("a[href='/contact']", {oncreate: m.route.link}, "Contact Us")
                                )
                            )
                        ]
                    )
                ]
            )
        )
    }
}