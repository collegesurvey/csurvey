import * as m from 'mithril'
import {config} from "../../common/constants"


export class Logout {

    static view(vnode) {
        localStorage.removeItem(config.USER);
        m.route.set("/")

    }
}
