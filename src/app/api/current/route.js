import { NextResponse } from "next/server";
import jwt from 'jsonwebtoken';
import User from "@/models/user";
import { connectDb } from "@/helper/db";

connectDb();
export async function GET(request) {
    try {
        const authToken = request.cookies.get('authToken')?.value;
        if (!authToken) {
            return NextResponse.json({ message: 'Token is not found' });
        }
        const user = jwt.verify(authToken, 'e-commerce');
        const data = await User.findById(user.userId).select('-password');
        return NextResponse.json(data);
    } catch (error) {
        return NextResponse.json(error);
    }
}