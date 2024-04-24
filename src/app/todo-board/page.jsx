'use client'
import NavbarComponent from "@/components/NavbarComponent";
import SidebarComponent from "@/components/SidebarComponent";

const taskPage = () => {
    return (
        <>
             <div className='flex gap-8'>
            
            <div className='w-80'>
            <SidebarComponent/> 
            </div>
            
            <div  className='w-full '><NavbarComponent/></div>

        </div>
        </>
    );
}

export default taskPage