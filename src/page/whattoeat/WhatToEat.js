import React, { useState } from 'react'
import Banner from '../../componants/Banner'
import AskButton from './AskButton'
import tw from 'tailwind-styled-components'
import { faCircleChevronLeft, faUser, faGear, faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { mealList, breakfastList,FoodList } from './ButtonDataList'


const WhatToEatContainer = tw.div`
    w-full flex flex-col items-center
`

const WahttoEatLayout = tw.div`
    flex flex-col w-full md:max-w-[1200px]
`

const FontAwesomeIconContainer = tw(FontAwesomeIcon)`
    h-full font-light text-[#e6aa83]
`

const CategoryButton = tw.button`
    w-full h-16 my-2
    bg-shibaskin
    rounded-md border-2 border-brownshiba
    text-brownshiba text-md font-semibold
`

const CategoryContainer = tw.div`
w-full h-full flex flex-col justify-center pb-24
`
const CategoryLayout = tw.div`
    h-full flex flex-col justify-around
`

const CategoryBiggest = ({ setCategoryBiggestState, categoryBiggestState, setCategoryState, categoryState }) => {
    return (
        <>
            <CategoryContainer>
                <CategoryLayout>
                    {mealList.map((data, idx) => (
                        <CategoryButton key={idx} onClick={() => {
                            if (data.index !== 1) {
                                alert('미구현')
                            } else {
                                setCategoryBiggestState(data.index);
                                setCategoryState(categoryState + 1)
                            }
                        }
                        }>
                            {data.title}
                        </CategoryButton>
                    ))}
                </CategoryLayout>
            </CategoryContainer>
        </>
    )
}

const CategoryMid = ({ setCategoryMidState, categoryMidState, setCategoryState, categoryState }) => {
    return (
        <>
            <CategoryContainer>
                <CategoryLayout>
                    {breakfastList.map((data, idx) => (
                        <CategoryButton key={idx} onClick={() => {
                            setCategoryMidState(data.index);
                            setCategoryState(categoryState + 1)
                        }
                        }>
                            {data.title}
                        </CategoryButton>
                    ))}
                </CategoryLayout>
            </CategoryContainer>
        </>
    )
}

const CategorySmallest =  ({ setResultTitle,setCategorySmallestState, categorySmallestState, setCategoryState, categoryState, categoryMidState }) => {
    const extractedObject = FoodList.find(item => item.indx === categoryMidState);

    console.log(extractedObject)
    return (
        <>
            <CategoryContainer>
                <CategoryLayout>
                    {/* {FoodList} */}
                    {extractedObject.list.map((data,idx) =>(
                        <CategoryButton key={idx} onClick={() => {
                            setResultTitle(data.title);
                            setCategoryState(categoryState + 1)
                        }
                        }>
                            {data.title}
                        </CategoryButton>
                    ))}

                </CategoryLayout>
            </CategoryContainer>
        </>
    )
}

const CategoryList = ({resultTitle}) => {
    return(
        <>
            <CategoryContainer>
                <CategoryLayout>
                    <div className="border-2 border-brownshiba rounded-md py-28 px-4 bg-orange-100" >
                        <div className='font-semibold text-xl'>
                            SHIBA 가 추천하는 오늘의 점심은! 
                        </div>
                        <div className='font-semibold text-2xl'>
                            <span className='text-orange-400 font-bold'>{resultTitle}</span>입니다!
                        </div>
                    </div>
                </CategoryLayout>
            </CategoryContainer>
        </>
    )
}

export default function WhatToEat() {
    const [categoryState, setCategoryState] = useState(0)
    const [categoryBiggestState, setCategoryBiggestState] = useState(0)
    const [categoryMidState, setCategoryMidState] = useState(0)
    const [categorySmallestState, setCategorySmallestState] = useState(0)
    const [resultTitle,setResultTitle] = useState('')
    return (
        <WhatToEatContainer>
            {categoryState === 0 &&
                <WahttoEatLayout>
                    <Banner />
                    <AskButton setCategoryState={setCategoryState} />
                </WahttoEatLayout>
            }

            {categoryState === 1 &&
                <CategoryBiggest categoryState={categoryState} setCategoryState={setCategoryState} categoryBiggestState={categoryBiggestState} setCategoryBiggestState={setCategoryBiggestState}>

                </CategoryBiggest>
            }

            {categoryState === 2 &&
                <CategoryMid categoryState={categoryState} setCategoryState={setCategoryState} categoryMidState={categoryMidState} setCategoryMidState={setCategoryMidState}>

                </CategoryMid>
            }

            {categoryState === 3 &&
                <CategorySmallest setResultTitle={setResultTitle} categoryMidState={categoryMidState} categoryState={categoryState} setCategoryState={setCategoryState} categorySmallestState={categorySmallestState} setCategorySmallestState={setCategorySmallestState}>

                </CategorySmallest>
            }

            {categoryState === 4 &&
                <CategoryList resultTitle={resultTitle} categorySmallestState={categorySmallestState}>

                </CategoryList>
            }


            {categoryState !== 0 &&
                <div className='mb-10 h-20 w-full p-2'>
                    <div className='h-full aspect-square flex justify-center items-center rounded-full' onClick={() => { setCategoryState(categoryState - 1) }}>
                        <FontAwesomeIconContainer icon={faCircleChevronLeft} />
                    </div>
                </div>
            }


        </WhatToEatContainer>
    )
}


