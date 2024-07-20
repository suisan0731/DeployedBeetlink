import { NextRequest } from "next/server";
import { api } from "../../../../../convex/_generated/api";
import { Id } from "../../../../../convex/_generated/dataModel";
import convex_client from "@/CovexSubscriptionClient";
import { PlaylistCreateBody } from "../../body";

export async function POST(request: NextRequest) {
    const {name,list_id,ids} = await (request.json() as Promise<PlaylistCreateBody>)

    await convex_client.mutation(api.playlist.UpdateList,{
        ids:ids,
        list_id: list_id as Id<"playlist">,
        name: name
    })

    return Response.json({
        status: 200
    })
}