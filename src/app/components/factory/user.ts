import {StudentPresenter} from "../student/presenter";
import {Presenter} from "../../common/presenter";

export class UserFactory {

    prsntr: Presenter;

    constructor() {
        this.prsntr = new StudentPresenter()
    }

    view(vnode) {
        return this.prsntr.get(vnode.attrs.name);
    }
}
