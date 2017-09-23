import './jq'

import * as m from  'mithril'
import "../node_modules/bootstrap/dist/js/bootstrap.min"
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "./public/css/starter-template.css"

import "./public/css/starter-template.css"

import {Layout} from './app/components/layout';
import {Reviews} from './app/components/reviews/view';
import {About} from './app/components/about/view';
import {UserLogin} from './app/components/auth/user';
import {Logout} from './app/components/auth/logout';
import {UserSignup} from './app/components/register/user';
import {UserDashboard} from './app/components/dash/user';
import {UserProfile} from './app/components/profile/user';
import {Home} from "./app/components/home/view";
import {Contact} from "./app/components/contact";



m.route(document.body, "/", {
	"/": {
		render: function(vnode) {
			return m(Layout, m(Home))
		}
	},
	"/about": {
		render: function(vnode) {
			return m(Layout, m(About))
		}
	},
    "/contact": {
        render: function(vnode) {
            return m(Layout, m(Contact))
        }
    },
    "/reviews": {
        render: function(vnode) {
            return m(Layout, m(Reviews))
        }
    },
	"/signup": {
		render: function(vnode) {
			return m(Layout, m(UserSignup))
		}
	},
	"/login": {
		render: function(vnode) {
			return m(Layout, m(UserLogin))
		}
	},
	"/logout": {
		render: function(vnode) {
			return m(Layout, m(Logout))
		}
	},
	"/account/dash": {
		render: function(vnode) {
			return m(Layout, vnode.attrs, m(UserDashboard, vnode.attrs))
		}
	},
    "/account/profile": {
        render: function(vnode) {
            return m(Layout, vnode.attrs, m(UserProfile, vnode.attrs))
        }
    },
});