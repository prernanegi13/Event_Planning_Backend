import mongoose from "mongoose";

export const dbConnection=()=>{
    mongoose.connect(process.env.MONGO_URL,{dbName : "MERN_STACK_Event_Planning"})
    .then(()=>{
        console.log("connection connected to database");
    })
    .catch((err)=>{
        console.log("connection not created to database",err);
    });
};