const express=require('express');
const mongoose=require('mongoose');
const cors=require('cors');

const app=express();
app.use(express.json());
app.use(cors());

mongoose.connect("mongodb://127.0.0.1:27017/user");

app.post('/signup', (req,res) => {
    
})

app.listen(3001, () => {
    console.log("Server is running on port 3001");
})