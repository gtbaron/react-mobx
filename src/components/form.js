import React from "react";
import {observer} from "mobx-react";


const ConnectedForm = observer(props => (
    <div>
        <div className="form-group">
            <label htmlFor="title">Title</label>
            <input
                type="text"
                className="form-control"
                id="title"
                value={props.store.newTitle}
                onChange={e => props.store.setTitle(e.target.value)}
            />
        </div>
        <button className="btn btn-success btn-lg" onClick={props.store.addArticle} >Save</button>
    </div>
));

const Form = ConnectedForm;

export default Form;