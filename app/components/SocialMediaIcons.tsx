import React from 'react'
import Image from "next/image"

export default function Navbar() {
  return (
  <div className={ 'social-icon-link-container' }>
    <a
              className={ 'social-icon-link' }
              href="https://instagram.com/ways.unseen"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Follow me on Instagram"
              title="Instagram" 
            >
              <Image
                src="/icon-instagram.svg"
                alt="Instagram Icon"
                width={24}
                height={24}
              />
            </a>
            <a
              className={ 'social-icon-link' }
              href="https://bsky.app/profile/ways-unseen.bsky.social"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Follow me on Bluesky"
              title="Bluesky"
            >
              <Image
                src="/icon-bluesky.svg"
                alt="Instagram Icon"
                width={24}
                height={24}
              />
            </a>
            <a
                className={ 'social-icon-link' }
                href="https://ways-unseen.itch.io/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow me on Itch.io"
                title="Itch.io"
            >
                <Image
                src="/icon-itch.svg"
                alt="Instagram Icon"
                width={24}
                height={24}
                />
            </a>
  </div>
  )
}
