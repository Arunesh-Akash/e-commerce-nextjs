import { NextResponse } from 'next/server';

export function middleware(request) {
    const authToken = request.cookies.get('authToken');
    const isLoginPage = request.nextUrl.pathname === "/login";
    const isProtectedRoute = ["/cart", "/shop", "/place-order"].includes(request.nextUrl.pathname);

    const response = NextResponse.next();


    if (request.method === 'OPTIONS') {
        response.headers.set('Access-Control-Allow-Credentials', 'true');
        response.headers.set('Access-Control-Allow-Origin', '*');
        response.headers.set('Access-Control-Allow-Methods', 'GET,POST,PUT,PATCH,DELETE,OPTIONS');
        response.headers.set('Access-Control-Allow-Headers', 'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version');
        return response;
    }

    console.log('Auth Token:', authToken);


    if (isLoginPage && authToken) {
        return NextResponse.redirect(new URL('/shop', request.url));
    }


    if (!authToken && isProtectedRoute) {
        return NextResponse.redirect(new URL('/login', request.url));
    }

    return response;
}

export const config = {
    matcher: [
        "/cart",
        "/shop",
        "/place-order",
    ],
};
