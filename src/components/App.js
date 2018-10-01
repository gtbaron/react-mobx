import React from 'react';
import List from "./List";
import Form from "./Form";
import {observer} from "mobx-react";

const App = observer(props => (
    <div>
        <div className="row mt-5 text-center">
            <h1 className="w-100">Using: React & MobX State Tree</h1>
        </div>
        <div className="row mt-5">
            <div className="col-md-4 offset-md-1">
                <h2>Articles</h2>
                <List store={props.store}/>
            </div>
            <div className="col-md-4 offset-md-1">
                <h2>Add a new article</h2>
                <Form store={props.store}/>
            </div>
        </div>
    </div>
));

export default App;
