import React from 'react'

export default function Header() {
  return (
    <div className='bg-white h-20 shadow-sm flex  items-center gap-3 text-center p-4'>

        <a href='http://primashops.co.ke/sample-ecommerce-app/%20/sample-ecommerce-app/shop'></a>

        <div className='h-14 w-14 bg-yellow-400 rounded-full flex justify-center items-center '>
                <span 
                className=' mx-auto my-auto text-center text-xl font-sans font-normal'>
                    PS
                </span>
        </div>

        <h2 className='text-xl font-sans'>Primashop</h2>
     
    </div>
  )
}
