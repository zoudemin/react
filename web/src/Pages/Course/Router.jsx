import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect
  } from "react-router-dom";
import CourseList from './CourseList';
import CourseTopic from './CourseTopic';
import CourseCategory from './CourseCategory';
import CourseCategoryAdd from './CourseCategoryAdd';
import RouterAdd from './add/RouterAdd.jsx';

class CourseRouter extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    
    render() { 
        return (
            <Switch>
                 <Route path="/course/list" component={CourseList}/>
                 <Route path="/course/add" component={RouterAdd}/>
                 <Route path="/course/topic" component={CourseTopic}/>
                 <Route path="/course/category" component={CourseCategory}/>
                 <Route path="/course/category_add" component={CourseCategoryAdd}/>
                 <Redirect exact form="/course" to="/course/list"/>
            </Switch>
        );
    }
}
 
export default CourseRouter;