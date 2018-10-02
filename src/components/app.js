import "../index.css";
import React from 'react';
import List from "./list";
import logo from "../logo.svg";
import Form from "./form";

import {observer} from "mobx-react";

const App = observer(props => (
    <div>
        <div className="row mt-5 text-center">
            <div className="margin-auto">
                <div className="d-inline-block">
                    <img src={logo} className="App-logo" alt="logo"/>
                </div>
                <div className="d-inline-block height-30">
                    <div className="d-table-cell">
                        <h1 className="w-100 align-middle d-inline-block">Using: React & MobX State Tree</h1>
                    </div>
                </div>
            </div>
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
