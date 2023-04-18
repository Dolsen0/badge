import { Inter } from 'next/font/google'
import Badge from './components/Badge'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
       <Badge 
          user = {{
            name: "Tyler Durgen",
            img: "https://i.imgur.com/8Km9tLL.png",
            handle: "tylerdurden",
            quote: "of all the things i've lost, i miss my mind the most"
          }}/>
      </div>
    </main>
  )
}
