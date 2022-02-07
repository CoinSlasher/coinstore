 const express = require("express"),
 app = express(),
 path = require("path"),
 port = process.env.PORT || 5000,
 publicPath = path.join(__dirname,'..','dist');
 app.use(express.static(publicPath))
  // home 
 app.get('*',(req,res)=>{
    res.sendFile(path.join(publicPath,'index.html'))
 })
 app.listen(port,()=>{
     console.log('Listening to port 5000...')
 });
 