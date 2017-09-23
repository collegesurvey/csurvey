import * as m from 'mithril'
import {Presenter} from "../../common/presenter";
import {UserView} from "./user";
import {GuestView} from "./guest";
import {UserModel} from "./model";


export class UserPresenter implements Presenter {

    get(resource) {
        if (resource == "Guest") {
            return m(GuestView)
        } else {
            return m(UserView, {name: resource})
        }
    }

    list(resource) {
        throw new Error("NotImplementedError")
    }

    create(resource) {
        return UserModel.create(
            resource.username,
            resource.id,
            resource.password
        )
    }

    update(resource, data) {
    }

    remove(resource) {
        throw new Error("NotImplementedError")
    }
}