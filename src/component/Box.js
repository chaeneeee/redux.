import React from 'react'
import {  useSelector } from 'react-redux';
import GrandsonBox from './GrandsonBox';

const Box = () => {
    let count = useSelector((state)=> state.count);
  return (
    <div>
      this is box {count}  
      {/*  app/js 에 <box/> 에 count{count} 해서 값 가져올 필요없이 useSelector 쓰면된다 */}
      <GrandsonBox/>
    </div>
  )
}

export default Box
