import express from 'express';
import Category from './../models/Category';

const router = express.Router({});
router.get('/category/api/list', (req, res, next) => {
    let {page,pageSize} = req.query;
    page = Number.parseInt(page);
    pageSize = Number.parseInt(pageSize);

    // 查询数据库中所有的数据
    Category.find().skip((page - 1) * pageSize).limit(pageSize).exec((err, category) => {
        if (err) {
            return next(err);
        }
        res.json({
            status_code: 200,
            result: category
        })
    });
});

router.get('/category/api/total', (req, res, next) => {
    Category.count((err, total)=>{
        if(err) {
            return next(err);
        }
        res.json({
            status_code: 200,
            result: total
        })
    })
});
module.exports = router;