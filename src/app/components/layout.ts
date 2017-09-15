import * as m from 'mithril'

import {config} from '../common/constants'
import {Account} from './account/view'

export class Layout {

	checkUser(vnode) {
		let user = JSON.parse(localStorage.getItem(config.USER));

		if (user) {
			vnode.attrs.user = user.username;
			vnode.attrs.user_token = user.token;
		} else {
			vnode.attrs.user = "Guest";
		}
	}

	view(vnode){
		this.checkUser(vnode);
		return (
            m("main.layout",
                [
                    m("nav.navbar.navbar-default.navbar-fixed-top",
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
                    ),
                    m("section.starter-template.container-fluid", vnode.children)
                ]
            )
		)
	}
}
