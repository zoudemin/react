import mongoose from 'mongoose';
mongoose.connect('mongodb://localhost/lk_data');
const categorySchema = mongoose.Schema({
    // 图片的名称
    main_title: {type: String, required: false},
    main_total_count: {type: Number, required: false},
    main_is_show: {type: String, required: false},
    main_sort: {type: String, required: false},
    sub_course: [
        {
            sub_title: {type: String, required: false},
            sub_total_count: {type: String, required: false},
            sub_is_show: {type: String, required: false},
            sub_sort: {type: String, required: false}
        }
    ]
    });

const Category = mongoose.model('categorys', categorySchema);
export default Category;
