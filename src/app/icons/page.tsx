import Alemet from '@/components/Alemet'
import { Metadata } from "next";




const meta = {
  title: 'Icons',
  description: 'شملول هو موقع رائد يقدم مجموعة شاملة من الأدوات والموارد المبتكرة للمصممين والمبرمجين. يتيح الموقع للمستخدمين الوصول إلى مجموعة لونية واسعة تتيح لهم تحديد مظهر فريد لمشاريعهم باستخدام ألوان متنوعة وجذابة. بالإضافة إلى ذلك، يتميز الموقع بمكتبة ضخمة تحتوي على 1000 أيقونة إبداعية، مما يوفر للمستخدمين مصدرًا غنيًا لتحسين تجربة المستخدم في تصميماتهم',
  keywords: 'icon, icons, shamlul, shamlul icons, ايقونات, ايقون',
  creator: 'Shamlul',
}

export const metadata: Metadata = {
  metadataBase: new URL('https://shamlul.vercel.app/icons'),
  title: meta.title,
  description: meta.description,
  keywords: meta.keywords,
  archives: 'https://shamlul.vercel.app/icons',
  abstract: meta.description,
  creator: meta.creator,
  openGraph: {
    type: "website",
    url: "https://shamlul.vercel.app",
    title: "Shamlul | Icons",
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

export default function Icons() {
  return (
    <div>
        <Alemet />
    </div>
  )
}
