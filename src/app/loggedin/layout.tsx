import ConvexClientProvider from "../../ConvexProvider/WithAuth";
import { auth, signOut } from "@/auth";
import { SignOut } from "@/components/SignOutForm";
import { ReactNode } from "react";

export default async function LoggedInLayout({
	children,
}: {
	children: ReactNode;
}) {
	const session = await auth();
	return (
		<>
			<SignOut />
			<ConvexClientProvider session={session}>{children}</ConvexClientProvider>
		</>
	);
}