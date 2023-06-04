import React from 'react'
import ShibaLogo from './ShibaLogo'
import { useNavigate } from 'react-router-dom';

const ItemListData = ['아시바 뭐먹지?','아시바 뭐먹지?' ,'아시바 뭐먹지?'  ];

export default function ItemList() {
    const navigate = useNavigate()
    return (
        <div className='w-full my-6 rounded-md p-2 border-2 bg-slate-100 border-brownshiba'>
            <div className='w-full grid grid-cols-3 gap-6'>
                {ItemListData.map((data, idx) => (
                    // <div className='flex flex-col items-center justify-center'>
                    //     <div key={idx} className='w-full aspect-square border rounded-full'/>
                    //     <span className='text-xs'>{data}</span>
                    // </div>
                    <div onClick={()=> {navigate('/whattoeat')}} key={idx} className="w-full h-full flex justify-center items-center flex-col p-2">
                        <div className="bg-shibaskin overflow-hidden h-20 aspect-square rounded-full border-2 border-brownshiba">
                            <ShibaLogo/>
                        </div>
                        <span className='text-xs text-brownshiba font-semibold mt-3'>{data}</span>
                    </div>
                ))}
            </div>
        </div>
    )
}
