var m = require("mithril")

class Recaptcha {

    oncreate(vnode) {
        grecaptcha.render("g-recaptcha", {'sitekey': '6LfMPCYUAAAAAMH_Ji68_q6lcQ2ReE7dO_RVHmYv'})
    }
    
    view(vnode) {
        return (
            <div id="g-recaptcha">Captcha</div>
        )
    }
}

module.exports = Recaptcha