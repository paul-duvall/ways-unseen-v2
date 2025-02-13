import React from 'react'
import Link from 'next/link'
import Image from "next/image"

export default function Navbar() {
  return (
  <nav>
    <div className={ 'navbar-logo-container' }>
      <Image
        className={ 'navbar-logo' }
        src="/logo-grey.png"
        alt="Banner image"
        layout="intrinsic"
        width={500}
        height={514}
      />
      <span className={ 'navbar-logo-text' }>
        <b><Link href="/">Ways Unseen</Link></b>
      </span>
    </div>
    <a href="#" className={ 'toggle-button' }>
      <span className={ 'bar' }></span>
      <span className={ 'bar' }></span>
      <span className={ 'bar' }></span>
    </a>
    <div className={ 'navbar-links-container' }>
      <Link href="/">Home</Link>
      <Link href="/about">About</Link>
      <Link href="/commissions">Commissions</Link>
      <Link href="/contact">Contact</Link>
    </div>
  </nav>
  )
}
