import { NextRequest } from "next/server";
import { useQuery, useMutation } from "convex/react";
import { api } from "../../../../../convex/_generated/api";
import convex_client from "@/CovexSubscriptionClient";
import { Id } from "../../../../../convex/_generated/dataModel";


export async function PUT(request: NextRequest) {
    const searchParams = request.nextUrl.searchParams
    const id = searchParams.get("id")
    const contents = searchParams.get("contents")
    const playlist_id = searchParams.get("playlist_id")
    const music_id = searchParams.get("music_id")
    const user_id = searchParams.get("user_id")

    if (!(id && contents && playlist_id && music_id)) {
        throw new Error("Query was not set.");
    }
    const result = await convex_client.mutation(api.post.updatePost,{
        id: id as Id<"post">,
        contents: contents,
        comments: [] as Array<Id<"comment">>,
        music_id: music_id,
        playlist_id: playlist_id as Id<"playlist">,
        likes: 0,
        user_id: user_id as Id<"users">
    }) 

    return Response.json({
        status: result.status
    })
}