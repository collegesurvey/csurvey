import * as m from 'mithril'
import {constants} from "../../common/constants"


export class Logout {

    static view(vnode) {

        localStorage.removeItem(constants.META);
        m.route.set("/")

    }
}
