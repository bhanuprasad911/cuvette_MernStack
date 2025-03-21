const express = require('express')
const app = express()
const port = 5353
const dbconnection = require('./db')
const {logger} = require('./middlewares/logger')
// const userController = require('./controllers/userController')
// const productController = require('./controllers/productControllers')
const {ProductRouter} = require('./routes/productRoutes')
const {userRouter} = require('./routes/userRoutes')
app.use(express.json())
// app.use('/users', userController)
app.use(logger)
app.use('/products', ProductRouter)
app.use('/users', userRouter)


dbconnection()
try{
    app.listen(port,()=>{
        console.log(`server is running on http://localhost:${port}`)
        
        
    })
}catch(err){
    console.log(err)
}
app.get('/',(req,res)=>{
    res.send('hello world')
})
