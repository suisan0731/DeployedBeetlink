import React from 'react'
import CustomButton from './custom-button'

const Recent = () => {
  return (
    <div style={{
        display:"flex",
         justifyContent:"center",
         alignItems:"center",
         flexDirection:"column"
         }}>
        <p style={{fontSize:"30px"}} className='mt-10 mb-5'>最近聞いた曲</p>
        <CustomButton text='曲を聴く' href='./play'/>
    </div>
  )
}

export default Recent