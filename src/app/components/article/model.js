var m = require("mithril")

var ArticleModel = {
    async get() {
        return {
            id: 12,
            body: "this is a article with id 12",
            createdAt: "22-6-2017",
            modifiedAt: "23-6-2017"
        }
    },

    async update(data) {

    },

    async create(body, author) {

    },

    async delete(id) {

    },

    async list() {
        return [
            {
                id: 1,
                body: "this is a article with id 1",
                createdAt: "22-6-2017",
                modifiedAt: "23-6-2017"
            },
            {
                id: 2,
                body: "this is a article with id 2",
                createdAt: "22-6-2017",
                modifiedAt: "23-6-2017"
            },
            {
                id: 3,
                body: "this is a article with id 3",
                createdAt: "22-6-2017",
                modifiedAt: "23-6-2017"
            },
            {
                id: 4,
                body: "this is a article with id 4",
                createdAt: "22-6-2017",
                modifiedAt: "23-6-2017"
            }
        ]

    }
}

module.exports = ArticleModel