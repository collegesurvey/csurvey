import {AuthService} from "./base";

export class CollegeAuthService extends AuthService {

    async login(id: string, password: string) {
        throw new Error("NotImplementedError")
    }
}