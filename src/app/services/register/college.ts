import {RegisterService} from "./base";
import {CollegePresenter} from "../../components/college/presenter";

export class CollegeRegisterService implements RegisterService{

    prsntr: CollegePresenter;

    constructor() {
        this.prsntr = new CollegePresenter()
    }

    register(...data) {
        return this.prsntr.create(data)
    }
}