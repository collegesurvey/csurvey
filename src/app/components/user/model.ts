import * as m from 'mithril'

import {default as gql} from "graphql-tag"
import {config} from '../../common/constants'
import { Backend as backend } from "../../common/backend"

const UserCreateQuery = gql(`
    mutation createUser($name: String!, $email: String!, $password: String!) {
            createUser(
                username: $name
                authProvider: {
                    email: {
                        email: $email
                        password: $password
                    }
                }
            ) {
                id
                username
            }
        }`);

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

class ClassicUserModel {

    token: string;

    constructor(){
        this.token = ""
    }

    setUserMeta(user) {
        let user_meta = {
            token: user.data.signinUser.token,
            email: user.data.signinUser.user.email,
            username: user.data.signinUser.user.username 
        };
        localStorage.setItem(
            config.USER,
            JSON.stringify(user_meta)
        )
    }

    async create(name, email, password) {
        let data = {
            name: name,
            email: email,
            password: password
        };
        try{
            let user = await backend.mutate(UserCreateQuery, data);
            m.route.set("/login")
        } catch(e) {
            console.log(e)
        }
    }

    async login(email, password) {
        let data = {
            email: email,
            password: password
        };
        try{
            let user = await backend.mutate(UserLoginQuery, data);
            this.setUserMeta(user);
            m.route.set("/account/dash")
        } catch(e) {
            console.log(e)
        }
    }
}

// need singleton of this guy
export const User = new ClassicUserModel();
