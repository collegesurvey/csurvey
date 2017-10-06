import {Presenter} from "../../common/presenter";

export abstract class RegisterService {
    prsntr: Presenter;

    register(id: string, username: string, password: string) {
        throw new Error("NotImplementedError")
    }
}