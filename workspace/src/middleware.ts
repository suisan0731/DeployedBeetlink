import { clerkMiddleware } from "@clerk/nextjs/server";

export default clerkMiddleware({
  afterSignInUrl: "/list",
  afterSignUpUrl: "/list",
});

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};