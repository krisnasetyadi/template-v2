import { Html, Head, Main, NextScript } from 'next/document'
import ClientOnly from './components/client-component'
import NavbarComponent from './components/navbar/navbar-component'
import { Content } from './(navigation)/main-navigation'
import SideBarComponent from './components/sidebar-component'

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
      {/* <ClientOnly>
        <NavbarComponent/>
      </ClientOnly>
        <div className='flex'>
          <ClientOnly>
            <SideBarComponent />
          </ClientOnly>
          <Content> */}
            <Main />
            <NextScript />
          {/* </Content>
        </div> */}
      </body>
    </Html>
  )
}
