import Image from "next/image"

export default function Commissions() {
    return (
      <div>
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
                My general commission process is as follows: 
            </p>
            <ol>
                <li>
                    You email me your requirements, including an written outline of what you would 
                    like me to draw. The more detail you provide, the more easily I can work towards 
                    your vision. You can send me rough sketches or reference material - in fact, I 
                    encourage you to. If you have spotted a drawing I have done you like, you can let me 
                    know which one. 
                    
                </li>
                <Image
                    src="/divider.png"
                    alt="Divider image"
                    layout="intrinsic"
                    width={250}
                    height={700}
                />
                <li>
                    I will respond with any clarifying questions and will endeavor to give you a quote and 
                    outline the process going forward. 
                </li>
                <Image
                    src="/divider.png"
                    alt="Divider image"
                    layout="intrinsic"
                    width={250}
                    height={700}
                />
                <li>
                    Once the work has been agreed, a 20% deposit is payable via Paypal (or full payment can be make 
                    up-front if that is easier for you). 
                </li>
                <Image
                    src="/divider.png"
                    alt="Divider image"
                    layout="intrinsic"
                    width={250}
                    height={700}
                />
                <li>
                    An initial sketch will be provided to give a general idea of layout / proportions. This 
                    is the stage at which you are able to request any changes to the layout. 
                </li>
                <Image
                    src="/divider.png"
                    alt="Divider image"
                    layout="intrinsic"
                    width={250}
                    height={700}
                />
                <li>
                    If you are happy with the initial sketch, I will create the final illustration and send you a 
                    final proof. 
                </li>
                <Image
                    src="/divider.png"
                    alt="Divider image"
                    layout="intrinsic"
                    width={250}
                    height={700}
                />
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
  