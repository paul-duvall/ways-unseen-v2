"use client"

import React from 'react'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from "next/image"
import SocialMediaIcons from "../components/SocialMediaIcons"

export default function Navbar() {
  const [showBurgerMenu, setShowBurgerMenu] = useState(false)

  const handleToggleClick = () => {
    setShowBurgerMenu(prev => !prev)
  }

  const handleLinkClick = () => {
    setShowBurgerMenu(false); // Hide menu when a link is clicked
  };

  useEffect(() => {
    const handleResize = () => {
      // Close the burger menu if viewport width is >= 768px
      if (window.innerWidth >= 768 && showBurgerMenu) {
        setShowBurgerMenu(false);
      }
    };

    window.addEventListener("resize", handleResize);

    // Clean up the event listener on component unmount
    return () => window.removeEventListener("resize", handleResize);
  }, [showBurgerMenu]);

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
    </div>
    <a href="#" className={ 'toggle-button'} onClick={handleToggleClick}>
      <span className={ 'bar' }></span>
      <span className={ 'bar' }></span>
      <span className={ 'bar' }></span>
    </a>
    <div className={ `navbar-links-container ${showBurgerMenu} ? true : false` }>
      <Link className={ 'nav-link'} href="/">Home</Link>
      <Link className={ 'nav-link'} href="/about">About</Link>
      <Link className={ 'nav-link'} href="/commissions">Commissions</Link>
      <Link className={ 'nav-link'} href="/contact">Contact</Link>
      <SocialMediaIcons />
    </div>
    <div className={ `navbar-slideout-menu ${showBurgerMenu ? 'show' : ''}` }>
      <Link href="/" onClick={handleLinkClick}>Home</Link>
      <Link href="/about" onClick={handleLinkClick}>About</Link>
      <Link href="/commissions" onClick={handleLinkClick}>Commissions</Link>
      <Link href="/contact" onClick={handleLinkClick}>Contact</Link>       
      <SocialMediaIcons />
    </div>
  </nav>
  )
}
