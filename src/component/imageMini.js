import React from 'react'
import Bag from '../image/bag.svg'
import Recycle from '../image/re.svg'
import Wallet from '../image/wallet.png'
function imageMini() {
    const data = [
        {
            img: Bag
        },
        {
            img: Recycle
        },
        {
            img: Wallet
        }
    ]
  return (
    <div>
    <div className='absolute left-[670px] top-[83px] flex'>
        {data.map((val, index)=>{
            return(
                <div>
                    {val.img}
                </div>
            )
        })}
    </div>

    </div>
  )
}

export default imageMini