import { NextRequest } from "next/server";
import { useMutation } from "convex/react";
import { api } from "../../../../../../convex/_generated/api";


export async function POST(request: NextRequest) {
    const searchParams = request.nextUrl.searchParams
    const id = searchParams.get("id")
    const path = request.nextUrl.pathname
    if (!id) {
        throw new Error("Query was not set.")
    }
    const res = useQuery(api.playlist.ReadList)
    return Response.json({
           lists: res
    })
}