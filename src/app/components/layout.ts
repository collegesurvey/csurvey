import * as m from 'mithril'

import {MainNav} from "./navigation/main-nav";
import { get_current_user } from "../common/util"
import {Footer} from "./footer";

export class Layout {

	checkUser(vnode) {
		let user = get_current_user()

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
                    m(MainNav, {user: vnode.attrs.user}),
                    m("section.starter-template.container-fluid", vnode.children),
                    m(Footer)
                ]
            )
		)
	}
}
