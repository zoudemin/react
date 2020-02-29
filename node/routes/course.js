import express from 'express';
import Course from './../models/Course';
import formidable from 'formidable';
import config from './../src/config';
import {basename} from 'path';

const router = express.Router({});

router.post('/course/api/add', (req, res, next) => {
    const form = new formidable.IncomingForm();
    form.uploadDir = config.upload_path;
    form.keepExtensions = true;
    form.parse(req, (err, fields, files) => {
        if (err) {
            return next(err);
        }
        // 1. 处理表单字段
        const body = fields;
        // 解析上传的文件名称, 存入到数据库
        body.course_page = basename(files.imgUrl.path);

        // 2. 操作数据库
        const course = new Course({
            // 图片的名称
            course_name: body.course_name,
            // 大图片的地址
            course_title: body.course_title,
            // 小图片的地址
            course_sub_title: body.course_sub_title,
            // 图片的链接
            course_teacher: body.course_teacher,
            // 上架时间
            course_serialize_status: body.course_serialize_status,
            // 下架时间
            main_category: body.main_category,
            sub_category: body.sub_category,
            course_intro: body.course_intro,
            course_tag:body.course_tag,
            course_page:body.course_page,
        });
        course.save((err, result) => {
            if (err) {
                return next(err)
            }
            res.json({
                status_code: 200,
                result: '添加数据成功'
            });
        })
    });
});

router.get('/course/api/list', (req, res, next) => {
    let {page,pageSize} = req.query;
    page = Number.parseInt(page);
    pageSize = Number.parseInt(pageSize);

    // 查询数据库中所有的数据
    Course.find().skip((page - 1) * pageSize).limit(pageSize).exec((err, courses) => {
        if (err) {
            return next(err);
        }
        res.json({
            status_code: 200,
            result: courses
        })
    });
});

router.get('/course/api/count', (req, res, next) => {
    Course.count((err, count)=>{
        if(err) {
            return next(err);
        }
        res.json({
            status_code: 200,
            result: count
        })
    })
});

module.exports = router;