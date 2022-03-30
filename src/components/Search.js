import React, { useState } from 'react'
import SearchIcon from '../image/searchIcon.png'

const Search = () => {

    const [searchQuery, setSearchQuery] = useState("");

    const handleChange = (e) => {
        setSearchQuery(e.target.value);
    };

    const handleClick = (e) => {
        e.preventDefault();
        setSearchQuery("");
    };



    return (
        <div className='flex justify-center items-center w-[268px] h-[36px] bg-gray-100 rounded-md px-2 group'>


            <form className='flex px-2 w-full items-center '>
                <input
                    type="text"
                    placeholder="검색"
                    value={searchQuery}
                    className="w-full px-2 bg-inherit text-gray-400 focus:text-black focus:outline-none peer order-2"
                    size="22"
                    onChange={handleChange}
                ></input>
                <img src={SearchIcon} className='w-4 h-4 order-1 peer-focus:hidden opacity-50' />
                <button
                    className=' text-[0px] peer-focus:visible float-right w-[16px] h-[14px] peer-focus:bg-gray-500/25 rounded-full peer-focus:text-[8px] peer-focus:text-gray-100 align-middle order-3 '
                    onClick={handleClick}>X</button>
            </form>
        </div>
    );
};

export default Search
