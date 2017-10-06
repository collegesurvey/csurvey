import * as m from 'mithril'
import {UserFactory} from '../factory/user'

export class MainNav {

    view(vnode) {
        return m("nav.navbar.navbar-default.navbar-fixed-top.container-fluid",
            [
                m(".navbar-header",
                    m("a.navbar-brand[href='/']", {oncreate: m.route.link}, "CollegeSurvey")
                ),
                m(".collapse.navbar-collapse[id='navbar']",
                    [
                        m("ul.nav.navbar-nav.navbar-left",
                            m("li",
                                m("a[href='/about']", {oncreate: m.route.link}, "About")
                            ),
                            m("li",
                                m("a[href='/reviews']", {oncreate: m.route.link}, "Reviews")
                            )
                        ),
                        m("ul.nav.navbar-nav.navbar-right",
                            m(UserFactory, {name: vnode.attrs.user})
                        )
                    ]
                )
            ]

        )
    }
}