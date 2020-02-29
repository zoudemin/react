import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect
  } from "react-router-dom";
import Mine from './Mine';
import ResetPwd from './ResetPwd';

class MineRouter extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() { 
        return (
            <Switch>
                 <Route path="/mine/index" component={Mine}/>
                 <Route path="/mine/resetpwd" component={ResetPwd}/>
                 <Redirect exact form="/mine" to="/mine/index"/>
            </Switch>
        );
    }
}
 
export default MineRouter;