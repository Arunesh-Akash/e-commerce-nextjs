import mongoose, { Schema } from "mongoose";

const cartSchema = new Schema({
    name: String,
    category: String,
    price: Number,
    image: String,
    quantity: { type: Number, required: true, default: 1 },
    userId: {
        type: mongoose.ObjectId
    }
})

const Cart = mongoose.models.Cart || mongoose.model('Cart', cartSchema);
export default Cart;
