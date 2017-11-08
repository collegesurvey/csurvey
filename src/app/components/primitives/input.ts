import * as m from "mithril";


export class InputBox {

    view(vnode){
        return m(
            "input",
            {
                name: vnode.attrs.name,
                type: vnode.attrs.type,
                prop: vnode.attrs.prop
            }
        )
    }
}