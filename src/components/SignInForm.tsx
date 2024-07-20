import { auth, signIn } from "@/auth";

export function SignIn() {
    return (
    <form
        action={async () => {
            "use server"
            await signIn("google",{redirectTo: "/loggedin"});
        }}
        >
        <button className="btn" type="submit">Sign in</button>
        </form>
        );
    }