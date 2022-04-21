import mongoose from 'mongoose';

const {Schema, model} = mongoose;

//declare schema
const customerSchema = new Schema({
    dateCreated:{type:Date, default:Date.now},
    name:{type:String, required:true},
    firstname:{type:String, required:true},
    email:{type:String, required:true},
    phone:{type:String, required:true},
    address:{type:String, required:true},
    city:{type:String, required:true},
    country:{type:String, required:true}
});
//create model based on schema
const Customer = model('Customer', customerSchema);

export default Customer;

