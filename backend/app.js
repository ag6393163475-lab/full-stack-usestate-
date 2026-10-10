const express=require("express");
const app=express();
const dotenv=require('dotenv');
dotenv.config();
const {products}=require("./data");
console.log(products);
const cors=require('cors');
app.use(cors());

const PORT=process.env.PORT||3000;

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.get('/',(req,res)=>{
    res.send('hello world');
})
app.get('/api',(req,res)=>{
    res.send('API is working')

});
app.get('/api/products',(req,res)=>{
    res.json(products);

});
// app.get('api/users',(req,res)=>{
//     res.json

// })

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});