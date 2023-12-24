

export default function sitemap() {

    return [
        {
            url: 'https://shamlul.vercel.app',
            changeFrequency: 'always',
            priority: 1.0,
        },
        {
            url: 'https://shamlul.vercel.app/explore',
            changeFrequency: 'weekly',
            priority: 0.9,
        },
        {
            url: 'https://shamlul.vercel.app/fonts',
            changeFrequency: 'weekly',
            priority: 0.9,
        },
        {
            url: 'https://shamlul.vercel.app/palettes',
            changeFrequency: 'weekly',
            priority: 0.9,
        },
        {
            url: 'https://shamlul.vercel.app/icons',
            changeFrequency: 'weekly',
            priority: 0.9,
        },
    ]
}