import * as constants from './actionTypes';
const defaultState={
    homeData: {
        "_id":1000,
        "login_user":"666",
        "new_register":"666",
        "new_stu_course":"666",
        "new_stu_classes":"666",
        "new_member":"666",
        "not_reply":"666",
        "order_counter":{
            "web": 123,
            "java": 123,
            "python": 123,
            "bigdata": 123,
            "ui": 123,
        },
        "c_time":"16:59:11.1234567",
        "l_time":"16:59:11.1234567",
        "__v":0,
    },
    sowingData: [{
        "_id":100,
        "image_title":"图片一",
        "image_url":"upload_0cb2e90fdf4a2b40bd72c1bb50ccc346.jpg",
        "image_small_url":"upload_0cb2e90fdf4a2b40bd72c1bb50ccc346.jpg",
        "image_link":"http://www.baidu.com",
        "s_time":"16:59:11.1234567",
        "e_time":"16:59:11.1234567",
        "c_time":"16:59:11.1234567",
        "l_time":"16:59:11.1234567",
        "__v":0,
    },{
        "_id":101,
        "image_title":"图片二",
        "image_url":"upload_0cb2e90fdf4a2b40bd72c1bb50ccc346.jpg",
        "image_small_url":"upload_0cb2e90fdf4a2b40bd72c1bb50ccc346.jpg",
        "image_link":"http://www.thingjs.com",
        "s_time":"16:59:11.1234567",
        "e_time":"16:59:11.1234567",
        "c_time":"16:59:11.1234567",
        "l_time":"16:59:11.1234567",
        "__v":0,
    },{
        "_id":102,
        "image_title":"图片三",
        "image_url":"upload_0cb2e90fdf4a2b40bd72c1bb50ccc346.jpg",
        "image_small_url":"upload_0cb2e90fdf4a2b40bd72c1bb50ccc346.jpg",
        "image_link":"http://www.baidu.com",
        "s_time":"16:59:11.1234567",
        "e_time":"16:59:11.1234567",
        "c_time":"16:59:11.1234567",
        "l_time":"16:59:11.1234567",
        "__v":0,
    }],
    userData:{},
    userList:[],
    countList: 0,
    category:[],
    categoryList:0,
    course:[],
    courseTotal:0,
    courseAdd:{
        course_name: '',
        course_title: '',
        course_sub_title: '',
        course_teacher: '',
        course_serialize_status: '',
        main_category: '',
        sub_category: '',
        course_intro: '',
        course_tag: '',
        course_page: '',
        course_manager: [
            {
                c_title: '',
                c_video: '',
                c_intro: '',
                c_time: ''
            }
        ]
    }
};


export default (state = defaultState, action) =>{
    if(action.type === constants.INIT_HOME_DATA) {
        const newState = JSON.parse(JSON.stringify(state));
        newState.homeData = action.homeData;
        return newState;
    } else if (action.type === constants.GET_SOWING_DATA) {
        const newState = JSON.parse(JSON.stringify(state));
        newState.sowingData = action.sowingData;
        return newState;
    } else if (action.type === constants.INIT_USER_DATA) {
        const newState = JSON.parse(JSON.stringify(state));
        newState.userData = action.userData;
        sessionStorage.setItem('userData',JSON.stringify(action.userData));
        return newState;
    } else if (action.type === constants.GET_USER_LIST) {
        const newState = JSON.parse(JSON.stringify(state));
        newState.userList = action.userList;
        return newState;
    } else if (action.type === constants.GET_COUNT_LIST) {
        const newState = JSON.parse(JSON.stringify(state));
        newState.countList = action.countList;
        return newState;
    } else if (action.type === constants.GET_CATEGORY_LIST) {
        const newState = JSON.parse(JSON.stringify(state));
        newState.category = action.category;
        return newState;
    } else if (action.type === constants.GET_CATEGORY_TOTAL) {
        const newState = JSON.parse(JSON.stringify(state));
        newState.categoryList = action.categoryList;
        return newState;
    } else if (action.type === constants.GET_COURSE_LIST) {
        const newState = JSON.parse(JSON.stringify(state));
        newState.course = action.course;
        return newState;
    } else if (action.type === constants.GET_COURSE_TOTAL) {
        const newState = JSON.parse(JSON.stringify(state));
        newState.courseTotal = action.courseTotal;
        return newState;
    } else if (action.type === constants.GET_COURSE_COURSEADD) {
        const newState = JSON.parse(JSON.stringify(state));
        newState.courseAdd = action.courseAdd;
        return newState;
    }
    return state;
}