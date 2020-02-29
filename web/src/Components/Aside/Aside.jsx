import React, {Component} from 'react';
import avatar from './../../Common/uploads/avatar.png'
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';
const IMG_PRE = "http://localhost:1688/uploads/";

class Aside extends Component {
    constructor(props) {
        super(props);
        this.state = {
            active_list:'one',
            active_list_children:'',
        }
    }
    render() {
        return (
            <div className="aside">
                <div className="profile">
                    <div className="avatar img-circle">
                        <img src={this.props.userData&&this.props.userData.icon_url?IMG_PRE+this.props.userData.icon_url:avatar} />
                    </div>
                    <h4>{this.props.userData&&this.props.userData.real_name?this.props.userData.real_name:'无名'}</h4>
                </div>
                <div className="navs">
                    <ul className="list-unstyled">
                        <li>
                            <Link to="/" onClick={()=>{this.setState({active_list:'one',active_list_children:''})}} className={this.state.active_list === 'one'?'active':''}>
                                <i className="fa fa-area-chart"></i>
                                数据分析
                            </Link>
                        </li>
                        <li>
                            <Link to="/user" onClick={()=>{this.setState({active_list:'two',active_list_children:''})}} className={this.state.active_list === 'two'?'active':''}>
                                <i className="fa fa-users"></i>
                                用户中心
                            </Link>
                        </li>
                        <li>
                            <a href="javascript:;" onClick={()=>{this.setState({active_list:'three',active_list_children:''})}} className={this.state.active_list === 'three'?'active':''}>
                                <i className="fa fa-object-group"></i>
                                课程管理
                                <i className="arrow fa fa-angle-right"></i>
                            </a>
                            <ul className="list-unstyled">
                                <li>
                                    <Link to="/course/add" onClick={()=>{this.setState({active_list_children:'three_one'})}} className={this.state.active_list_children === 'three_one'?'active':''}>
                                        课程添加
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/course/list" onClick={()=>{this.setState({active_list_children:'three_two'})}} className={this.state.active_list_children === 'three_two'?'active':''}>
                                        课程列表
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/course/category" onClick={()=>{this.setState({active_list_children:'three_three'})}} className={this.state.active_list_children === 'three_three'?'active':''}>
                                        课程分类
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/course/topic" onClick={()=>{this.setState({active_list_children:'three_four'})}} className={this.state.active_list_children === 'three_four'?'active':''}>
                                        课程专题
                                    </Link>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <Link to="docent_list.html" onClick={()=>{this.setState({active_list:'four',active_list_children:''})}} className={this.state.active_list === 'four'?'active':''}>
                                <i className="fa fa-bars"></i>
                                运营中心
                            </Link>
                        </li>
                        <li>
                            <Link to="/sowing" onClick={()=>{this.setState({active_list:'five',active_list_children:''})}} className={this.state.active_list === 'five'?'active':''}>
                                <i className="fa fa-calculator"></i>
                                LK建模中心
                            </Link>
                        </li>
                        <li>
                            <Link to="javascript:;" onClick={()=>{this.setState({active_list:'six',active_list_children:''})}} className={this.state.active_list === 'six'?'active':''}>
                                <i className="fa fa-cog"></i>
                                设置中心
                                <i className="arrow fa fa-angle-right"></i>
                            </Link>
                            <ul className="list-unstyled">
                                <li><a href="javascript:;">站点设置</a></li>
                                <li><a href="javascript:;">用户设置</a></li>
                                <li><a href="javascript:;">角色管理</a></li>
                                <li><a href="javascript:;">课程设置</a></li>
                                <li><a href="javascript:;">运营设置</a></li>
                                <li><a href="javascript:;">财务设置</a></li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}
const mapStateProps = (state)=>{
    return {
        userData: state.userData
    }
}
export default connect(mapStateProps,null)(Aside)
