import type { Metadata } from 'next'
import Script from 'next/script';
import { Inter } from 'next/font/google'
import './globals.css'
import './fonts.css'
import logoBar from '@/asset/images/logo bar svg.svg'
//! VERCEL
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';


// TODO: imports Components
import Navbar from '@/components/Navbar'
import AgreementForm from '@/components/AgreementForm'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL('https://shamlul.vercel.app'),
  title: {
    default: 'Shamlul',
    template: '%s | Shamlul'
  },
  creator: 'Shamlul',
  archives: 'https://shamlul.vercel.app',
  twitter: {
    card: "summary_large_image",
    site: "@Shamlul",
    creator: "@Shamlul",
    "images": "https://lh3.googleusercontent.com/pw/ABLVV86-kphhZpN7lt0YBEx6a-gDv6Cuaf6O1t6UgEoAj8oAyrqvQJuPBVIqrcdz9kfVEoHckVkn9y-m1HFQaNDz0pHg3qUvpe23RGpkhhqJUrzhhB1uS9ldnL9zMUMyXijECe7goCyKNepLKWNKkPVJGIU=w1200-h630-s-no?authuser=0"
  },
  publisher: 'Shamlul',
  abstract: 'شملول هو موقع رائد يقدم مجموعة شاملة من الأدوات والموارد المبتكرة للمصممين والمبرمجين. يتيح الموقع للمستخدمين الوصول إلى مجموعة لونية واسعة تتيح لهم تحديد مظهر فريد لمشاريعهم باستخدام ألوان متنوعة وجذابة. بالإضافة إلى ذلك، يتميز الموقع بمكتبة ضخمة تحتوي على 1000 أيقونة إبداعية، مما يوفر للمستخدمين مصدرًا غنيًا لتحسين تجربة المستخدم في تصميماتهم',
  description: 'شملول هو موقع رائد يقدم مجموعة شاملة من الأدوات والموارد المبتكرة للمصممين والمبرمجين. يتيح الموقع للمستخدمين الوصول إلى مجموعة لونية واسعة تتيح لهم تحديد مظهر فريد لمشاريعهم باستخدام ألوان متنوعة وجذابة. بالإضافة إلى ذلك، يتميز الموقع بمكتبة ضخمة تحتوي على 1000 أيقونة إبداعية، مما يوفر للمستخدمين مصدرًا غنيًا لتحسين تجربة المستخدم في تصميماتهم',
  openGraph: {
    type: "website",
    url: "https://shamlul.vercel.app",
    title: "Shamlul | Fonts",
    description: 'شملول هو موقع رائد يقدم مجموعة شاملة من الأدوات والموارد المبتكرة للمصممين والمبرمجين. يتيح الموقع للمستخدمين الوصول إلى مجموعة لونية واسعة تتيح لهم تحديد مظهر فريد لمشاريعهم باستخدام ألوان متنوعة وجذابة. بالإضافة إلى ذلك، يتميز الموقع بمكتبة ضخمة تحتوي على 1000 أيقونة إبداعية، مما يوفر للمستخدمين مصدرًا غنيًا لتحسين تجربة المستخدم في تصميماتهم',
    siteName: "Shamlul",
    images: [
      {
        url: `https://lh3.googleusercontent.com/pw/ABLVV86-kphhZpN7lt0YBEx6a-gDv6Cuaf6O1t6UgEoAj8oAyrqvQJuPBVIqrcdz9kfVEoHckVkn9y-m1HFQaNDz0pHg3qUvpe23RGpkhhqJUrzhhB1uS9ldnL9zMUMyXijECe7goCyKNepLKWNKkPVJGIU=w1200-h630-s-no?authuser=0`,
      },
    ],
    locale: 'ar_EGYPT'
  }
}


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">

      <head>
        <meta name="google-site-verification" content="Pjrnb9ipmLRDAG9kfJPg87vlDZAve6cd4UD4RavnAUU" />
        <meta name="google-site-verification" content="7nUh0NZyD1QQdy5Q2tnzD7mUk2-G14FAkLhhDWhkoR4" />
      </head>

      <body className={inter.className}>
        {/* <AgreementForm /> */}
        <Navbar />
        {children}

        <SpeedInsights />
        <Analytics />
      </body>





      <Script
        async
        strategy='afterInteractive'
        src="https://www.googletagmanager.com/gtag/js?id=G-L7BN49S88M"
      />

      <Script id='google-analytics' strategy='afterInteractive'>
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
        
          gtag('config', 'G-L7BN49S88M');
        
      `}
      </Script>

    </html>

  )
}
