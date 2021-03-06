import {Login} from "./base";
import {CollegeAuthService} from "../../services/auth/college";

export class CollegeLogin extends Login {

    id: string;
    password: string;
    username: string;
    svc: CollegeAuthService;

    constructor(vnode) {
        super();
        this.id = "";
        this.password= "";
        this.username = "";
        this.svc = new CollegeAuthService()
    }

    login(event) {
        event.preventDefault();
        return this.svc.login(this.id, this.password)
    }
}
