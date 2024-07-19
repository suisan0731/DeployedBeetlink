import { signOut } from "@/auth";

export function SignOut() {
    return (
    <form
    action={async () => {
        "use server";
        await signOut({ redirectTo: "/",redirect: true });
    }}
    >
        <button className="btn btn-neutral" type="submit">Sign out</button>
    </form>
);
}