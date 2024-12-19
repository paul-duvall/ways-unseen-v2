import Image from "next/image"
import styles from "./page.module.css"
// import { redirect } from "next/dist/server/api-utils";

export default function Home() {
  return (
    <div className={styles.page}>
      {/* className={styles.main} */}
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
      </main>
    </div>
  );
}
