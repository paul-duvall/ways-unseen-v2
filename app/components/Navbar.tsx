import React from 'react'
import Link from 'next/link'
import Image from "next/image"

export default function Navbar() {
  return (
  <nav>
    <div>
    <Image
      src="/logo-white.png"
      alt="Banner image"
      layout="intrinsic"
      width={60}
      height={60}
    />
    <b><Link href="/">Ways Unseen</Link></b>
    </div>
    <div className={ 'navbar-links-container' }>
      <Link href="/">Home</Link>
      <Link href="/about">About</Link>
      <Link href="/commissions">Commissions</Link>
    </div>
  </nav>
  )
}
