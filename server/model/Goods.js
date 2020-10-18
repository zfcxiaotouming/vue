const {model} =  require('mongoose')

module.exports = model('good',{
    num: {
        type: String,
        required : true
    },
    img: {
        type: String,
        required : true
    },
    name: {
        type: String,
        required : true
    },
    price: {
        type: String,
        required : true
    },
    store: {
        type: String,
        required : true
    },  
    buynum: {
        type: String,
        required : true
    },
    detail: {
        type: String,
        required : true
    }
})