import { NextRequest } from "next/server";
import { api } from "../../../../../convex/_generated/api";
import convex_client from "@/CovexSubscriptionClient";
import { Id } from "../../../../../convex/_generated/dataModel";


export async function POST(request: NextRequest) {
    const searchParams = request.nextUrl.searchParams
    const user_id = searchParams.get("user_id")
    const contents = searchParams.get("contents")
    const playlist_id = searchParams.get("playlist_id")
    const music_id = searchParams.get("music_id")

    if (!(user_id && contents && playlist_id && music_id)) {
        throw new Error("Query not set.");
    }


    const result = await convex_client.mutation(api.post.createPost,{
        user_id: user_id as Id<"users">,
        contents: contents,
        playlist_id: playlist_id as Id<"playlist">,
        music_id: music_id,
        comments: [] as Array<Id<"comment">>,
        likes: 0
    })

    return Response.json({
        status: result.status
    })
}