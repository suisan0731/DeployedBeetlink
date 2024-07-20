import { NextRequest } from "next/server";
import { useMutation } from "convex/react";
import { api } from "../../../../../convex/_generated/api";
import convex_client from "@/CovexSubscriptionClient";
import { Id } from "../../../../../convex/_generated/dataModel";


export async function DELETE(request: NextRequest) {
    const searchParams = request.nextUrl.searchParams
    const id = searchParams.get("id")
    if (!id) {
        throw new Error("Query not set.");
    }
    const deletePost = await convex_client.mutation(api.post.deletePost,{id: id as Id<"post">})
    return Response.json({
        status: deletePost.status
    })
}