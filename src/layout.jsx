var m = require("mithril")

var Account = require("./app/pages/account/view.jsx")

var Layout = {
	view: function(vnode){
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
								<Account name="Guest"/>
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