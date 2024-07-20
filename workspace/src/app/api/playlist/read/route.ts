import { NextRequest } from "next/server";
import { api } from "../../../../../convex/_generated/api";
import { Id } from "../../../../../convex/_generated/dataModel";
import convex_client from "@/CovexSubscriptionClient";


export async function POST(request: NextRequest) {
    const {id} = await (request.json() as Promise<{
        id: Id<"playlist">
    }>)

    const res = await convex_client.query(api.playlist.ReadList, {id: id})
    return Response.json({
        list: res
    })
}