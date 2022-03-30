import React from 'react'
import Story from '../../components/Story'
import Article from '../../components/Article'

const MainPage = () => {
    return (
        <div className='flex flex-col justify-ceneter w-[935px] h-auto py-[84px] mx-auto  '>
            <Story />
            <Article />
        </div>
    )
}

export default MainPage