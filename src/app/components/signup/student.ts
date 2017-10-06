import {StudentRegisterService} from "../../services/register/student";
import {RegisterService} from "../../services/register/base";
import {StudentInterface} from '../student/base'
import {Signup} from "./base";


export class StudentSignup extends Signup implements StudentInterface{

    id: string;
    username: string;
    password: string;
    svc: RegisterService;

    constructor(vnode) {
        super();
        this.username = "";
        this.password = "";
        this.id = "";
        this.svc = new StudentRegisterService()

    }

    register(event) {
        event.preventDefault();
        return this.svc.register(this.id, this.username, this.password)
    }
}
