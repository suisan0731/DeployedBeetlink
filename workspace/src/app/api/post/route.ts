/*
    上のメソッド達がうまくいかなかった場合、Reactコンポーネントに直書きする関数たち
function getPostData() : {
    user_id: Doc<"users">["_id"],
    contents: string,
    playlist_id: string,
    music_id: string,
    likes: number,
    conmments: string[]
}{
    return useQuery(api.post.getPost);
}


async function createPostData(data: {
    user_id: string,
    contents: string,
    playlist_id: string,
    music_id: string,
}) {
    const createPost = useMutation(api.post.createPost);
    await createPost(data)
}

async function updatePostData(data: {
    id: Doc<"post">["_id"],
    contents: string,
    playlist_id: string,
    music_id: string,
}) {
    const updatePost = useMutation(api.post.updatePost);
    await updatePost(data)
}


async function deletePostData(id: Doc<"post">["_id"]) {
    const deletePost = useMutation(api.post.deletePost);
    await deletePost(id)
}

*/