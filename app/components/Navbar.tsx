import React from 'react'
import Link from 'next/link'
import Image from "next/image"

export default function Navbar() {
  return (
    <nav>
        <h1>
        <Image
          src="/logo-white.png"
          alt="Banner image"
          layout="intrinsic"
          width={70}
          height={70}
        />
        </h1>
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/commissions">Commissions</Link>
  </nav>
  )
}
