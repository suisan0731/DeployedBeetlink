import { NextRequest } from "next/server";
import { useMutation } from "convex/react";
import { api } from "../../../../../convex/_generated/api";

export async function POST(request: NextRequest) {
    const searchParams = request.nextUrl.searchParams
    const name = searchParams.get("name")
    const ids = searchParams.get("ids")
    
    if (!(name && ids)) {
        throw new Error("Query was not set.")
    }
    const updateList = useMutation(api.playlist.UpdateList)
    const res = await updateList({name: name, ids: ids});
    return Response.json({
        list: res
    })
}