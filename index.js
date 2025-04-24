const express = require('express');
const app = express();
app.use(express.json());

app.get('/',(req,res)=>{
    res.send('Api is working!')
});

app.post('/signup', (req,res)=>{
    const {Username, email, password, dob}= req.body;

    if(!Username || Username.trim()===("")){
        res.status(400).json({error:"Username cannot be empty!"})
    }if(!email || email.trim() === ("")){
        res.status(400).json({error:"Email cannot be empty"})
    }if(!password || 16 <= password.length || password.length < 8 ){
        res.status(400).json({error:"Password length should be greater than 8 or less than or equal to 16"})
    }else{
        res.status(500).json({
            message: "User signup successful",
            Username: Username, email, password, dob
        })
    }
})
app.listen(3000, ()=>{
    console.log("Server is running on port 3000!")
})