import { SearchBody } from "@/app/api/body";
import SpotifySDK from "@/SpotifySDK";
import { NextRequest } from "next/server";

export async function POST(request: NextRequest) {
    const {search} = await (request.json() as Promise<SearchBody>)
    if(search === null) throw new Error("Query Not Set.")
    const tracks = await SpotifySDK.search(search,["track"])
    return Response.json({
        tracks: tracks.tracks.items
    })
}