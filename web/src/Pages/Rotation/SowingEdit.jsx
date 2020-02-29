import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {editSowingData} from './../../Api/index';
import LKTool from './../../Components/LKTool/LKTool';
const IMG_PRE = "http://localhost:1688/uploads/";

class SowingEdit extends Component {
    constructor(props) {
        super(props);
        console.log(this.props.location)
        this.state = {
            ...this.props.location.state,
            image_url:IMG_PRE + this.props.location.state.image_url,
            image_small_url:IMG_PRE + this.props.location.state.image_small_url,
        }
    }
    render() { 
        return (
            <div>
                <div className="container-fluid">
                    <div className="body teacher-profile">
                        <ol className="breadcrumb">
                            <li><Link to="/sowing">轮播图管理</Link></li>
                            <li className="active">编辑轮播图</li>
                        </ol>
                        <div className="settings">
                            <div className="form-horizontal">
                                <div className="form-group">
                                    <label htmlFor="" className="col-md-3 control-label">图片名称</label>
                                    <div className="col-md-5">
                                        <input type="text" onChange={(e)=>{this._dealInputValue(e,'image_title')}} ref="image_title" value={this.state.image_title} className="form-control input-sm" placeholder="填写模块名称"/>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="" className="col-md-3 control-label">大图片</label>
                                    <div className="col-md-2 preview">
                                        <img src={this.state.image_url} style={{border: '5px solid #e0e0e0'}} />
                                        <input onChange={(e)=>{this._previewImg(e, 'image_url')}} type="file" ref="image_url" className="form-control input-sm" placeholder="选择大图片"/>
                                        <div className="cover">
                                            <i className="fa fa-upload"></i>
                                        </div>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="" className="col-md-3 control-label">小图片</label>
                                    <div className="col-md-2 preview">
                                        <img src={this.state.image_small_url} style={{border: '5px solid #e0e0e0'}} />
                                        <input onChange={(e)=>{this._previewImg(e, 'image_small_url')}} type="file" ref="image_small_url" className="form-control input-sm" placeholder="选择小图片"/>
                                        <div className="cover">
                                            <i className="fa fa-upload"></i>
                                        </div>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="" className="col-md-3 control-label">跳转图片链接</label>
                                    <div className="col-md-5">
                                        <input type="text" onChange={(e)=>{this._dealInputValue(e,'image_link')}} ref="image_link" value={this.state.image_link} className="form-control input-sm" placeholder="填写跳转图片链接"/>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="" className="col-md-3 control-label">计划上架时间</label>
                                    <div className="col-md-5">
                                        <input type="text" onChange={(e)=>{this._dealInputValue(e,'s_time')}} ref="s_time" value={this.state.s_time} className="form-control input-sm" placeholder="填写计划上架时间"/>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="" className="col-md-3 control-label">计划下架时间</label>
                                    <div className="col-md-5">
                                        <input type="text" onChange={(e)=>{this._dealInputValue(e,'e_time')}} ref="e_time" value={this.state.e_time} className="form-control input-sm" placeholder="填写计划下架时间"/>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <div className="col-md-8">
                                        <button onClick={()=>this._updateClick()} className="btn btn-danger btn-sm pull-right">确认修改</button>
                                    </div>                          
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
    _previewImg(e, imgRef) {
        let file = this.refs[imgRef].files[0];
        const fileBase = new LKTool();
        fileBase.fileToBase64(file, (val)=>{
            let obj = {};
            obj[imgRef] = val;
            this.setState(obj);
        })
    }
    _dealInputValue(e, type) {
        let obj = {};
        obj[type] = e.target.value;
        this.setState(obj);
    }
    _updateClick(){
        const _id = this.state._id;
        const image_title = this.refs.image_title.value;
        const image_url = this.refs.image_url.files[0]||this.state.image_url.split(IMG_PRE)[1];
        const image_small_url = this.refs.image_small_url.files[0]||this.state.image_small_url.split(IMG_PRE)[1];
        const image_link = this.refs.image_link.value;
        const s_time = this.refs.s_time.value;
        const e_time = this.refs.e_time.value;
        console.log(image_title,image_url,image_small_url,image_link,s_time,e_time)
        if(!image_title||!image_url||!image_small_url||!image_link||!s_time||!e_time){
            alert('输入的内容不能为空!');
            return '';
        }
        // 创建formData对象
        let formData = new FormData();
        formData.append('id',_id);
        formData.append('image_title',image_title);
        formData.append('image_url',image_url);
        formData.append('image_small_url',image_small_url);
        formData.append('image_link',image_link);
        formData.append('s_time',s_time);
        formData.append('e_time',e_time);
        editSowingData(formData).then((res)=>{
            if (res.status_code === 200) {
                this.props.history.push('/sowing');
            }
            console.log(res);
        }).catch(()=>{
            console.error('修改失败!')
        });
    }
}
 
export default SowingEdit;