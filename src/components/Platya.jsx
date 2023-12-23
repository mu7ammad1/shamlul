"use client";
import Link from "next/link";
import React, { useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import ee from './Data'

export default function Platya() {


  const [visibleCards, setVisibleCards] = useState(30);

  const [hasMore, setHasMore] = useState(true);

  const [copyStatus, setCopyStatus] = useState({});


  const handleShowMore = () => {
    setVisibleCards((prevVisibleCards) => prevVisibleCards + 12);
  };


  const Data = ee

  const loadMore = () => {
    setVisibleCards((prevVisibleCards) => prevVisibleCards + 12);
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

  // const selectedRow = Data.find(row => row.join('-'));


  return (
    <section className="flex justify-center ">

      <div className="max-w-7xl w-full">
        <div className="h-96">
          <h1 className="text-8xl text-center font-extrabold mt-14 bg-clip-text bg-current p-4 text-transparent bg-gradient-to-r from-[#FFB534] to-[#65B741]">Palettes</h1>
          <h1 className="text-center text-2xl mt-5 mx-36">Enjoy an enchanting journey through amazing colorful worlds.</h1>
        </div>


        <div className=" flex justify-center items-center">


          <InfiniteScroll
            dataLength={visibleCards}
            next={loadMore}
            hasMore={hasMore}
            loader={<ItemsMore more={`End`} />}
            endMessage={<ItemsMore more={`End`} />}
          >
            <div className="grid grid-cols-4 max-sm:grid-cols-1 max-md:grid-cols-2 max-lg:grid-cols-3 gap-10 mx-5 my-2">


              {Data.slice(0, visibleCards).map((row, rowIndex) => (

                <div
                  key={rowIndex}
                  className="flex hover:outline rounded-lg"
                  onClick={() => { const modal = document.getElementById(`${rowIndex}`); if (!modal.open) { modal.showModal(); } }}
                >

                  {row.map((color, colIndex) => (
                    <span
                      key={colIndex}
                      className={`w-48 h-24 first:rounded-l-lg last:rounded-r-lg`}
                      style={{ background: `#${color}` }}

                    >
                      <dialog id={`${rowIndex}`} className="modal w-full h-screen">
                        <div className="modal-box max-w-screen-sm max-h-full p-3 dark:bg-[#101010] m-0">
                          <div className="flex">
                            {row.map((color, colIndex) => (
                              <Link
                                key={colIndex}
                                className={`w-full h-24 first:rounded-l-lg last:rounded-r-lg`}
                                style={{ background: `#${color}` }}
                                href={`/palettes/${row.join('-')}`}
                              >
                              </Link>
                            ))}
                          </div>
                          <div className="flex">
                            {row.map((color, colIndex) => (
                              <span
                                key={colIndex}
                                className={`w-full text-center my-3 dark:text-white hover:bg-[#FBF6EE] uppercase font-normal mx-1 p-1 dark:hover:bg-[#303030] dark:hover:p-1 rounded-full cursor-pointer active:bg-emerald-600 focus-within:bg-emerald-600`}
                                onClick={() => handleCopy(color)}
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