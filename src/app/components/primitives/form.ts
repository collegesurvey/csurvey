import * as m from "mithril";


export class GenericForm {

    view(vnode){
        return (
            m("div",
             m(
                 "form.form-inline#login",
                 vnode.attrs.prop,
                 m(".form-group", vnode.children)
                )
            )
        )
    }
}