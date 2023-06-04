import React from 'react'
import tw from 'tailwind-styled-components'
import { faHome, faUser, faGear, faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const FooterContainer = tw.div`
py-4 w-screen bg-gray-200 flex flex-col items-center
`

const FontAwesomeIconContainer = tw(FontAwesomeIcon)`
    text-xl text-brownshiba
`

const MobildFooterNavButton = tw.div`
    flex-1 flex justify-center items-center cursor-pointer hover:bg-slate-100
`

export default function Footer() {
    return (
        <>
            <FooterContainer>
                <span className='text-sm'>AH! SHIBA는 는 시바가 여러 고민을 해결해줍니다!</span>
                <span className='text-sm'>고민이 있으면 시바에게 물어보세요~</span>
                <span className='text-xs' >©2023 ahshiba.com</span>
            </FooterContainer>
{/* 
            <div className='max-md:flex md:hidden sticky bottom-0 w-screen h-[6rem] bg-slate-100 border-t'>
                <MobildFooterNavButton>
                    <FontAwesomeIconContainer icon={faHome} />
                </MobildFooterNavButton>
                <MobildFooterNavButton>
                    <FontAwesomeIconContainer icon={faUser} />
                </MobildFooterNavButton>
                <MobildFooterNavButton>
                    <FontAwesomeIconContainer icon={faBriefcase} />
                </MobildFooterNavButton>
                <MobildFooterNavButton>
                    <FontAwesomeIconContainer icon={faGear} />
                </MobildFooterNavButton>
            </div> */}
        </>

    )
}
