import React, { useState, useEffect } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination } from "swiper";
import "swiper/css/bundle"
import "./Article.css"
import artLike from '../image/articleLike.png'
import artLike_s from '../image/articleLike_s.png'
import artDm from '../image/articleDm.png'
import artComment from '../image/articleComment.png'
import artSave from '../image/articleSave.png'
import artSave_s from '../image/articleSave_s.png'
import emoji from '../image/emoji.png'

const Article = () => {

    var possible = "qwertyuiopasdfghjklzxcvbnm1234567890";
    let idCnt = 0;

    const [articles, setArticles] = useState([]);
    const [currentArticles, setCurrentArticles] = useState([]);
    const [artMenuOpen, setArtMenuOpen] = useState(false);

    useEffect(() => {
        initArticles();
        return () => {
        }
    }, [])

    const loadArticle = () => {
        console.log("load article")
        let text = "";
        let textLeng = Math.floor(Math.random() * (9 - 5 + 1)) + 5;
        let imgHeight = 614;
        let swiperHeight = imgHeight + 36;

        for (var i = 0; i < textLeng; i++) {
            text += possible.charAt(Math.floor(Math.random() * possible.length));
        }

        let newArticle = {
            id: idCnt,
            title: text,
            watched: false,
            profileImg: `https://source.unsplash.com/32x32/${text}`,
            imgHeight: imgHeight,
            imgSrc: [1, 2, 3],
            imgPage: 0,
            like: 0,
            comment: 0,
            uploadDate: Date.now(),
            swiperHeight: swiperHeight,
            detail: [{
                id: "like",
                img: artLike,
                select: false,
                img_s: artLike_s,
            },
            {
                id: "comment",
                img: artComment,
                select: false,
                img_s: artComment,
            },
            {
                id: "dm",
                img: artDm,
                select: false,
                img_s: artDm,
            },
            {
                id: "save",
                img: artSave,
                select: false,
                img_s: artSave_s,
            }],
        }

        setArticles(prev => [...prev, newArticle]);
        idCnt++;

        return newArticle;
    }

    const initArticles = () => {
        console.log("init article")

        let newArticle = [];

        for (let i = 0; i < 4; i++) {
            newArticle.push(loadArticle());
        }
        setCurrentArticles(newArticle);
    }

    const handleClick = (article, artDetail) => {
        console.log(article);
        console.log(articles)
        let newArticles = articles.map(data => {
            if (data.id === article.id) {
                data.detail.map(detail => {
                    if (artDetail.id === detail.id) {
                        detail.select = !detail.select;
                    }
                    return detail;
                })
            }
            return data;
        })
        setArticles(newArticles);
    };

    const calcTime = (uploadDate) => {
        let now = new Date();
        let calc = now - uploadDate;
        calc = Math.floor(calc / 60000);
        if (calc === 0) return "방금"
        return calc + "분";
    }

    const menuClick = (e) => {
        let open = artMenuOpen;
        setArtMenuOpen(!open);
    }


    return (
        <div className='flex flex-col '>
            {currentArticles.map((data) => (
                <div className={`flex flex-col w-[614px] bg-white mb-[24px] border rounded`} key={data.id}>
                    <div className='flex flew-row relative w-full h-[61px] border-b'>
                        <div className='flex flex-row w-[566px] h-full py-[14px] pl-[16px] pr-[4px]'>
                            <img className='w-[32px] h-[32px] rounded-full' src={data.profileImg}></img>
                            <div className='pl-[14px] font-semibold text-[14px] pt-[4px]'>{data.title}</div>
                        </div>
                        <button className='absolute right-[10px] top-[8px] w-[40px] h-[40px]' >
                            <div className=' font-bold' onClick={menuClick}>...</div>
                        </button>
                    </div>
                    <div className={`articleImg w-full h-[${data.swiperHeight}px] bg-white`}>
                        <Swiper
                            modules={[Navigation, Pagination]}
                            navigation={{
                                prevEl: '.slider__arrow-left',
                                nextEl: '.slider__arrow-right',
                            }}
                            pagination
                            slidesPerView="1">
                            <button className={`slider__arrow-right w-[45px] h-[45px] absolute top-1/2 right-0 mt-[-35px] flex justify-center items-center z-10`} >
                                <div className='w-[26px] h-[26px] bg-white rounded-full text-[#DBDBDB] font-[1000] text-base'>&gt;</div>
                            </button>
                            <button className={`slider__arrow-left w-[45px] h-[45px] absolute top-1/2 left-0 mt-[-35px] flex justify-center items-center z-10`} >
                                <div className='w-[26px] h-[26px] bg-white rounded-full text-[#DBDBDB] font-[1000] text-base'>&lt;</div>
                            </button>
                            <div className={`w-full h-[${data.imgHeight}px]`}>
                                {data.imgSrc.map((imgSrc) => (
                                    <SwiperSlide className='bg-lime-200'>{imgSrc}</SwiperSlide>
                                ))}
                            </div>
                        </Swiper>
                    </div>
                    <div className='w-full'>
                        <div className='w-full mt-[-34px] px-[16px] pt-[6px] pb-[8px] h-[54px] flex flex-row items-center relative'>
                            {data.detail.map((detail) => (
                                <img
                                    key={detail.id}
                                    src={detail.select ? detail.img_s : detail.img}
                                    className={`${detail.id} z-[10] w-[26px] h-[26px] mr-[16px] cursor-pointer`}
                                    alt={detail.id}
                                    onClick={() => handleClick(data, detail)} />
                            ))}
                        </div>
                        <div className='px-[16px] mb-[8px] text-[14px]'><span>____</span>님 <span>{data.like}명</span>이 좋아합니다</div>
                        <div className='px-[16px] align-baseline'>
                            <div className='text-[14px] mb-[4px]'><span>{data.title}</span> 안녕하세요?... <a className=' text-gray-400 cursor-pointer'>더 보기</a></div>
                            <div className='text-[14px] mb-[4px]'><a className=' text-gray-400 cursor-pointer'>댓글 {data.comment}개 모두 보기</a></div>
                        </div>
                        <div className='px-[16px] mb-[16px] text-[10px] text-gray-400'>{calcTime(data.uploadDate)} 전</div>
                        <div className='flex items-center px-[16px] py-[6px] h-[53px] border-t'>
                            <img className='w-[24px] h-[24px] cursor-pointer mr-[16px]' src={emoji}></img>
                            <textarea
                                className="text-[14px] w-[510px] outline-none"
                                type="text"
                                placeholder="댓글 달기..."
                            />
                            <button className=' text-[14px] text-blue-400 font-semibold'>게시</button>
                        </div>
                    </div>
                </div>
            ))
            }

        </div >
    )
}

export default Article