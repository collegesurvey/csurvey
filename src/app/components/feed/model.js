var m = require('mithril')
var gql = require("graphql-tag")
var Article = require('./article.jsx')
var Backend = require('../../common/backend.js')

ArticleFetchQuery = gql`
    query fetchArticles() {
            fetchArticles(first: 10)(
                id
                author
                content
                createdAt
                updatedAt
            )
        }
`

class ArticleFeed {
    articles = []
    _articles = []
    async fetch_articles() {
        var _articles = await backend.query(ArticleFetchQuery)
    }

    view(vnode){

        fetch_articles()

        for(i=0; i<_articles.length; i++ ){
            articles += m(div, {article=_articles[i]})
        } 

        return (
            m("div", articles)
        )
    }
}

module.exports = ArticleFeed