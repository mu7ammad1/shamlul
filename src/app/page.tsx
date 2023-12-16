import { Metadata } from "next";



const meta = {
  title: 'Shamlul | الصفحة الرئيسية',
  description: 'شملول هو موقع رائد يقدم مجموعة شاملة من الأدوات والموارد المبتكرة للمصممين والمبرمجين. يتيح الموقع للمستخدمين الوصول إلى مجموعة لونية واسعة تتيح لهم تحديد مظهر فريد لمشاريعهم باستخدام ألوان متنوعة وجذابة. بالإضافة إلى ذلك، يتميز الموقع بمكتبة ضخمة تحتوي على 1000 أيقونة إبداعية، مما يوفر للمستخدمين مصدرًا غنيًا لتحسين تجربة المستخدم في تصميماتهم',
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
    title: "Shamlul | الصفحة الرئيسية",
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




export default function Home() {
  return (
    <main className="h-full">
      <section className="grid grid-cols-2 gap-5 m-5 h-[480px]">
        <div className="mt-16">
          <div className="text-4xl font-medium">
            <h1 className="text-6xl leading-tight font-bold my-7 bg-clip-text text-transparent bg-gradient-to-r from-emerald-500 to-violet-800">
              Empower, business, API
            </h1>
            <h1>your business with API from Rusumat</h1>
            <h1 className="text-lg my-5 font-normal">your business with API from Rusumat your business with API from Rusumat your business with API from Rusumat</h1>
          </div>
        </div>
        <div className="mt-16">
          img
        </div>
      </section>

      <section className="grid grid-cols-3 gap-5 m-10 h-96">
        <div className="w-full h-60 bg-[#101010] rounded-xl"></div>
        <div className="w-full h-60 bg-[#101010] rounded-xl"></div>
        <div className="w-full h-60 bg-[#101010] rounded-xl"></div>
      </section>
    </main>
  );
}
