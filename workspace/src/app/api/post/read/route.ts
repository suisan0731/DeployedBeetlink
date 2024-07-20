import { NextRequest } from "next/server";
import { useQuery, useMutation } from "convex/react";
import { api } from "../../../../../convex/_generated/api";
import convex_client from "@/CovexSubscriptionClient";


export async function POST(request: NextRequest) {
    const res = await convex_client.query(api.post.getPost,{})
    return Response.json({
        posts: res
    })
}