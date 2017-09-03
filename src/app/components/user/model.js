var m = require("mithril")

var constants = require("../../common/constants.js")
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
    mutation SigninUser($email: String!, $password: String!) {
            signinUser(email: {
                    email: $email
                    password: $password
                }
            ) {
                token
            }
        }
`

class ClassicUserModel {

    constructor(){
        this.token = ""
    }

    async create(name, email, password) {
        var data = {
            name: name,
            email: email,
            password: password
        }
        try{
            var user = await backend.mutate(UserCreateQuery, data)

            m.route.set("/account/dash")
        } catch(e) {
            console.log(e)
        }
    }

    async login(email, password) {
        var data = {
            email: email,
            password: password
        }
        try{
            var user = await backend.mutate(UserLoginQuery, data)

            var user_meta = {
                token: user.data.signinUser.token,
                email: email 
            }
            localStorage.setItem(
                constants.USER,
                JSON.stringify(user_meta)
            )

            m.route.set("/account/dash")
        } catch(e) {
            console.log(e)
        }
    }
}

// need singleton of this guy
const User = new ClassicUserModel()

module.exports = User