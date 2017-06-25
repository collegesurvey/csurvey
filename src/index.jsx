var m = require("mithril")

require("../node_modules/bootstrap/dist/css/bootstrap.css")
require("./public/css/starter-template.css")

var LoginView = require("./app/components/user/login.jsx")
var HomeView = require("./app/components/home/home.jsx")
var About = require("./app/components/about/about.jsx")


var CsurveyApp = {
	view: function(vnode){
		return (            
			<main class="layout">
				<nav class="navbar navbar-inverse navbar-fixed-top">
					<div>
						<div class="navbar-header">
							<a href="/" class="navbar-brand" oncreate={m.route.link}>CollegeSurvey</a>
						</div>
						<div class="collapse navbar-collapse" id="navbar">
							<ul class="nav navbar-nav">
								<li>
									<a href="/about" oncreate={m.route.link}>About</a>
								</li>
								<li>
									<a href="/login" oncreate={m.route.link}>Login</a>
								</li>
							</ul>
						</div>
					</div>
				</nav>
				<section class="starter-template contianer-fluid">
					{vnode.children}
				</section>
			</main>
		)
	}
}

m.route(document.body, "/", {
	"/": {
		render: function(vnode) {
			return m(CsurveyApp, m(HomeView))
		}
	},
	"/about": {
		render: function(vnode) {
			return m(CsurveyApp, m(About))
		}
	},
	"/login": {
		render: function(vnode) {
			return m(CsurveyApp, m(LoginView))
		}
	}
})