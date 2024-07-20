'use client';

import LoginProvider from "@/compoents/LoginProvider";
import { SignInButton, UserButton } from "@clerk/clerk-react";
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
      </Authenticated>
    </main>
    </LoginProvider>
  );
}
