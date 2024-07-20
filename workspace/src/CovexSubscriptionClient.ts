import { ConvexClient } from "convex/browser";

const convex_client = new ConvexClient(process.env.NODE_ENV === "development" ? process.env.CONVEX_SITE_URL : process.env.NEXT_PUBLIC_VERCEL_URL)
export default convex_client