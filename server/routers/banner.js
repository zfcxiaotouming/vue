const {Router} = require('express')

const router = new Router()

router.get('/banner', (req, res) => {
    let data = [
        {id:67178346178456,img:'http://m.360buyimg.com/mobilecms/s700x280_jfs/t1/126970/2/8386/146675/5f23e868E01d9f0b5/1c66f47cafedf424.jpg!cr_1125x445_0_171!q70.jpg.dpg'},
        {id:67178346145456,img:'https://m.360buyimg.com/mobilecms/s700x280_jfs/t1/141751/11/9683/201134/5f74b8d1E7eb6ad20/a4c6e29177e1f051.jpg!cr_1125x445_0_171!q70.jpg.dpg'},
        {id:67178346323456,img:'https://m.360buyimg.com/mobilecms/s700x280_jfs/t1/149476/11/10527/85608/5f84075aE33bad4f0/ef431bb9c1627204.jpg!q70.jpg.dpg'},
    ]
    res.json({
        code:0,
        message: 'ok',
        data
    })
})

module.exports = router