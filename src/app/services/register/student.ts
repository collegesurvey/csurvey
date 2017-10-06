import {StudentPresenter} from "../../components/student/presenter";
import {CollegePresenter} from "../../components/college/presenter";
import {RegisterService} from "./base";



export class StudentRegisterService implements RegisterService{

    prsntr: StudentPresenter;

    constructor() {
        this.prsntr = new StudentPresenter()
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
