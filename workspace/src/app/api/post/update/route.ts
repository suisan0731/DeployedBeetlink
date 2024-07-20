import { NextRequest } from "next/server";
import { useQuery, useMutation } from "convex/react";
import { api } from "../../../../../convex/_generated/api";


export async function PUT(request: NextRequest) {
    const searchParams = request.nextUrl.searchParams
    const id = searchParams.get("id")
    const contents = searchParams.get("contents")
    const playlist_id = searchParams.get("playlist_id")
    const music_id = searchParams.get("music_id")

    if (!(id && contents && playlist_id && music_id)) {
        throw new Error("Query was not set.");
    }
    const create = useMutation(api.post.updatePost)
    const res = await create({
        id: id,
        contents: contents,
        playlist_id: playlist_id,
        music_id: music_id
    })
    return Response.json({
        post: res
    })
}