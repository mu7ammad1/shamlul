import ee from '@/components/Data'


export default function sitemap() {




    const Data = ee







    const post = Data.map((item) => ({
        url: `https://shamlul.vercel.app/palettes/${item.join('-')}`,
        changeFrequency: 'weekly',
        priority: 0.8,
    }))
    return [
        ...post
    ]
}