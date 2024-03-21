const  express = require('express');
const app = express();
const morgan = require('morgan');
const mongoose = require('mongoose');

require('dotenv/config');

const  api =  process.env.API_URL;

//middleware
app.use(express.json()); //makes the data be understood sent by the frontend, to the backend
app.use(morgan('tiny'));


const productSchema = mongoose.Schema({
    name:String, 
    image:String,
    desc:String,
    countInStock:{
        type:Number,
        required: true
    },
})

const Product = mongoose.model('Products',productSchema);


app.get(`${api}/products`, async (req, res)=>{
    const productList = await Product.find();

    if(!productList){
        res.status(500).json({success: false});
    }

    res.send(productList);
})

app.post(`${api}/products`, (req, res)=>{
    const product = new Product({
        name: req.body.name,
        image: req.body.image,
        desc: req.body.desc,
        countInStock: req.body.countInStock
    });

    product.save().then((createdProduct=>{
        res.status(201).json(createdProduct)
    })).catch((err)=>{
        res.status(500).json({
            error:err,
            success:false
        })  
    })   
})

mongoose.connect(process.env.CONNECTION_STRING, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    dbName: 'mobileEarTunes'
})
.then(()=>{
    console.log('Database Connection is ready...')
})
.catch((err)=> {
    console.log(err);
})


app.listen(3000, ()=>{
    console.log('The server is running at http://localhost:3000');
})