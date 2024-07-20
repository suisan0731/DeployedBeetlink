import { Id } from "../../../convex/_generated/dataModel"

export type SearchBody = {
    search: string
}

export type PlaylistCreateBody = {
    name: string
    list_id: Id<"playlist">
    ids: Array<string>
}

export type PlaylistDeleteBody = {
    id: Id<"playlist">
}

export type PlaylistReadBody = {
    id: Id<"playlist">
}

export type PlaylistUpdateBody = {
    name: string
    list_id: Id<"playlist">,
    ids: Array<string>
}

export type PostCreateBody = {
    user_id: Id<"users">,
    // playlist_id: Id<"playlist">,
    music_id: string
}

export type PostDeleteBody = {
    id: Id<"post">
}

export type PostUpdateBody = {
    id: Id<"post">,
    comment: Array<Id<"comment">>
    // playlist_id: Id<"playlist">
    music_id: string
    user_id: Id<"users">,
    like: number
}