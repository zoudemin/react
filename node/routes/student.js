import express from 'express';
import Student from './../models/Student';
import formidable from 'formidable';
import config from './../src/config';
import {basename} from 'path';

const router = express.Router({});

router.get('/stu/api/list', (req, res, next) => {
    let {page,pageSize} = req.query;
    page = Number.parseInt(page);
    pageSize = Number.parseInt(pageSize);

    // 查询数据库中所有的数据
    Student.find().skip((page - 1) * pageSize).limit(pageSize).exec((err, students) => {
        if (err) {
            return next(err);
        }
        res.json({
            status_code: 200,
            result: students
        })
    });
});

router.get('/stu/api/count', (req, res, next) => {
    Student.count((err, count)=>{
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