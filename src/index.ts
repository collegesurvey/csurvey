import './jq'

import * as m from  'mithril'
import "../node_modules/bootstrap/dist/js/bootstrap.min"
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "./public/css/starter-template.css"

import "./public/css/starter-template.css"

import {Layout} from './app/components/layout';
import {Blog} from './app/components/blog/view';
import {About} from './app/components/about/view';
import {Login} from './app/components/auth/user/login';
import {Logout} from './app/components/auth/logout';
import {Signup} from './app/components/auth/user/signup';
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
    "/blog": {
        render: function(vnode) {
            return m(Layout, m(Blog))
        }
    },
	"/signup": {
		render: function(vnode) {
			return m(Layout, m(Signup))
		}
	},
	"/login": {
		render: function(vnode) {
			return m(Layout, m(Login))
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