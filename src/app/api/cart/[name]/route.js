import { connectDb } from "@/helper/db";
import Cart from "@/models/cart";
import { NextResponse } from "next/server";

connectDb()
export async function DELETE(request, { params }) {
    try {
        const { name } = params;
        await Cart.findOneAndDelete({ name: name });
        return NextResponse.json({ message: 'Delete successfully' });
    } catch (error) {
        return NextResponse.json(error);
    }
}

export async function PUT(request, { params }) {
    const { name } = params;

    try {
        const body = await request.json();
        const { quantity } = body;

        const updatedCart = await Cart.findOneAndUpdate(
            {name:name},
            { quantity: quantity },
            {new:true}
        );

        if (!updatedCart) {
            return NextResponse.json({ error: 'Cart item not found' }, { status: 404 });
        }

        return NextResponse.json({ message: 'Quantity updated successfully', cart: updatedCart });
    } catch (error) {
        console.error('Error updating quantity:', error);
        return NextResponse.json({ error: 'Something went wrong' }, { status: 500 });
    }
}
