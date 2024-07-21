import useSWR from "swr";
import { MaxInt } from '@spotify/web-api-ts-sdk';

const useTracks = (search: string,limit: MaxInt<10>) => {
    return useSWR("/api/music/track/search",(url) => fetch(url,{
        body: JSON.stringify({
            search: search,
            limit: limit
        }),
        method: "POST"
    }).then(res => (res.json() as Promise<{tracks: {
        name: string,
        id: string
    }[]}>)))
}

export default useTracks