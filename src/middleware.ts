import {auth} from "@/auth"

export default auth(req => {
    if(!req.auth){
        return Response.redirect(new URL("/",req.nextUrl))
    }
})

export const config = {
    matcher: ["/(loggedin.*)"]
}