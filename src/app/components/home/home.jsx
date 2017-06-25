var m = require("mithril")
var ArticleFeed = require("../article/articleFeed.jsx")


var HomeView = {
    view: function(){
        return (
            <ArticleFeed />
        )
    }
}

module.exports = HomeView
