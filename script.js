const express =require("express");

// calling a function
const app = express();

// Middleware

app.use(express.json());

// Routes
app.get('/',(req,res)=>{
    res.send("hey man");
} )







const port = 3001
app.listen(port,()=>{
console.log('${port}')
})
