import React, { Component } from 'react';
import {connect} from 'react-redux';
import {getStudentDataAction, getCountListAction} from "./../../Store/actionCreators";
import LKPagination from './../../Components/LKTool/LKPagination';

class User extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pageNum: 1,
            total: 0,
            pageSize: 5,
        }
    }
    componentDidMount(){
        this.props.getUserList({page:this.state.pageNum,pageSize:this.state.pageSize});
        this.props.getCountList();
    }
    componentDidUpdate(preprop,prestate) {
        console.log(preprop,this.state.total)
    }
    static getDerivedStateFromProps(nextProps, prevState) {
        if (nextProps.countList!==prevState.total) {
            return {total: nextProps.countList};
        }
        return null;
    }
    // componentWillReceiveProps() {
        // 只针对props  状态state不关注的方法
    // }
    _onPageNumChange(e) {
        console.log(e)
        this.setState({
            pageNum:e
        },()=>{
            this.props.getUserList({page:this.state.pageNum,pageSize:this.state.pageSize})
        })
    }
    render() { 
        return (
            <div className="container-fluid">
                <div className="body">
                    <ol className="breadcrumb">
                        <li><a href="javascript:;">用户管理</a></li>
                        <li className="active">用户列表</li>
                    </ol>
                    <div className="panel panel-default user-list">
                        <div className="panel-body">
                            <form action="" className="form-inline">
                                <select name="" className="form-control input-sm">
                                    <option value="">按年龄</option>
                                </select>
                                <select name="" className="form-control input-sm">
                                    <option value="">按性别</option>
                                </select>
                                <select name="" className="form-control input-sm">
                                    <option value="">按地区</option>
                                </select>
                                <select name="" className="form-control input-sm">
                                    <option value="">按日期</option>
                                </select>
                                <button className="btn btn-danger btn-sm">筛选</button>
                                <div className="input-group pull-right">
                                    <input type="text" className="form-control input-sm" />
                                    <span className="input-group-btn">
                                        <button className="btn btn-danger btn-sm">搜索</button>
                                    </span>
                                </div>
                            </form>
                        </div>
                        <table className="table table-striped table-bordered table-hover">
                            <thead>
                                <tr>
                                    <th>编号</th>
                                    <th>注册账号</th>
                                    <th>昵称</th>
                                    <th>年龄</th>
                                    <th>性别</th>
                                    <th>地区</th>
                                    <th>手机号码</th>
                                    <th>积分</th>
                                    <th>注册时间</th>
                                    <th>登录时间</th>
                                    <th>操作</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.props.userList.map((student, index)=>(
                                        <tr key={index}>
                                            <td>{'LK'+((this.state.pageNum-1)*this.state.pageSize+index+1)}</td>
                                            <td>{student.reg_account}</td>
                                            <td>{student.user_name}</td>
                                            <td>{student.user_age}</td>
                                            <td>{student.user_sex}</td>
                                            <td>{student.area}</td>
                                            <td>{student.phone}</td>
                                            <td>{student.points}</td>
                                            <td>{student.reg_time}</td>
                                            <td>{student.last_login_time}</td>
                                            <td>
                                                <a href="user_center.html" className="btn btn-info btn-xs">查看</a>
                                                <a href="javascript:;" className="btn btn-warning btn-xs">锁定</a>
                                            </td>
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </table>
                    </div>
                    <LKPagination onChange={(e)=>{this._onPageNumChange(e)}} current={this.state.pageNum} total={this.state.total} pageSize={this.state.pageSize}/>
                    {/* <ul className="pagination pull-right">
                        <li><a href="#">上一页</a></li>
                        <li><a href="#">1</a></li>
                        <li><a href="#">2</a></li>
                        <li><a href="#">3</a></li>
                        <li><a href="#">4</a></li>
                        <li><a href="#">5</a></li>
                        <li><a href="#">下一页</a></li>
                    </ul> */}
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state)=>{
    return {
        userList: state.userList,
        countList: state.countList,
    }
}

const mapDispatchToProps =(dispatch)=>{
    return {
        getUserList(obj){
            const action = getStudentDataAction(obj);
            dispatch(action);
        },
        getCountList() {
            const action = getCountListAction();
            dispatch(action);
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(User);