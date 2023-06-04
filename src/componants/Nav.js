import tw from 'tailwind-styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faComment } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import Shiba from '../static/shiba_logo.png'
import Ah from '../static/Ah.png'

const NavButtonContainer = tw.div`
    max-md:hidden md:block
    h-8 flex justify-center items-center rounded-md mx-2 px-4 text-sm hover:text-gray-200 hover:bg-purple-500 cursor-pointer
`

const Partition = tw.div`
    text-gray-300 h-full flex items-center justify-center mx-4
`

const NavContainer = tw.div`
    sticky top-0 
    w-screen h-12 z-20
    text-brownshiba border-b border-b-brownshiba
    bg-bgshiba 
`

export function Nav({toggleMenu}) {
    const navigate = useNavigate()
    return (
        <>
            <NavContainer >
                <div className="w-full h-full flex justify-center">
                    <div className="w-full h-full flex items-center justify-between max-md:px-4 md:max-w-[1200px]">
                        <div className="h-full flex flex-row items-start">
                            <div className="h-full flex justify-center items-center py-[0.75rem]" onClick={()=> {navigate('/')}}>
                                <img src={Ah} className='h-full pb-[0.04] pt-[0.08rem] mr-[0.2rem]'/>
                                <img src={Shiba} className='h-full'/>
                            </div>
                            <div className='h-full flex items-center'>
                                <NavButtonContainer onClick={()=> {navigate('/')}}>Home</NavButtonContainer >
                                <NavButtonContainer onClick={()=> {navigate('/about')}}>About</NavButtonContainer >
                                <NavButtonContainer >Contact us</NavButtonContainer >
                                <NavButtonContainer >Select Shiba</NavButtonContainer >
                            </div>
                        </div>
                        <div className='h-full flex items-center'>
                            {/* <div>
                                <FontAwesomeIcon className='text-md' icon={faComment} />
                            </div>
                            <Partition>|</Partition> */}
                            <button onClick={toggleMenu}>
                                <FontAwesomeIcon className='text-xl' icon={faBars} />
                            </button>
                            {/* <Partition>|</Partition> */}
                            {/* <button className='bg-white text-black font-semibold px-4 py-1 rounded-full hover:bg-gray-200'
                                onClick={() => { alert('미구현') }}
                            >
                                Login
                            </button> */}
                        </div>
                    </div>
                </div>
            </NavContainer>
        </>
    )
}