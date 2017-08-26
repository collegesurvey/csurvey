require('./jquery-global.js')
require("../node_modules/bootstrap/dist/js/bootstrap.min")
require("../node_modules/bootstrap/dist/css/bootstrap.css")
require("./public/css/starter-template.css")

var m = require("mithril")

var Layout = require("./layout.jsx")
var Home = require("./app/pages/home/view.jsx")
var About = require("./app/pages/about/view.jsx")
var Dash = require("./app/pages/dashboard/view.jsx")


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
	"/account/dash": {
		render: function(vnode) {
			return m(Layout, m(Dash))
		}
	}
})