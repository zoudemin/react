import mongoose from 'mongoose';
mongoose.connect('mongodb://localhost/lk_data');

const homeSchema = mongoose.Schema({
    // 登录用户数
    login_user: {type: String, required: true},
    // 新增注册数
    new_register: {type: String, required: true},
    // 课程新增学员
    new_stu_course: {type: String, required: true},
    // 班级新增学员
    new_stu_classes: {type: String, required: true},
    // 新增会员
    new_member: {type: String, required: true},
    // 未回复问答
    not_reply: {type: String, required: true},
    // 订单统计
    order_counter: {type: Object, require: true},
    // 当前编辑的时间
    c_time: {type: Date, default: Date.now},
    // 最后编辑时间
    l_time: {type: Date, default: Date.now},
});
// db.homes.insert({
//     "_id":1000,
//     "login_user":"sdff",
//     "new_register":"sdf",
//     "new_stu_course":"sdf",
//     "new_stu_classes":"sdf",
//     "new_member":"sdf",
//     "not_reply":"sdf",
//     "order_counter":{
//         "web": 123,
//         "java": 123,
//         "python": 123,
//         "bigdata": 123,
//         "ui": 123,
//     },
//     "c_time":"16:59:11.1234567",
//     "l_time":"16:59:11.1234567",
// "__v":0,
// })
// db.users.insert({
//     "_id":1,
//     "user_name":'zoudemin',
//     'user_pwd':'ff2735ddf8627e106aee58bcc411d8c8',
//     'c_time':'2020-10-09T08:09:06',
//     'c_time':'2020-11-09T08:09:06',
// })
// db.sowings.insert({
//     "_id":100,
//     "image_title":"图片一",
//     "image_url":"upload_0cb2e90fdf4a2b40bd72c1bb50ccc346.jpg",
//     "image_small_url":"upload_0cb2e90fdf4a2b40bd72c1bb50ccc346.jpg",
//     "image_link":"http://www.baidu.com",
//     "s_time":"16:59:11.1234567",
//     "e_time":"16:59:11.1234567",
//     "c_time":"16:59:11.1234567",
//     "l_time":"16:59:11.1234567",
//     "__v":0,
// },{
//     "_id":101,
//     "image_title":"图片二",
//     "image_url":"upload_0cb2e90fdf4a2b40bd72c1bb50ccc346.jpg",
//     "image_small_url":"upload_0cb2e90fdf4a2b40bd72c1bb50ccc346.jpg",
//     "image_link":"http://www.thingjs.com",
//     "s_time":"16:59:11.1234567",
//     "e_time":"16:59:11.1234567",
//     "c_time":"16:59:11.1234567",
//     "l_time":"16:59:11.1234567",
//     "__v":0,
// },{
//     "_id":102,
//     "image_title":"图片三",
//     "image_url":"upload_0cb2e90fdf4a2b40bd72c1bb50ccc346.jpg",
//     "image_small_url":"upload_0cb2e90fdf4a2b40bd72c1bb50ccc346.jpg",
//     "image_link":"http://www.baidu.com",
//     "s_time":"16:59:11.1234567",
//     "e_time":"16:59:11.1234567",
//     "c_time":"16:59:11.1234567",
//     "l_time":"16:59:11.1234567",
//     "__v":0,
// },)

const Home = mongoose.model('Home', homeSchema);
export default  Home;