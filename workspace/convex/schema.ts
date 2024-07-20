import {defineSchema,defineTable} from "convex/server"
import {v} from "convex/values"

export default defineSchema({
    users: defineTable({
        name: v.optional(v.string()),
        image: v.optional(v.string()),
        genres: v.array(v.string()),
        top_five_plays: v.array(v.string()),
        playlists: v.array(v.id("playlist")),
        tokenIdentifier: v.string(),
        user_id: v.string()
    })
    .index("by_token",["tokenIdentifier"]),
    playlist: defineTable({
        name: v.string(),
        /* 修正前 music_ids: v.string() */
        music_ids: v.array(v.string()), //music_idの配列に変更
        likes: v.number()
    }).index("by_likes",["likes"]),
    post: defineTable({
        user_id: v.id("users"),
        contents: v.string(),
        playlist_id: v.optional(v.id("playlist")),
        music_id: v.optional(v.string()),
        likes: v.number(),
        comments: v.array(v.id("comment"))
    }),
    comment: defineTable({
        user_id: v.id("users"),
        content: v.string()
    }),
    group: defineTable({
        name: v.string(),
        user_ids: v.array(v.id("users")),
        /*修正前 messages: v.array(v.string())*/
        comments: v.array(v.id("comment")) //comment schemaを利用
    }),
})