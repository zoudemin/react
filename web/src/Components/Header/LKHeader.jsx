import React, {Component} from 'react';
import {Provider} from 'react-redux';
import store from '../../Store';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import {connect} from 'react-redux';
import * as constants from './../../Store/actionTypes';

class LKHeader extends Component {
  render() {
    return (
        <div className="header">
            <nav className="navbar navbar-custom">
            <div className="navbar-header">
                <a href="javascript:;" className="navbar-brand">数据分发管理系统</a>
            </div>
            <ul className="nav navbar-nav navbar-right">
                <li><a href="javascript:;"><i className="fa fa-cloud-upload"></i>教育云中心</a></li>
                <li><a href="javascript:;"><i className="fa fa-yelp"></i>分销中心</a></li>
                <li><a href="javascript:;"><i className="fa fa-xing"></i>CRM对接中心</a></li>
                <li><a href="/mine"><i className="fa fa-user"></i>个人中心</a></li>
                <li><a href="javascript:;"><i className="fa fa-bell"></i><span className="badge">20</span></a></li>
                <li><a href="javascript:;" style={{cursor:'pointer'}} onClick={()=>{this._logoutFn()}}><i className="fa fa-sign-out"></i>退出</a></li>
            </ul>
            </nav>
        </div>
    );
  }
  _logoutFn(){
    this.props.logOut(()=>{
      window.location.href='/';
      console.log('登出成功！')
    });
  }
}
const componentMapDispatchProps=(dispatch)=>{
  return {
    logOut(comback){
      dispatch({
        type: constants.INIT_USER_DATA,
        userData: null,
      })
      sessionStorage.removeItem('userData');
      comback&&comback();
    }
  }
}

export default connect(null,componentMapDispatchProps)(LKHeader);
