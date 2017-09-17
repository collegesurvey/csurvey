import * as m from 'mithril'
import {Presenter} from "../../common/presenter";
import {UserView} from "./user";
import {GuestView} from "./guest";


export class UserPresenter implements Presenter {

    get(resource) {
        if (resource == "Guest") {
            return m(GuestView)
        } else {
            return m(UserView, {name: resource})
        }
    }

    list(resource) {
    }

    update(resource, data) {
    }

    remove(resource) {
    }
}