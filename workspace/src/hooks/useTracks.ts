import { SearchBody } from "@/app/api/body";
import useExtendSWR from "./useExtendSWR";
import useSWR from "swr";

const useTracks = (search: string) => {
    return useSWR("/api/music/track/search",(url) => fetch(url,{
        body: JSON.stringify({
            search: search
        })
    }).then(res => (res.json() as Promise<{tracks: {
        name: string,
        id: string
    }[]}>)))
}

export default useTracks