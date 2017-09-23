import * as m from 'mithril'
import {ArticlePresenter} from "../article/presenter";

export class ArticleFeed {

    prsntr: ArticlePresenter;
    user: string;

    constructor(vnode) {
        this.prsntr = new ArticlePresenter();
        this.user = vnode.attrs.user
    }

    view(vnode) {
        return m(".feed", this.prsntr.list(this.user))
    }
}
