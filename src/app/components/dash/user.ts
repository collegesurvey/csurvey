import * as m from 'mithril'
import {SideNav} from "../navigation/side_nav";

export class UserDashboard {
    view(){
        return (
            m("div", ["Dashboard", m(SideNav)])
        )
    }
}
