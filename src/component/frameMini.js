import React from 'react'
import Bag from '../image/bag.png'
import Recycle from '../image/recycle.png'
import Wallet from '../image/wallet.png'

function frameMini() {
    const data = [{
        Name : 'BagPack'
    },{
        Name : 'Wallet'
    },
    {
        img : Bag
    },{
        img : Recycle
    },{
        img : Wallet
    }

]
  return (
    <div>
        
        <div className='absolute left-[510px] top-[62px] gap-9 flex'>
            {data.map((val, index)=>{
                return(
                    <div>
                    <img src={val.img}/>
                    <h1 className='bg-[#433B3B] w-[133px] py-1 font-[Changa-One]   border-[4px] border-[#000000] text-white font-extrabold non-italic text-center'>
                        {val.Name}
                    </h1>
                    </div>
                   
                )
            })}
        </div>
    </div>
  )
}

export default frameMini