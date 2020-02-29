import * as constants from './actionTypes';
import {setCourse, getCourseTotal, getCourseList, getCategoryTotal, getCategoryList, getHomeData, getSowingData, getUserData, updateUserData, updatePwd, getUserList, getCountList} from './../Api/index';
// 获取首页数据
export const getHomeDataAction=()=>{
    return (dispatch)=>{
        getHomeData().then((res)=>{
            if(res.status_code === 200) {
                const homeData = res.result[0];
                dispatch({
                    type:constants.INIT_HOME_DATA,
                    homeData,
                })
            }
        }).catch(()=>{
            alert('首页数据请求失败!');
        });
    }
}

export const getSowingDataAction=()=>{
    return (dispatch) => {
        getSowingData().then((res)=>{
            if (res.status_code === 200) {
                const sowingData = res.result;
                dispatch({
                    type:constants.GET_SOWING_DATA,
                    sowingData,
                })
            }
        }).catch(()=>{
            alert('轮播数据获取失败!');
        })
    }
}

export const getUserDataAction=(data, callback)=>{
    return (dispatch)=>{
        getUserData(data).then((res)=>{
            if (res.status_code === 200) {
                const userData = res.result;
                dispatch({
                    type:constants.INIT_USER_DATA,
                    userData
                })
                callback&&callback(userData);
            } else {
                console.error(res.result);
            }
        }).catch((error)=>{
            console.error(error)
        })
    }
}

export const updateUserDataAction=(data, callback)=>{
    return (dispatch)=>{
        updateUserData(data).then((res)=>{
            if(res.status_code === 200){
                const userData = res.result;
                dispatch({
                    type:constants.INIT_USER_DATA,
                    userData
                })
                callback&&callback(userData);
            } else {
                console.error(res.result);
            }
        }).catch((error)=>{
            console.log(error);
        })
    }
}

export const updateUserPwd = (data, callback)=>{
    return (dispatch)=>{
        updatePwd(data).then((req)=>{
            if(req.status_code === 200) {
                const userData = null;
                dispatch({
                    type:constants.INIT_USER_DATA,
                    userData
                })
                callback&&callback(userData);
            } else {
                alert(req.result);
            }
        }).catch((error)=>{
            console.log(error);
        })
    }
}

export const getStudentDataAction=(obj)=>{
    return (dispatch) => {
        getUserList(obj).then((res)=>{
            if (res.status_code === 200) {
                const userList = res.result;
                console.log(userList)
                dispatch({
                    type:constants.GET_USER_LIST,
                    userList,
                })
            }
        }).catch(()=>{
            alert('用户List数据获取失败!');
        })
    }
}

export const getCountListAction=()=>{
    return (dispatch)=>{
        getCountList().then((res)=>{
            if (res.status_code === 200) {
                const countList = res.result;
                dispatch({
                    type:constants.GET_COUNT_LIST,
                    countList,
                })
            }
        }).catch(()=>{
            alert('用户Count数据获取失败!');
        })
    }
}

export const getCategoryListAction=(data, callback)=>{
    return (dispatch)=>{
        getCategoryList(data).then((res)=>{
            if (res.status_code === 200) {
                const category = res.result;
                dispatch({
                    type:constants.GET_CATEGORY_LIST,
                    category,
                })
                callback&&callback(category);
            }
        }).catch(()=>{
            alert('用户Category数据获取失败!');
        })
    }
}

export const getCategoryListTotal=()=>{
    return (dispatch)=>{
        getCategoryTotal().then((res)=>{
            if (res.status_code === 200) {
                const categoryList = res.result;
                dispatch({
                    type:constants.GET_CATEGORY_TOTAL,
                    categoryList,
                })
            }
        }).catch(()=>{
            alert('用户CategoryList数据获取失败!');
        })
    }
}

export const getCourseListAction=(data, callback)=>{
    return (dispatch)=>{
        getCourseList(data).then((res)=>{
            if (res.status_code === 200) {
                const course = res.result;
                dispatch({
                    type:constants.GET_COURSE_LIST,
                    course,
                })
                callback&&callback(course);
            }
        }).catch(()=>{
            alert('用户Course数据获取失败!');
        })
    }
}

export const getCourseListTotal=()=>{
    return (dispatch)=>{
        getCourseTotal().then((res)=>{
            if (res.status_code === 200) {
                const courseTotal = res.result;
                dispatch({
                    type:constants.GET_COURSE_TOTAL,
                    courseTotal,
                })
            }
        }).catch(()=>{
            alert('用户courseTotal数据获取失败!');
        })
    }
}

export const setCourseAction=(data, callback)=>{
    return (dispatch)=>{
        setCourse(data).then((res)=>{
            if (res.status_code === 200) {
                const course = res.result;
                dispatch({
                    type:constants.GET_COURSE_COURSEADD,
                    courseAdd:null,
                })
                callback&&callback(course);
            }
        }).catch(()=>{
            alert('添加course数据失败!');
        })
    }
}