import React from 'react'

const PostsView = () => {
  return (
    <>
        <p style={{fontSize:"30px"}}>投稿一覧</p>
        <div  className='bg-stone-200 flex py-7 my-5 w-1/3 h-80' 
        style={{
        borderRadius:"20px",
        justifyContent:"center"
        }}>
          <p className='h-50 w-50 flex justify-center items-center'>
            まだ投稿がありません
            <br />
            投稿してみましょう！
          </p>
        </div>
    </>
  )
}

export default PostsView