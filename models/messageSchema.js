import mongoose from "mongoose";
import validator from "validator";

const messageSchema = new mongoose.Schema({
    name :{
        type:String,
        required:[true, "Name Reuired !"],
        minLength:[3,'Name must contain atleast 3 characters !'],
    },
    email : {
        type:String,
        required:[true,"Email Required !"],
        validate :[validator.isEmail , "Please provide valid Email !"],
    },
    subject:{
        type:String,
        required:[true,"Subject Required !"],
        minLength:[5,"subject must contain atleast 5 characters !"],
    },
    message:{
        type:String,
        required:[true,"Message required !"],
        minLength:[10,"Message should contain atleast 10 characters !"],    
    },
});

export const Message = mongoose.model("Message",messageSchema);   
 //EXPORT TO CONTROLLER FOLDER MESSAGECONTROLLER.JS

