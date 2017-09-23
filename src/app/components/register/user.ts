import {UserInterface} from '../user/base'
import {UserRegisterService} from "./service";
import {Signup} from "./base";


export class UserSignup extends Signup implements UserInterface{

    id: string;
    username: string;
    password: string;
    svc: UserRegisterService;

    constructor(vnode) {
        super();
        this.username = "";
        this.password = "";
        this.id = "";
        this.svc = new UserRegisterService()

    }

    register(event) {
        event.preventDefault();
        return this.svc.register(this.id, this.username, this.password)
    }
}
