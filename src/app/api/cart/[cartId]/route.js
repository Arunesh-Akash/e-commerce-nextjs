import { connectDb } from "@/helper/db";
import Cart from "@/models/cart";
import { NextResponse } from "next/server";

connectDb()
export async function DELETE(request,{params}){
    try {
        const {cartId}=params;
        await Cart.findOneAndDelete({name:cartId});
        return NextResponse.json({message:'Delete successfully'});
    } catch (error) {
        return NextResponse.json(error);
    }
}