import React from 'react'
import NameId from '../../../components/name-id'
import PostsView from '../../../components/posts-view'

const page = () => {
  return (
    <div style={{
        display:"flex",
        alignItems:"center",
        justifyContent:"center",
        flexDirection:"column"
        }}>
        <div style={{display:"flex",alignItems:"center"}}>
            <img  src='./arrow-black-image.png'/>
                <p  className=" w-screen flex justify-center items-center"
                style={{
                    fontWeight:"bold", 
                    fontSize:"30px",
                    marginTop:"20px"
                    }}>
                    マイページ
                </p>
        </div>
        <NameId name="名前" id="id"/>
        <PostsView />
        
    </div>
  )
}

export default page