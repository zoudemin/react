import express from 'express';
import User from './../models/User';
import formidable from 'formidable';
import config from './../src/config';
import {basename} from 'path';
import md5 from 'md5';

const router = express.Router({});

const S_KEY = 'WaYjH1314.ItLikE.CoM';


router.post('/user/api/add', (req,res,next)=>{
    const user_name = req.body.user_name||'';
    const user_pwd = md5(req.body.user_pwd+S_KEY)||''
    const user = new User({
        user_name:user_name,
        user_pwd:user_pwd,
    });

    user.save((err, result)=>{
        if (err) {
            return next(err)
        }
        res.json({
            status_code:200,
            result:'添加管理员成功！',
        })
    })
})
    router.post('/user/api/login',(req,res)=>{
        const user_name = req.body.user_name;
        const user_pwd = req.body.user_pwd;
        User.findOne({user_name:user_name},(err,user)=>{
            if(err) {
                return next(err);
            }
            if(user!==null) {
                if(user.user_pwd===user_pwd) {
                    res.json({
                        status_code:200,
                        result:{
                            token:user._id,
                            user_name:user.user_name,
                            real_name:user.real_name,
                            icon_url:user.icon_url,
                            sex:user.sex,
                            phone:user.phone,
                            e_mail:user.e_mail,
                            join_time:user.join_time,
                            intro_self:user.intro_self,
                        }
                        // db.users.insert({
                        //     "user_name":'zoudemin',
                        //     'user_pwd':'ff2735ddf8627e106aee58bcc411d8c8',
                        //     'real_name':'zdm',
                        //     'icon_url':'upload_0cb2e90fdf4a2b40bd72c1bb50ccc346.jpg',
                        //     'sex':'1',
                        //     'phone':'17710633151',
                        //     'e_mail':'1522263113@qq.com',
                        //     'join_time':'2020-10-09T08:09:06',
                        //     'intro_self':'I am 邹德敏',
                        //     'c_time':'2020-10-09T08:09:06',
                        //     'l_time':'2020-11-09T08:09:06',
                        // })
                        // db.students.insert({
                        //     reg_account: 'zoudemin',
                        //     user_name: '邹德敏',
                        //     user_age: '17',
                        //     user_sex: '男',
                        //     area: '内蒙古',
                        //     phone: '17710633151',
                        //     points: '666',
                        //     reg_time: '2020-01-01',
                        //     last_login_time: '2020-10-10',
                        // })
                    });
                }else{
                    res.json({
                        error_code:1,
                        result:'输入密码错误！'
                    })
                }
            } else {
                res.json({
                    error_code:1,
                    result:'输入口令不存在！'
                })
            }
        })
    })
router.post('/user/api/edit', (req,res,next)=>{
    const form = new formidable.IncomingForm();
    form.uploadDir = config.upload_path;
    form.keepExtensions=true;
    form.parse(req, (err,fields,files)=>{
        if(err){
            return next(err);
        }
        const body = fields;
        User.findById(body.token, (err, user)=>{
            if (err) {
                return next(err);
            }
            user.real_name = body.real_name;
            user.user_name = body.user_name;
            user.icon_url = body.icon_url || basename(files.icon_url.path);
            user.sex = body.sex;
            user.phone = body.phone;
            user.e_mail = body.e_mail;
            user.join_time = body.join_time;
            user.intro_self = body.intro_self;
            user.save((err,result)=>{
                if(err){
                    return next(err);
                }
                res.json({
                    status_code:200,
                    result:{
                        token:result._id,
                        real_name: result.real_name,
                        user_name: result.user_name,
                        icon_url: result.icon_url,
                        phone: result.phone,
                        sex:result.sex,
                        e_mail:result.e_mail,
                        join_time: result.join_time,
                        intro_self: result.intro_self,
                    }
                })
            })
        })
    })
})

router.post('/user/api/reset', (req,res,next)=>{
    const token = req.body.token;
    const old_pwd = req.body.old_pwd;
    const new_pwd = req.body.new_pwd;
    User.findById(token, (err, user)=>{
        if (err) {
            return next(err);
        }
        if(user === null) {
            res.json({
                error_code: 1,
                result: '当前用户不存在'
            });
            return;
        }
        if (user.user_pwd !== old_pwd) {
            res.json({
                error_code: 1,
                result: '密码不正确!'
            });
            return;
        }
        user.user_pwd = new_pwd;
        user.save((err,result)=>{
            if(err){
                return next(err);
            }
            res.json({
                status_code:200,
                result:'密码修改成功'
            })
        })
    })
})


module.exports = router;