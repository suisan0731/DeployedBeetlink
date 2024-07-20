import { NextRequest } from "next/server";
import { useQuery } from "convex/react";
import { api } from "../../../../../../convex/_generated/api";


export async function POST(request: NextRequest) {
    const searchParams = request.nextUrl.searchParams
    const path = request.nextUrl.pathname
    const res = useQuery(api.playlist.ReadLists)
    return Response.json({
        lists: res
    })
}