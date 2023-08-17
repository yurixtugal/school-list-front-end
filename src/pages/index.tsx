import Image from 'next/image'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className=" bg-slate-50  grid h-screen place-items-center text-xl md:text-9xl">
        Lista escolar app ✋
    </div>
  )
}
