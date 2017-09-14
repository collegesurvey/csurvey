import * as m from 'mithril'
import {config} from '../../../common/constants'

export class UserProfile {

    userName: string;

    constructor() {
        this.userName = JSON.parse(localStorage.getItem(config.USER)).username
    }

    view(vnode) {
        return m("div", "Hello " + this.userName)
    }
}