import * as m from 'mithril'
import {Account} from '../account/view'

export class MainNav {

    view(vnode) {
        return m("nav.navbar.navbar-default.navbar-fixed-top",
            m(".container-fluid",
                [
                    m(".navbar-header",
                        m("a.navbar-brand[href='/']", {oncreate: m.route.link}, "CollegeSurvey")
                    ),
                    m(".collapse.navbar-collapse[id='navbar']",
                        [
                            m("ul.nav.navbar-nav.navbar-left",
                                m("li",
                                    m("a[href='/about']", {oncreate: m.route.link}, "About")
                                )
                            ),
                            m("ul.nav.navbar-nav.navbar-right",
                                m(Account, {name: vnode.attrs.user})
                            )
                        ]
                    )
                ]
            )
        )
    }
}