import React from "react";
import {observer} from "mobx-react";

const ConnectedList = observer(props => {
    const {articles} = props;
    return (
        <ul className="list-group list-group-flush">
            { articles.map((el, index) => (
                <li className="list-group-item" key={index}>
                    {el.title}
                </li>
            ))}
        </ul>
    )
});

const List = ConnectedList;

export default List;