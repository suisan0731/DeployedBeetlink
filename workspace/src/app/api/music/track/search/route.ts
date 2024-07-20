import SpotifySDK from "@/SpotifySDK";
import { NextRequest } from "next/server";


export async function POST(request: NextRequest) {
    const searchParams = request.nextUrl.searchParams
    const search = searchParams.get("search")
    if(search === null) throw new Error("Query Not Set.")
    const result = await SpotifySDK.search(search,["artist"])
    return Response.json({
        artists: result.artists.items
    })
}