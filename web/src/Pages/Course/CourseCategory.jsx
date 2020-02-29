import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {getCategoryListAction, getCategoryListTotal} from './../../Store/actionCreators';
import LKPagination from './../../Components/LKTool/LKPagination';

class CourseCategory extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pageNum: 1,
            total: 0,
            pageSize: 2,
        }
    }
    componentDidMount() {
        this.props.getCategory({page:this.state.pageNum,pageSize:this.state.pageSize},(v)=>{console.log(v)});
        this.props.getCategoryList();
    }
    static getDerivedStateFromProps(nextProps, prevState) {
        if (nextProps.categoryList!==prevState.total) {
            return {total: nextProps.categoryList};
        }
        return null;
    }
    render() { 
        const obj = this.props.category;
        return (
            <div className="container-fluid">
                <div className="body course-category">
                    <ol className="breadcrumb">
                        <li><Link to="/course/category">课程管理</Link></li>
                        <li className="active">课程分类</li>
                    </ol>
                    <div className="page-title">
                        <Link to="/course/category_add" className="btn btn-danger btn-sm pull-right">添加分类</Link>
                    </div>
                    <div className="panel panel-default">
                        <table className="table table-bordered">
                            <thead>
                                <tr>
                                    <th width="18%">分类名称</th>
                                    <th>课程数量</th>
                                    <th>是否显示</th>
                                    <th>排序</th>
                                    <th width="10%">操作</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    [].concat.apply([],obj.map((item, index)=>{
                                        return (
                                            [<tr className="active" key={index}>
                                                <td className="text-left">{item.main_title}</td>
                                                <td>{item.main_total_count}</td>
                                                <td>{item.main_is_show === '1'?'是':'否'}</td>
                                                <td>{item.main_sort}</td>
                                                <td>
                                                <Link to={{pathname:"/course/category_add",state:item}} className="btn btn-info btn-xs">编辑</Link>
                                                </td>
                                        </tr>].concat(
                                            item.sub_course.map((child, i)=>{
                                                return (
                                                    <tr key={index+''+i}>
                                                        <td className="text-left">&nbsp;&nbsp;├ {child.sub_title}</td>
                                                        <td>{child.sub_total_count}</td>
                                                        <td>{child.sub_is_show === '1'?'是':'否'}</td>
                                                        <td>{child.sub_sort}</td>
                                                        <td>
                                                        <Link to={{pathname:"/course/category_add",state:child}} className="btn btn-info btn-xs">编辑</Link>
                                                        </td>
                                                    </tr>
                                                )
                                            }))
                                        )
                                    }))
                                }
                            </tbody>
                        </table>
                        <LKPagination style={{marginTop: '20px'}} onChange={(e)=>{this._onPageNumChange(e)}} current={this.state.pageNum} total={this.state.total} pageSize={this.state.pageSize}/>
                    </div>
                </div>
            </div>
        );
    }
    _onPageNumChange(e) {
        console.log(e)
        this.setState({
            pageNum:e
        },()=>{
            this.props.getCategory({page:this.state.pageNum,pageSize:this.state.pageSize},()=>{})
        })
    }
}

const mapStateProps = (state)=>{
    return {
        category: state.category,
        categoryList: state.categoryList,
    }
}

const mapDispatchProps = (dispatch)=>{
    return {
        getCategory(data,callback) {
            const action = getCategoryListAction(data,callback);
            dispatch(action);
        },
        getCategoryList() {
            const action = getCategoryListTotal();
            dispatch(action);
        }
    }
}

export default connect(mapStateProps, mapDispatchProps)(CourseCategory);