import { NextResponse } from "next/server";

export function middleware(request){
    return NextResponse.next()
}

// filter routes
export const config = {
    matcher : '/news'
}