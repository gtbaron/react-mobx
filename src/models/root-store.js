import {types} from "mobx-state-tree";
import Article from "./article";

const RootStore = types.model({
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

const store = RootStore.create({
    articles: [],
    newTitle: ""
});

export default store;