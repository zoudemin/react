import mongoose from 'mongoose';
mongoose.connect('mongodb://localhost/lk_data');
const studentSchema = mongoose.Schema({
    // 图片的名称
    reg_account: {type: String, required: false},
    user_name: {type: String, required: false},
    user_age: {type: String, required: false},
    user_sex: {type: String, required: false},
    area: {type: String, required: false},
    phone: {type: String, required: false},
    points: {type: String, required: false},
    reg_time: {type: String, required: false},
    last_login_time: {type: String, required: false},
    });

const Student = mongoose.model('Student', studentSchema);
export default  Student;