import React from "react";
import {observer} from "mobx-react";

const ConnectedList = ({articles}) => {
    return (
        <ul className="list-group list-group-flush">
            { articles.map((el, index) => (
                <li className="list-group-item" key={index}>
                    {el.title}
                </li>
            ))}
        </ul>
    );
};

const List = observer(ConnectedList);

export default List;