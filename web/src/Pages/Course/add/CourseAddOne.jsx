import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {GET_COURSE_COURSEADD} from './../../../Store/actionTypes';

class CourseAddOne extends Component {
    constructor(props) {
        super(props);
        this.state = {
            course_title: this.props.courseAdd.course_title,
            course_sub_title: this.props.courseAdd.course_sub_title,
            course_teacher: this.props.courseAdd.course_teacher,
            course_serialize_status: this.props.courseAdd.course_serialize_status,
            main_category: this.props.courseAdd.main_category,
            sub_category: this.props.courseAdd.sub_category,
            course_intro: this.props.courseAdd.course_intro,
            course_tag: this.props.courseAdd.course_tag,
        }
    }
    render() { 
        return (
            <div className="container-fluid">
                <div className="body course-add">
                    <ol className="breadcrumb">
                        <li><a href="javascript:;">课程管理</a></li>
                        <li className="active">课程添加</li>
                    </ol>
                    <div className="steps">
                        <ul className="forwards list-unstyled">
                            <li>
                                <Link to="/course/add/one" className="active">
                                <b>1</b>
                                基本信息
                                </Link>
                            </li>
                            <li>
                                <Link to="/course/add/two">
                                <b>2</b>
                                课程图片
                                </Link>
                            </li>
                            <li>
                                <Link to="/course/add/three">
                                <b>3</b>
                                课时管理
                                </Link>
                            </li>
                        </ul>
                        <div className="content">
                            <div className="title">
                                <h5>课程信息</h5>
                            </div>
                            <div className="basic form-horizontal">
                                <div className="form-group">
                                    <label htmlFor="" className="col-md-2 control-label">标题</label>
                                    <div className="col-md-8">
                                        <input type="text" name="course_title" placeholder="填写课程标题" className="form-control input-sm" onChange={(e)=>{this._dealInputVal(e,'course_title')}} value={this.state.course_title}/>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="" className="col-md-2 control-label">副标题</label>
                                    <div className="col-md-8">
                                        <input type="text" name="course_sub_title" placeholder="填写课程副标题" className="form-control input-sm" onChange={(e)=>{this._dealInputVal(e,'course_sub_title')}} value={this.state.course_sub_title}/>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="" className="col-md-2 control-label">讲师</label>
                                    <div className="col-md-8">
                                        <select onChange={(e)=>{this._dealInputVal(e,'course_teacher')}} value={this.state.course_teacher} name="course_teacher" className="form-control input-sm">
                                            <option value="">请选择</option>
                                            <option value="邹德敏">邹德敏</option>
                                            <option value="张艳凤">张艳凤</option>
                                            <option value="刘教授">刘教授</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="" className="col-md-2 control-label">连载状态</label>
                                    <div className="col-md-8">
                                        <select onChange={(e)=>{this._dealInputVal(e,'course_serialize_status')}} value={this.state.course_serialize_status} name="course_serialize_status" className="form-control input-sm">
                                            <option value="">请选择</option>
                                            <option value="0">非连载课程</option>
                                            <option value="1">更新中</option>
                                            <option value="2">已完结</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="" className="col-md-2 control-label">分类</label>
                                    <div className="col-md-8">
                                        <select name="main_category" onChange={(e)=>{this._dealInputVal(e,'main_category')}} value={this.state.main_category} className="form-control input-sm">
                                            <option value="">请选择一级分类</option>
                                            {/* <option value="web前端">web前端</option>
                                            <option value="Java">Java</option>
                                            <option value="Php">Php</option> */}
                                            {
                                                this.props.category.map((item, index)=>{
                                                    return (
                                                        <option value={item.main_title} key={index}>{item.main_title}</option>
                                                    )
                                                })
                                            }
                                        </select>
                                        <select name="sub_category" onChange={(e)=>{this._dealInputVal(e,'sub_category')}} value={this.state.sub_category} className="form-control input-sm">
                                            <option value="">请选择二级分类</option>
                                            {/* <option value="前端基础">前端基础</option>
                                            <option value="Java基础">Java基础</option>
                                            <option value="Php基础">Php基础</option>
                                            <option value="js">js</option>
                                            <option value="html">html</option>
                                            <option value="css">css</option>
                                            <option value="Java-spring">Java-spring</option>
                                            <option value="Php-spring">Php-spring</option> */}
                                            {
                                                this.props.category.map((item)=>{
                                                    if(this.state.main_category === item.main_title) {
                                                        return (
                                                            item.sub_course.map((child, index)=>{
                                                                return (
                                                                    <option value={child.sub_title} key={index}>{child.sub_title}</option>
                                                                )
                                                            })
                                                        )
                                                    } else {
                                                        return ;
                                                    }
                                                })
                                            }
                                        </select>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="" className="col-md-2 control-label">课程简介</label>
                                    <div className="col-md-8 ckeditor">
                                        <textarea name="course_intro" onChange={(e)=>{this._dealInputVal(e,'course_intro')}} value={this.state.course_intro} rows="15" className="form-control input-sm"></textarea>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="" className="col-md-2 control-label">标签</label>
                                    <div className="col-md-8">
                                        <input type="text" name="course_tag" placeholder="填写课程标签" className="form-control input-sm" onChange={(e)=>{this._dealInputVal(e,'course_tag')}} value={this.state.course_tag}/>
                                        <p className="help-block">标签将有利于您的课程被学生检索到</p>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <div className="col-md-10">
                                        <button onClick={()=>{this._dealClick()}} className="btn btn-danger btn-sm pull-right">创建课程</button>
                                    </div>                          
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
    _dealInputVal(e,key) {
        const obj = {};
        obj[key] = e.target.value;
        this.setState(obj);
    }
    _dealClick() {
        const states = this.state;
        for (let key in states){
            if(states[key] === '' || states[key] === undefined) {
                alert(key+'不能为空！');
                return '';
            }
        }
        this.props.resertCourseAdd({...this.props.courseAdd,...this.state})
        this.props.history.push('/course/add/two');
    }
}
const mapStateToProps = (state)=>{
    return {
        courseAdd: state.courseAdd,
        category: state.category,
    }
}
const mapDispatchToProps = (dispatch)=>{
    return {
        resertCourseAdd(courseAdd){
            dispatch({
                type:GET_COURSE_COURSEADD,
                courseAdd,
            })
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(CourseAddOne);