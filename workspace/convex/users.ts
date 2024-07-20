import {mutation,query} from "./_generated/server"
import {v} from "convex/values"

export const createUser = mutation({
    args:{
        user_id: v.string()
    },
    handler: async(ctx,args) => {
        const identity = await ctx.auth.getUserIdentity()
        if(!identity) throw new Error("Identity Null")

        const user = await ctx.db.query("users")
            .withIndex("by_token",(q) => 
                q.eq("tokenIdentifier",identity.tokenIdentifier)
            )
            .unique()   

        if(user !== null){
            if(user.name !== identity.name){
                await ctx.db.patch(user._id,{name: identity.name})
            }
            return user._id
        }

        return await ctx.db.insert("users",{
            name: identity.name,
            tokenIdentifier: identity.tokenIdentifier,
            image: identity.pictureUrl,
            genres: [],
            playlists: [],
            top_five_plays: [],
            user_id: args.user_id
        })
    }
})

export const getUser = query({
    args:{
        id: v.string()
    },
    handler: async(ctx,args) => {
        const result = ctx.db.query("users")
            .filter(q => q.eq(q.field("user_id"),args.id))
            .unique()
        if(result === null) throw new Error("Not Found")
        return result
    }
})