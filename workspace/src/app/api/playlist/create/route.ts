import { NextRequest } from "next/server";
import { useMutation } from "convex/react";
import { api } from "../../../../../convex/_generated/api";

export async function POST(request: NextRequest) {
    const searchParams = request.nextUrl.searchParams
    const id = searchParams.get("id")

    if (!id) {
        throw new Error("Query was not set.")
    }
    const updateList = useMutation(api.playlist.UpdateList)
    const res = await updateList({id: id})
    return Response.json({
        list: res
    })
}