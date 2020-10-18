const express = require('express')
const session = require('express-session')
const MongoDBStore = require('connect-mongodb-session')(session)
const config = require('./config/index')
const path = require('path')

const app = express()

//准备session存放仓库
let store = new MongoDBStore({
    uri:`mongodb://${config.db_host}:${config.db_port}/${config.db_name}`,
    collection: 'sessions'
})

store.on('error',(error)=>{
    console.log(error)
})

app.use(require('express-session')({
    secret: 'This is a secret',
    name : 'SESSIONID',
    cookie: {
        maxAge: 1000 * 60 * 60 * 24 * 7//1周
    },
    store: store,
    resave: true,
    saveUninitialized: true
}))

app.use('/pc/static',express.static(path.join(__dirname, './www')))
app.use('/app/static',express.static(path.join(__dirname, './wwwapp')))

app.use(express.urlencoded())
app.use(express.json())
app.use('/api/user',require('./routers/userRouter'))
app.use('/api/goods',require('./routers/goodsRouter'));
app.use('/api',require('./routers/banner'))
app.use('/api/shop',require('./routers/shopCar'))
app.use('/api/appUser',require('./routers/appUser'))



app.use('/pc',(req,res) => {
    res.sendFile(path.join(__dirname, './www/index.html'))
})

app.use((req,res) => {
    res.sendFile(path.join(__dirname, './wwwapp/index.html'))
})

module.exports = app