import { SearchBody } from "@/app/api/body";
import SpotifySDK from "@/SpotifySDK";
import { MaxInt } from "@spotify/web-api-ts-sdk";
import { NextRequest } from "next/server";


export async function POST(request: NextRequest) {
    const {search,limit} = await (request.json() as Promise<{
        search: string,
        limit: MaxInt<50>
    }>)
    if(search === null) throw new Error("Query Not Set.")
    const result = await SpotifySDK.search(search,["track"],"JP",limit)
    return Response.json({
        tracks: result.tracks.items.map((track) => {
            return {
                name: track.name,
                id: track.id
            }
        })
    })
}