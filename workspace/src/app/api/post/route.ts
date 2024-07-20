import { NextRequest } from "next/server";
import { useQuery, useMutation } from "convex/react";
import { api } from "../../../../convex/_generated/api";


export async function GET(request: NextRequest) {
    const searchParams = request.nextUrl.searchParams
    const path = request.nextUrl.pathname
    if (path === "/post") {
        const res = useQuery(api.post.getPost)
        return Response.json({
            lists: res
        })
    } else if (path === "/post/search") {
        const q: string = searchParams.get("q")
        const res = useQuery(api.post.searchPost, {q: q})
        return Response.json({
            post: res
        })
    } else {
        throw new Error("404 not Found.")
    }
}

export async function POST(request: NextRequest) {
    const searchParams = request.nextUrl.searchParams
    const user_id: string = searchParams.get("user_id")
    const contents: string = searchParams.get("contents")
    const playlist_id: string = searchParams.get("playlist_id")
    const music_id: string = searchParams.get("music_id")
    const path = request.nextUrl.pathname
    if (path === "/post") {
        const res = useMutation(api.post.createPost, {
            user_id: user_id,
            contents: contents,
            playlist_id: playlist_id,
            music_id: music_id
        })
        return Response.json({
            post: res
        })
    }  else {
        throw new Error("404 not Found.")
    }
}

export async function PUT(request: NextRequest) {
    const searchParams = request.nextUrl.searchParams
    const id: string = searchParams.get("id")
    const contents: string = searchParams.get("contents")
    const playlist_id: string = searchParams.get("playlist_id")
    const music_id: string = searchParams.get("music_id")
    const path = request.nextUrl.pathname
    if (path === "/post") {
        const res = useMutation(api.post.updatePost, {
            id: id,
            contents: contents,
            playlist_id: playlist_id,
            music_id: music_id
        })
        return Response.json({
            post: res
        })
    } else  {
        throw new Error("404 not Found.")
    }
}

export async function DELETE(request: NextRequest) {
    const searchParams = request.nextUrl.searchParams
    const id: string = searchParams.get("id")
    const path = request.nextUrl.pathname
    if (path === "/post") {
        const res = useMutation(api.post.deletePost, {id: id})
        return Response.json({
            post: res
        })
    } else {
        throw new Error("404 not Found.")
    }
}
