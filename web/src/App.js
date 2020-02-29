import React, {Component} from 'react';
import {Provider} from 'react-redux';
import store from './Store';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";
import IndexLayOut from './Components/LayOut/Index.jsx';
import Home from './Pages/Home/Home';
import Login from './Pages/User/Login';
import User from './Pages/User/User';
import SowingRouter from './Pages/Rotation/Router';
import CourseRouter from './Pages/Course/Router';
import ErrorPage from './Pages/ErrorPage/Index';
import {connect} from 'react-redux';
import MineRouter from './Pages/Mine/Router';
import * as constants from './Store/actionTypes';


class App extends Component {
  componentWillMount(){
    this.props.reqLocalData();
  }
  render() {
    let IndexLayOutRouter = (
      <IndexLayOut>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/user" component={User}/>
          <Route path="/mine" component={MineRouter}/>
          <Route path="/sowing" component={SowingRouter}/>
          <Route path="/course" component={CourseRouter}/>
          <Route component={ErrorPage}/>
        </Switch>
      </IndexLayOut>
    )
    return (
      <Router>
        <Switch>
          <Route exact path="/" render={this.props.userData?(props)=>IndexLayOutRouter:()=><Redirect to="/login" push/>}/>
          <Route path="/login" component={Login}/>
          <Route path="/" render={props=>IndexLayOutRouter}/>
        </Switch>
      </Router>
    );
  }
}

const mapDispatchToProps = (dispatch)=>{
  return {
    reqLocalData() {
      const userData = JSON.parse(sessionStorage.getItem('userData'));
      dispatch({
        type:constants.INIT_USER_DATA,
        userData
      })
    }
  }
}

const mapStateProps= (state)=>{
  return {
    userData: state.userData
  }
}

export default connect(mapStateProps,mapDispatchToProps)(App);
