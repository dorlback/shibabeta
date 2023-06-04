import React,{useState} from 'react';
import shiba from '../static/shiba.png'
import Logo from '../static/logo.png'



const Skeleton = () => {
    return(
        <>
            <div className='w-full h-[455px]'/>
        </>
    )
}

function Banner(props) {
    const [isLoading, setIsLoading] = useState(true);

    const handleImageLoad = () => {
        setIsLoading(false);
      };

    return (
        <div className='rounded-md flex text-brownshiba  bg-bgshiba border-2 border-brownshiba mt-6 relative'>
            {/* AH! SHIBA 뭐먹지? */}
            <div className='flex flex-col items-center'>
                {isLoading  && <Skeleton/>}
                <img src={shiba} className={`pr-[0.9rem] ${isLoading? "hidden" : "block"}`} onLoad={handleImageLoad}/>
                <img src={Logo} className={`px-20 bottom-6 mb-3 ${isLoading? "hidden" : "block"}`}/>
            </div>
        </div>
    );
}

export default Banner;