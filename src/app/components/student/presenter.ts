import * as m from 'mithril'
import {Presenter} from "../../common/presenter";
import {StudentView} from "./view";
import {GuestView} from "../../common/guest";
import {StudentModel} from "./model";


export class StudentPresenter implements Presenter {

    get(resource) {
        if (resource == "Guest") {
            return m(GuestView)
        } else {
            return m(StudentView, {name: resource})
        }
    }

    list(resource) {
        throw new Error("NotImplementedError")
    }

    create(resource) {
        return StudentModel.create(
            resource.username,
            resource.id,
            resource.password
        )
    }

    update(resource, data) {
        throw new Error("NotImplementedError")
    }

    remove(resource) {
        throw new Error("NotImplementedError")
    }
}