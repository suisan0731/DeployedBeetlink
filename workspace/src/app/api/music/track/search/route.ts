import { SearchBody } from "@/app/api/body";
import SpotifySDK from "@/SpotifySDK";
import { NextRequest } from "next/server";


export async function POST(request: NextRequest) {
    const {search} = await (request.json() as Promise<SearchBody>)
    if(search === null) throw new Error("Query Not Set.")
    const result = await SpotifySDK.search(search,["track"],"JP",5)
    return Response.json({
        tracks: result.tracks.items.map((track) => {
            return {
                name: track.name,
                id: track.id
            }
        })
    })
}