import { NextRequest } from "next/server";
import { useQuery, useMutation } from "convex/react";
import { api } from "../../../../../convex/_generated/api";


export function POST(request: NextRequest) {
    const res = useQuery(api.post.getPost)
    return Response.json({
        posts: res
    })
}