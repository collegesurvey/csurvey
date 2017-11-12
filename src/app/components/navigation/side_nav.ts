import * as m from 'mithril'

export class SideNav {

    view(vnode) {
        return (
                m("row", 
                    [
                            m(".navbar-default.sidebar",
                                    m(".navbar-collapse",
                                        m("ul.nav.in",
                                            [
                                                m("li",
                                                    m("a[href='/account/editor']", {oncreate: m.route.link}, "Review")
                                                ),
                                                m("li",
                                                    m("a[href='/account/applications']", {oncreate: m.route.link}, "Application History")
                                                )
                                            ]
                                        )
                                    
                                )
                            )
                        ,
                        m("div", vnode.children)
                    ]
                )
            )
        
    }
}

// styling reference -> http://www.samrayner.com/bootstrap-side-navbar/