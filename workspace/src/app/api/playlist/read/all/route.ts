import { NextRequest } from "next/server";
import { useQuery } from "convex/react";
import { api } from "../../../../../../convex/_generated/api";
import convex_client from "@/CovexSubscriptionClient";


export async function POST(request: NextRequest) {
    const searchParams = request.nextUrl.searchParams
    const path = request.nextUrl.pathname
    const res = await convex_client.query(api.playlist.ReadLists,{})
    return Response.json({
        lists: res
    })
}