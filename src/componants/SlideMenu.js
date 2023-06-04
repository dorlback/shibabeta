import React from 'react'
import tw from 'tailwind-styled-components'
import { Link } from 'react-router-dom'

const MenuListContainer = tw.li`
    w-full h-12 py-1 px-4 my-2
`

const MenuButton = tw.div`
    flex justify-center items-center
    w-full h-full 
    rounded-full bg-amber-100
    border-amber-400 border

`

export default function SlideMenu({ isOpen, setIsOpen }) {
    return (
        <>
            <div className={`fixed top-0 right-0 h-full duration-500 w-full bg-black z-10 ${isOpen ? 'block' : 'hidden'}  opacity-30`} onClick={() => { setIsOpen(false) }}>

            </div>
            <div className={`z-10 fixed top-0 right-0 w-64 border-l-2 border-brownshiba bg-amber-50 h-full transform transition-transform duration-200 px-4 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                <ul className='mt-14'>
                    <MenuListContainer>
                        <Link to="/" className='w-full full'>
                            <MenuButton>
                                Home
                            </MenuButton>
                        </Link>
                    </MenuListContainer>
                    <MenuListContainer>
                        <MenuButton>
                            Login
                        </MenuButton>
                    </MenuListContainer>
                    <MenuListContainer>
                        <MenuButton>
                            Setting
                        </MenuButton>
                    </MenuListContainer>
                    {/* 여기에 다른 메뉴 아이템들이 올 수 있습니다. */}
                </ul>
            </div>
        </>
    )
}
