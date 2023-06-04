import React from 'react'

export default function AskButton({setCategoryState}) {
    return (
        <div className='w-full h-20 flex items-center justify-center py-2 my-6'>
            <button className='w-full h-full bg-shibaskin rounded-md border-2 border-brownshiba font-bold' onClick={() => {setCategoryState(1)}}>
                시바에게 뭐먹을지 물어보기!
            </button>
        </div>
    )
}
