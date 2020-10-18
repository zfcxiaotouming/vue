const {model} =  require('mongoose')

module.exports = model('shopCar',{
    userId: {
        type: String,
        required : true
    },
    goodsId: {
        type: String,
        required : true
    },
    name: {
        type: String,
        required : true
    },
    count: {
        type: Number,
        required : true
    },
    price: {
        type: Number,
        required : true
    },
    img: {
        type: String,
        required : true
    }, 
})