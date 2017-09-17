import * as m from 'mithril';

export class Article {

    view(vnode){
        return (
            m(".article", vnode.attrs.data.body)
        )
    }
}
