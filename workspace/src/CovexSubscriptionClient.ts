import { ConvexClient } from "convex/browser";

const convex_client = new ConvexClient(process.env.CONVEX_SITE_URL)
export default convex_client