import * as m from 'mithril'

export class StudentView {

    view(vnode) {
        return(
            m("li[class='dropdown']",
                [
                    m("a[aria-expanded='false'][aria-haspopup='true'][class='dropdown-toggle'][data-toggle='dropdown'][href='#!'][role='button']",
                        [vnode.attrs.name, m("span[class='caret']")]
                    ),
                    m("ul[class='dropdown-menu']",
                        [
                            m("li",
                                m("a[href='#!/account/dash']",
                                    "Dashboard"
                                )
                            ),
                            m("li",
                                m("a[href='#!/account/profile']",
                                    "Profile"
                                )
                            ),
                            m("li[class='divider'][role='separator']",
                            ),
                            m("li",
                                m("a[href='#!/logout']",
                                    "Logout"
                                )
                            )
                        ]
                    )
                ]
            )
        )
    }
}
