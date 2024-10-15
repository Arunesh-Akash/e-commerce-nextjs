import { NextResponse } from 'next/server';

export function middleware(request) {
    const authToken = request.cookies.get('authToken');
    const userNotLoggedIn = request.nextUrl.pathname === "/login";


    const response = NextResponse.next();


    if (request.nextUrl.pathname.startsWith('/*')) {
        response.headers.set('Access-Control-Allow-Credentials', 'true');
        response.headers.set('Access-Control-Allow-Origin', '*');
        response.headers.set('Access-Control-Allow-Methods', 'GET,POST,PUT,PATCH,DELETE,OPTIONS');
        response.headers.set('Access-Control-Allow-Headers', 'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version');
    }

    console.log('middleware executed');
    console.log(authToken);

    if (userNotLoggedIn && authToken) {
        return NextResponse.redirect(new URL('/shop', request.url));
    } else {
        if (!authToken) {
            return NextResponse.redirect(new URL('/login', request.url));
        }
    }

    return response;
}
export const config = {
    matcher: [
        "/cart",
        "/shop",
        "/place-order",

    ]
};
