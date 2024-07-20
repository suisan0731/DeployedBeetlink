import { NextRequest } from "next/server";
import { useQuery, useMutation } from "convex/react";
import { api } from "../../../../../convex/_generated/api";
import { Id } from "../../../../../convex/_generated/dataModel";
import convex_client from "@/CovexSubscriptionClient";


export async function DELETE(request: NextRequest) {
    const searchParams = request.nextUrl.searchParams
    const id = searchParams.get("id") as Id<"playlist">
    if (!id) {
        throw new Error("Query was not set.")
    }
    await convex_client.mutation(api.playlist.DeleteList,{
        id: id as Id<"playlist">
    })

    return Response.json({
        status: 200
    })
}