
import { NextRequest } from "next/server";
import { useQuery, useMutation } from "convex/react";
import { api } from "../../../../convex/_generated/api";

export async function GET(request: NextRequest) {
    const searchParams = request.nextUrl.searchParams
    const id: string = searchParams.get("id")
    const path = request.nextUrl.pathname
    if (path === "/playlist/read") {
        const lists = useQuery(api.playlist.ReadList, {id: id})
        return Response.json({
            list: lists
        })
    } else if (path === "/playlist/read/all") {
        const res = useQuery(api.playlist.ReadList)
        return Response.json({
            lists: res
        })
    } else {
        throw new Error("404 not Found.")
    }
}

export async function POST(request: NextRequest) {
    const searchParams = request.nextUrl.searchParams
    const name: string = searchParams.get("name")
    const ids: string[] = searchParams.get("ids")
    const path = request.nextUrl.pathname
    if (path === "/playlist/create") {
        const res = useMutation(api.playlist.ReadList, {name: name, ids: ids})
        return Response.json({
            list: res
        })
    }  else {
        throw new Error("404 not Found.")
    }
}

export async function PUT(request: NextRequest) {
    const searchParams = request.nextUrl.searchParams
    const name: string = searchParams.get("name")
    const ids: string[] = searchParams.get("ids")
    const path = request.nextUrl.pathname
    if (path === "/playlist/update") {
        const res = useMutation(api.playlist.UpdateList, {name: name, ids: ids})
        return Response.json({
            list: res
        })
    } else  {
        throw new Error("404 not Found.")
    }
}

export async function DELETE(request: NextRequest) {
    const searchParams = request.nextUrl.searchParams
    const id: string = searchParams.get("id")
    const path = request.nextUrl.pathname
    if (path === "/playlist/delete") {
        const res = useMutation(api.playlist.DeleteList, {id: id})
        return Response.json({
            list: res
        })
    } else {
        throw new Error("404 not Found.")
    }
}