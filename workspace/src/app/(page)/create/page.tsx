"use client"
import "../../globals.css"
import { useRouter } from "next/navigation"
import NavBar from "../../../components/NavBar"
import MusicCard from "../../../components/music-card"
import PostForm from "@/components/PostForm"

const Page = () => {
	// const albumImageUrl: string = "/sample/Himawari.jpg";
	// const musicTitle: string = "Music title";
	// const aritist: string = "Artist name";

	const MusicUrl =
		"https://open.spotify.com/embed/track/78W4mTLIh4qoLu92W4IQhO?utm_source=generator&theme=0"
	const Router = useRouter()

	return (
		<div className="outer-container h-screen bg-white">
			<NavBar />
			<div className="flex justify-center px-5 safari-hack w-full">
				<div className="max-w-screen-lg w-full p-8">
            <PostForm />

						{/* 前のページに戻る */}
						<button
							className="btn btn-outline w-60"
							type="button"
							onClick={() => Router.back()}
						>
							戻る
						</button>
				</div>
			</div>
		</div>
	)
}

export default Page
