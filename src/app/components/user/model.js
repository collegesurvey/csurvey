var m = require("mithril")
var backend = require("../../common/backend.js")

var gql = require("graphql-tag")

const UserCreateQuery = gql`
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
        }
`

const UserLoginQuery = gql`
    loginUser($name: String!, $email: String!, $password: String!) {
            loginUser(
                username: $name
                password: $password
            ) {
                username
            }
        }
`

class ClassicUserModel {

    async create(name, email, password) {
        var data = {
            name: name,
            email: email,
            password: password
        }
        try{
            var user = await backend.mutate(UserCreateQuery, data)
        } catch(e) {
            console.log(e)
        }
    }

    async login(name, email, password) {
        var data = {
            name: name,
            password: password
        }
        try{
            var user = await backend.mutate(UserLoginQuery, data)
        } catch(e) {
            console.log(e)
        }
    }
}

module.exports = ClassicUserModel