'use client'
import React, { useState } from "react";
import '@/app/fonts.css'


export default function Opla() {
  const [inputValue, setInputValue] = useState("amazing colorful worlds.");
  const [visibleCards, setVisibleCards] = useState(12);

  const handleInputChange = (event: { target: { value: any } }) => {
    let value = event.target.value;
    if (value === '') {
      value = 'amazing colorful worlds.'
    }
    setInputValue(value);
  };


  const handleShowMore = () => {
    setVisibleCards((prevVisibleCards) => prevVisibleCards + 12);
  };

  const Lang = ['Arabic', 'English']

  const fruitsData = ([
    [Lang[1], 'Alyermook', 7, "cairo", "ffff"],
    [Lang[0], 'Mashq', 500, "cairo", "ffff"],
    [Lang[0], 'AE-nada', 500, "cairo", "ffff"],
    [Lang[0], 'Rehan', 500, "cairo", "ffff"],
    [Lang[0], 'Shado', 500, "cairo", "ffff"],
    [Lang[0], 'Cordoba-bold', 500, "cairo", "ffff"],
    [Lang[0], 'Cordoba', 500, "cairo", "ffff"],
    [Lang[0], 'Mashq-v2', 500, "cairo", "ffff"],
    [Lang[0], 'Gemah-king', 500, "cairo", "ffff"],
    [Lang[0], 'Muhareb-2-mutawwar', 500, "cairo", "ffff"],
    [Lang[0], 'Al-mwaheb4', 500, "cairo", "ffff"],
    [Lang[0], 'Al-rashed-riyadh', 500, "cairo", "ffff"],
    [Lang[0], 'Almwaheb-3', 500, "cairo", "ffff"],
    [Lang[0], 'Ara-jozoor', 500, "cairo", "ffff"],
    [Lang[0], 'Arbaeen', 500, "cairo", "ffff"],
    [Lang[0], 'Azhari-phatani-01-rq', 500, "cairo", "ffff"],
    [Lang[0], 'B-mashgh', 500, "cairo", "ffff"],
    [Lang[0], 'Bader-al-naseem', 500, "cairo", "ffff"],
    [Lang[0], 'Bader-classic', 500, "cairo", "ffff"],
    [Lang[0], 'Basem-algharib', 500, "cairo", "ffff"],
    [Lang[0], 'Bold-italic-art', 500, "cairo", "ffff"],
    [Lang[0], 'Fixedkofibold', 500, "cairo", "ffff"],
    [Lang[0], 'Ge-heritage-one-bold', 500, "cairo", "ffff"],
    [Lang[0], 'Ge-heritage-one-light', 500, "cairo", "ffff"],
    [Lang[0], "Ge-heritage-one-ultralight", 7, "cairo", "ffff"],
    ["bananas", 'Ge-lady-medium', 500, "cairo", "ffff"],
    [Lang[0], 'Ge-mb-fares-light', 500, "cairo", "ffff"],
    [Lang[0], 'Ge-mb-fares-medium', 500, "cairo", "ffff"],
    [Lang[0], '200', 500, "cairo", "ffff"],
    [Lang[0], '200', 500, "cairo", "ffff"],
    [Lang[0], '200', 500, "cairo", "ffff"],
    [Lang[0], '200', 500, "cairo", "ffff"],
    [Lang[0], '200', 500, "cairo", "ffff"],
    [Lang[0], '200', 500, "cairo", "ffff"],
    [Lang[0], '200', 500, "cairo", "ffff"],
    [Lang[0], '200', 500, "cairo", "ffff"],
    [Lang[0], '200', 500, "cairo", "ffff"],
    [Lang[0], '200', 500, "cairo", "ffff"],
    [Lang[0], '200', 500, "cairo", "ffff"],
    [Lang[0], '200', 500, "cairo", "ffff"],
    [Lang[0], '200', 500, "cairo", "ffff"],
    [Lang[0], '200', 500, "cairo", "ffff"],
    [Lang[0], '200', 500, "cairo", "ffff"],
    [Lang[0], '200', 500, "cairo", "ffff"],
    [Lang[0], '200', 500, "cairo", "ffff"],
    [Lang[0], '200', 500, "cairo", "ffff"],
    [Lang[0], '200', 500, "cairo", "ffff"],
    [Lang[0], '200', 500, "cairo", "ffff"],
    [Lang[0], "Rubik", 7, "cairo", "ffff"],
    ["bananas", 300, 500, "cairo", "ffff"],
    [Lang[0], '200', 500, "cairo", "ffff"],
    [Lang[0], '200', 500, "cairo", "ffff"],
    [Lang[0], '200', 500, "cairo", "ffff"],
    [Lang[0], '200', 500, "cairo", "ffff"],
    [Lang[0], '200', 500, "cairo", "ffff"],
    [Lang[0], '200', 500, "cairo", "ffff"],
    [Lang[0], '200', 500, "cairo", "ffff"],
    [Lang[0], '200', 500, "cairo", "ffff"],
    [Lang[0], '200', 500, "cairo", "ffff"],
    [Lang[0], '200', 500, "cairo", "ffff"],
    [Lang[0], '200', 500, "cairo", "ffff"],
    [Lang[0], '200', 500, "cairo", "ffff"],
    [Lang[0], '200', 500, "cairo", "ffff"],
    [Lang[0], '200', 500, "cairo", "ffff"],
    [Lang[0], '200', 500, "cairo", "ffff"],
    [Lang[0], '200', 500, "cairo", "ffff"],
    [Lang[0], '200', 500, "cairo", "ffff"],
    [Lang[0], '200', 500, "cairo", "ffff"],
    [Lang[0], '200', 500, "cairo", "ffff"],
    [Lang[0], '200', 500, "cairo", "ffff"],
    [Lang[0], '200', 500, "cairo", "ffff"],
    [Lang[0], '200', 500, "cairo", "ffff"],
    [Lang[0], "Rubik", 7, "cairo", "ffff"],
    ["bananas", 300, 500, "cairo", "ffff"],
    [Lang[0], '200', 500, "cairo", "ffff"],
    [Lang[0], '200', 500, "cairo", "ffff"],
    [Lang[0], '200', 500, "cairo", "ffff"],
    [Lang[0], '200', 500, "cairo", "ffff"],
    [Lang[0], '200', 500, "cairo", "ffff"],
    [Lang[0], '200', 500, "cairo", "ffff"],
    [Lang[0], '200', 500, "cairo", "ffff"],
    [Lang[0], '200', 500, "cairo", "ffff"],
    [Lang[0], '200', 500, "cairo", "ffff"],
    [Lang[0], '200', 500, "cairo", "ffff"],
    [Lang[0], '200', 500, "cairo", "ffff"],
    [Lang[0], '200', 500, "cairo", "ffff"],
    [Lang[0], '200', 500, "cairo", "ffff"],
    [Lang[0], '200', 500, "cairo", "ffff"],
    [Lang[0], '200', 500, "cairo", "ffff"],
    [Lang[0], '200', 500, "cairo", "ffff"],
    [Lang[0], '200', 500, "cairo", "ffff"],
    [Lang[0], '200', 500, "cairo", "ffff"],
    [Lang[0], '200', 500, "cairo", "ffff"],
    [Lang[0], '200', 500, "cairo", "ffff"],
    [Lang[0], '200', 500, "cairo", "ffff"],
    [Lang[0], '200', 500, "cairo", "ffff"],
    [Lang[0], "Rubik", 7, "cairo", "ffff"],
    ["bananas", 300, 500, "cairo", "ffff"],
    [Lang[0], '200', 500, "cairo", "ffff"],
    [Lang[0], '200', 500, "cairo", "ffff"],
    [Lang[0], '200', 500, "cairo", "ffff"],
    [Lang[0], '200', 500, "cairo", "ffff"],
    [Lang[0], '200', 500, "cairo", "ffff"],
    [Lang[0], '200', 500, "cairo", "ffff"],
    [Lang[0], '200', 500, "cairo", "ffff"],
    [Lang[0], '200', 500, "cairo", "ffff"],
    [Lang[0], '200', 500, "cairo", "ffff"],
    [Lang[0], '200', 500, "cairo", "ffff"],
    [Lang[0], '200', 500, "cairo", "ffff"],
    [Lang[0], '200', 500, "cairo", "ffff"],
    [Lang[0], '200', 500, "cairo", "ffff"],
    [Lang[0], '200', 500, "cairo", "ffff"],
    [Lang[0], '200', 500, "cairo", "ffff"],
    [Lang[0], '200', 500, "cairo", "ffff"],
    [Lang[0], '200', 500, "cairo", "ffff"],
    [Lang[0], '200', 500, "cairo", "ffff"],
    [Lang[0], '200', 500, "cairo", "ffff"],
    [Lang[0], '200', 500, "cairo", "ffff"],
    [Lang[0], '200', 500, "cairo", "ffff"],
    [Lang[0], '200', 500, "cairo", "ffff"],
  ])

  return (
    <section className="pb-16 flex justify-center items-center">
      <div className="max-w-7xl">
        <div className="text-center">
          <h1 className="text-8xl font-extrabold mt-14 bg-clip-text bg-current p-4 text-transparent bg-gradient-to-r from-rose-500 to-indigo-500">
            Fonts
          </h1>
          <h1 className="text-2xl mt-5 mx-36">
            Enjoy an enchanting journey through amazing colorful worlds.
          </h1>
        </div>
        <div className="m-10 text-center">
          <div className="flex justify-between w-full max-w-full">
            <input
              type="text"
              name="text"
              id="text"
              className="w-full p-2 px-5 mr-6 text-2xl rounded-md focus-within:outline-none line-clamp-1 dark:placeholder:text-zinc-400 dark:bg-[#101010] bg-zinc-200 placeholder:text-zinc-700"
              placeholder="Test Fonts"
              onChange={handleInputChange}
            />
            <div className="flex flex-row justify-center items-center">
              <button className="btn px-10 mx-1 dark:bg-[#101010] border-none outline-none py-[1px] dark:text-white bg-[#cbcbcb] hover:bg-blue-500 dark:hover:bg-sky-500">
                efaj
              </button>
              <button className="btn px-10 mx-1 dark:bg-[#101010] border-none outline-none py-[1px] dark:text-white bg-[#cbcbcb] hover:bg-rose-500 dark:hover:bg-indigo-500">
                efaj
              </button>
            </div>
          </div>
        </div>












        {/* start card */}
        <div className="justify-center items-start mx-10">
          <div className="mb-5 max-w-screen-xl">
            {fruitsData.slice(0, visibleCards).map((fruit, index) => (
              <div
                key={index}
                className="rounded-md bg-[#f1f1f1] dark:bg-[#101010] p-3 mb-5 dark:hover:bg-[#202020] hover:bg-[#e2e2e2] hover:transition-all hover:hover"
              >
                <h1 className={`flex justify-start items-center text-center line-clamp-1 text-3xl p-5 ` + `font-['${fruit[1]}']` + ` ${fruit[0]}`}>
                  {inputValue}
                </h1>
                <div className="flex justify-between items-center">
                  <div className="">
                    <span className="mr-2">{fruit[0]}</span>
                    <span className="mr-2">{fruit[1]}</span>
                  </div>
                  <span>{fruit[2]} style</span>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* end card */}



        <div className="flex justify-center items-center my-7">
          <button
            onClick={handleShowMore}
            className="py-3 px-32 rounded-lg bg-zinc-300 dark:bg-[#101010] dark:hover:bg-[#202020] text-center"
          >
            More
          </button>
        </div>
      </div>
    </section>
  );
}