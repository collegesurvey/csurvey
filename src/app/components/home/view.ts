import * as m from 'mithril'
import {ArticleFeed} from "../feed/view";

export class Home {
    view(vnode){
        return (
            m("div", m(ArticleFeed))
        )
    }
}
