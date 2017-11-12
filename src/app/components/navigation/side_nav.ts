import * as m from 'mithril'

export class SideNav {

    view(vnode) {
        return (
                m("row", 
                    [
                        m(".col-sm-3.col-lg-2",
                            m("navbar.navbar-default.navbar-fixed-side",
                                m(".container",
                                    m("collapse.navbar-collapse",
                                        m("ul.nav.navbar-nav",
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
                            )
                        ),
                        m(".col-sm-9.col-lg-10", vnode.children)
                    ]
                )
            )
        
    }
}

// styling reference -> http://www.samrayner.com/bootstrap-side-navbar/