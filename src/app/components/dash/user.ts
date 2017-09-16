import * as m from 'mithril'
import {SideNav} from "./side_nav";

export class UserDashboard {
    view(){
        return (
            m("div", ["Dashboard", SideNav])
        )
    }
}
