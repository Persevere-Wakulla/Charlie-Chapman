import { useState, useEffect, useContext,useRef } from "react";
import { ThemeContext } from "../../layout/RootLayout.jsx";
import LightDarkBtn from '../light-dark-mode/LightDarkBtn.jsx';
import FaqHead from "./FaqHead.jsx";

const Faq = () => {
    const theme = useContext(ThemeContext)

    useEffect(() => {
        if (theme === 'dark') {
            document.documentElement.classList.add('dark-mode')
        } else {
            document.documentElement.classList.remove('dark-mode')
        }
    }, [theme])

function handleScrollToTop(){
    
    
    window.scrollTo({
        top:0,
        left:0,
        behavior:"smooth"
    })
}
const bottomRef = useRef(null);


function handleScrollToBottom(){
    bottomRef.current.scrollIntoView({behavior:"smooth"})
}
    return (
        <section >
      {/* <LightDarkBtn/> */}

        <div className="faq">
            {/* <h3 className="">Frequ<span className="color">entlyAsked Questions</span> </h3> */}
            <FaqHead/> 
            <button onClick={handleScrollToBottom} className='scrollBtn'>Scroll to bottom</button>
            <div className="question">
                <p><strong>Lorem ipsum dolor <span className="color">sit amet.</span></strong></p>
                <p>Lorem ipsum dolor sit amet co<span className="color">nsectetur adipisicing elit. Animi velit dignissimos sed beatae facilis iste rerum quaerat, magni accusantium quasi, ut, aliquid </span>expedita amet dicta vel at est simil <span className="color">ique eius?</span> </p>
            </div>
            <div className="question">
                <p><strong>Lorem ipsum dolor sit amet.</strong></p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ani<span className="color">mi velit  dignissimos sed beatae facilis iste rerum quaerat, magni accusantium quasi, ut, aliquid</span> expedita amet dicta vel at est similique eius?</p>
            </div>
            <div className="question">
                <p><strong>Lorem ipsum dolor sit amet.</strong></p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi velit dignissimos sed bea<span className="color">tae facilis iste  rerum quaerat, magni accusantium quasi, ut, aliquid</span> expedita amet dicta vel at est similique eius?</p>
            </div>
            <div className="question">
                <p><strong>Lorem ipsum dolor sit amet.</strong></p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi velit dignissimos sed beatae facilis iste rerum quaera<span className="color">t, magni accusantium quasi, ut, aliquid </span>expedita amet dicta vel at  est similique eius?</p>
            </div>
            <div className="question">
                <p><strong>Lorem ipsum dolor sit amet.</strong></p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi velit dignissimos sed beatae facilis iste rerum quaerat, magni accusantium quasi, u<span className="color">t, aliquid</span> expedita amet  dicta vel at est similique eius?</p>
            </div>
            <button onClick={handleScrollToTop} className='scrollBtn'>Scroll to top</button>
            <div ref={bottomRef}></div>

        </div>
        </section>

    )
}

export default Faq