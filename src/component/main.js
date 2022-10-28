import React from 'react'
import bgImg from '../image/background.jpeg'
import FrameMini from './frameMini'
// import ImageMini from './imageMini'
import FrameMax from './frameMax'

function main() {
  return (
    <div className=' relative'>
        <img src={bgImg} className="absolute bg-cover "/>
        <h1 class='text-lg font-[Changa-One] not-italic left-[610px] top-[10px] absolute font-black text-white'>
              Transfer to
        </h1>
        {/* <ImageMini/> */}
        <FrameMini/>
        <FrameMax/>
    </div>
  )
}

export default main