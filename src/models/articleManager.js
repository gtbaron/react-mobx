import {types} from "mobx-state-tree";
import Article from "./article";

const ArticleManager = types.model({
    articles: types.optional(types.array(Article), []),
    newTitle: types.optional(types.string, "")
}).actions(self => {
    function addArticle() {
        self.articles.push(Article.create({title: self.newTitle}))
    }

    function setTitle(title) {
        self.newTitle = title
    }

    return {addArticle, setTitle}
});

const articleManager = ArticleManager.create({
    articles: [],
    newTitle: ""
});

export default articleManager;