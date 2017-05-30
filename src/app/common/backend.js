import ApolloClient, { createNetworkInterface } from 'apollo-client';


class Graphcool {
    constructor() {
        this.graphcool = "<graphcool key>"
        this.client = this.connect()
    }

    connect() {
        const client = new ApolloClient({
                networkInterface: createNetworkInterface({
                    uri: this.graphcool,
                }),
            })
        return client
    }

    async query(q) {
        data = await this.client.query({
            query: q
        })
        return data
    }

    async mutate(m, data) {
        data = await this.client.mutate({
            mutation: m,
            variables: data
        })
        return data
    }
}

const Backend = new Graphcool()

module.exports = Backend
