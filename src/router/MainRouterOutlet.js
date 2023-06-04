import React from 'react'
import {Outlet} from 'react-router-dom'

export default function MainRouterOutlet() {
  return (
    <div className='w-screen bg-[#f5e8da] px-4 flex-1 flex justify-center'>
        <Outlet/>
    </div>
  )
}
