import React from 'react'
import Link from 'next/link'
import Image from "next/image"

export default function Navbar() {
  return (
  <nav>
    <div>
    <Image
      src="/logo-grey.png"
      alt="Banner image"
      layout="intrinsic"
      width={60}
      height={60}
    />
    <span className={ 'navbar-logo-text' }>
      <b><Link href="/">Ways Unseen</Link></b>
    </span>
    </div>
    <div className={ 'navbar-links-container' }>
      <Link href="/">Home</Link>
      <Link href="/about">About</Link>
      <Link href="/commissions">Commissions</Link>
    </div>
  </nav>
  )
}
