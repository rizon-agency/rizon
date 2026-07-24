import createIntlMiddleware from "next-intl/middleware";
import { NextResponse, type NextRequest } from "next/server";
import { routing } from "@/i18n/routing";

const intl = createIntlMiddleware(routing);

export function proxy(req: NextRequest) {
  const { pathname } = req.nextUrl;

  const blog = pathname.match(/^\/(fr|es|de)(\/blog(?:\/.*)?)$/);
  if (blog) {
    const url = req.nextUrl.clone();
    url.pathname = blog[2];
    return NextResponse.redirect(url, 301);
  }

  return intl(req);
}

export const config = {
  matcher: ["/((?!api|_next|_vercel|.*\\..*).*)"],
};
