"use client";
import Link from "next/link";
import React, { useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";

export default function Platya() {


  const [visibleCards, setVisibleCards] = useState(30);

  const [hasMore, setHasMore] = useState(true);

  const [copyStatus, setCopyStatus] = useState({});


  const handleShowMore = () => {
    setVisibleCards((prevVisibleCards) => prevVisibleCards + 12);
  };

  const Data = [
    ['FFB534', 'FBF6EE', 'C1F2B0', '65B741'],
    ['EEF0E5', 'B6C4B6', '304D30', '163020'],
    ['F2F1EB', 'EEE7DA', 'AFC8AD', '88AB8E'],

    ['F3F8FF', 'E26EE5', '7E30E1', '49108B'],

    ['711DB0', 'C21292', 'EF4040', 'FFA732'],
    ['9BB8CD', 'FFF7D4', 'EEC759', 'B1C381'],
    ['092635', '1B4242', '5C8374', '9EC8B9'],
    ['cdb4db', 'ffc8dd', 'ffafcc', 'bde0fe', 'a2d2ff'],
    ['606c38', '283618', 'fefae0', 'dda15e', 'bc6c25'],
    ['8ecae6', '219ebc', '023047', 'ffb703', 'fb8500'],
    ['780000', 'c1121f', 'fdf0d5', '003049', '669bbc'],
    ['dad7cd', 'a3b18a', '588157', '3a5a40', '344e41'],
    ['edede9', 'd6ccc2', 'f5ebe0', 'e3d5ca', 'd5bdaf'],
    ['2b2d42', '8d99ae', 'edf2f4', 'ef233c', 'd90429'],
    ['000000', '14213d', 'fca311', 'e5e5e5', 'ffffff'],
    ['264653', '2a9d8f', 'e9c46a', 'f4a261', 'e76f51'],
    ['003049', 'd62828', 'f77f00', 'fcbf49', 'eae2b7'],
    ['0d1b2a', '1b263b', '415a77', '778da9', 'e0e1dd'],
    ['355070', '6d597a', 'b56576', 'e56b6f', 'eaac8b'],
    ['e63946', 'f1faee', 'a8dadc', '457b9d', '1d3557'],
    ['ccd5ae', 'e9edc9', 'fefae0', 'faedcd', 'd4a373'],
    ['d8e2dc', 'ffe5d9', 'ffcad4', 'f4acb7', '9d8189'],
    ['f4f1de', 'e07a5f', '3d405b', '81b29a', 'f2cc8f'],
    ['000814', '001d3d', '003566', 'ffc300', 'ffd60a'],
    ['001219', '005f73', '0a9396', '94d2bd', 'e9d8a6', 'ee9b00', 'ca6702', 'bb3e03', 'ae2012', '9b2226'],
    ['03045e', '023e8a', '0077b6', '0096c7', '00b4d8', '48cae4', '90e0ef', 'ade8f4', 'caf0f8'],
    ['386641', '6a994e', 'a7c957', 'f2e8cf', 'bc4749'],
    ['780000', 'c1121f', 'fdf0d5', '003049', '669bbc'],
    ['ffb5a7', 'fcd5ce', 'f8edeb', 'f9dcc4', 'fec89a'],
    ['001524', '15616d', 'ffecd1', 'ff7d00', '78290f'],
    ['9b5de5', 'f15bb5', 'fee440', '00bbf9', '00f5d4'],
    ['f7b267', 'f79d65', 'f4845f', 'f4845f', 'f25c54'],
    ['cad2c5', '84a98c', '52796f', '354f52', '2f3e46'],
    ['f72585', 'b5179e', '7209b7', '560bad', '3a0ca3'],
    ['3f37c9', '4361ee', '4895ef', '4cc9f0', '00f5d4'],
    ['c200fb', 'ec0868', 'fc2f00', 'ec7d10', 'ffbc0a'],
    ['3d348b', '7678ed', 'f7b801', 'f18701', 'f35b04'],
    ['00ddff', '9800ff', 'ff008c', 'ff600a', 'b7ff00'],
    ['006d77', '83c5be', 'edf6f9', 'ffddd2', 'e29578'],
    ['355070', '6d597a', 'b56576', 'e56b6f', 'eaac8b'],
    ['231942', '5e548e', '9f86c0', 'be95c4', 'e0b1cb'],
    ['ef476f', 'ffd166', '06d6a0', '118ab2', '073b4c'],
    ['0fa3b1', 'b5e2fa', 'f9f7f3', 'eddea4', 'f7a072'],
    ['70d6ff', 'ff70a6', 'ff9770', 'ffd670', 'e9ff70'],
    ['e7ecef', '274c77', '6096ba', 'a3cef1', '8b8c89'],
    ['7bdff2', 'b2f7ef', 'eff7f6', 'f7d6e0', 'f2b5d4'],
    ['fdc5f5', 'f7aef8', 'b388eb', '8093f1', '72ddf7'],
    ['463f3a', '8a817c', 'bcb8b1', 'f4f3ee', 'e0afa0'],
    ['ffffff', 'e9edf0', '1a776f', '193741', '000000'],
    ['ffd6ff', 'ffd6ff', 'c8b6ff', 'b8c0ff', 'bbd0ff'],
    ['00a6fb', '0582ca', '006494', '003554', '051923'],
    ['6f1d1b', 'bb9457', '432818', '99582a', 'ffe6a7'],
    ['ffcdb2', 'ffb4a2', 'e5989b', 'b5838d', '6d6875'],
    ['ef233c', 'd5f2e3', '73ba9b', '003e1f', 'd90429'],
    ['00296b', '003f88', '00509d', 'fdc500', 'ffd500'],
    ['4f000b', '720026', 'ce4257', 'ff7f51', 'ff9b54'],
    ['2c6e49', '4c956c', 'fefee3', '9EC8B9', 'd68c45'],
    ['231942', '5e548e', '9f86c0', 'be95c4', 'e0b1cb'],
    ['01295f', '437f97', '849324', 'ffb30f', 'fd151b'],
    ['6f1d1b', 'bb9457', '432818', '99582a', 'ffe6a7'],
    ['355070', '6d597a', 'b56576', 'e56b6f', 'eaac8b'],
    ['0fa3b1', 'b5e2fa', 'f9f7f3', 'eddea4', 'f7a072'],
    ['ff99c8', 'fcf6bd', 'd0f4de', 'a9def9', 'e4c1f9'],
    ['7bdff2', 'b2f7ef', 'eff7f6', 'f7d6e0', 'f2b5d4'],
    ['a0ddff', '758ecd', 'c1cefe', '7189ff', '624cab'],
    ['233d4d', 'fe7f2d', 'fcca46', 'a1c181', '619b8a'],
    ['ffffff', 'e9edf0', '1a776f', '193741', '000000'],
    ['582f0e', '7f4f24', 'a68a64', 'b6ad90', 'c2c5aa'],
    ['a4ac86', '656d4a', '414833', '333d29', '081c15'],
    ['d8f3dc', 'b7e4c7', '95d5b2', '52b788', '40916c'],
    ['5465ff', '788bff', '9bb1ff', 'bfd7ff', 'e2fdff'],
    ['22577a', '38a3a5', '57cc99', '80ed99', 'c7f9cc'],
    ['0d1821', '344966', 'b4cded', 'f0f4ef', 'bfcc94'],
    ['20bf55', '0b4f6c', '01baef', 'fbfbff', '757575'],
]

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