import { ConvexAdapter } from "./ConvexProvider/index";
import { SignJWT, importPKCS8 } from "jose";
import NextAuth, { DefaultSession } from "next-auth";
import { Doc } from "../convex/_generated/dataModel";
	
const CONVEX_SITE_URL = process.env.NEXT_PUBLIC_CONVEX_URL!.replace(
  /.cloud$/,
  ".site",
);

export const { handlers, signIn, signOut, auth } = NextAuth({
  debug: true,
  providers: [
    // ... configured providers
  ],
  adapter: ConvexAdapter,
  callbacks: {
    async session({ session }) {
      const privateKey = await importPKCS8(
        process.env.CONVEX_AUTH_PRIVATE_KEY!,
        "RS256",
      );
      const convexToken = await new SignJWT({
        sub: session.userId,
      })
        .setProtectedHeader({ alg: "RS256" })
        .setIssuedAt()
        .setIssuer(CONVEX_SITE_URL)
        .setAudience("convex")
        .setExpirationTime("1h")
        .sign(privateKey);
      return { ...session, convexToken };
    },
  },
});

declare module "next-auth" {
  interface Session {
    convexToken: string;
    user: {} & Doc<"users">// & DefaultSession["user"]
  }
}
