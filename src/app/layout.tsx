import type { Metadata } from 'next'
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
import Script from 'next/script';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL('https://shamlul.netlify.app'),
  title: {
    default: 'Shamlul',
    template: '%s | Shamlul'
  },
  description: 'شملول هو موقع رائد يقدم مجموعة شاملة من الأدوات والموارد المبتكرة للمصممين والمبرمجين. يتيح الموقع للمستخدمين الوصول إلى مجموعة لونية واسعة تتيح لهم تحديد مظهر فريد لمشاريعهم باستخدام ألوان متنوعة وجذابة. بالإضافة إلى ذلك، يتميز الموقع بمكتبة ضخمة تحتوي على 1000 أيقونة إبداعية، مما يوفر للمستخدمين مصدرًا غنيًا لتحسين تجربة المستخدم في تصميماتهم',
  openGraph: {
    images: logoBar,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">

      <head>

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
