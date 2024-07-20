"use client"
import { ClerkProvider, useAuth } from "@clerk/clerk-react";
import { ConvexProviderWithClerk } from "convex/react-clerk";
import { ConvexReactClient } from "convex/react";
import { ReactNode } from 'react';

const convex = new ConvexReactClient(process.env.NEXT_PUBLIC_CONVEX_URL!);

export default function LoginProvider({
    children
}: {
    children: React.ReactNode
}){
    return  (
        <ClerkProvider publishableKey="pk_test_ZmFpdGhmdWwtbXVsZS01LmNsZXJrLmFjY291bnRzLmRldiQ">
            <ConvexProviderWithClerk client={convex} useAuth={useAuth}>
                {children}
            </ConvexProviderWithClerk>
        </ClerkProvider>
    )
}
