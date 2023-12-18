import Image from "next/image";
import bg_Estonia from '@/asset/images/bg_Estonia.svg'
import bg_Estonia_dark from '@/asset/images/bg_Estonia_dark.svg'
import Ads_full_web from "./Ads_full_web";
import Link from "next/link";

export default function Estonia() {
    const Head_right = <div className="max-lg:mx-10 max-lg:mt-10">
        <Image
            src={bg_Estonia}
            alt="image palettes page"
            className="w-full relative top-0 dark:hidden" />
        <Image
            src={bg_Estonia_dark}
            alt="image palettes page"
            className="w-full relative top-0 hidden dark:block" />
    </div>;

    const Head_left = <div className="z-20 mt-5">
        <div className="text-4xl">
            <h1 className="text-6xl leading-tight font-extrabold mb-3 bg-clip-text text-transparent bg-gradient-to-r from-[#6944ff] to-[#e11d48]">
            Colors, Fonts and Icons.
            </h1>
            <h1 className="font-bold">Explore, Innovative tools for graphic and web designers.</h1>
            <h1 className="text-lg mt-5 font-normal">Explore colors, symbols, and fonts with our innovative tools. Your creativity takes the lead with a smooth and attractive design.</h1>
            <div className="flex justify-start mt-7">
                <Link href={`/explore`} className="btn px-24 mr-5 bg-blue-600 border-none  hover:bg-blue-800 text-white">Explore</Link>
                <Link href={`/explore`} className="btn px-10 ml-5 bg-[#1c1c1c] border-none hover:bg-[#ffb534] text-white">Explore</Link>
            </div>
        </div>
    </div>;


    return (
        <section className="flex justify-center">
            <div className="max-w-7xl">
                <div>

                    <div className="grid grid-cols-2 gap-1 mb-5 px-5 max-lg:grid-cols-1 ">
                        {Head_left}
                        {Head_right}
                    </div>


                    <Ads_full_web />











                    <div className="grid grid-cols-3 gap-10 m-10 mt-16 max-xl:grid-cols-2 max-lg:grid-cols-2 max-md:grid-cols-1">

                        <div className="w-full bg-rose-300 border-double border-[#00000000] hover:border-rose-500 hover:border-8 border-8 rounded-xl p-2">
                            <div className="flex relative bottom-9 justify-center items-center">
                                <h1 className="bg-rose-500 rounded-full p-2 px-10 font-semibold text-lg">Brand</h1>
                            </div>
                            <div className="text-center grid grid-cols-8 gap-2 text-2xl relative bottom-3">
                                <span className="text-white py-2 rounded-xl"></span>
                                <span className="text-white py-2 rounded-xl"></span>
                                <span className="text-white py-2 rounded-xl"></span>
                                <span className="text-white py-2 rounded-xl"></span>
                                <span className="text-white py-2 rounded-xl"></span>
                                <span className="text-white py-2 rounded-xl"></span>
                                <span className="text-white py-2 rounded-xl"></span>
                                <span className="text-white py-2 rounded-xl"></span>
                                <span className="text-white py-2 rounded-xl"></span>
                                <span className="text-white py-2 rounded-xl"></span>
                                <span className="text-white py-2 rounded-xl"></span>
                                <span className="text-white py-2 rounded-xl"></span>
                                <span className="text-white py-2 rounded-xl"></span>
                                <span className="text-white py-2 rounded-xl"></span>
                                <span className="text-white py-2 rounded-xl"></span>
                                <span className="text-white py-2 rounded-xl"></span>
                                <span className="text-white py-2 rounded-xl"></span>
                                <span className="text-white py-2 rounded-xl"></span>
                                <span className="text-white py-2 rounded-xl"></span>
                                <span className="text-white py-2 rounded-xl"></span>
                                <span className="text-white py-2 rounded-xl"></span>
                                <span className="text-white py-2 rounded-xl"></span>
                                <span className="text-white py-2 rounded-xl"></span>
                                <span className="text-white py-2 rounded-xl"></span>
                            </div>
                        </div>
                        <div className="w-full bg-violet-300 border-double border-[#00000000] hover:border-violet-500 hover:border-8 border-8 rounded-xl p-2">
                            <div className="flex relative bottom-9 justify-center items-center">
                                <h1 className="bg-violet-500 rounded-full p-2 px-10 font-semibold text-lg">Alphabet</h1>
                            </div>
                            <div className="text-center grid grid-cols-8 gap-2 text-2xl relative bottom-3">
                                <span className="text-white py-2 rounded-xl"></span>
                                <span className="text-white py-2 rounded-xl"></span>
                                <span className="text-white py-2 rounded-xl"></span>
                                <span className="text-white py-2 rounded-xl"></span>
                                <span className="text-white py-2 rounded-xl"></span>
                                <span className="text-white py-2 rounded-xl"></span>
                                <span className="text-white py-2 rounded-xl"></span>
                                <span className="text-white py-2 rounded-xl"></span>
                                <span className="text-white py-2 rounded-xl"></span>
                                <span className="text-white py-2 rounded-xl"></span>
                                <span className="text-white py-2 rounded-xl"></span>
                                <span className="text-white py-2 rounded-xl"></span>
                                <span className="text-white py-2 rounded-xl"></span>
                                <span className="text-white py-2 rounded-xl"></span>
                                <span className="text-white py-2 rounded-xl"></span>
                                <span className="text-white py-2 rounded-xl"></span>
                                <span className="text-white py-2 rounded-xl"></span>
                                <span className="text-white py-2 rounded-xl"></span>
                                <span className="text-white py-2 rounded-xl"></span>
                                <span className="text-white py-2 rounded-xl"></span>
                                <span className="text-white py-2 rounded-xl"></span>
                                <span className="text-white py-2 rounded-xl"></span>
                                <span className="text-white py-2 rounded-xl"></span>
                                <span className="text-white py-2 rounded-xl"></span>
                            </div>
                        </div>
                        <div className="w-full bg-teal-300 border-double border-[#00000000] hover:border-teal-500 hover:border-8 border-8 rounded-xl p-2">
                            <div className="flex relative bottom-9 justify-center items-center">
                                <h1 className="bg-teal-500 rounded-full p-2 px-10 font-semibold text-lg">More</h1>
                            </div>
                            <div className="text-center grid grid-cols-3 gap-2 text-7xl relative bottom-3">
                                <span className="sh-Bag_alt"></span>
                                <span className="sh-Shop_duotone"><span className="path1"></span><span className="path2"></span><span className="path3"></span></span>
                                <span className="sh-Bag_duotone"><span className="path1"></span><span className="path2"></span><span className="path3"></span><span className="path4"></span></span>
                                <span className="sh-Basket_duotone"></span>
                            </div>
                        </div>
                        <div className="w-full bg-violet-300 border-double border-[#00000000] hover:border-violet-500 hover:border-8 border-8 rounded-xl p-2">
                            <div className="flex relative bottom-9 justify-center items-center">
                                <h1 className="bg-violet-500 rounded-full p-2 px-10 font-semibold text-lg">Alphabet</h1>
                            </div>
                            <div className="text-center grid grid-cols-8 gap-2 text-2xl relative bottom-3">
                                <span className="text-white py-2 rounded-xl"></span>
                                <span className="text-white py-2 rounded-xl"></span>
                                <span className="text-white py-2 rounded-xl"></span>
                                <span className="text-white py-2 rounded-xl"></span>
                                <span className="text-white py-2 rounded-xl"></span>
                                <span className="text-white py-2 rounded-xl"></span>
                                <span className="text-white py-2 rounded-xl"></span>
                                <span className="text-white py-2 rounded-xl"></span>
                                <span className="text-white py-2 rounded-xl"></span>
                                <span className="text-white py-2 rounded-xl"></span>
                                <span className="text-white py-2 rounded-xl"></span>
                                <span className="text-white py-2 rounded-xl"></span>
                                <span className="text-white py-2 rounded-xl"></span>
                                <span className="text-white py-2 rounded-xl"></span>
                                <span className="text-white py-2 rounded-xl"></span>
                                <span className="text-white py-2 rounded-xl"></span>
                                <span className="text-white py-2 rounded-xl"></span>
                                <span className="text-white py-2 rounded-xl"></span>
                                <span className="text-white py-2 rounded-xl"></span>
                                <span className="text-white py-2 rounded-xl"></span>
                                <span className="text-white py-2 rounded-xl"></span>
                                <span className="text-white py-2 rounded-xl"></span>
                                <span className="text-white py-2 rounded-xl"></span>
                                <span className="text-white py-2 rounded-xl"></span>
                            </div>
                        </div>
                        <div className="w-full bg-teal-300 border-double border-[#00000000] hover:border-teal-500 hover:border-8 border-8 rounded-xl p-2">
                            <div className="flex relative bottom-9 justify-center items-center">
                                <h1 className="bg-teal-500 rounded-full p-2 px-10 font-semibold text-lg">More</h1>
                            </div>
                            <div className="text-center grid grid-cols-3 gap-2 text-7xl relative bottom-3">
                                <span className="sh-Bag_alt"></span>
                                <span className="sh-Shop_duotone"><span className="path1"></span><span className="path2"></span><span className="path3"></span></span>
                                <span className="sh-Bag_duotone"><span className="path1"></span><span className="path2"></span><span className="path3"></span><span className="path4"></span></span>
                                <span className="sh-Basket_duotone"></span>
                            </div>
                        </div>

                    </div>



                </div>

            </div>

        </section>


    )
}
