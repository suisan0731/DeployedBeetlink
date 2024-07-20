'use client';

import { SignInButton, SignOutButton, useUser } from "@clerk/nextjs";
import { redirect, useRouter } from "next/navigation";
import { useStoreUserEffect } from "@/hooks/useStoreUserEffect";
import AccountView from "@/components/AccountView";
import { useEffect } from "react";


export default function Home() {

  const { isAuthenticated, isLoading } = useStoreUserEffect()
  const {user} = useUser()
  if (isLoading) return <div>Loading...</div>;

  if(isAuthenticated) {redirect("/list")}

  return (
    <div className="h-screen flex items-center justify-center flex-col gap-y-4">
      <h1 className="text-xl font-semibold">
        ようこそ！{isAuthenticated ? user?.fullName : "ゲスト"}さん
      </h1>
      <div className="flex gap-4">
        {!isAuthenticated ? (
          <SignInButton mode="modal" forceRedirectUrl={process.env.NEXT_PUBLIC_CLERK_SIGN_IN_FORCE_REDIRECT_URL}>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              ログイン
            </button>
          </SignInButton>
        ) : (
          <>
          <SignOutButton>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              ログアウト
            </button>
          </SignOutButton>
          <AccountView user_id={user!.id}/>
          </>
        )}
      </div>
    </div>
  );
}