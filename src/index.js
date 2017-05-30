var m = require("mithril")
var UserView = require("./app/user/view.js")
var LoginView = require("./app/login/view.js")
var CollegeView = require("./app/college/view.js")
var About = require("./app/about.js")

require("../node_modules/bootstrap/dist/css/bootstrap.css")
require("./common/css/starter-template.css")

var CsurveyApp = {
    view: function(vnode){
        return (            
            m("main.layout",
				[
					m("nav.navbar.navbar-inverse.navbar-fixed-top", 
						m("div",
							[
								m(".navbar-header", 
									m("a.navbar-brand", {href: '/', oncreate: m.route.link}, 
										"CollegeSurvey"
									)
								),
								m(".collapse.navbar-collapse#navbar]", 
									m("ul.nav.navbar-nav", 
										[
											m("li", 
												m("a", {href: '/about', oncreate: m.route.link}, "About")
											),
											m("li", 
												m("a", {href: '/login', oncreate: m.route.link}, "Login")
											),
										]
									)
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

m.route(document.body, "/", {
    "/": {
        render: function(vnode) {
            return m(CsurveyApp, m(CollegeView))
        }
    },
    "/about": {
        render: function(vnode) {
            return m(CsurveyApp, m(About))
        }
    },
	"/login": {
        render: function(vnode) {
            return m(CsurveyApp, m(new LoginView()))
        }
    }
})