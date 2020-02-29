import ajax from './ajax'

// 0. 定义基础路径
const BASE_URL = '';

// 1. 请求首页的数据
export const getHomeData = () => ajax(BASE_URL + '/home/api/list');
// 2. 请求轮播图的数据
export const getSowingData = () => ajax(BASE_URL + '/sowing/api/list');
// 3. 添加轮播图数据
export const addSowingData = (data)=> ajax(BASE_URL + '/sowing/api/add', data, 'POST');
// 4. 删除一条轮播图数据
export const removeSowingData = (id)=>ajax(BASE_URL + '/sowing/api/remove/' + id);
// 5. 修改轮播图数据
export const editSowingData = (data)=> ajax(BASE_URL + '/sowing/api/edit', data, 'POST');
// 6. 用户登录
export const getUserData = (data)=> ajax(BASE_URL + '/user/api/login', data, 'POST');
// 7. 修改用户数据
export const updateUserData = (data)=> ajax(BASE_URL + '/user/api/edit', data, 'POST');
// 8. 修改密码
export const updatePwd = (data)=> ajax(BASE_URL + '/user/api/reset', data, 'POST');
// 9. 获取用户list
export const getUserList = (data)=> ajax(BASE_URL + '/stu/api/list', data, 'GET');
// 10. 获取用户count
export const getCountList = ()=> ajax(BASE_URL + '/stu/api/count');
// 11. 获取Category课程分类列表
export const getCategoryList = (data)=> ajax(BASE_URL + '/category/api/list', data);
// 12. 获取CategoryTotal课程分类列表length
export const getCategoryTotal = ()=> ajax(BASE_URL + '/category/api/total');
// 13. 获取Course课程分类列表
export const getCourseList = (data)=> ajax(BASE_URL + '/course/api/list', data);
// 14. 获取CourseTotal课程分类列表length
export const getCourseTotal = ()=> ajax(BASE_URL + '/course/api/count');
// 15. 添加课程
export const setCourse = (data)=> ajax(BASE_URL + '/course/api/add', data, 'POST');