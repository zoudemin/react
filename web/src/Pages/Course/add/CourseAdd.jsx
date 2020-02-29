import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {getCategoryListAction} from './../../../Store/actionCreators';

class CourseAdd extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ...this.props.courseAdd,
        }
    }
    componentDidMount(){
        this.props.getCategory();
    }
    render() { 
        return (
            <div className="container-fluid">
                <div className="body course-add">
                    <ol className="breadcrumb">
                        <li><a href="javascript:;">课程管理</a></li>
                        <li className="active">课程添加</li>
                    </ol>
                    <div className="steps create">
                        <div className="title">
                            <h5>创建课程 <small>CREATE A COURSE</small></h5>
                        </div>
                        <div className="form-horizontal  col-md-offset-3 col-md-6">
                            <div className="form-group">
                                <label htmlFor="" className="col-md-2 control-label">课程名称</label>
                                <div className="col-md-9">
                                    <input type="text" onChange={(e)=>{this._dealInputVal(e)}} value={this.state.course_name} className="form-control input-sm" placeholder="请填写课程名称" />
                                    <small className="text-danger">注意: 课程名称即对外展示的信息</small>
                                </div>
                            </div>
                            <div className="col-md-11">
                                <button onClick={()=>{this._dealClick()}} className="btn btn-danger btn-sm pull-right">创建课程</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
    _dealInputVal(e) {
        const val = e.target.value;
        this.setState({course_name: val});
    }
    _dealClick() {
        const {course_name} = this.state;
        if(course_name === '' || course_name === undefined) {
            alert('课程不能为空！');
            return '';
        }
        this.props.courseAdd.course_name = course_name;
        this.props.history.push('/course/add/one');
    }
}
const mapStateToProps = (state)=>{
    return {
        courseAdd: state.courseAdd,
    }
}
const mapDispatchToProps = (dispatch)=>{
    return {
        getCategory(data,callback) {
            const action = getCategoryListAction(data,callback);
            dispatch(action);
        },
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(CourseAdd);