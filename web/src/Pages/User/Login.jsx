import React, { Component } from 'react';
import {connect} from 'react-redux';
import {getUserDataAction} from './../../Store/actionCreators';
import md5 from 'md5'
const S_KEY = 'WaYjH1314.ItLikE.CoM';
class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user_name:'',
            user_pwd:''
        }
    }
    render() { 
        return (
            <div>
                <div className="login">
                    <div className="login-wrap">
                        <div className="avatar">
                            <img src="./uploads/logo.jpg" className="img-circle" alt=""/>
                        </div>
                        <form className="col-md-offset-1 col-md-10">
                            <div className="input-group input-group-lg">
                                <span className="input-group-addon">
                                    <i className="fa fa-id-card-o"></i>
                                </span>
                                <input onKeyDown={(e)=>{this._onInputKeyUp(e)}} onChange={(e)=>{this._onInputChange(e)}} name="user_name" type="text" className="form-control" placeholder="撩课口令"/>
                            </div>
                            <div className="input-group input-group-lg">
                                <span className="input-group-addon">
                                    <i className="fa fa-key"></i>
                                </span>
                                <input onKeyDown={(e)=>{this._onInputKeyUp(e)}} onChange={(e)=>{this._onInputChange(e)}} name="user_pwd" type="password" className="form-control" placeholder="密码"/>
                            </div>
                            <button onClick={()=>{this._onSubmit()}} type="button" className="btn btn-lg btn-danger btn-block">登 录</button>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
    _onInputChange(e){
        let inputValue = e.target.value,
        inputName = e.target.name;
        this.setState({
            [inputName]:inputValue
        })
    }
    _onInputKeyUp(e){
        if(e.keyCode === 13){
            this._onSubmit();
        }
    }
    _onSubmit(){
        const {user_name, user_pwd} = this.state;
        if(!user_name) {
            alert('用户名不能为空!');
            return '';
        }
        if(!user_pwd) {
            alert('密码不能为空!');
            return '';
        }
        const md5_user_pwd = md5(user_pwd+S_KEY);
        const params = new URLSearchParams();
        params.append('user_name', user_name);
        params.append('user_pwd', md5_user_pwd);
        this.props.getUserDataFn(params,(userData)=>{
            if(userData.token!=='') {
                // this.props.history.replace('/');
                window.location.href='/';
            }
        })
    }
}

const mapStateToProps=(state)=>{
    return {
        userData: state.userData
    }
}

const mapDispatchToProps=(dispatch)=>{
    return {
        getUserDataFn(data, callback){
            const action = getUserDataAction(data, callback);
            dispatch(action);
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);