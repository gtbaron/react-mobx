import {types} from "mobx-state-tree";
import Article from "./article";

const RootStore = types.model({
    articles: types.optional(types.array(Article), []),
}).actions(self => {
    function addArticle(newTitle) {
        self.articles.push(Article.create({title: newTitle}))
    }

    return {addArticle}
});

const rootStore = RootStore.create({
    articles: []
});

export default rootStore;