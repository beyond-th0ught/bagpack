import React from 'react'
import Cloth from '../image/cloth.png'
import Diamond from '../image/diamond.png'
import Fox from '../image/fox.png'
import Hand from '../image/hand.png'
import Bag from '../image/bag.png'
import fox2 from '../image/fox2.png'
import band from '../image/band.png'

function frameMax() {
  const data = [{
    Name : Cloth
},{
    Name : Diamond
},
{
    Name : Fox
},{
    Name : Hand
},{
    Name : ''
}

]
  return (
    <div className='absolute left-[82px] top-[78px] flex items-center '>
        <div className='bg-[#150C0C] p-[6px] grid grid-rows-5 gap-1.5 rounded-lg mt-7'>
            {data.map((val, index)=>{
              return(
                  <img src= {val.Name} className='w-[82px] h-[82px]  hover:bg-gradient-to-b from-yellow-500 ... hover:ring-2.5 hover:ring-yellow-600 rounded-xl  ' />
              )
            })}
        </div>
        <div class="flex justify-center p-8 gap-10">
 

              <fieldset className='bg-[#150C0C] w-[450px] h-[475px] rounded-md overflow-hidden'>

            <legend class="text-sm ">
            <div className='flex align-center'>
                <div><img src={Bag} sizes={5} class='h-8px w-8px mr-3' /></div>
                <div><h1 class='text-4xl font-extrabold text-white'>BagPack</h1></div>
                <div><div class="rounded-full bg-white ">1</div></div>
            </div>                
            
            </legend>
            <div class='m-6 border-2 border-black bg-gradient-to-b from-[#8E411D] to-[#FDAF57]'>
              <div></div>
              <div className='h-full p-6  w-full border-dashed border-separate border-spacing-2  grid grid-cols-4 gap-4 overscroll-contain'>
                  <div class='border rounded-xl bg-cover border-dashed bg-[#C88F5D]'>
                    <img src={Cloth} />
                  </div>
                  <div class='border rounded-xl bg-cover border-dashed bg-[#935529]'>2</div>
                  <div class='border rounded-xl bg-cover border-dashed bg-[#7a3c1b]'>3</div>
                  <div class='border rounded-xl bg-cover border-dashed'>4</div>
                  <div class='border rounded-xl bg-cover border-dashed'>
                  <img src={Cloth} />
                  </div>
                  <div class='border rounded-xl bg-cover border-dashed'>6</div>
                  <div class='border rounded-xl bg-cover border-dashed'>7</div>
                  <div class='border rounded-xl bg-cover border-dashed'>8</div>
                  <div class='border rounded-xl bg-cover border-dashed'>9</div>
                  <div class='border rounded-xl bg-cover border-dashed'>
                  <img src={Cloth} />
                  </div>
                  <div class='border rounded-xl bg-cover border-dashed'>12</div>
                  <div class='border rounded-xl bg-cover border-dashed'>13</div>
                  <div class='border rounded-xl bg-cover border-dashed'>
                  <img src={Cloth} />
                  </div>
                  <div class='border rounded-xl bg-cover border-dashed'>15</div>
                  <div class='border rounded-xl bg-cover border-dashed'>16</div>
                  <div class='border rounded-xl bg-cover border-dashed'>17</div>
                  <div class='border rounded-xl bg-cover border-dashed'>
                  <img src={Cloth} />
                  </div>
                  <div class='border rounded-xl bg-cover border-dashed'>15</div>
                  <div class='border rounded-xl bg-cover border-dashed'>16</div>
                  <div class='border rounded-xl bg-cover border-dashed'>17</div>
              </div>
            </div>
            </fieldset>
            <div className='bg-[#150C0C] w-[450px] h-[430px] rounded-md '>
              khush
            </div>
        </div>
    </div>
  )
}

export default frameMax