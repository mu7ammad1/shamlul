import { Metadata } from "next";
import ee from '@/components/Data'




const meta = {
    title: 'Generate stunning color palettes in seconds!',
    description: 'Create or explore stunning color pairings for your creative projects, Uncover captivating color schemes tailored for your designs',
    keywords: 'Palettes, shamlul palettes, اللون, اللوان, colors, color, white, black, black white, color scheme, scheme color, color schemes, color theme, color palette, color themes, color palettes, color combinations, color, colors, palettes, hex color wheel, pastel color palette, color wheel, color combination, color pallete, color names, web color schemes, color wheel generator, extract color palette from image, random color palette generator, color schemes generator, ui color palette generator, pretty colors, vintage color, color palette from image',
    creator: 'Shamlul',
}

export const metadata: Metadata = {
    metadataBase: new URL('https://shamlul.vercel.app/palettes'),
    title: meta.title,
    description: meta.description,
    keywords: meta.keywords,
    archives: 'https://shamlul.vercel.app/palettes',
    abstract: meta.description,
    creator: meta.creator,
    openGraph: {
        type: "website",
        url: "https://shamlul.vercel.app/palettes",
        title: "Shamlul - palettes",
        description: meta.description,
        siteName: "Shamlul",
        images: [
            {
                url: `https://lh3.googleusercontent.com/pw/ABLVV86-kphhZpN7lt0YBEx6a-gDv6Cuaf6O1t6UgEoAj8oAyrqvQJuPBVIqrcdz9kfVEoHckVkn9y-m1HFQaNDz0pHg3qUvpe23RGpkhhqJUrzhhB1uS9ldnL9zMUMyXijECe7goCyKNepLKWNKkPVJGIU=w1200-h630-s-no?authuser=0`,
            },
        ],
        locale: 'ar_EGYPT'
    }

}

const Data = ee

export default function Palette({ params }: { params: { slug: string } }) {
    // البحث عن الصف الذي يتطابق مع سلسلة الصف في params.slug
    const selectedRow = Data.find(row => row.join('-') === params.slug);

    if (!selectedRow) {
        // التعامل مع حالة عدم العثور على الصف المطابق للـ slug
        return <div className='flex justify-center items-center h-screen'>
            <div>
                <h1>Page not found</h1>
            </div>
        </div>;
    }

    return (
        <main className="flex justify-center mx-10">
            <div className="max-w-7xl w-full">
                <div className="flex hover:outline outline-emerald-400 rounded-lg dark:bg-[#202020] bg-gray-200">
                    {selectedRow.map((color, colIndex) => (
                        <span
                            key={colIndex}
                            className={`w-96 h-24 flex justify-center items-center dark:text-white text-3xl first:rounded-l-lg last:rounded-r-lg sh bold-${color}`}
                            style={{ background: `#${color}` }}
                        >
                            {color}
                        </span>
                    ))}
                </div>
            </div>
        </main>
    );
};