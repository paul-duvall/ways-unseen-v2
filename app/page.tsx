import Link from 'next/link'
import Image from "next/image"
import styles from "./page.module.css"

export default function Home() {
  return (
    <div className={styles.page}>
      <main>
        <div>
          <Image
            src="/banner.jpg"
            alt="Banner image"
            layout="intrinsic"
            width={2500}
            height={700}
          />
        </div>
        <section className={ 'section-container' }>
          <h1>Ways Unseen - creator of hand-drawn fantastical maps, dungeons and unexpected places!</h1>
          <div className={styles['style-type-summary-container']}>
            <div className={styles['style-type-summary']}>
              <div className={`${styles['drawing-snippet']} ${styles['drawing-snippet--isometric']}`} />
              <h2>Isometric locations</h2>
              <p>Exterior locations, building and location interiors in an isometric style</p>
            </div>

            <div className={styles['style-type-summary']}>
              <div className={`${styles['drawing-snippet']} ${styles['drawing-snippet--topdown-interior']}`} />
              <h2>Top-down interiors</h2>
              <p>Top-down style maps of building and location interiors</p>
            </div>

            <div className={styles['style-type-summary']}>
              <div className={`${styles['drawing-snippet']} ${styles['drawing-snippet--topdown-exterior']}`} />
              <h2>Top-down exteriors</h2>
              <p>Top-down style maps of exterior locations including towns and settlements</p>
            </div>

            <div className={styles['style-type-summary']}>
              <div className={`${styles['drawing-snippet']} ${styles['drawing-snippet--region']}`} />
              <h2>Region maps</h2>
              <p>Maps of larger areas including settlements, natural features and points of interest</p>
            </div>

            <div className={styles['style-type-summary']}>
              <div className={`${styles['drawing-snippet']} ${styles['drawing-snippet--sideview']}`} />            
              <h2>Sideview maps</h2>
              <p>Cutaway-style maps showing interior locations in cross-section</p>
            </div>

            <div className={styles['style-type-summary']}>
              <div className={`${styles['drawing-snippet']} ${styles['drawing-snippet--hexmap']}`} />
              <h2>More!</h2>
              <p>Also able to create hexmaps and maps in other styles - just ask! </p>
            </div>
          </div>
        </section>
        {/* Commission section */}
        <section className={`${styles['commission-section-container']}`}>
          <div className={`${styles['main-page-section']}`}>
            <h2>Interested in a commission?</h2>
            <div className={`${styles['commission-image-container']}`}>
              <Image
                className={`${styles['commission-image']}`}
                src="/iso-room-1.png"
                alt="An isometric room"
                width="600"
                height="504"
              />
            </div>
            <p>I love contributing maps to other people&apos;s projects. I&apos;ve drawn maps for roleplaying games, boardgame conventions, virtual tabletop services and more! Give me a shout if you are interested in commissioning me to create a map for you!</p>
            <div className={`${styles['main-page-section-btn-container']}`}>
              <Link href="/commissions">
                <button className={`${styles['commission-section-btn']}`}>Commission process</button>
              </Link>
            </div>
          </div>
        </section>
        {/* About section */}
        <section>
          <div className={`${styles['main-page-section']}`}>
            <h2>About me!</h2>
            <div className={`${styles['commission-image-container']}`}>
              <Image
                className={`${styles['commission-image']}`}
                src="/iso-room-2.png"
                alt="An isometric room"
                width="600"
                height="504"
              />
            </div>
            <p>
              I&apos;m a fantasy map illustrator of sorts, living in the east of England in a county
              called Norfolk. I&apos;ve always enjoyed drawing, though for much of my life, I have shied away
              from actually putting pencil to paper. Now that I&apos;ve started in earnest, I never want 
              to stop!
            </p>  
            <div className={`${styles['main-page-section-btn-container']}`}>
              <Link href="/about">
                <button className={`${styles['about-section-btn']}`}>Find out more</button>
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
