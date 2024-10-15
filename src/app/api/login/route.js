import { connectDb } from "@/helper/db";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import jwt from 'jsonwebtoken';
import User from '@/models/user';



connectDb();
export async function POST(request) {
    try {
        const body = await request.json();
        const user = await User.findOne({ email: body.email });

        if (user) {
            const passwordMatch = bcrypt.compareSync(body.password, user.password);
            if (passwordMatch) {
                const token = jwt.sign({ userId: user._id, name: user.name }, 'e-commerce');
                const response = NextResponse.json({ message: 'Login Successfully', success: true, user: { name: user.name, email: user.email } });
                response.cookies.set('authToken', token, {
                    httpOnly: true,
                    maxAge: 86400,
                });


                return response;
            }
            else {
                return NextResponse.json({ message: 'Password not match' });
            }
        }
        else {
            return NextResponse.json({ message: 'User not Found' });
        }


    } catch (error) {
        return NextResponse.json({ 'error': error });
    }
}