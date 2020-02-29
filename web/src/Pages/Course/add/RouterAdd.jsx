import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect
  } from "react-router-dom";
import CourseAdd from './CourseAdd.jsx';
import CourseAddOne from './CourseAddOne.jsx';
import CourseAddTwo from './CourseAddTwo.jsx';
import CourseAddThree from './CourseAddThree.jsx';

  class RouterAdd extends Component {
      constructor(props) {
          super(props);
          this.state = {}
      }
      render() { 
          return (
            <Switch>
                <Route path="/course/add/indexadd" component={CourseAdd}/>
                <Route path="/course/add/one" component={CourseAddOne}/>
                <Route path="/course/add/two" component={CourseAddTwo}/>
                <Route path="/course/add/three" component={CourseAddThree}/>
                <Redirect exact from="/course/add" to="/course/add/indexadd"/>
            </Switch>
          );
      }
  }
   
  export default RouterAdd;