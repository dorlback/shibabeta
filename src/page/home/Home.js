import React from 'react'
import ItemList from './ItemList'
import Advertise from './Advertise'
import Banner from '../../componants/Banner'

export default function Home() {
    return (
        <>
           
            <div className='w-full'>
                <Banner/>
                <ItemList/>
            </div>
        </>
    )
}