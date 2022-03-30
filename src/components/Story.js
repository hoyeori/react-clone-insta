import React, { useState, useEffect } from 'react'

const Story = () => {

    var possible = "qwertyuiopasdfghjklzxcvbnm1234567890";

    const [stories, setStories] = useState([]);

    const loadStories = (cnt) => {

        if (cnt === 0) return 0;

        let text = "";
        let textLeng = Math.floor(Math.random() * (9 - 5 + 1)) + 5;

        for (var i = 0; i < textLeng; i++) {
            text += possible.charAt(Math.floor(Math.random() * possible.length));
        }

        let newStory = {
            id: text,
            watched: false,
            img: `https://source.unsplash.com/56x56/?portrait/${text}`,
        }


        setStories(prev => [...prev, newStory]);
        return loadStories(cnt - 1);
    }

    const [pos, setPos] = useState(0);
    const [page, setPage] = useState(0);

    const handleWatch = (id) => {
        let newStories = stories.map(data => {
            if (data.id === id) {
                data.watched = true;
            }
            return data;
        })
        setStories(newStories);
    };

    const pageClick = (dict) => {
        let newPage = page + dict;
        let move = 0;
        let totalPage = parseInt(stories.length / 4) - 1;
        let remainPage = stories.length % 4;

        if (newPage < 0) { newPage = 0 }
        if (newPage > totalPage + 1) { newPage = totalPage }

        setPage(newPage);

        if (dict === 1) {
            if (page === totalPage - 1) move = (remainPage * 80 + 48);
            else move = 320;
        }
        else if (dict === -1) {
            if (page === totalPage) move = -1 * (remainPage * 80 + 48);
            else move = -320;
        }

        let newPos = pos + move;
        setPos(newPos);

        return;
    }

    const storyStyle = {
        transform: `translateX(-${pos}px)`,
        transition: "all 0.3s ease",
    }

    useEffect(() => {
        loadStories(19)
    }, [])



    return (
        <div className='flex w-[614px] mb-[24px] z-10'>
            <div className='flex justify-center w-[614px] h-[117px] bg-white py-[16px] border rounded relative '>
                <div className='w-full h-full overflow-hidden'>

                    <button className={`${page === parseInt(stories.length / 4) - 1 ? "hidden" : "flex"} w-[45px] h-[45px] absolute top-[36px] right-0 flex justify-center items-center z-10`} onClick={() => pageClick(1)}>
                        <div className='w-[26px] h-[26px] bg-white rounded-full drop-shadow-lg text-[#DBDBDB] font-[1000] text-base'>&gt;</div>
                    </button>
                    <button className={`${page === 0 ? "hidden" : "flex"} w-[45px] h-[45px] absolute top-[36px] left-0 flex justify-center items-center z-10`} onClick={() => pageClick(-1)}>
                        <div className='w-[26px] h-[26px] bg-white rounded-full drop-shadow-lg text-[#DBDBDB] font-[1000] text-base'>&lt;</div>
                    </button>

                    <ul className='flex float-left z-0'>
                        <li className=' translate-x-0 w-[0px]'></li>
                        <li className=' translate-x-[1520px] w-[10px]'></li>
                        {stories.map((data) => (
                            <li className={`${data.watched ? "order-last" : ""} w-[80px] story`} style={storyStyle} key={data.id}>
                                <button
                                    className={`flex-col justify-center items-center w-[80px] h-[122px] px-[4px]`}
                                    onClick={() => handleWatch(data.id)}>
                                    <div className={`${data.watched ? "w-[64px] h-[64px] bg-gray-200" : "w-[66px] h-[66px] bg-gradient-to-tr to-[#C92D8C] from-[#F99848]"}  rounded-full flex justify-center items-center`}>
                                        <div className='w-[62px] h-[62px] rounded-full flex justify-center items-center bg-white'>
                                            <img className={`w-[56px] h-[56px] bg-[#DBDBDB] rounded-full`} src={data.img}></img>
                                        </div>
                                    </div>
                                    <div className={`${data.watched ? "text-gray-400" : "text-black"} text-[11px] pt-[4px]`}>{data.id}</div>
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>

    )
}

export default Story