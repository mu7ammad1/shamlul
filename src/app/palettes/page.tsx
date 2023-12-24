import Platya from "@/components/Platya";
import { Metadata } from "next";





const meta = {
  title: 'Generate stunning color palettes in seconds!',
  description: 'Create or explore stunning color pairings for your creative projects, Uncover captivating color schemes tailored for your designs',
  keywords: 'background color,background color a2d2ff,background color dda15e,border color,color blindness,color of a2d2ff,color scheme,complementary colors,cylindrical coordinate representations,div style,ef233c hex color,ffb703 color,green blue,hex color,red green,rgb 221 161 94,rgb color,text shadow,white background,color space,Palettes, shamlul palettes, اللون, اللوان, colors, color, white, black, black white, color scheme, scheme color, color schemes, color theme, color palette, color themes, color palettes, color combinations, color, colors, palettes, hex color wheel, pastel color palette, color wheel, color combination, color pallete, color names, web color schemes, color wheel generator, extract color palette from image, random color palette generator, color schemes generator, ui color palette generator, pretty colors, vintage color, color palette from image',
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
    url: "https://shamlul.vercel.app/palettes",
    title: "Shamlul - palettes",
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




export default function Palettes() {
  return (
    <main>
      <Platya />
    </main>
  )
}






