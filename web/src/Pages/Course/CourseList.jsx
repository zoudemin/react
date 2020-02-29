import React, { Component } from 'react';
import course_1 from './../../Common/uploads/course_1.png';
import {getCourseListAction, getCourseListTotal} from "./../../Store/actionCreators";
import LKPagination from './../../Components/LKTool/LKPagination';
import { connect } from 'react-redux';
const IMG_PRE = "http://localhost:1688/uploads/";

class CourseList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pageNum: 1,
            total: 0,
            pageSize: 5,
        }
    }
    componentDidMount(){
        this.props.getCourseList({page:this.state.pageNum,pageSize:this.state.pageSize});
        this.props.getCountList();
    }
    static getDerivedStateFromProps(nextProps, prevState) {
        if (nextProps.courseTotal!==prevState.total) {
            return {total: nextProps.courseTotal};
        }
        return null;
    }
    _onPageNumChange(e) {
        console.log(e)
        this.setState({
            pageNum:e
        },()=>{
            this.props.getCourseList({page:this.state.pageNum,pageSize:this.state.pageSize})
        })
    }
    render() { 
        return (
            <div className="container-fluid">
                <div className="body course-list">
                    <ol className="breadcrumb">
                        <li><a href="javascript:;">课程管理</a></li>
                        <li className="active">课程列表</li>
                    </ol>
                    <div className="courses">
                        {
                            this.props.course.map((item, index)=>{
                                return (
                                    <div className="course" key={index}>
                                        <div className="pic">
                                            <img src={item.course_page!==''?IMG_PRE+item.course_page:course_1} alt="" style={{height:'100%'}}/>
                                        </div>
                                        <div className="info">
                                            <a href="javascript:;">{item.course_name}</a>
                                            <ul className="list-unstyled">
                                                <li>
                                                    <span>讲师：{item.course_teacher}</span>
                                                    <span>类别：{item.main_category}</span>
                                                </li>
                                                <li>
                                                    <span>子类别：{item.course_sub_title}</span>
                                                    <span>标签：{item.course_tag}</span>
                                                </li>
                                                <li>
                                                    <span>连载状态：{item.course_serialize_status === '0'?'未连载':(item.course_serialize_status === '1'?'连载中':'已完结')}</span>
                                                    <span>简介：{item.course_intro}</span>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                    <LKPagination onChange={(e)=>{this._onPageNumChange(e)}} current={this.state.pageNum} total={this.state.total} pageSize={this.state.pageSize}/>
                </div>
            </div>
        );
    }
}
const mapStateToProps = (state)=>{
    return {
        course: state.course,
        courseTotal: state.courseTotal,
    }
}

const mapDispatchToProps =(dispatch)=>{
    return {
        getCourseList(obj){
            const action = getCourseListAction(obj);
            dispatch(action);
        },
        getCountList() {
            const action = getCourseListTotal();
            dispatch(action);
        }
    }
}
 
export default connect(mapStateToProps,mapDispatchToProps)(CourseList);