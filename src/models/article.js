import { types } from "mobx-state-tree";


const Article = types.model({
   title: types.optional(types.string, "")
});

export default Article;