import * as m from 'mithril'
import gql from "graphql-tag";
import {graphcool} from "../../common/graphcool";
import {AuthService} from "./base";


const StudentLoginQuery = gql(`
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


export class StudentAuthService extends AuthService {

    async login(email: string, password: string) {
        let data = {
            email: email,
            password: password
        };
        try{
            let user = await graphcool.mutate(StudentLoginQuery, data);
            this.setMeta(user);
            m.route.set("/account/dash")
        } catch(e) {
            console.log(e)
        }
    }
}
