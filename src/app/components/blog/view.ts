import * as m from 'mithril'
import {ArticleFeed} from "../feed/view";

export class Blog {
    view(vnode){
        return (
            m("div", m(ArticleFeed))
        )
    }
}
