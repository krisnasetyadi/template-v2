import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { Provider } from "react-redux"
import { store } from "./store"
import NavbarComponent from './components/navbar/navbar-component'
import SideBarComponent from './components/sidebar-component'
import { Content } from './(navigation)/main-navigation'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <NavbarComponent/>
       <div className='flex'>
        <SideBarComponent />
        <Content>
          <Component {...pageProps} />
        </Content>
      </div>
    </Provider>

  )
}
