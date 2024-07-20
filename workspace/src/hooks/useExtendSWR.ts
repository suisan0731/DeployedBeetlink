import useSWR from "swr"

type Obj = {[x in string]: string}

function fetcher<B extends Obj,R extends Obj>(url: string,body: B){
    return fetch(url,{
        body: JSON.stringify(body)
    }).then(res => (res.json as unknown as Promise<R>))
}

export default function useExtendSWR<B extends Obj,R extends Obj>(url:string,body: B){
    return  useSWR(url,url => fetcher<B,R>(url,body))
}

