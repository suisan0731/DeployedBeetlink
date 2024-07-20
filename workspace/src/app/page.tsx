"use client"
import Account from "@/compoents/AccountView";
import LoginProvider from "@/compoents/LoginProvider";
import { SignInButton, UserButton, useSession } from "@clerk/clerk-react";
import { Unauthenticated, Authenticated } from "convex/react";

export default function Home() {
  return (
    <LoginProvider>
      <main>
      <Unauthenticated>
        <SignInButton />
      </Unauthenticated>
      <Authenticated>
        <UserButton />
        <p>test</p>
        <Account />
      </Authenticated>
    </main>
    </LoginProvider>
  );
}
