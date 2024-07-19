import { auth, signIn } from "@/auth";
import { redirect } from "next/navigation";

export function SignIn() {
    return (
    <form
        action={async () => {
            "use server";

            // Skip sign-in screen if the user is already signed in
            if ((await auth()) !== null) {
                redirect("/loggedin");
            }

            await signIn(undefined, { redirectTo: "/loggedin" });
        }}
        >
        <button type="submit">Sign in</button>
        </form>
        );
    }