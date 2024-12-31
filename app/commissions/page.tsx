import styles from "./page.module.css"

export default function Commissions() {
    return (
      <div className={styles.page}>
        <main>
          <section className={ 'section-container' }>
            <h1>Commissions</h1>
            <p> 
                Firstly, thanks for finding your way here and considering commissioning me to draw you 
                a map!
            </p>
            <p>
                The illustrations I create for commissions are typically either isometric or top 
                down maps, though I have created maps in other styles. If you're curious about the range of
                styles I can use, check out my <a href="https://cara.app/waysunseen/portfolio" target="_blank">portfolio</a>!
            </p>
            <p>
                If you'd like to get in contact you can email me at <a href="mailto:ways.unseen@gmail.com">ways.unseen@gmail.com</a> or 
                you can message me on <a href="ways-unseen.bsky.social" target="_blank">Bluesky</a> or <a href="https://www.instagram.com/ways.unseen" target="_blank">Instagram</a>.
            </p>
            <p>
                My general commission process is as follows: 
            </p>
            <ol className={styles['commission-stages']}>
                <li>
                    You email me your requirements, including an written outline of what you would 
                    like me to draw. The more detail you provide, the more easily I can work towards 
                    your vision. You can send me rough sketches or reference material - in fact, I 
                    encourage you to. If you have spotted a drawing I have done you like, you can let me 
                    know which one. 
                    
                </li>
                <li>
                    I will respond with any clarifying questions and will endeavor to give you a quote and 
                    outline the process going forward. 
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
                    If you are happy with the initial sketch, I will create the final illustration and send you a 
                    final proof. 
                </li>
                <li>
                    Once agreed, any outstanding final balance will be paid via Paypal. After receipt of the balance, 
                    the final digital files will be provided. 
                </li>
            </ol>
          </section>
        </main>
      </div>
    );
  }
  