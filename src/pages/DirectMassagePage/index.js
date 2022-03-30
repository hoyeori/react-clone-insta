import React from 'react'

const DirectMassagePage = () => {
    return (
        <div>
            <div className=' absolute left-0 top-[60px] grid justify-center p-[15px] w-screen h-screen z-20 bg-gray-50' >
                <div className=' flex flex-row w-[935px] h-[875px] border bg-white rounded overflow-hidden items-stretch'>
                    <div className='w-[350px] h-full border-r'>
                        <div className='flex w-full h-[60px] px-[20px] border-b justify-center items-center'>
                            <div className=' w-[230px] h-[36px] text-center font-medium pt-[5px] text-[16px]'>userName</div>
                        </div>
                        <div className='flex w-full h-full overflow-y-scroll'></div>
                    </div>
                    <div className=' flex flex-col w-[585px] h-full '>
                        <div className='w-full h-[60px] border-b'></div>
                        <div className='flex w-full h-[815px] overflow-y-scroll'></div>
                    </div>
                </div>
            </div >
        </div>
    )
}

export default DirectMassagePage