import * as m from 'mithril'
import {ArticlePresenter} from '../article/presenter'

export class SideNav {

    article_presenter: ArticlePresenter

    constructor(vnode) {
        this.article_presenter = new ArticlePresenter()
    } 

    view(vnode) {
        return m(".side-nav", [this.article_presenter.builder()])
    }
}