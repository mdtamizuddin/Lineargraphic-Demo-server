const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
require('dotenv').config()
const cors = require('cors')
const app = express()
app.use(express.json())
const PORT = process.env.PORT || 5000
app.use(bodyParser.json())
app.use(cors())

const uri = "mongodb+srv://test-user:b2fthFXdKrTYGFrS@cluster0.vnzso.mongodb.net/test?retryWrites=true&w=majority";
mongoose.connect(uri , {
    useNewUrlParser: true, 
    useUnifiedTopology: true,
})

.then(() => console.log('Database Is Connected'))
.catch((err)=> console.log(err))


//All Routers

app.use('/headers' , require('./Routes/headerRouter'))
app.use('/portfolio' , require('./Routes/PortfolioRouter'))
app.use('/review' , require('./Routes/reviewsRouter'))
app.use('/service' , require('./Routes/ServiceRouter'))
app.use('/users' , require('./Routes/userRouter'))
app.use('/sendMail' , require('./Routes/sendMail'))
app.use('/pricingMonthly' , require('./Routes/pricingRouter'))
app.use('/pricingYearly' , require('./Routes/yearlyPricing'))
app.use('/message' , require('./Routes/messageRouter'))

app.get('/',(req , res)=>{
    res.send({message : "Server Is Running"})
})

app.listen(PORT,()=>{
    console.log(`Server Is Running On PORT ${PORT}`);
})