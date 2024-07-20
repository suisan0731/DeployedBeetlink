import { NextRequest } from "next/server";
import { useMutation } from "convex/react";
import { api } from "../../../../../convex/_generated/api";


export async function DELETE(request: NextRequest) {
    const searchParams = request.nextUrl.searchParams
    const id = searchParams.get("id")
    if (!id) {
        throw new Error("Query not set.");
    }
    const deletePost = useMutation(api.post.deletePost)
    const res = await deletePost({id: id})
    return Response.json({
        post: res
    })
}