"use client"
import { useRouter } from "next/navigation"
import NavBar from "../../../components/NavBar"
import IframeCard from "../../../components/ifamecard"

const Page = () => {
	const Router = useRouter()
	const CardData = [
		{
			musicUrl:
				"https://open.spotify.com/embed/track/78W4mTLIh4qoLu92W4IQhO?utm_source=generator&theme=0",
			commentTitle: "Comment for Music Title 1",
		},
		{
			musicUrl:
				"https://open.spotify.com/embed/track/78W4mTLIh4qoLu92W4IQhO?utm_source=generator&theme=0",
			commentTitle: "Comment for Music Title 2",
		},
		{
			musicUrl:
				"https://open.spotify.com/embed/track/78W4mTLIh4qoLu92W4IQhO?utm_source=generator&theme=0",
			commentTitle: "Comment for Music Title 3",
		},
	]

	return (
		<div className="outer-container h-screen bg-white">
			<NavBar />
			<div className="flex justify-center px-5 safari-hack">
				<div className="max-w-screen-lg p-8">
					<div className="flex flex-wrap justify-center">
						{CardData.map((Card, Index) => (
							<IframeCard
								key={Index}
								musicUrl={Card.musicUrl}
								commentTitle={Card.commentTitle}
							/>
						))}
					</div>

					{/*ペジネーション*/}
					<div className="mb-10" />
					<div className="flex justify-center mt-4">
						<div className="join">
							<button className="join-item btn">1</button>
							<button className="join-item btn">2</button>
							<button className="join-item btn btn-disabled">...</button>
							<button className="join-item btn">99</button>
							<button className="join-item btn">100</button>
						</div>
					</div>
					<div className="mb-10" />
					<div className="flex justify-center">
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
		</div>
	)
}

export default Page
