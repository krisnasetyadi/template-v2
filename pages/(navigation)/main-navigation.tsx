import React, { FC, ReactNode } from 'react'
import SideBarComponent from '../components/sidebar-component';
import NavbarComponent from '../components/navbar/navbar-component';

interface MainNavigationProps {
  
}

interface ContentProps {
  children?: ReactNode;
}

export const MainNavigation: FC<MainNavigationProps> = ({}) => {
  return (
    // <>
    // <NavbarComponent />
    // <div className='flex'>
      // <SideBarComponent />
      <Content />
  //   </div>
  // </>
  )
}

export const Content: FC<ContentProps>  = ({
  children
}) => {
    return (
        <div className='flex-col items-center justify-between w-full p-10 bg-[#eae8ea]'>
          <div className='min-h-screen bg-white rounded-md'>
           {children}
          </div>
        </div>
    )
}