import { NextResponse } from 'next/server'
 
export function middleware(request) {
    const authToken=request.cookies.get('authToken');

    const userNotLoggedIn=request.nextUrl.pathname==="/login";
    console.log('middleware excuted');
    console.log(authToken);
    if(userNotLoggedIn && authToken){
        return NextResponse.redirect(new URL('/shop',request.url));
    }
    else{
        if(!authToken){
            return NextResponse.redirect(new URL('/login',request.url));
            
        }
    }
}
 
export const config = {
  matcher: [
    "/cart",
    "/shop",
    "/place-order"
],
}

// if(request.nextUrl.pathname.startswith("/api")){
//     return NextResponse.json(
//         {
//             message:'Access Denied',
//             success:false
//         },
//         {
//             status:401,
//         }

//     );
// }