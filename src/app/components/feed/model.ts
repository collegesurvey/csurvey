let m = require('mithril');
import { ArticleManager } from '../article/manager'

export class ArticleFeed {

    article_mgr: ArticleManager;

    constructor() {
        this.article_mgr = new ArticleManager()
    }


    view(vnode){
        return (
            m("div", this.article_mgr.list())
        )
    }
}
