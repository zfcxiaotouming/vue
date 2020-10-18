const {Router} = require('express')
const AppUser = require('../model/AppUser')

const router = new Router()

router.post('/regist',async (req,res) => {
    let {username, password} = req.body
    if(!username || !password) {
        res.json({code:-1,message:'err'})
    }
    let result = await AppUser.findOne({username})
    if(result) {
        res.json({code:-1,message:'账号已存在'})
    }else{
        AppUser.create({username,password}, (err,data) => {
            res.json({code:0,message:'ok',data})
        })
    }
})

router.post('/login',async (req,res) => {
    let {username, password} = req.body
    if(!username || !password) {
        res.json({code:-1,message:'err'})
    }
    let result = await AppUser.findOne({username,password})
    if(result) {
        res.json({code:0,message:'ok',data: {user:username}})
    }else{
        res.json({code:-1,message:'error'})
    }
})

module.exports = router