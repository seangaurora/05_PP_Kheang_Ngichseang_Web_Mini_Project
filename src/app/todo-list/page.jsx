import NavbarComponent from '@/components/NavbarComponent'
import SidebarComponent from '@/components/SidebarComponent'
import React from 'react'

export default function listPage() {
  return (
    <>
        <div className='flex gap-8'>
            
            <div className='w-80'>
            <SidebarComponent/> 
            </div>
            
            <div  className='w-full '><NavbarComponent/></div>

        </div>
        <div>
            <div>
            </div>

        </div>
    </>
  )
}
