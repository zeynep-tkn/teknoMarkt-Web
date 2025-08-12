import React from 'react'
import SearchSection from './SearchSection'
import Link from 'next/link'
import CartSection from '@/common/components/layouts/CartSection'
import Navigation from '@/common/components/layouts/Navigation'

const HeaderBottom = () => {
    return (
        <>
           <div className="w-full h-16 bg-sky-900 items-center gap-20 inline-flex sticky top-0 z-50">
           <Link href="/" className="cursor-pointer h-full flex items-center">
              <img 
              className="h-full object-contain" 
              src="/assets/img/logo-11.png" 
              alt="Logo" 
               />
            </Link>
            <SearchSection />
            <CartSection />
            </div>
            <Navigation />
        </>
    )
}

export default HeaderBottom