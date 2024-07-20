import { NextRequest } from "next/server";
import { useQuery } from "convex/react";
import { api } from "../../../../../convex/_generated/api";
import { Id } from "../../../../../convex/_generated/dataModel";


export async function POST(request: NextRequest) {
    const searchParams = request.nextUrl.searchParams
    const id = searchParams.get("id") as Id<"playlist">
    const path = request.nextUrl.pathname
    if (!id) {
        throw new Error("Query was not set.")
    }
    const res = useQuery(api.playlist.ReadList, {id: id})
    return Response.json({
        list: res
    })
}