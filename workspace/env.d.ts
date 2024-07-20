declare module "process" {
    global {
        namespace NodeJS {
            interface ProcessEnv {
                /** @param ConvexのプロジェクトID */
                CONVEX_DEPLOYMENT: string
                /** @param ConvexのデプロイURL */
                NEXT_PUBLIC_CONVEX_URL: string,
                /** @param デプロイ先のURL */
                CONVEX_SITE_URL: string,
                /** @param SpotifyのAPIを使うためのID */
                SPOTIFY_CLIENT_ID: string,
                /** @param SpotifyのAPIを使うための隠しトークン */
                SPOTIFY_CLIENT_SECRET: string,
                /** @param ClerkのIssuerのURL */
                CLERK_ISSUER_URL: string,
                /** @params CLERKのPublish Key */
                NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY: string,
                /** @param ClerkのSecretKey */
                CLERK_SECRET_KEY: string
            }
        }
    }
}