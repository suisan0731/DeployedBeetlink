import { NextRequest } from "next/server";
import { api } from "../../../../../convex/_generated/api";
import { Id } from "../../../../../convex/_generated/dataModel";
import convex_client from "@/CovexSubscriptionClient";
import { PlaylistDeleteBody } from "../../body";


export async function DELETE(request: NextRequest) {
    const {id} = await (request.json() as Promise<PlaylistDeleteBody>)

    await convex_client.mutation(api.playlist.DeleteList,{
        id: id
    })

    return Response.json({
        status: 200
    })
}