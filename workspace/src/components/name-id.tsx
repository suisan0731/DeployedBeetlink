import React from 'react'

type NameIdProps = {
    name:string;
    id:string;
}

const NameId:React.FC<NameIdProps> = ({name,id}) => {
  return (
    <div  className='bg-stone-200 flex py-7 my-20 w-3/4 md:w-1/3 ' 
    style={{
        borderRadius:"20px",
        justifyContent:"start"
        }}>
         <img src='./sample/Himawari.jpg'
          width={"50px"} 
          className='ml-10'
          style={{borderRadius:"50%"}} />
          <div className='ml-10'>
             <p style={{fontWeight:"bold"}}>{name}</p>
             <p style={{color:"#585858"}}>ID:{id}</p>
          </div>
    </div>
  )
}
export default NameId
