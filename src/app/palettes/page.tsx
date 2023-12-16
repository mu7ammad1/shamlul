import Platya from "@/components/Platya";
import { Metadata } from "next";





const meta = {
  title: 'Palettes',
  description: 'شملول هو موقع رائد يقدم مجموعة شاملة من الأدوات والموارد المبتكرة للمصممين والمبرمجين. يتيح الموقع للمستخدمين الوصول إلى مجموعة لونية واسعة تتيح لهم تحديد مظهر فريد لمشاريعهم باستخدام ألوان متنوعة وجذابة. بالإضافة إلى ذلك، يتميز الموقع بمكتبة ضخمة تحتوي على 1000 أيقونة إبداعية، مما يوفر للمستخدمين مصدرًا غنيًا لتحسين تجربة المستخدم في تصميماتهم',
  keywords: 'palettes, shamlul palettes, اللون, اللوان, colors, color, white, black, black white',
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
    url: "https://shamlul.vercel.app",
    title: "Shamlul | palettes",
    description: meta.description,
    siteName: "Shamlul",
    images: [
      {
        url: `https://shamlul.vercel.app/_next/static/media/shamlul1200x630.6b024f8a.svg`,
      },
    ],
    locale: 'ar_EGYPT'
  }

}




export default function Palettes() {
  return (
    <main>
      <Platya />
    </main>
  )
}






