import {UserPresenter} from "../user/presenter";

export class Account {

    user_prsntr: UserPresenter;

    constructor() {
        this.user_prsntr = new UserPresenter()
    }

    view(vnode) {
        return this.user_prsntr.get(vnode.attrs.name);
    }
}
