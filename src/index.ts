import './jquery'

import * as m from  'mithril'
import "../node_modules/bootstrap/dist/js/bootstrap.min"
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "./public/css/starter-template.css"

import "./public/css/starter-template.css"

import {Layout} from './app/components/layout';
import {Reviews} from './app/components/reviews/view';
import {About} from './app/components/about/view';
import {StudentLogin} from './app/components/login/user';
import {Logout} from './app/components/login/logout';
import {StudentSignup} from './app/components/signup/student';
import {StudentDashboard} from './app/components/dash/student';
import {StudentProfile} from './app/components/profile/student';
import {Home} from "./app/components/home/view";
import {Contact} from "./app/components/contact";
import {VERSION} from "./version";

console.log(VERSION);

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
			return m(Layout, m(StudentSignup))
		}
	},
	"/login": {
		render: function(vnode) {
			return m(Layout, m(StudentLogin))
		}
	},
	"/logout": {
		render: function(vnode) {
			return m(Layout, m(Logout))
		}
	},
	"/account/dash": {
		render: function(vnode) {
			return m(Layout, vnode.attrs, m(StudentDashboard, vnode.attrs))
		}
	},
    "/account/profile": {
        render: function(vnode) {
            return m(Layout, vnode.attrs, m(StudentProfile, vnode.attrs))
        }
    },
});