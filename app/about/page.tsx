import Link from 'next/link'
// import Image from "next/image";
// import styles from "./../page.module.css";

export default function About() {
  return (
    // className={styles.page}
    <div>
      {/* className={styles.main} */}
      <main>
        <section className={ 'section-container' }>
        <h1>About Ways Unseen</h1>
          <p>I&apos;m a fantasy map illustrator of sorts, living in the east of England in a county
          called Norfolk. I&apos;ve always enjoyed drawing, though for much of my life, I have shied away
          from actually putting pencil to paper. Now that I&apos;ve started in earnest, I never want 
          to stop!</p>

          <p>I started out drawing top-down maps when I discovered solo tabletop gaming (games like <a href="https://www.drivethrurpg.com/en/product/180588/four-against-darkness" target="_blank">Four
          Against Darkness</a> and <a href="https://www.drivethrurpg.com/en/product/308955/notequest" target="_blank">Notequest</a>) that
          require simple dungeon maps to be drawn as you play that game. Instead of sketching out purely
          functional outlines, I found myself compelled to take my time and make my maps beautiful.</p>

          <p>In the years since, I&apos;ve been creating and sharing maps in an increasingly broad range of
            styles. After starting with traditional top-down style maps, I progressed onto more
            challenging isometric locations. These proved quite popular and my social media following grew
            quickly.
          </p>

          <p>This increased exposure led to commission requests and I&apos;ve now worked with a number of
            clients to produce high-quality hand-drawn maps to help them realise their creations. I really
            value these opportunities to create illustrations for a range of publications, not only because
            it is lovely to see my maps in print and being enjoyed by people, but also as working on commissions
            challenges me to draw subjects I might otherwise not attempt. The creativity and imagination of
            my clients encourages me to broaden my range and produce illustrations of the highest
            possible quality.
          </p>

          <p>
            As time has gone on, I&apos;ve broadened the range of map styles, including region and town maps, hex-maps
            and cut away maps, each enabling me to represent locations in different ways.
          </p>

          <p>Thanks for showing an interest in my work. You can find out more about my commission process <Link href="/commissions">here</Link>.
          </p>
        </section>
      </main>
    </div>
  );
}
