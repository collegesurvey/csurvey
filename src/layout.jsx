var m = require("mithril")

var Account = require("./app/pages/account/view.jsx")

var Layout = {
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
									<Account name={"Guest"}/>
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

module.exports = Layout