const {Router} = require('express')
const ShopCar = require('../model/ShopCar')
const router = new Router()

//生成购物车
router.post('/shopcar', async (req, res) => {
    let {userId, goodsId, price, count, img, name} = req.body
    let shopCarResulut = await ShopCar.findOne({goodsId,userId})
    if(shopCarResulut) {
        let eCount = shopCarResulut.count
        let id = shopCarResulut._id
        ShopCar.update({
            _id: id,
            count:count+eCount
        }, (err, data) => {
            res.json({code:0, message:'ok', data})
        })
    }else {
        ShopCar.create({
            userId,
            goodsId,
            name,
            price,
            img,
            count
        }, (err, data) => {
            res.json({code:0, message:'ok', data})
        })
    }
    
})

//app获取购物车
router.get('/shopcar', (req, res) => {
    let {userId} = req.query
    ShopCar.find({userId},null, (err,data) => {
        res.json({code:0, message:'ok', data})
    })
})

//后台管理获取购物车
router.get('/car', async(req, res) => {
    const result = await ShopCar.find()
    if(result){
        res.json({code:0, message:'ok', result})
    }
})

module.exports = router