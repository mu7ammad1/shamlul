"use client";
import Image from "next/image";
import React, { useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import icon from '@/asset/images/icons.svg'
import icon_dark from '@/asset/images/icons-dark.svg'

export default function Platya() {


    const [visibleCards, setVisibleCards] = useState(100);

    const [hasMore, setHasMore] = useState(true);

    const [copyStatus, setCopyStatus] = useState({});


    const handleShowMore = () => {
        setVisibleCards((prevVisibleCards) => prevVisibleCards + 20);
    };

    const fruitsData = [
        ['alarm'],
        ['radar-1'],
        ['security'],
        ['security-safe'],
        ['security-safe'],
        ['security-safe'],
        ['security-safe'],
        ['security-safe'],
        ['security-safe'],
        ['radar-1'],
        ['security'],
        ['security-safe'],
        ['security-safe'],
        ['security-safe'],
        ['security-safe'],
        ['security-safe'],
        ['security-safe'],
        ['radar-1'],
        ['security'],
        ['security-safe'],
        ['security-safe'],
        ['security-safe'],
        ['security-safe'],
        ['security-safe'],
        ['security-safe'],
        ['radar-1'],
        ['security'],
        ['security-safe'],
        ['security-safe'],
        ['security-safe'],
        ['security-safe'],
        ['security-safe'],
        ['security-safe'],
        ['radar-1'],
        ['security'],
        ['security-safe'],
        ['security-safe'],
        ['security-safe'],
        ['security-safe'],
        ['security-safe'],
        ['security-safe'],
        ['radar-1'],
        ['security'],
        ['security-safe'],
        ['security-safe'],
        ['security-safe'],
        ['security-safe'],
        ['security-safe'],
        ['security-safe'],

        ['alarm'],
        ['radar-1'],
        ['security'],
        ['security-safe'],
        ['security-safe'],
        ['security-safe'],
        ['security-safe'],
        ['security-safe'],
        ['security-safe'],
        ['radar-1'],
        ['security'],
        ['security-safe'],
        ['security-safe'],
        ['security-safe'],
        ['security-safe'],
        ['security-safe'],
        ['security-safe'],
        ['radar-1'],
        ['security'],
        ['security-safe'],
        ['security-safe'],
        ['security-safe'],
        ['security-safe'],
        ['security-safe'],
        ['security-safe'],
        ['radar-1'],
        ['security'],
        ['security-safe'],
        ['security-safe'],
        ['security-safe'],
        ['security-safe'],
        ['security-safe'],
        ['security-safe'],
        ['radar-1'],
        ['security'],
        ['security-safe'],
        ['security-safe'],
        ['security-safe'],
        ['security-safe'],
        ['security-safe'],
        ['security-safe'],
        ['radar-1'],
        ['security'],
        ['security-safe'],
        ['security-safe'],
        ['security-safe'],
        ['security-safe'],
        ['security-safe'],
        ['security-safe'],

        ['alarm'],
        ['radar-1'],
        ['security'],
        ['security-safe'],
        ['security-safe'],
        ['security-safe'],
        ['security-safe'],
        ['security-safe'],
        ['security-safe'],
        ['radar-1'],
        ['security'],
        ['security-safe'],
        ['security-safe'],
        ['security-safe'],
        ['security-safe'],
        ['security-safe'],
        ['security-safe'],
        ['radar-1'],
        ['security'],
        ['security-safe'],
        ['security-safe'],
        ['security-safe'],
        ['security-safe'],
        ['security-safe'],
        ['security-safe'],
        ['radar-1'],
        ['security'],
        ['security-safe'],
        ['security-safe'],
        ['security-safe'],
        ['security-safe'],
        ['security-safe'],
        ['security-safe'],
        ['radar-1'],
        ['security'],
        ['security-safe'],
        ['security-safe'],
        ['security-safe'],
        ['security-safe'],
        ['security-safe'],
        ['security-safe'],
        ['radar-1'],
        ['security'],
        ['security-safe'],
        ['security-safe'],
        ['security-safe'],
        ['security-safe'],
        ['security-safe'],
        ['security-safe'],

        ['alarm'],
        ['radar-1'],
        ['security'],
        ['security-safe'],
        ['security-safe'],
        ['security-safe'],
        ['security-safe'],
        ['security-safe'],
        ['security-safe'],
        ['radar-1'],
        ['security'],
        ['security-safe'],
        ['security-safe'],
        ['security-safe'],
        ['security-safe'],
        ['security-safe'],
        ['security-safe'],
        ['radar-1'],
        ['security'],
        ['security-safe'],
        ['security-safe'],
        ['security-safe'],
        ['security-safe'],
        ['security-safe'],
        ['security-safe'],
        ['radar-1'],
        ['security'],
        ['security-safe'],
        ['security-safe'],
        ['security-safe'],
        ['security-safe'],
        ['security-safe'],
        ['security-safe'],
        ['radar-1'],
        ['security'],
        ['security-safe'],
        ['security-safe'],
        ['security-safe'],
        ['security-safe'],
        ['security-safe'],
        ['security-safe'],
        ['radar-1'],
        ['security'],
        ['security-safe'],
        ['security-safe'],
        ['security-safe'],
        ['security-safe'],
        ['security-safe'],
        ['security-safe'],

        ['alarm'],
        ['radar-1'],
        ['security'],
        ['security-safe'],
        ['security-safe'],
        ['security-safe'],
        ['security-safe'],
        ['security-safe'],
        ['security-safe'],
        ['radar-1'],
        ['security'],
        ['security-safe'],
        ['security-safe'],
        ['security-safe'],
        ['security-safe'],
        ['security-safe'],
        ['security-safe'],
        ['radar-1'],
        ['security'],
        ['security-safe'],
        ['security-safe'],
        ['security-safe'],
        ['security-safe'],
        ['security-safe'],
        ['security-safe'],
        ['radar-1'],
        ['security'],
        ['security-safe'],
        ['security-safe'],
        ['security-safe'],
        ['security-safe'],
        ['security-safe'],
        ['security-safe'],
        ['radar-1'],
        ['security'],
        ['security-safe'],
        ['security-safe'],
        ['security-safe'],
        ['security-safe'],
        ['security-safe'],
        ['security-safe'],
        ['radar-1'],
        ['security'],
        ['security-safe'],
        ['security-safe'],
        ['security-safe'],
        ['security-safe'],
        ['security-safe'],
        ['security-safe'],

        ['alarm'],
        ['radar-1'],
        ['security'],
        ['security-safe'],
        ['security-safe'],
        ['security-safe'],
        ['security-safe'],
        ['security-safe'],
        ['security-safe'],
        ['radar-1'],
        ['security'],
        ['security-safe'],
        ['security-safe'],
        ['security-safe'],
        ['security-safe'],
        ['security-safe'],
        ['security-safe'],
        ['radar-1'],
        ['security'],
        ['security-safe'],
        ['security-safe'],
        ['security-safe'],
        ['security-safe'],
        ['security-safe'],
        ['security-safe'],
        ['radar-1'],
        ['security'],
        ['security-safe'],
        ['security-safe'],
        ['security-safe'],
        ['security-safe'],
        ['security-safe'],
        ['security-safe'],
        ['radar-1'],
        ['security'],
        ['security-safe'],
        ['security-safe'],
        ['security-safe'],
        ['security-safe'],
        ['security-safe'],
        ['security-safe'],
        ['radar-1'],
        ['security'],
        ['security-safe'],
        ['security-safe'],
        ['security-safe'],
        ['security-safe'],
        ['security-safe'],
        ['security-safe'],

        ['alarm'],
        ['radar-1'],
        ['security'],
        ['security-safe'],
        ['security-safe'],
        ['security-safe'],
        ['security-safe'],
        ['security-safe'],
        ['security-safe'],
        ['radar-1'],
        ['security'],
        ['security-safe'],
        ['security-safe'],
        ['security-safe'],
        ['security-safe'],
        ['security-safe'],
        ['security-safe'],
        ['radar-1'],
        ['security'],
        ['security-safe'],
        ['security-safe'],
        ['security-safe'],
        ['security-safe'],
        ['security-safe'],
        ['security-safe'],
        ['radar-1'],
        ['security'],
        ['security-safe'],
        ['security-safe'],
        ['security-safe'],
        ['security-safe'],
        ['security-safe'],
        ['security-safe'],
        ['radar-1'],
        ['security'],
        ['security-safe'],
        ['security-safe'],
        ['security-safe'],
        ['security-safe'],
        ['security-safe'],
        ['security-safe'],
        ['radar-1'],
        ['security'],
        ['security-safe'],
        ['security-safe'],
        ['security-safe'],
        ['security-safe'],
        ['security-safe'],
        ['security-safe'],

        ['alarm'],
        ['radar-1'],
        ['security'],
        ['security-safe'],
        ['security-safe'],
        ['security-safe'],
        ['security-safe'],
        ['security-safe'],
        ['security-safe'],
        ['radar-1'],
        ['security'],
        ['security-safe'],
        ['security-safe'],
        ['security-safe'],
        ['security-safe'],
        ['security-safe'],
        ['security-safe'],
        ['radar-1'],
        ['security'],
        ['security-safe'],
        ['security-safe'],
        ['security-safe'],
        ['security-safe'],
        ['security-safe'],
        ['security-safe'],
        ['radar-1'],
        ['security'],
        ['security-safe'],
        ['security-safe'],
        ['security-safe'],
        ['security-safe'],
        ['security-safe'],
        ['security-safe'],
        ['radar-1'],
        ['security'],
        ['security-safe'],
        ['security-safe'],
        ['security-safe'],
        ['security-safe'],
        ['security-safe'],
        ['security-safe'],
        ['radar-1'],
        ['security'],
        ['security-safe'],
        ['security-safe'],
        ['security-safe'],
        ['security-safe'],
        ['security-safe'],
        ['security-safe'],

        ['alarm'],
        ['radar-1'],
        ['security'],
        ['security-safe'],
        ['security-safe'],
        ['security-safe'],
        ['security-safe'],
        ['security-safe'],
        ['security-safe'],
        ['radar-1'],
        ['security'],
        ['security-safe'],
        ['security-safe'],
        ['security-safe'],
        ['security-safe'],
        ['security-safe'],
        ['security-safe'],
        ['radar-1'],
        ['security'],
        ['security-safe'],
        ['security-safe'],
        ['security-safe'],
        ['security-safe'],
        ['security-safe'],
        ['security-safe'],
        ['radar-1'],
        ['security'],
        ['security-safe'],
        ['security-safe'],
        ['security-safe'],
        ['security-safe'],
        ['security-safe'],
        ['security-safe'],
        ['radar-1'],
        ['security'],
        ['security-safe'],
        ['security-safe'],
        ['security-safe'],
        ['security-safe'],
        ['security-safe'],
        ['security-safe'],
        ['radar-1'],
        ['security'],
        ['security-safe'],
        ['security-safe'],
        ['security-safe'],
        ['security-safe'],
        ['security-safe'],
        ['security-safe'],

        ['alarm'],
        ['radar-1'],
        ['security'],
        ['security-safe'],
        ['security-safe'],
        ['security-safe'],
        ['security-safe'],
        ['security-safe'],
        ['security-safe'],
        ['radar-1'],
        ['security'],
        ['security-safe'],
        ['security-safe'],
        ['security-safe'],
        ['security-safe'],
        ['security-safe'],
        ['security-safe'],
        ['radar-1'],
        ['security'],
        ['security-safe'],
        ['security-safe'],
        ['security-safe'],
        ['security-safe'],
        ['security-safe'],
        ['security-safe'],
        ['radar-1'],
        ['security'],
        ['security-safe'],
        ['security-safe'],
        ['security-safe'],
        ['security-safe'],
        ['security-safe'],
        ['security-safe'],
        ['radar-1'],
        ['security'],
        ['security-safe'],
        ['security-safe'],
        ['security-safe'],
        ['security-safe'],
        ['security-safe'],
        ['security-safe'],
        ['radar-1'],
        ['security'],
        ['security-safe'],
        ['security-safe'],
        ['security-safe'],
        ['security-safe'],
        ['security-safe'],
        ['security-safe'],

        ['alarm'],
        ['radar-1'],
        ['security'],
        ['security-safe'],
        ['security-safe'],
        ['security-safe'],
        ['security-safe'],
        ['security-safe'],
        ['security-safe'],
        ['radar-1'],
        ['security'],
        ['security-safe'],
        ['security-safe'],
        ['security-safe'],
        ['security-safe'],
        ['security-safe'],
        ['security-safe'],
        ['radar-1'],
        ['security'],
        ['security-safe'],
        ['security-safe'],
        ['security-safe'],
        ['security-safe'],
        ['security-safe'],
        ['security-safe'],
        ['radar-1'],
        ['security'],
        ['security-safe'],
        ['security-safe'],
        ['security-safe'],
        ['security-safe'],
        ['security-safe'],
        ['security-safe'],
        ['radar-1'],
        ['security'],
        ['security-safe'],
        ['security-safe'],
        ['security-safe'],
        ['security-safe'],
        ['security-safe'],
        ['security-safe'],
        ['radar-1'],
        ['security'],
        ['security-safe'],
        ['security-safe'],
        ['security-safe'],
        ['security-safe'],
        ['security-safe'],
        ['security-safe'],

        ['security-safe'],
        ['security-safe'],
        ['security-safe'],
        ['security-safe'],
        ['security-safe'],
        ['security-safe'],
        ['security-safe'],
        ['security-safe'],
        ['security-safe'],
        ['security-safe'],
        ['security-safe'],
        ['security-safe'],
        ['security-safe'],
        ['security-safe'],
        ['security-safe'],
        ['security-safe'],
        ['security-safe'],
        ['security-safe'],
        ['security-safe'],
        ['security-safe'],
        ['security-safe'],
        ['security-safe'],
        ['security-safe'],
        ['security-safe'],
        ['security-safe'],
        ['security-safe'],
        ['security-safe'],
    ];

    const loadMore = () => {
        setVisibleCards((prevVisibleCards) => prevVisibleCards + 20);
    };


    const handleCopy = async (color, rowIndex) => {
        try {
            await navigator.clipboard.writeText(`${color}`);
            setCopyStatus({ ...copyStatus, [rowIndex]: "success" });
            setTimeout(() => setCopyStatus({ ...copyStatus, [rowIndex]: "" }), 2000);
        } catch (error) {
            console.error('فشل في النسخ: ', error);
            setCopyStatus({ ...copyStatus, [rowIndex]: "error" });
            setTimeout(() => setCopyStatus({ ...copyStatus, [rowIndex]: "" }), 2000);
        }
    };



    return (
        <section className="flex justify-center">

            <div className="max-w-7xl w-full">
                <div className="mb-10 mt-5 grid  grid-cols-2 gap-3">
                    <div>
                        <h1 className="text-8xl font-extrabold mt-5 p-4 text-emerald-400">Icons</h1>
                        <h1 className="text-xl mt-5 mx-10">Enjoy an enchanting journey through amazing colorful worlds.</h1>
                    </div>
                    <div>
                        <Image src={icon} alt="bg icon on shamlul icons page" className="dark:hidden" />
                        <Image src={icon_dark} alt="bg icon on shamlul icons page" className="hidden dark:block" />
                    </div>
                </div>


                <div className=" flex justify-center mx-7">




                    <InfiniteScroll
                        dataLength={visibleCards}
                        next={loadMore}
                        hasMore={hasMore}
                        loader={<ItemsMore more={`Loader`} />}
                        endMessage={<ItemsMore more={`End`} />}
                        className="overflow-hidden h-0"
                    >
                        <div className="grid grid-cols-11 max-2xl:grid-cols-10 max-xl:grid-cols-8 max-lg:grid-cols-6 max-md:grid-cols-4 max-sm:grid-cols-2 gap-4 mx-5 my-1">


                            {fruitsData.slice(0, visibleCards).map((row, rowIndex) => (

                                <div
                                    key={rowIndex}
                                    className="flex hover:outline  outline-emerald-400 rounded-lg dark:bg-[#202020] bg-gray-200"
                                    onClick={() => { const modal = document.getElementById(`${rowIndex}`); if (!modal.open) { modal.showModal(); } }}
                                >

                                    {row.map((color, colIndex) => (
                                        <span
                                            key={colIndex}
                                            className={`w-96 h-24 flex justify-center items-center dark:text-white text-3xl  sh bold-${color}`}
                                        >
                                            <dialog id={`${rowIndex}`} className="modal w-full h-screen">
                                                <div className="modal-box max-w-screen-sm max-h-full p-3 dark:bg-[#101010] m-0">
                                                    <div className="flex">
                                                        {row.map((color, colIndex) => (
                                                            <div
                                                                key={colIndex}
                                                                className="flex"
                                                            >
                                                                <div className="w-40 h-24 flex justify-center items-center bg-[#202020] rounded-lg"><span className={` sh bold-${color}`}></span></div>
                                                                <div className="w-52 h-24">
                                                                    <div className="bg-[#202020] p-2 flex items-center">s</div>
                                                                </div>
                                                            </div>
                                                        ))}
                                                    </div>
                                                    <div className="flex">
                                                        {row.map((color, colIndex) => (
                                                            <span
                                                                key={colIndex}
                                                                className={`w-full text-center my-3 dark:text-white hover:bg-[#FBF6EE] uppercase font-normal mx-1 p-1 dark:hover:bg-[#303030] dark:hover:p-1 rounded-full cursor-pointer active:bg-emerald-600 focus-within:bg-emerald-600`}
                                                                onClick={() => handleCopy(`sh bold-${color}`)}
                                                            >
                                                                {color}
                                                            </span>
                                                        ))}
                                                    </div>
                                                </div>

                                                <form method="dialog" className="modal-backdrop">
                                                    <button>close</button>
                                                </form>
                                            </dialog>
                                        </span>

                                    ))}

                                </div>
                            ))}



                        </div>
                    </InfiniteScroll>

                </div>
            </div>
        </section >
    );
    function ItemsMore({ more }) {
        return <div className="flex justify-center items-center my-7">
            <button
                onClick={handleShowMore}
                className="py-3 px-32 rounded-lg bg-zinc-300 dark:bg-[#101010] dark:hover:bg-[#202020] text-center"
            >
                {more}
            </button>
        </div>;
    }
}