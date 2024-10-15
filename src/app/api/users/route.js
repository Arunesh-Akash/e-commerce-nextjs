import { connectDb } from "@/helper/db";
import  User  from "@/models/user";
import { NextResponse } from "next/server";
import bcrypt from 'bcryptjs';


export async function GET() {
try {
    connectDb();
    const users=await User.find();
    return NextResponse.json(users);
} catch (error) {
    return NextResponse.json(error);
}

}

export async function POST(request) { 
    try {
        const body = await request.json();
        body.password=bcrypt.hashSync(body.password,10);
        const user = new User({
            name: body.name,
            email: body.email,
            password: body.password
        });
        await connectDb();
        await user.save();
        return NextResponse.json({ 'data': user });
    } catch (error) {
        return NextResponse.json(error);
    }
}