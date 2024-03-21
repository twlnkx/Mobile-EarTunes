const  express = require('express');
const app = express();

require('dotenv/config');

const  api =  process.env.API_URL;

//middleware
app.use(express.json()); //makes the data be understood sent by the frontend, to the backend

app.post(`${api}/products`, (req, res)=>{
    const newProduct = req.body;
    console.log(newProduct);
    res.send(product);
})

app.listen(3000, ()=>{
    console.log('The server is running at http://localhost:3000');
})