import jwt from 'jsonwebtoken';
import Cart from '@/models/cart';
import { connectDb } from '@/helper/db';
import { NextResponse } from 'next/server';


export async function POST(request) {
    try {
        const authToken = request.cookies.get('authToken')?.value;
        if (!authToken) {
            return;
        }
        const userData = jwt.verify(authToken, 'e-commerce');
        const body = await request.json();
        const cartData = new Cart({
            name: body.name,
            category: body.category,
            price: body.price,
            image: Buffer.from(body.image),
            userId: userData.userId
        })
        await connectDb();
        await cartData.save();
        return NextResponse.json({ message: 'Cart data is successfully saved' });
    } catch (error) {
        return NextResponse.json(error)
    }

}

export async function GET(request) {
    try {
        const authToken = request.cookies.get('authToken')?.value;
        if (!authToken) {
            return;
        }
        const userData = jwt.verify(authToken, 'e-commerce');
        const response=await Cart.find({userId:userData.userId});
        return NextResponse.json(response);
    } catch (error) {
        console.log(error);
        return NextResponse.json(error);
    }
}