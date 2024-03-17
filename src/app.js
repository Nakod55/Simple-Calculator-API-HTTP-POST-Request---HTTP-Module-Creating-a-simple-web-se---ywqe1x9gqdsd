const fs = require('fs');
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

//Middlewares
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const min=-1000000;
const max=1000000;
//Write POST endpoint to get the sum of two number
app.post("/add",(req,res)=>{
  const num1=Number(req.body.num1);
  const num2=Number(req.body.num2);
  console.log(num1,num2);
  if(isNaN(num1)||isNaN(num2))
  {
    res.status(400).send({
      status: "error",
      message: "Invalid data types"
    })
  }
  const ans=num1+num2;
  if(num1<min||num2<min||ans<min)
  {
    res.status(400).send({
      status:"error",
      message:"Underflow"
    })
  }
  if(num1>max||num2>max||ans>max)
  {
    res.status(400).send({
      status:"error",
      message:"Overflow"
    })
  }
  res.send({result: ans});
})

//Write POST endpoint to get the differance of two number
app.post("/subtract",(req,res)=>{
  const num1=Number(req.body.num1);
  const num2=Number(req.body.num2);
  if(isNaN(num1)||isNaN(num2))
  {
    res.status(400).send({
      status: "error",
      message: "Invalid data types"
    })
  }
  const ans=num1-num2;
  if(num1<min||num2<min||ans<min)
  {
    res.status(400).send({
      status:"error",
      message:"Underflow"
    })
  }
  if(num1>max||num2>max||ans>max)
  {
    res.status(400).send({
      status:"error",
      message:"Overflow"
    })
  }
  res.send({result: ans});
})

//Write POST endpoint to get the multiplication of two number
app.post("/multiply",(req,res)=>{
  const num1=Number(req.body.num1);
  const num2=Number(req.body.num2);
  if(isNaN(num1)||isNaN(num2))
  {
    res.status(400).send({
      status: "error",
      message: "Invalid data types"
    })
  }
  const ans=num1*num2;
  if(num1<min||num2<min||ans<min)
  {
    res.status(400).send({
      status:"error",
      message:"Underflow"
    })
  }
  if(num1>max||num2>max||ans>max)
  {
    res.status(400).send({
      status:"error",
      message:"Overflow"
    })
  }
  res.send({result: ans});
})

//Write POST endpoint to check if the num2 is 0 or not and to get the result after dividing two number
app.post("/divide",(req,res)=>{
  const num1=Number(req.body.num1);
  const num2=Number(req.body.num2);
  if(num2==0)
  {
    res.status(400);
    res.send({
      error: "Cannot divide by zero"
    })
  }
  if(isNaN(num1)||isNaN(num2))
  {
    res.status(400).send({
      status: "error",
      message: "Invalid data types"
    })
  }
 
  const ans=num1/num2;
  if(num1<min||num2<min||ans<min)
  {
    res.status(400).send({
      status:"error",
      message:"Underflow"
    })
  }
  if(num1>max||num2>max||ans>max)
  {
    res.status(400).send({
      status:"error",
      message:"Overflow"
    })
  }
  res.send({result: ans});
})
      

const server = app.listen(4000, () => {
  console.log(`Server running on port 4000`);
  
});
    
module.exports = app;
