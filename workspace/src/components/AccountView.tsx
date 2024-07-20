"use client"

import { useSession } from "@clerk/clerk-react"

export default function Account(){
    console.log(useSession())
    return <></>
}