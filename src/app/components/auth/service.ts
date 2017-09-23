import * as m from 'mithril'
import gql from "graphql-tag";
import {graphcool} from "../../common/graphcool";
import {constants} from "../../common/constants";


const UserLoginQuery = gql(`
    mutation SigninUser($email: String!, $password: String!) {
            signinUser(email: {
                    email: $email
                    password: $password
                }
            ) {
                user {
                    username,
                    email
                }
                token
            }
        }`);


class AuthService {

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


export class UserAuthService extends AuthService {

    async login(email: string, password: string) {
        let data = {
            email: email,
            password: password
        };
        try{
            let user = await graphcool.mutate(UserLoginQuery, data);
            this.setMeta(user);
            m.route.set("/account/dash")
        } catch(e) {
            console.log(e)
        }
    }
}

export class CollegeAuthService extends AuthService {

    async login(id: string, password: string) {
        throw new Error("NotImplementedError")
    }
}