"use client"

import { useQuery } from "convex/react"
import { api } from "../../convex/_generated/api"

export default function AccountView({user_id}:{user_id: string}){
    const GetUser = useQuery(api.users.getUser,{id:user_id})
    return (
        <>
            <div></div>
        </>
    )
}