import { MainNavigation as App} from './(navigation)/main-navigation'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main>
      <App />
    </main>
  )
}
