import {UserPresenter} from "../user/presenter";
import {Presenter} from "../../common/presenter";
import {CollegePresenter} from "../college/presenter";

abstract class RegisterService {
    prsntr: Presenter
}


export class UserRegisterService implements RegisterService{

    prsntr: UserPresenter;

    constructor() {
        this.prsntr = new UserPresenter()
    }

    register(id: string, username: string, password: string) {
        let resource= {
            id: id,
            password: password,
            username: username
        };

        return this.prsntr.create(resource)
    }
}

export class CollegeRegisterService implements RegisterService{

    prsntr: CollegePresenter;

    constructor() {
        this.prsntr = new CollegePresenter()
    }

    register(...data) {
        return this.prsntr.create(data)
    }
}