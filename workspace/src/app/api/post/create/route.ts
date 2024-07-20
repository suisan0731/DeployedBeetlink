import { NextRequest } from "next/server";
import { useMutation } from "convex/react";
import { api } from "../../../../../convex/_generated/api";


export async function POST(request: NextRequest) {
    const searchParams = request.nextUrl.searchParams
    const user_id = searchParams.get("user_id")
    const contents = searchParams.get("contents")
    const playlist_id = searchParams.get("playlist_id")
    const music_id = searchParams.get("music_id")

    if (!(user_id && contents && playlist_id && music_id)) {
        throw new Error("Query not set.");
    }

    const create = useMutation(api.post.createPost)
    const res = await create({
        user_id: user_id,
        contents: contents,
        playlist_id: playlist_id,
        music_id: music_id
    })
    return Response.json({
        post: res
    })
}