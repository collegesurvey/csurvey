import ApolloClient, { createNetworkInterface } from 'apollo-client';
import { config } from '../data/config'


class Graphcool {

    graphcool: string;
    client: ApolloClient;

    constructor() {
        this.graphcool = config.graphcool.key;
        this.client = this.connect()
    }

    connect(): ApolloClient {
        return new ApolloClient({
                networkInterface: createNetworkInterface({
                    uri: this.graphcool,
                }),
            });
    }

    async query(q, data) {
        return await this.client.query({
            query: q,
            variables: data
        });
    }

    async mutate(m, data) {
        return await this.client.mutate({
            mutation: m,
            variables: data
        });
    }
}

export const Backend = new Graphcool();
