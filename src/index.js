require('./jquery-global.js')
require("../node_modules/bootstrap/dist/js/bootstrap.min")
require("../node_modules/bootstrap/dist/css/bootstrap.css")
require("./public/css/starter-template.css")

var m = require("mithril")

var Layout = require("./layout.jsx")
var Home = require("./app/pages/home/view.jsx")
var About = require("./app/pages/about/view.jsx")
var Dash = require("./app/pages/dashboard/view.jsx")

var Login = require("./app/components/user/login.jsx")
var Logout = require("./app/components/user/logout.jsx")
var Signup = require("./app/components/user/signup.jsx")



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
			return m(Layout, m(Dash))
		}
	},
})