import * as m from "mithril";


export class InputBox {
    content: string

    constructor(){
        this.content = ""
    }

    view(vnode){
        return m(
            "input",
            {
                name: vnode.attrs.name,
                type: vnode.attrs.type
            }
        )
    }
}