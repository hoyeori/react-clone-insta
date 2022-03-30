import './Nav.css'
import React, { useState } from 'react'
import Logo from '../image/logo.png'
import Search from './Search'
import HomeIcon from '../image/home.png'
import HomeIcon_s from '../image/home_s.png'
import DmIcon from '../image/dm.png'
import DmIcon_s from '../image/dm_s.png'
import UploadIcon from '../image/upload.png'
import ExploreIcon from '../image/explore.png'
import ExploreIcon_s from '../image/explore_s.png'
import LikeIcon from '../image/like.png'
import LikeIcon_s from '../image/like_s.png'
import UserIcon from '../image/user.png'
import { useNavigate } from 'react-router-dom'




const Nav = () => {

    const [menu, setMenu] = useState([
        {
            id: "home",
            img: HomeIcon,
            select: true,
            img_s: HomeIcon_s,
        },
        {
            id: "dm",
            img: DmIcon,
            select: false,
            img_s: DmIcon_s,
        },
        {
            id: "upload",
            img: UploadIcon,
            select: false,
            img_s: UploadIcon,
        },
        {
            id: "explore",
            img: ExploreIcon,
            select: false,
            img_s: ExploreIcon_s,
        },
        {
            id: "like",
            img: LikeIcon,
            select: false,
            img_s: LikeIcon_s,

        },
        {
            id: "user",
            img: UserIcon,
            select: false,
            img_s: UserIcon,
        },
    ]);

    const [prevSelect, setPrevSelect] = useState(["home"]);
    const navigate = useNavigate();

    const handleClick = (id) => {
        let goto = ""
        let newMenu = menu.map(data => {
            if (data.id === id) {
                data.select = true;
                setPrevSelect(prev => [...prev, data.id]);
                goto = data.id;
            }
            else {
                data.select = false;
            }
            return data;
        })
        setMenu(newMenu);
        menuPage(goto);
    };

    const reload = (e) => {
        navigate('/');
        window.location.reload();
    }

    const clickClose = (e) => {
        prevSelect.pop();
        let newMenu = menu.map(data => {
            if (data.id === prevSelect[prevSelect.length - 1]) {
                data.select = true;
            }
            else {
                data.select = false;
            }
            return data;
        })
        setMenu(newMenu);
    }

    const isSelected = (element) => {
        if (element.select) {
            return true;
        }
    }

    const selectedMenu = menu.find(isSelected);

    const menuPage = (menuId) => {
        switch (menuId) {
            case 'home':
                return navigate('/');
            case 'dm':
                return navigate('direct')
            case 'explore':
                return navigate('explore')
            default:
                return 0;
        }
    }


    return (
        <div className='w-full fixed left-0 top-0 z-[500]'>
            <div className=' relative flex w-full justify-center items-center'>
                <div className='flex w-full h-[60px] justify-center items-center bg-white border-b-[1px]'>
                    <div className='w-[334px] justify-start'>
                        <img className='w-[103px] ml-3 pt-2 active:opacity-50 cursor-pointer'
                            src={Logo}
                            onClick={reload}
                            alt="insta-logo"
                        />
                    </div>
                    <Search />

                    <div className=' relative flex w-[334px] h-[25px] pl-[6px] itme-center justify-end'>
                        <div className=' absolute right-0 flex w-[334px] h-[25px] pl-[6px] itme-center justify-end'>
                            {menu.map((data) => (
                                <img
                                    key={data.id}
                                    src={data.select ? data.img_s : data.img}
                                    className='mx-[10.5px] cursor-pointer'
                                    onClick={() => handleClick(data.id)}
                                    alt={data.id} />

                            ))}
                        </div>

                        <div className={`likeBox relative z-30 ${selectedMenu.id === "like" ? "visible" : "invisible translate-y-[-10px] opacity-10"}`}>
                            <div className='absolute left-[-77px] top-[32px] w-[16px] h-[16px] rotate-45 shadow-[-3px_-3px_3px_0px_rgba(0,0,0,0.08)] bg-white z-[40]'></div>
                            <div className='absolute left-[-500px] top-[40px] w-[500px] h-[362px] shadow-[0px_0px_5px_1px_rgba(0,0,0,0.1)] bg-white rounded overflow-y-scroll z-30 '>
                                <div className='h-[106px]'><div className=' text-[14px] font-semibold p-[8px]'>이번 주</div></div>
                                <hr></hr>
                                <div className='h-[300px]'><div className=' text-[14px] font-semibold p-[8px]'>이번 달</div></div>
                            </div>
                            <button className={`${selectedMenu.id === "like" ? "h-screen" : "h-0"} fixed top-0 left-0 w-screen cursor-default`} onClick={clickClose}></button>
                        </div>

                        <div className={`userBox relative z-30 ${selectedMenu.id === "user" ? "visible" : "invisible translate-y-[-10px] opacity-10"}`}>
                            <div className='absolute left-[-32px] top-[32px] w-[16px] h-[16px] rotate-45 shadow-[-3px_-3px_3px_0px_rgba(0,0,0,0.08)] bg-white z-[40]'></div>
                            <div className='absolute flex-row left-[-220px] top-[40px] w-[230px] h-[194px] shadow-[0px_0px_5px_1px_rgba(0,0,0,0.1)] bg-white rounded z-30 '>
                                <div className='w-[230px] h-[37px] px-[16px] py-[8px] text-sm cursor-pointer hover:bg-gray-50'>프로필</div>
                                <div className='w-[230px] h-[37px] px-[16px] py-[8px] text-sm cursor-pointer hover:bg-gray-50'>저장됨</div>
                                <div className='w-[230px] h-[37px] px-[16px] py-[8px] text-sm cursor-pointer hover:bg-gray-50'>설정</div>
                                <div className='w-[230px] h-[37px] px-[16px] py-[8px] text-sm cursor-pointer hover:bg-gray-50'>계정 전환</div>
                                <hr></hr>
                                <div className='w-[230px] h-[45px] px-[16px] py-[8px] text-sm cursor-pointer hover:bg-gray-50'>로그아웃</div>
                            </div>
                            <button className={`${selectedMenu.id === "user" ? "h-screen" : "h-0"} fixed top-0 left-0 w-screen cursor-default`} onClick={clickClose}></button>
                        </div>
                    </div>

                    <div className={`uploadBox ${selectedMenu.id === "upload" ? "visible" : "invisible scale-110 opacity-10"} flex fixed top-0 left-0  w-screen h-screen justify-center items-center z-[100]`}>
                        <button className={`${selectedMenu.id === "upload" ? "h-screen" : "h-0"} bg-black opacity-[0.85] fixed top-0 left-0 w-screen cursor-default`} onClick={clickClose}></button>

                        <div className='fixed w-[750px] h-[793px] place-self-center bg-white rounded-2xl m-[20px]'>
                            <div className=' h-[42px] pt-[9px] text-center font-semibold border-b'>새 게시물 만들기</div>
                        </div>
                        <button className='absolute w-[40px] top-[0px] right-[40px] text-[40px] text-white' onClick={clickClose}>x</button>
                    </div>
                </div>

            </div>

        </div>

    );
};

export default Nav;