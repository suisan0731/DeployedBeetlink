import { auth, signIn } from "@/auth";
import { redirect } from "next/navigation";

export function SignIn() {
    return (
    <form
        action={async () => {
            "use server"
            await signIn(undefined,{redirectTo: "/loggedin"});
        }}
        >
        <button className="btn" type="submit">Sign in</button>
        </form>
        );
    }