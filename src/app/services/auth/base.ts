import {constants} from "../../common/constants";


export class AuthService {

    setMeta(user, type="individual") {
        let meta = {
            token: user.data.signinUser.token,
            email: user.data.signinUser.user.email,
            username: user.data.signinUser.user.username,
            type: type
        };
        localStorage.setItem(
            constants.META,
            JSON.stringify(meta)
        )
    }
}