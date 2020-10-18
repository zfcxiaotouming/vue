const {Router} = require('express')
const Goods = require('../model/Goods')
const router = new Router()


//添加商品
router.post('/goodsTest',(req,res) => {
    let data = req.body
    Goods.create({
        num: data.num,
        img: data.img,
        name: data.name,
        price: data.price,
        store: data.store,  
        buynum: data.buynum,
        detail: data.detail
    },(err,data)=>{
        res.json({code:0,message: 'ok'})
    })
})

//获取商品
router.get('/goodsTest',(req,res) => {
    Goods.find(null,null,(err,data) => {
        res.json({code:0,message: 'ok',list:data})
    })
})

//获取商品详情
router.get('/details',(req, res) => {
    let {id} = req.query
    if(id) {
        Goods.findById(id, (err, data) => {
            res.json({code:0,message: 'ok',data})
        })
    }else {
        res.json({code:-1,message:'error'})
    }
})

//删除商品
router.post('/delGoodsTest',async(req,res)=>{
    let {id} = req.body
    const result = await Goods.deleteOne({_id:id})
    if(result){
        res.json({code:0,message: 'ok'})
    }
})

module.exports = router