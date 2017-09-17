import * as m from 'mithril'
import {ArticlePresenter} from "../article/presenter";

export class ArticleFeed {

    article_prsntr: ArticlePresenter;
    user: string;

    constructor(vnode) {
        this.article_prsntr = new ArticlePresenter();
        this.user = vnode.attrs.user
    }

    view(vnode) {
        return m(".feed", this.article_prsntr.list(this.user))
    }
}
