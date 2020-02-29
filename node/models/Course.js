import mongoose from 'mongoose';
mongoose.connect('mongodb://localhost/lk_data');
const courseSchema = mongoose.Schema({
    course_name: {type: String, required: true},
    course_title: {type: String, required: true},
    course_sub_title: {type: String, required: true},
    course_teacher: {type: String, required: true},
    course_serialize_status: {type: String, required: true},
    main_category: {type: String, required: true},
    sub_category: {type: String, required: true},
    course_intro: {type: String, required: true},
    course_tag: {type: String, required: true},
    course_page: {type: String, required: true},
    course_manager: [
        {
            c_title: {type: String, required: true},
            c_video: {type: String, required: true},
            c_intro: {type: String, required: true},
            c_time: {type: String, required: true}
        }
    ]
    });

const Course = mongoose.model('course', courseSchema);
export default  Course;