import ee from '@/components/Data'


export default function sitemap() {




    const Data = ee







    const post = Data.map((item) => ({
        url: `https://shamlul.vercel.app/palettes/${item.join('-')}`,
        lastModified: new Date(),
        changeFrequency: 'daily',
        priority: 0.9,
    }))
    return [
        {
            url: 'https://shamlul.vercel.app',
            lastModified: new Date(),
            changeFrequency: 'daily',
            priority: 1,
        },
        {
            url: 'https://shamlul.vercel.app/explore',
            lastModified: new Date(),
            changeFrequency: 'daily',
            priority: 0.9,
        },
        {
            url: 'https://shamlul.vercel.app/fonts',
            lastModified: new Date(),
            changeFrequency: 'daily',
            priority: 0.9,
        },
        {
            url: 'https://shamlul.vercel.app/palettes',
            lastModified: new Date(),
            changeFrequency: 'daily',
            priority: 0.9,
        },
        {
            url: 'https://shamlul.vercel.app/icons',
            lastModified: new Date(),
            changeFrequency: 'daily',
            priority: 0.9,
        },
        ...post
    ]
}