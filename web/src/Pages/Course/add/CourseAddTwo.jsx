import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import course from './../../../Common/images/course.jpg'
import {GET_COURSE_COURSEADD} from './../../../Store/actionTypes';
import LKTool from './../../../Components/LKTool/LKTool';

class CourseAddTwo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ...this.props.courseAdd,
            imgUrl: '',
        }
    }
    render() { 
        return (
            <div className="container-fluid">
                <div className="body course-add teacher-profile">
                    <ol className="breadcrumb">
                        <li><a href="javascript:;">课程管理</a></li>
                        <li className="active">课程添加</li>
                    </ol>
                    <div className="steps">
                        <ul className="forwards list-unstyled">
                            <li>
                                <Link to="/course/add/one" className="done">
                                <b className="fa fa-check"></b>
                                基本信息
                                </Link>
                            </li>
                            <li>
                                <Link to="/course/add/two" className="active">
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
                        <div className="content settings">
                            <div className="title">
                                <h5>课程封面</h5>
                            </div>
                            <div className="picture col-md-offset-2">
                                <div className="col-md-2 preview" style={{height:'225px'}}>
                                    <img src={this.state.course_page===''?course:this.state.course_page} style={{border: '5px solid #e0e0e0'}} />
                                    <input onChange={(e)=>{this._previewImg(e, 'course_page')}} type="file" ref="course_page" className="form-control input-sm" placeholder="选择图片"/>
                                    <div className="cover">
                                        <i className="fa fa-upload"></i>
                                    </div>
                                </div>
                                <p className="tips">
                                    可上传jpg, gif, png格式文件, 图片建议尺寸大于400x225，文件大小不能超过2M。
                                </p>
                                <div className="col-md-2">
                                    <button onClick={()=>{this._dealClick()}} className="btn btn-danger btn-sm">下一步</button>
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
        this.setState({imgUrl:file});
    }
    _dealClick() {
        if(this.state.course_page === '' || this.state.course_page === undefined) {
            alert('请选择图片！');
            return '';
        }
        this.props.resertCourseAdd(this.state);
        this.props.history.push('/course/add/three');
    }
}
const mapStateToProps = (state)=>{
    return {
        courseAdd: state.courseAdd,
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
export default connect(mapStateToProps, mapDispatchToProps)(CourseAddTwo);