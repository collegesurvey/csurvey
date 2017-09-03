var m = require("mithril")

var constants = require("./app/common/constants.js")
var Account = require("./app/pages/account/view.jsx")

var Layout = {

	checkUser: function(vnode) {
		// TODO: check if the user is already signed in
		// if the user is already signed in use that id.
		var user = JSON.parse(localStorage.getItem(constants.USER))

		if ( user ) {
			vnode.attrs.user = user.email
			vnode.attrs.user_token = user.token
		} else {
			vnode.attrs.user = "Guest"
		}
	},

	view: function(vnode){
		this.checkUser(vnode)
		return (            
			<main class="layout">
				<nav class="navbar navbar-default navbar-fixed-top">
					<div class="container-fluid">
						<div class="navbar-header">
							<a href="/" class="navbar-brand" oncreate={m.route.link}>CollegeSurvey</a>
						</div>
						<div class="collapse navbar-collapse" id="navbar">
							<ul class="nav navbar-nav navbar-left">
								<li>
									<a href="/about" oncreate={m.route.link}>About</a>
								</li>
							</ul>
							<ul class="nav navbar-nav navbar-right">
								<Account name={vnode.attrs.user}/>
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

module.exports = Layout