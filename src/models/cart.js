import mongoose, { Schema } from "mongoose";

const cartSchema=new Schema({
    name:String,
    category:String,
    price:Number,
    image:Buffer,
    userId:{
        type:mongoose.ObjectId
    }
})

const Cart=mongoose.models.Cart || mongoose.model('Cart',cartSchema);
export default Cart;
