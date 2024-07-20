import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

const isProtectedRoute = createRouteMatcher([
  "/create",
  "/list",
  "/myhome",
  "/mypage",
  "/play",
  "/playlist-edit",
  "/resistration",
  "/search",
  "/show"
])

const UnloginRoute = createRouteMatcher([
  "/"
])

export default clerkMiddleware((auth,req) => {
  if(isProtectedRoute(req)) auth().protect()
  if(!UnloginRoute(req)) auth().protect()
});

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};