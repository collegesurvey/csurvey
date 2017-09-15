import * as m from 'mithril';

export class Article {

    meta_content: string;
    content: string;

    constructor() {
        this.meta_content = "";
        this.content = "";
    }

    view(vnode){
        return (
            m(".article", "Article")
        )
    }
}
