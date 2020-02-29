import React, { Component } from 'react';
import md5 from 'md5';
import {updateUserPwd} from './../../Store/actionCreators';
import {connect} from 'react-redux';

const S_KEY = 'WaYjH1314.ItLikE.CoM';
const userData = JSON.parse(sessionStorage.getItem('userData'));

class ResetPwd extends Component {
    constructor(props) {
        super(props);
        this.state = {
            token: userData.token || '',
            old_pwd: '',
            new_pwd_one: '',
            new_pwd_two: '',
        }
    }
    render() { 
        return (
            <div className="container-fluid">
                <div className="body">
                    <div className="repass">
                        <div className="form-horizontal col-md-offset-2">
                            <div className="form-group">
                                <label htmlFor="" className="col-md-3 control-label">原密码</label>
                                <div className="col-md-4">
                                    <input value={this.state.old_pwd} onChange={(e)=>{this._inputChange(e)}} name="old_pwd" autoComplete="off" type="text" placeholder='请输入原密码' className="form-control input-sm"/>
                                </div>
                            </div>
                            <div className="form-group">
                                <label htmlFor="" className="col-md-3 control-label">新密码</label>
                                <div className="col-md-4">
                                    <input value={this.state.new_pwd_one} onChange={(e)=>{this._inputChange(e)}} name="new_pwd_one" autoComplete="new-password" placeholder='请输入新密码' type="password" className="form-control input-sm"/>
                                </div>
                            </div>
                            <div className="form-group">
                                <label htmlFor="" className="col-md-3 control-label">确认密码</label>
                                <div className="col-md-4">
                                    <input value={this.state.new_pwd_two} onChange={(e)=>{this._inputChange(e)}} name="new_pwd_two" type="password" placeholder='请再次输入新密码' className="form-control input-sm"/>
                                </div>
                            </div>
                            <div className="form-group">
                                <div className="col-md-7">
                                    <button type="button" onClick={()=>{this._submit()}} className="btn btn-success btn-danger  pull-right">修 改</button>
                                    <button type="button" onClick={()=>{this.props.history.goBack()}} className="btn btn-success btn-warning pull-right" style={{marginRight: 10}}>返 回</button>
                                </div>                          
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
    _inputChange(e) {
        this.setState({[e.target.name]: e.target.value},()=>{console.log(this.state)});
    }
    _submit() {
        if(this.state.new_pwd_one !== this.state.new_pwd_two) {
            alert('两次输入密码不一致！');
            this.setState({new_pwd_two: ''});
            return '';
        }
        const obj = new URLSearchParams();
        obj.append('token',this.state.token);
        obj.append('old_pwd',md5(this.state.old_pwd + S_KEY));
        obj.append('new_pwd',md5(this.state.new_pwd_one + S_KEY));
        this.props.uptatePwdFn(obj, (res)=>{
            alert('密码修改成功');
            sessionStorage.removeItem('userData');
            this.props.history.push('/login');
        })
    }
}
const mapDispatchToProps = (dispatch)=>{
    return {
        uptatePwdFn(data, callback){
            const action = updateUserPwd(data, callback);
            dispatch(action);
        }
    }
}
 
export default connect(null, mapDispatchToProps)(ResetPwd);