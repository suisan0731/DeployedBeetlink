import { NextRequest } from "next/server";
import { api } from "../../../../../convex/_generated/api";
import { Id } from "../../../../../convex/_generated/dataModel";
import convex_client from "@/CovexSubscriptionClient";


export async function POST(request: NextRequest) {
    const searchParams = request.nextUrl.searchParams
    const id = searchParams.get("id") as Id<"playlist">
    const path = request.nextUrl.pathname
    if (!id) {
        throw new Error("Query was not set.")
    }
    const res = await convex_client.query(api.playlist.ReadList, {id: id})
    return Response.json({
        list: res
    })
}