import { FC } from 'react'
import Menu from '../../(navigation)/constant'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { join } from 'path'

interface NavMenuComponentProps {
  
}

const NavMenuComponent: FC<NavMenuComponentProps> = ({}) => {
  const { LectureSidebarMenu } = Menu
  const pathname = usePathname()
  console.log('pathname', pathname)

  return (
  <div className='flex flex-row mx-auto my-auto'>
    {LectureSidebarMenu && LectureSidebarMenu.map((item, idx) => {

      return (
        <Link className='px-4' key={`${item.parentName}-${idx}`} href={`/${join(item.parentName.toLowerCase(), item.childMenu.map(i => i.route)[0])}`}>
            <p className={`${pathname?.split('/')[1] === item.parentName.toLowerCase() ? 'font-bold' : 'font-semibold' } text-sm`}>{item.parentName}</p>
        </Link>
    )})}
  </div>
  )
}

export default NavMenuComponent