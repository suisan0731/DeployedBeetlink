import {mutation,query} from "./_generated/server"
import {v} from "convex/values"

export const createUser = mutation({
    args:{
        id: v.string(),
        username: v.string(),
        image: v.string(),
    },
    handler: async(ctx,args) => {
        const result = await ctx.db.insert("users",{
            auth_id: args.id,
            name: args.username,
            image: args.image,
            genres: [],
            playlists: [],
            top_five_plays:[],
        })
        return result
    }
})

export const getUser = query({
    args:{
        id: v.string()
    },
    handler: async(ctx,args) => {
        const result = ctx.db.query("users")
            .filter(q => q.eq(q.field("auth_id"),args.id))
            .unique()
        if(result === null) throw new Error("Not Found")
        return result
    }
})