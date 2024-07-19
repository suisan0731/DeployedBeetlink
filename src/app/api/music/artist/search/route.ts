import SpotifySDK from "@/SpotifySDK";
import { NextRequest } from "next/server";

export async function POST(request: NextRequest) {
    const searchParams = request.nextUrl.searchParams
    const search = searchParams.get("search")
    if(search === null) throw new Error("Query Not Set.")
    const tracks = await SpotifySDK.search(search,["track"])
    return Response.json({
        tracks: tracks.tracks.items
    })
}