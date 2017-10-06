import {Login} from "./base"
import {StudentAuthService} from "../../services/auth/student"
import {StudentInterface} from "../student/base"

export class StudentLogin extends Login implements StudentInterface{

    id: string;
    username: string;
    password: string;
    svc: StudentAuthService;
    
    constructor(vnode) {
        super();
        this.username = "";
        this.id = "";
        this.password= "";
        this.svc = new StudentAuthService()
    }

    login(event) {
      event.preventDefault();
      return this.svc.login(this.id, this.password)
    }
}
