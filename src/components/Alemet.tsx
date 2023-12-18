import Inola from '@/components/Inola'


export default function Alemet() {
  return (
    <section className="pb-16 flex justify-center items-center">
      <div className="max-w-7xl">
        <div className="text-center">
          <h1 className="text-8xl font-extrabold mt-14 bg-clip-text bg-current p-4 text-transparent bg-gradient-to-r from-[#7ED7C1] to-[#7B66FF]">
            Icons
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
              inputMode="text"
            />
            <div className="flex flex-row justify-center items-center">
              <button className="btn px-10 mx-1 dark:bg-[#101010] border-none outline-none py-[1px] dark:text-white bg-[#cbcbcb] hover:bg-rose-500 dark:hover:bg-indigo-500">
                efaj
              </button>
            </div>
          </div>
        </div>

      <Inola />



        <div className="flex justify-center items-center my-7">
          <h1 className="py-3 px-32 rounded-lg bg-zinc-300 dark:bg-[#101010] dark:hover:bg-[#202020] text-center">
            More
          </h1>
        </div>
      </div>
    </section>
  );
}
