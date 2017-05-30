var m = require("mithril")
var backend = require("../common/backend.js")

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

class ClassicUserModel {

    async create(name, email, password) {
        var data = {
            name: name,
            email: email,
            password: password
        }
        var user = await backend.mutate(UserCreateQuery, data)
    }
}

module.exports = ClassicUserModel