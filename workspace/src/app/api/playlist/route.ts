/*
    メソッド達がうまくいかなかった場合、Reactコンポーネントに直書きする関数たち
function getList(id: Doc<"playlist">["_id"]) : {
    name: string,
    music_ids: string[],
    likes: number
}{
    return useQuery(api.post.getPost, {id: id});
}

function getListAll() : {
    user_id: Doc<"users">["_id"],
    contents: string,
    playlist_id: string,
    music_id: string,
    likes: number,
    conmments: string[]
}[] {
    return useQuery(api.post.getPost);
}


async function createPostData(data: {
    name: string,
    ids: string[]
}) {
    const createPost = useMutation(api.post.createPost);
    await createPost(data)
}

async function updatePostData(data: {
    name: string,
    ids: string[],
    list_id: Doc<"playlist">["_id"]
}) {
    const updatePost = useMutation(api.post.updatePost);
    await updatePost(data)
}


async function deletePostData(id: Doc<"playlist">["_id"]) {
    const deletePost = useMutation(api.post.deletePost);
    await deletePost(id)
}

*/