/** @param 認証しないでも誰でも見えるルート */
export const publicRoutes: string[] = [];
/** @param 認証しないでも誰でも見えるルート */
export const authRoutes: string[] = ["/"] //['/sign-up', '/sign-in'];
/** @param 	API 認証に使用されるルートのプレフィックス */
export const apiAuthPrefix: string = '/api/auth';
/** @param ユーザーがログインした後に自動的にリダイレクトされるデフォルトのパス */
export const DEFAULT_LOGIN_REDIRECT: string = '/loggedin';