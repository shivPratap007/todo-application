const express=require('express');

const {updateTodo,createTodo}=require('./types')

const app=express();

app.use(express.json());



app.get('/todos',(req,res)=>{
    const createPayload=req.body; // It is getting the data from the body
    const parsePayload=createTodo.safeParse(createPayload); // From the defined schema in ./types file it is taking `createTodo` and sendding the data obtained from the req.body to the safeParse it checks whether the send data matches the schema data or not and store the result accordingly in the parsePayload then we use parsePayload.success to verify
    if(!parsePayload.success){
        res.status(411).json({
            message:"You have send the wrond inputs",
        })
    }
})

app.post('/todo',(req,res)=>{

})

app.put('/completed',(req,res)=>{
    const updatePayload=req.body;
    const parsedPayload=updateTodo.safeParse(updatePayload);
    if(!parsedPayload.success){
        res.status(411).json({
            message:"You have send the wrong update details",
        });
        return;
    }
})