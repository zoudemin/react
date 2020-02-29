import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import dfimg from './../../Common/images/default.png';
import {connect} from 'react-redux';
import LKTool from './../../Components/LKTool/LKTool';
import {updateUserDataAction} from './../../Store/actionCreators';
const IMG_PRE = "http://localhost:1688/uploads/";
const userData = JSON.parse(sessionStorage.getItem('userData'));

class Mine extends Component {
    constructor(props) {
        super(props);
        this.state = {...Object.assign({
            token: '',
            real_name: '',
            user_name: '',
            icon_url: '',
            sex: '',
            phone: '',
            e_mail: '',
            join_time: '',
            intro_self: '',
        }, userData),icon_url:IMG_PRE+userData.icon_url}
    }
    render() { 
        const {user_name, real_name, icon_url, sex, phone, e_mail, join_time, intro_self} = this.state;
        return (
            <div className="container-fluid">
                <div className="body teacher-profile">
                    <div className="settings">
                        <form action="" className="form-horizontal">
                            <div className="form-group">
                                <label htmlFor="" className="col-md-3 control-label">姓名</label>
                                <div className="col-md-5">
                                    <input onChange={(e)=>{this._onInputChange(e, 'real_name')}} ref='real_name' value={real_name} type="text" className="form-control input-sm" />
                                </div>
                            </div>
                            <div className="form-group">
                                <label htmlFor="" className="col-md-3 control-label">头像</label>
                                <div className="col-md-2 preview">
                                    <img src={icon_url.includes('undefined')?dfimg:(icon_url?icon_url:dfimg)} style={{border: '5px solid #e0e0e0'}} />
                                    <input onChange={(e)=>{this._onInputChange(e, 'icon_url', 'img')}} type="file" ref="icon_url" className="form-control input-sm"/>
                                    <div className="cover">
                                        <i className="fa fa-upload"></i>
                                    </div>
                                </div>
                            </div>
                            <div className="form-group">
                                <label htmlFor="" className="col-md-3 control-label">性别</label>
                                <div className="col-md-3">
                                    <label className="radio-inline">
                                        <input name='sex' type="radio" checked={this.state.sex==='1'} onChange={(e)=>{this._onInputChange(e, 'sex', {type:'radio',value:'1'})}}/> 男
                                    </label>
                                    <label className="radio-inline">
                                        <input name='sex' type="radio" checked={this.state.sex==='0'} onChange={(e)=>{this._onInputChange(e, 'sex', {type:'radio',value:'0'})}}/> 女
                                    </label>
                                </div>
                            </div>
                            <div className="form-group">
                                <label htmlFor="" className="col-md-3 control-label">用户名</label>
                                <div className="col-md-5">
                                    <input disabled value={user_name} type="text" className="form-control input-sm" />
                                </div>
                            </div>
                            <div className="form-group">
                                <label htmlFor="" className="col-md-3 control-label">手机号码</label>
                                <div className="col-md-5">
                                    <input type="text" ref="phone" onChange={(e)=>{this._onInputChange(e, 'phone')}} value={phone} className="form-control input-sm" />
                                </div>
                            </div>
                            <div className="form-group">
                                <label htmlFor="" className="col-md-3 control-label">Email</label>
                                <div className="col-md-5">
                                    <input type="text" ref="e_mail" onChange={(e)=>{this._onInputChange(e, 'e_mail')}} value={e_mail} className="form-control input-sm" />
                                </div>
                            </div>
                            <div className="form-group">
                                <label htmlFor="" className="col-md-3 control-label">加入日期</label>
                                <div className="col-md-5">
                                    <input type="date" ref="join_time" onChange={(e)=>{this._onInputChange(e, 'join_time')}} value={join_time.substring(0,10)} className="form-control input-sm" />
                                </div>
                            </div>
                            {/* <div className="form-group">
                                <label htmlFor="" className="col-md-3 control-label">出生日期</label>
                                <div className="col-md-5">
                                    <input type="date" className="form-control input-sm" />
                                </div>
                            </div> */}
                            {/* <div className="form-group">
                                <label htmlFor="" className="col-md-3 control-label">住址</label>
                                <div className="col-md-5">
                                    <select name="" className="form-control input-sm">
                                        <option value="">安徽省</option>
                                        <option value="">江苏省</option>
                                        <option value="">广东省</option>
                                    </select>
                                    <select name="" className="form-control input-sm">
                                        <option value="">黄山市</option>
                                        <option value="">上海市</option>
                                        <option value="">广州市</option>
                                    </select>
                                    <select name="" className="form-control input-sm">
                                        <option value="">徽州区</option>
                                        <option value="">徐汇区</option>
                                        <option value="">天河区</option>
                                    </select>
                                </div>
                            </div> */}
                            <div className="form-group">
                                <label htmlFor="" className="col-md-3 control-label">自我介绍</label>
                                <div className="col-md-5 ckeditor">
                                    <textarea name="intro_self" rows="15" onChange={(e)=>{this._onInputChange(e, 'intro_self')}} value={intro_self} className="form-control input-sm"></textarea>
                                </div>
                            </div>
                            <div className="form-group">
                                <div className="col-md-8">
                                    <button type="button" onClick={(e)=>this._submit(e)} className="btn btn-danger pull-right">保 存</button>
                                    <Link to="/mine/resetpwd" className="btn btn-link btn-success pull-right">修改密码？</Link>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
    _submit(e) {
        const formData = new FormData();
        const obj = {...this.state,icon_url:this.refs.icon_url.files[0]||this.state.icon_url.split(IMG_PRE)[1]};
        for (let key in obj){
            formData.append(key, obj[key]);
        }
        this.props.updateUserDataFn(formData,(userData)=>{
            if(userData.token!=='') {
                alert('修改用户信息成功！')
                this.props.history.push('/');
                // window.location.reload();
            }
        })
        console.log(formData.get('icon_url'));
    }
    _onInputChange(e, flag, type) {
        if(type && type === 'img') {
            let img = this.refs[flag].files[0];
            const lktool = new LKTool();
            lktool.fileToBase64(img, (val)=>{
                let obj = {};
                obj[flag] = val;
                this.setState(obj);
            })
            return '';
        } else if (type && typeof type === 'object' && type.type === 'radio') {
            this.setState({
                [flag]: type.value
            })
            return '';
        }
        this.setState({[flag]:e.target.value})
    }
}
const mapStateToProps = (state)=>{
    return {
        userData: state.userData
    }
}
const mapDispatchToProps = (dispatch)=>{
    return {
        updateUserDataFn(data, callback){
            const action = updateUserDataAction(data, callback);
            dispatch(action);
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Mine);