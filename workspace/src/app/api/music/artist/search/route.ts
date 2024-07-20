import SpotifySDK from "@/SpotifySDK";
import { NextRequest } from "next/server";

export async function POST(request: NextRequest) {
    const {search} = await (request.json() as Promise<{search: string}>)
    if(search === null) throw new Error("Query Not Set.")
    const tracks = await SpotifySDK.search(search,["track"])
    return Response.json({
        tracks: tracks.tracks.items
    })
}