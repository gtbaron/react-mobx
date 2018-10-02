import React from "react";
import {observer} from "mobx-react";

const ConnectedList = observer(props => (
    <ul className="list-group list-group-flush">
        { props.store.articles.map((article, index) => (
            <li className="list-group-item" key={index}>
                {article.title}
            </li>
        ))}
    </ul>
));

const List = ConnectedList;

export default List;