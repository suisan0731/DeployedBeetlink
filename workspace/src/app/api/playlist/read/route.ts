import { NextRequest } from "next/server";
import { api } from "../../../../../convex/_generated/api";
import { Id } from "../../../../../convex/_generated/dataModel";
import convex_client from "@/CovexSubscriptionClient";
import { PlaylistReadBody } from "../../body";


export async function POST(request: NextRequest) {
    const {id} = await (request.json() as Promise<PlaylistReadBody>)

    const res = await convex_client.query(api.playlist.ReadList, {id: id})
    return Response.json({
        list: res
    })
}