import {Login} from "./base"
import {UserAuthService} from "./service"
import {UserInterface} from "../user/base"

export class UserLogin extends Login implements UserInterface{

    id: string;
    username: string;
    password: string;
    svc: UserAuthService;
    
    constructor(vnode) {
        super();
        this.username = "";
        this.id = "";
        this.password= "";
        this.svc = new UserAuthService()
    }

    login(event) {
      event.preventDefault();
      return this.svc.login(this.id, this.password)
    }
}
