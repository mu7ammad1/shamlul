import Alemet from '@/components/Alemet'
import { Metadata } from "next";





const meta = {
  title: 'Icons',
  description: 'شملول هو موقع رائد يقدم مجموعة شاملة من الأدوات والموارد المبتكرة للمصممين والمبرمجين. يتيح الموقع للمستخدمين الوصول إلى مجموعة لونية واسعة تتيح لهم تحديد مظهر فريد لمشاريعهم باستخدام ألوان متنوعة وجذابة. بالإضافة إلى ذلك، يتميز الموقع بمكتبة ضخمة تحتوي على 1000 أيقونة إبداعية، مما يوفر للمستخدمين مصدرًا غنيًا لتحسين تجربة المستخدم في تصميماتهم',
}


export const metadata  = {
  title: meta.title,
  description: meta.description,
}


export default function Icons() {
  return (
    <div>
        <Alemet />
    </div>
  )
}
