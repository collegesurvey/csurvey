import * as m from 'mithril'

import {Article} from "./view";
import {ArticleModel} from "./model";
import {ArticleBuilder} from './builder'
import {Presenter} from "../../common/presenter";

export class ArticlePresenter  implements Presenter {

    get(resource) {
        return m(Article, {data: ArticleModel.get(resource)})
    }

    list(resource) {
        let data = ArticleModel.list(resource);
        return data.map(function (data) {
            return m(Article, {data: data})
        })
    }

    create(resource) {
        return ArticleModel.create(resource)
    }

    update(resource_id, data) {
        return ArticleModel.update(resource_id, data)
    }

    remove(resource_id) {
        return ArticleModel.remove(resource_id)
    }

    builder() {
        return m(ArticleBuilder)
    }
}