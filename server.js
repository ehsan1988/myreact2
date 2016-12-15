var express=require('express');
var app=express();
const PORT=process.env.PORT||3000;
app.use(function (req,res,next) {
    if (req.headers['x-forwarded-proto']==='http'){
       next();
    }
    else {
       res.redirect('http://'+req.hostname+req.url);
    }
});
app.listen(3000,function () {
   console.log('server run in port 3000');
});