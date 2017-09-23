import {UserPresenter} from "../user/presenter";
import {Presenter} from "../../common/presenter";

export class UserFactory {

    prsntr: Presenter;

    constructor() {
        this.prsntr = new UserPresenter()
    }

    view(vnode) {
        return this.prsntr.get(vnode.attrs.name);
    }
}
