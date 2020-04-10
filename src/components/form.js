import React from "react";
import {observer} from "mobx-react";


const ConnectedForm = observer(props => {
    const {articleManager} = props;
    return (
        <div>
            <div className="form-group">
                <label htmlFor="title">Title</label>
                <input
                    type="text"
                    className="form-control"
                    id="title"
                    value={articleManager.newTitle}
                    onChange={e => articleManager.setTitle(e.target.value)}
                />
            </div>
            <button className="btn btn-success btn-lg" onClick={articleManager.addArticle} >Save</button>
        </div>
    )
});

const Form = ConnectedForm;

export default Form;