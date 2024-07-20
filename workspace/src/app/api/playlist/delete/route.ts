import { NextRequest } from "next/server";
import { useQuery, useMutation } from "convex/react";
import { api } from "../../../../../convex/_generated/api";
import { Id } from "../../../../../convex/_generated/dataModel";


export async function DELETE(request: NextRequest) {
    const searchParams = request.nextUrl.searchParams
    const id = searchParams.get("id") as Id<"playlist">
    if (!id) {
        throw new Error("Query was not set.")
    }
    const deleteList = useMutation(api.playlist.DeleteList)
    const res = await deleteList({id: id})
    return Response.json({
        list: res
    })
}