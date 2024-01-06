import ee from '@/components/Data'


export default function sitemap() {




    const Data = ee







    const post = Data.map((item) => ({
        url: `https://shamlul.vercel.app/palettes/${item.join('-')}`,
        lastmod: '2024-01-06',
        changeFrequency: 'weekly',
        priority: 0.8,
    }))
    return [
        ...post
    ]
}
