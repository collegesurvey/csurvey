import * as m from 'mithril'

export class Recaptcha {

    oncreate(vnode) {
        // recaptcha.render("g-recaptcha", {'sitekey': '6LfMPCYUAAAAAMH_Ji68_q6lcQ2ReE7dO_RVHmYv'})
    }
    
    view(vnode) {
        return (
            m("#g-recaptcha")
        )
    }
}
