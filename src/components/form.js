import React from "react";
import {observer} from "mobx-react";


class ConnectedForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            newTitle: ""
        }
    }

    setTitle = (title) => {
        this.setState({
            newTitle: title
        });
    }

    addArticle = () => {
        const {articleManager} = this.props;
        articleManager.addArticle(this.state.newTitle);
    }

    render() {
        return (
            <div>
                <div className="form-group">
                    <label htmlFor="title">Title</label>
                    <input
                        type="text"
                        className="form-control"
                        id="title"
                        value={this.state.newTitle}
                        onChange={e => this.setTitle(e.target.value)}
                    />
                </div>
                <button className="btn btn-success btn-lg" onClick={this.addArticle} >Save</button>
            </div>
        );
    }
};

const Form = observer(ConnectedForm);

export default Form;