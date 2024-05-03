import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
 
export function middleware(request: NextRequest) {
  const response = NextResponse.next()

  if (process.env.SHOPIFY === 'TEST_MODE') {
    if (request.nextUrl.pathname === '/') {
      return NextResponse.redirect(new URL('/example', request.url))
    }
    return response
  }
  
  if (process.env.SHOPIFY === 'PRODUCTION') {
    if (request.nextUrl.pathname.startsWith('/example')) {
      return NextResponse.rewrite(new URL('/', request.url))
    }
    return response
  }

  return response
}