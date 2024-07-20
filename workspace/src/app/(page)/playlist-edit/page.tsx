"use client";
import React, { useEffect } from 'react';
import PlaylistMenu from '../../../components/playlist-menu';
import CustomButton from '../../../components/custom-button'

const Page = () => {

  return (
    <div style={{ position: "relative" }}>
      <a href='./playlist'>
        <img src="./arrow-image.png" style={{ position: "absolute", top: "5vh", left: "30px" }} alt="戻る"></img>
      </a>
  
      <p  className='text-center' style={{fontSize:"30px",fontWeight:"bold",marginTop:"10px"}}>編集</p>
      <div style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
      }}>
        <img src='./sample/Himawari.jpg' style={{ width: "30%", borderRadius: "10%",marginTop:"10px" }} alt="サンプル" />
        <p style={{ fontWeight: "bold", fontSize: "30px",marginTop:"10px" }}>プレイリスト名</p>
      </div>
      <div style={{ marginTop: "10px" }}>
        {/* ここリストで管理したい */}
        <PlaylistMenu isEdit={true}/>
        <PlaylistMenu isEdit={true}/>
        <PlaylistMenu isEdit={true}/>
        <div style={{ width: "100vw", height: 1, background: "gray" }} />
      </div>
        <div 
        style={{
            display:"flex",
            alignItems:"center",
            justifyContent:"flex-start",
            margin:"17px"
            }}>
          <img src='./plus-image.png' width={"30px"} style={{marginLeft:"10%"}}></img>
          <p style={{marginLeft:"10px"}}>曲を追加</p>
        </div>
        <div style={{ width: "100vw", height: 1, background: "gray" }} />
      <div className= 'text-center'>
      <CustomButton text='保存' href='./playlist'/>
      </div>
    </div>
  );
}

export default Page;
