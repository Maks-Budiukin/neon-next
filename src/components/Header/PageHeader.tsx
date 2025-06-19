"use client"

import React from 'react'
import Image from 'next/image'
import NavLink from '@/components/NavLink/NavLink'

const PageHeader = () => {
  return (
    <header className='bg-zinc-900'>
      <div className='container px-4 md:px-5 mx-auto flex justify-between items-center'>
        <div>
          <Image src="/logo/logo.webp" width={48} height={48} alt="Site Logo" />
        </div>
        <nav>
          <ul className='flex' >
            <li><NavLink href={'/'}>Home</NavLink></li>
            <li><NavLink href={'/about'}>About</NavLink></li>
            <li><NavLink href={'/contacts'}>Contacts</NavLink></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default PageHeader