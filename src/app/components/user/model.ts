import * as m from 'mithril'

import {default as gql} from "graphql-tag"
import {constants} from '../../common/constants'
import { graphcool as backend } from "../../common/graphcool"

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

export class UserModel {

    token: string;

    constructor(){
        this.token = ""
    }

    static async create(name, email, password) {
        let data = {
            name: name,
            email: email,
            password: password
        };
        try{
            await backend.mutate(UserCreateQuery, data);
            m.route.set("/login")
        } catch(e) {
            console.log(e)
        }
    }
}
