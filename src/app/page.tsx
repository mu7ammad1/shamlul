import Estonia from "@/components/Estonia";
import { Metadata } from "next";



const meta = {
  title: 'الصفحة الرئيسية - Shamlul ',
  description: '',
  keywords: 'font, fonts, shamlul, shamlul home, shamlul home page, shamlul الصفحة الرئيسية, shamlul fonts, خطوط, خط',
  creator: 'Shamlul',
}

export const metadata: Metadata = {
  metadataBase: new URL('https://shamlul.vercel.app'),
  title: meta.title,
  description: meta.description,
  keywords: meta.keywords,
  archives: 'https://shamlul.vercel.app',
  abstract: meta.description,
  creator: meta.creator,
  openGraph: {
    type: "website",
    url: "https://shamlul.vercel.app",
    title: "Shamlul - الصفحة الرئيسية",
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




export default function Home() {
  return (
    <main>
      <Estonia />
    </main>
  
  );
}
