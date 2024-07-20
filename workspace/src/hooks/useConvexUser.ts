"use client"

import { useUser } from "@clerk/clerk-react"
import { useMutation, useQuery } from "convex/react"
import { api } from "../../convex/_generated/api"

export default function useConvexUser(){
    const {user,isSignedIn} = useUser()
    const MutateUser = useMutation(api.users.createUser)
    if(!isSignedIn) throw new Error("Not Login...")
    if(user === null && typeof user === "undefined") throw new Error("User Data null or undefined")
    const listener = useQuery(api.users.getUser,{
        id: user.id
    })

    if(listener === null && typeof listener === "undefined"){
        const name = user.fullName
        MutateUser({
            id: user.id,
            image: user.imageUrl,
            username: name !== null ? name : "Null" 
        })
        // eslint-disable-next-line react-hooks/rules-of-hooks
        const NewUser = useQuery(api.users.getUser,{id: user.id})!
        return NewUser
    }else {
        const Listener = listener!
        return Listener
    }
}