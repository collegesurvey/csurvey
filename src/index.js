var m = require("mithril")

require("../node_modules/bootstrap/dist/css/bootstrap.css")
require("./public/css/starter-template.css")

var Auth = require("./app/pages/auth/view.jsx")
var Home = require("./app/pages/home/view.jsx")
var About = require("./app/pages/about/view.jsx")
var Dash = require("./app/pages/dashboard/view.jsx")

var Layout = require("./layout.jsx")


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
	"/login": {
		render: function(vnode) {
			return m(Layout, m(Auth))
		}
	},
	"/dash": {
		render: function(vnode) {
			return m(Layout, m(Dash))
		}
	}
})