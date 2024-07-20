import { NextRequest } from "next/server";
import { api } from "../../../../../convex/_generated/api";
import { Id } from "../../../../../convex/_generated/dataModel";
import convex_client from "@/CovexSubscriptionClient";

export async function POST(request: NextRequest) {
    const {name,list_id,ids} = await (request.json() as Promise<{
        name: string
        list_id: Id<"playlist">
        ids: Array<string>
    }>)

    await convex_client.mutation(api.playlist.UpdateList,{
        ids: [],
        list_id: list_id as Id<"playlist">,
        name: name
    })

    return Response.json({
        status: 200
    })
}