import Home from '../Pages/Home/Home';
import User from '../Pages/User/User';
import Mine from '../Pages/Mine/Mine';
import Rotation from '../Pages/Rotation/Rotation';
import SowingAdd from '../Pages/Rotation/SowingAdd';
import CourseAdd from '../Pages/Course/CourseAdd';
import CourseCategory from '../Pages/Course/CourseCategory';
import CourseList from '../Pages/Course/CourseList';
import CourseTopic from '../Pages/Course/CourseTopic';
import SowingEdit from '../Pages/Rotation/SowingEdit';

let routes=[
    {
        path:'/',component:Home,exact:true,
    },
    {
        path:'/user_list.html',component:User,
    },
    {
        path:'/mine',component:Mine,
    },
    {
        path:'/sowing_list',component:Rotation,
    },
    {
        path:'/sowingadd',component:SowingAdd,
    }
    ,
    {
        path:'/courseadd',component:CourseAdd,
    }
    ,
    {
        path:'/coursecategory',component:CourseCategory,
    }
    ,
    {
        path:'/courselist',component:CourseList,
    }
    ,
    {
        path:'/coursetopic',component:CourseTopic,
    }
    ,
    {
        path:'/sowingedit',component:SowingEdit,
    }
]

export default routes;