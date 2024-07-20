import useSWR from "swr";

const useTracks = (search: string) => {
    return useSWR("/api/music/track/search",(url) => fetch(url,{
        body: JSON.stringify({
            search: search
        }),
        method: "POST"
    }).then(res => (res.json() as Promise<{tracks: {
        name: string,
        id: string
    }[]}>)))
}

export default useTracks