const express=require('express');
const bodyParser=require('body-parser');
const app=express();
app.use(bodyParser.urlencoded({extended:true}))
app.get('/',function(req,res){
    res.sendFile(__dirname+"/index.html");
});
app.post('/',function(req,res){
    var num1=Number(req.body.num1);
    var num2=Number(req.body.num2);
    var sum=num1+num2;
    res.send("the result is:"+sum);
});
app.get('/bmiCalc',function(req,res){
    res.sendFile(__dirname+"/bmiCalc.html");
});
app.post('/bmiCalc',function(req,res){
     var height=parseFloat(req.body.height);
     var weight=parseFloat(req.body.weight);
     var bmi=Math.round(weight/(height*height));
     res.send("Your BMI is:"+bmi);
});
app.listen(3000,function(){
    console.log("hello world");
})