import {useForm,useWatch} from "react-hook-form"
import MusicCard from "./music-card";
import useTracks from "@/hooks/useTracks";

export interface PostData  {
    MusicTitle: string,
    Title: string,
    Comment: string
}

export default function PostForm(){
    const { register, control, formState: { dirtyFields }, handleSubmit } = useForm<PostData>({
        defaultValues: {
            MusicTitle: "ファタール",
            Title: "",
            Comment: ""
        }
    });
    
    const onSubmit = (data: PostData) => {
        console.log(JSON.stringify(data))
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="flex justify-center px-5 safari-hack w-full">
            <div className="max-w-screen-lg w-full p-8">
                <MusicCard control={control} />
                    {/* 音楽タイトル入力 */}
					<div className="mb-4">
						<label className="text-left mb-2">曲名</label>
						<input
							type="text"
							placeholder="曲名を入力"
							className="input input-bordered w-full max-w-xs bg-white border-2 border-black"
                            {...register("MusicTitle")}
                        />
					</div>
                    {/* タイトル入力 */}
					<div className="mb-4">
						<label className="text-left mb-2">タイトル</label>
						<input
							type="text"
							placeholder="タイトルを入力"
							className="input input-bordered w-full max-w-xs bg-white border-2 border-black"
                            {...register("Title")}
                        />
					</div>

					{/* コメント入力 */}
					<div className="mb-4">
						<label className="text-left mb-2">コメント</label>
						<textarea
							className="textarea textarea-bordered w-full bg-white border-2 border-black mb-4"
							placeholder="コメントを入力"
						></textarea>
					</div>

					{/* ボタン */}
					<div className="flex flex-col space-y-4 items-center">
						<button
							type="submit"
							className="btn btn-active btn-neutral w-60 bg-gray-200 text-black hover:bg-sky-700 hover:text-white mb-4"
						>
							投稿
						</button>
                    </div>
            </div>
        </form>
    )
}