import { NextRequest } from "next/server";
import { useQuery, useMutation } from "convex/react";
import { api } from "../../../../../convex/_generated/api";
import convex_client from "@/CovexSubscriptionClient";
import { Id } from '../../../../../convex/_generated/dataModel';
import { PostUpdateBody } from '../../body';


export async function PUT(request: NextRequest) {
    const {id,/* playlist_id, */music_id,user_id,comment,like} = await (request.json() as Promise<PostUpdateBody>)

    const result = await convex_client.mutation(api.post.updatePost,{
        id: id,
        comments:comment,
        music_id: music_id,
        // playlist_id: playlist_id,
        likes: like,
        user_id: user_id
    }) 

    return Response.json({
        status: result.status
    })
}