import { NextRequest } from "next/server";
import { useMutation } from "convex/react";
import { api } from "../../../../../convex/_generated/api";
import { Id } from "../../../../../convex/_generated/dataModel";

export async function PUT(request: NextRequest) {
    const searchParams = request.nextUrl.searchParams
    const name = searchParams.get("name")
    const list_id = searchParams.get("list_id") as Id<"playlist">

    if (!name) {
        throw new Error("Query was not set.")
    }
    const updateList = useMutation(api.playlist.UpdateList)
    const res = await updateList({name: name, ids: [],list_id: list_id});
    return Response.json({
        list: res
    })
}