import SectionComponent from "../../component/section-component";
import { ReactNode } from "react";

export default function Layout({
    children
}: {children: ReactNode}) {
    console.log('children',children)
    return (
        <>
        {/* <SectionComponent /> */}
        
        {children}
        </>
    )
}