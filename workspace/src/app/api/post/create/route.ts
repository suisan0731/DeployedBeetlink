import { NextRequest } from "next/server";
import { api } from "../../../../../convex/_generated/api";
import convex_client from "@/CovexSubscriptionClient";
import { Id } from "../../../../../convex/_generated/dataModel";


export async function POST(request: NextRequest) {
    const {user_id,playlist_id,music_id} = await (request.json() as Promise<{
        user_id: Id<"users">,
        playlist_id: Id<"playlist">,
        music_id: string
    }>)

    const result = await convex_client.mutation(api.post.createPost,{
        user_id: user_id,
        playlist_id: playlist_id,
        music_id: music_id,
        comments: [] as Array<Id<"comment">>,
        likes: 0
    })

    return Response.json({
        status: result.status
    })
}