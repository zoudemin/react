import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect
  } from "react-router-dom";
import Rotation from './Rotation';
import SowingAdd from './SowingAdd';
import SowingEdit from './SowingEdit';

class SowingRouter extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() { 
        return (
            <Switch>
                 <Route path="/sowing/list" component={Rotation}/>
                 <Route path="/sowing/add" component={SowingAdd}/>
                 <Route path="/sowing/edit" component={SowingEdit}/>
                 <Redirect exact form="/sowing" to="/sowing/list"/>
            </Switch>
        );
    }
}
 
export default SowingRouter;