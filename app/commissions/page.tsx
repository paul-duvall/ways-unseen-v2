import styles from "./page.module.css"

export default function Commissions() {
    return (
      <div className={styles.page}>
        <main>
          <section className={ 'section-container' }>
            <h1>Commissions</h1>
            <p> 
                If you&apos;ve found your way to this page, you&apos;re probably considering hiring me to draw you
                a map. Thanks!
            </p>
            <p>
                The illustrations I create for commissions are typically either isometric or top-down maps, though
                I have created maps in other styles. If you&apos;re curious about the range of styles I can use, 
                check out my <a href="https://cara.app/waysunseen/portfolio" target="_blank">portfolio</a>!
            </p>
            <p>
                If you would like to get in contact you can email me at <a href="mailto:ways.unseen@gmail.com">ways.unseen@gmail.com</a> or 
                you can message me on <a href="ways-unseen.bsky.social" target="_blank">Bluesky</a> or <a href="https://www.instagram.com/ways.unseen" target="_blank">Instagram</a>.
            </p>
            <h2>Process</h2>
            <p>
                Here&apos;'s a brief overview of how I typically handle a commission to give you an idea of what to expect if
                you hire me to draw a map: 
            </p>
            <ol className={styles['commission-stages']}>
                <li>
                    You email me as much information as you can, outlining your ideas. The more detail you provide, 
                    the more effectively I can work towards your vision. You can send me rough sketches or reference material.
                    If you have spotted an existing Ways Unseen illustration that you like and you think the style closely 
                    matches how you imagine the commission looking, you can let me know which one. 
                    
                </li>
                <li>
                    We will work together to progress towards an agreed understanding of what form the final illustration will take.
                    I will provide a quote and ensure you have full awareness of the process going forward, including agreeing a 
                    timeframe for delivery. 
                </li>
                <li>
                    Once the work has been agreed, a 20% deposit is payable via Paypal (or full payment can be make 
                    up-front if that is easier for you). 
                </li>
                <li>
                    An initial sketch will be provided to give a general idea of layout / proportions. This 
                    is the stage at which you are able to request any changes to the layout. 
                </li>
                <li>
                    If you are happy with the initial sketch, I will draw the final illustration and send you a 
                    final proof so you can see the illustration before paying the final amount. We can discuss the
                    possibility of adjustments - some may be possible. 
                </li>
                <li>
                    Once you are happy with the final illustration, any outstanding final balance will be paid via Paypal, 
                    and the final digital files will be provided. 
                </li>
            </ol>
          </section>
        </main>
      </div>
    );
  }
  