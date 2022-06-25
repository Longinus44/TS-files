 import mongoose, { MongooseDocumentMiddleware,Schema,Types } from "mongoose"




const postschema = new Schema({
    _id:{type:String},
  username:{type:String,required:true},
  Email:{type:String},
  password:{type:String,required:true}
})



