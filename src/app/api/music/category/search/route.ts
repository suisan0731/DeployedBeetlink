import SpotifySDK from "@/SpotifySDK";
import { NextRequest } from "next/server";

export async function POST(request: NextRequest) {
    const result = await SpotifySDK.browse.getCategories("JP","ja_JP",10)
    return Response.json({
        categories: result.categories.items
    })
}