import React from 'react'
import shiba from '../../static/shiba.png'
export default function ShibaLogo() {
  return (
    <div className='relative'>
        <img src={shiba} className='absolute h-20 top-[0.8rem] right-[0.09rem]'/>
    </div>
  )
}
