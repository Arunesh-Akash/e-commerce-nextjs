import { NextResponse } from "next/server";

export function POST(request){
    const response=NextResponse.json({message:'User Logged out'});

    response.cookies.set('authToken','',{
        path:'/',
        maxAge:new Date(0)
    });

    return response;
}