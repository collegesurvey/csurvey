import * as m from 'mithril'
import {SideNav} from "../navigation/side_nav";

export class StudentDashboard {
    view(){
        return (
            m("div", ["Dashboard", m(SideNav)])
        )
    }
}
