"use strict"
// import { useRef,  } from "react";
import { motion,} from "framer-motion";
import "animate.css/animate.compat.css"

// useInView 
// useState

import './index.css';
const PayIn = () => {
  // const [isPopupOpen, setIsPopupOpen] = useState(false)
//   const ref = useRef(null);
//   const isInView = useInView(ref, { once: true });
//   const openPopup = () => {
//     setIsPopupOpen(true);
//   };

//   const closePopup = () => {
//     setIsPopupOpen(false);
//   };


  return (
    <>
      <div className='main-nav-card2'>

        {/* <div className='text-flex-card'>
          <motion.div
          className="box"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.10,
            ease: [0, 0.71, 0.2, 1.01],
            scale: {
              type: "spring",
              damping: 5,
              stiffness: 100,
              restDelta: 0.001
            }
          }}
          >
            <img
              src='https://res.cloudinary.com/djo2jovhh/image/upload/v1719816704/5fde5f1b-9415-42d2-9adf-7495f9581307_copy_1_phr7xp.svg'
              alt='image'
              height={651}
              width={541}
              className='women-image'
            />
            <img src="https://res.cloudinary.com/djo2jovhh/image/upload/v1720072072/Arrow_03_h767pr.svg" className="arrow" alt="arrow"/>
          </motion.div>
          <div ref={ref}    style={{
          transform: isInView ? "none" : "translateX(-200px)",
          opacity: isInView ? 1 : 0,
          transition: "all 1.2s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
        }} className='text-card'>
            <h1 className='main-text'>
              Give your customers<br /> the best Payment experience
            </h1>
            <p className='para-text'>
              100+ payment options available, Easy
              Integration, Faster Settlements, Zero Setup Fee.
            </p>
            <button className='contct-button'>CONTACT US</button>
          </div>
        </div>
       
       <div className='services-card'>
          <div className='flex-items-card-below'>
            <div className='main-flex-card-items'>
              <div>
                <img src='https://res.cloudinary.com/djo2jovhh/image/upload/v1719817876/Vector_1_gsavcv.svg' alt='Payment Links' />
                <h1 className='below-text'>
                  Payment Links
                </h1>
                <p className='below-para'>
                  Generate Instant payment links for easy
                  and fast payments.
                </p>
              </div>
            </div>
            <div className='vertical-line'></div>

            <div className='main-flex-card-items'>
              <div>
                <img src='https://res.cloudinary.com/djo2jovhh/image/upload/v1719822880/Vector_2_ps8axw.svg' alt='Fully Encrypted' />
                <h1 className='below-text'>
                  Fully Encrypted
                </h1>
                <p className='below-para'>
                  PCI DSS compliant payment gateway to
                  keep user data safe & secure.
                </p>
              </div>
            </div>
            <div className='vertical-line'></div>

            <div className='main-flex-card-items'>
              <div>
                <img src='https://res.cloudinary.com/djo2jovhh/image/upload/v1719822881/Vector_3_jbj7ph.svg' alt='Fast Settlements' className='bg-image' />
                <h1 className='below-text'>
                  Fast Settlements
                </h1>
                <p className='below-para'>
                  Payment offers day to T+2 settlements
                  depending on business and payment
                  methods.
                </p>
              </div>
            </div>
            <div className='vertical-line'></div>

            <div className='main-flex-card-items'>
              <div>
                <img src='https://res.cloudinary.com/djo2jovhh/image/upload/v1719822881/Vector_4_wowbav.svg' alt='24×7 Customer Support' />
                <h1 className='below-text'>
                  24×7 Customer Support
                </h1>
                <p className='below-para'>
                  You can contact us via chat or email and
                  our team is happy to help
                </p>
              </div>
            </div>
          </div>
        </div> */}
        
        <div className='payment-solution-card1'>
          <div className='text-button-card'>
            <div className='text-left-card'>
              <h1 style={{textAlign:"left"}} className='main-head-text-change'>
              PayIn
              </h1>
              <p style={{fontSize:"18px"}}>Effortless Payments, Anytime, Anywhere</p>
              <p style={{fontSize:"18px"}}>Apexpay's PayIn system is designed to handle end-to-end payments, ensuring seamless and secure transactions. Accept all major payment modes with ease and enjoy a robust, user-friendly platform.</p>
{/*             
              <div className="button-group">
                <button className="button-payments">Payment Gateway</button>
                <button className="button-payments">Payment Links</button>
                <button className="button-payments">UPI</button>
              </div>
              
              <div className="button-group">
                <button className="button-payments">Net Banking</button>
                <button className="button-payments">Payment Forms</button>
                <button className="button-payments">E Wallet</button>
              </div> */}

            </div>
          </div>
          <div style={{marginTop:10}}>
            <img
              src='https://res.cloudinary.com/djo2jovhh/image/upload/v1719924300/avgz571mqiptrljq80ok.svg'
              alt='Payment Solutions'
              id="animated-image"
    className="slide-in-right"
            />
          </div>
        </div>
        
        
            <div style={{display:"flex",justifyContent:"center",textAlign:"center",marginTop:"30px",marginBottom:"40px"}}>
                <div>
            <h1 style={{textAlign:"left"}}>A System Designed to Handle End-to-End Payments</h1>
            <p style={{width:1000,}}>Experience a comprehensive solution that simplifies the entire payment process from start to finish. With Apexpay, managing your transactions has never been easier.</p>
            </div>
            </div>
        
      
      <div className='payment-solution-card2' style={{marginTop:"100px"}}>

<motion.div
className="box"
initial={{ opacity: 0, scale: 0.5 }}
animate={{ opacity: 1, scale: 1 }}
transition={{
  duration: 0.10,
  ease: [0, 0.71, 0.2, 1.01],
  scale: {
    type: "spring",
    damping: 5,
    stiffness: 100,
    restDelta: 0.001
  }
}}

>
  <img
    src='https://res.cloudinary.com/djo2jovhh/image/upload/v1719924965/cgrss7y0x5gowpy4drwl.svg'
    alt='Payment Solutions'
    className="rotate-360"
     id="animated-image2"
     height={442}
     width={442}
  />
</motion.div>
<div className='text-button-card'>
  <div className='text-left-card2'>
    <h1 className='main-head-text-change' style={{textAlign:"left"}}>
    Accept All Payment Modes

    </h1>
    <p style={{fontSize:"18px"}}>Apexpay supports an extensive range of payment methods, including domestic and international credit and debit cards, EMIs (Credit/Debit Cards & Cardless), PayLater, Netbanking, UPI, and mobile wallets. Our platform ensures you can accept payments from any source effortlessly.

</p>
    {/* <div className="button-group">
      <button className="button-payments">Ready ot use plugins</button>
      <button className="button-payments">Easy integration</button>
    </div>
    <div className="button-group">
      <button className="button-payments">Easy Customisation</button>
      <button className="button-payments">Premium Support</button>
    </div> */}
  </div>
    <img src='https://res.cloudinary.com/djo2jovhh/image/upload/v1719923696/c9qruhszurtposanphy5.svg' alt='logo' className='bg-image2'/>
</div>
</div>
      
      
      <div className='payment-solution-card3'>
          <div className='text-button-card'>
            <div className='text-left-card3'>


            <h1 className='main-head-text-change' style={{textAlign:"left"}}>
            Powerful Dashboard


              </h1>
              <p style={{fontSize:"18px"}}>Leverage our powerful dashboard to access detailed reports and statistics on payments, settlements, refunds, and more. Make informed business decisions with comprehensive insights at your fingertips.

</p>

              {/* <div className="button-group">
                <button className="button-payments">Transaction Reports</button>
                <button className="button-payments">Settelement and Payouts</button>
              </div>
              <div className="button-group">
                <button className="button-payments">E-Wallet Solution</button>
                <button className="button-payments">Easy Configuration</button>
              </div>
              <div className="button-group">
                <button className="button-payments">Premium Support</button>

              </div> */}
              
            </div>
            <img src='https://res.cloudinary.com/djo2jovhh/image/upload/v1719923696/c9qruhszurtposanphy5.svg' alt='logo' className='bg-image3'/>

          </div>
          <div>
            <img 
              src='https://res.cloudinary.com/djo2jovhh/image/upload/v1720087805/Group_1171274748_1_zwbnjv.svg' 
              alt='Payment Solutions' 
              style={{marginTop:"40px",width:"400px"}}
               

            />
          </div>
        </div>
      
      
      <div className='payment-solution-card2' style={{marginTop:"100px"}}> 

<motion.div
className="box"
initial={{ opacity: 0, scale: 0.5 }}
animate={{ opacity: 1, scale: 1 }}
transition={{
  duration: 0.10,
  ease: [0, 0.71, 0.2, 1.01],
  scale: {
    type: "spring",
    damping: 5,
    stiffness: 100,
    restDelta: 0.001
  }
}}

>
  <img
    src='https://res.cloudinary.com/djo2jovhh/image/upload/v1719924965/cgrss7y0x5gowpy4drwl.svg'
    alt='Payment Solutions'
    className="rotate-360"
     id="animated-image2"
     height={442}
     width={442}
  />
</motion.div>
<div className='text-button-card'>
  <div className='text-left-card2'>
    <h1 className='main-head-text-change' style={{textAlign:"left"}}>
    Payment Links

    </h1>
    <p style={{fontSize:"18px"}}>Share Payment Links Easily Share payment links via email, SMS, messenger, chatbot, and more to get paid immediately. Accepting payments from customers is now just a link away.

</p>
<p style={{fontSize:"18px"}}>Create and Track Payment Links with Apexpay Mobile App Create unlimited payment links for free, from anywhere, at any time.

</p>
<ul>
  <li style={{fontSize:"18px"}}> Instant Link Creation and Sharing: Generate and share payment links instantly.</li>
  <li style={{fontSize:"18px"}}>On-the-Go Payment Tracking: Monitor payments conveniently on the go.</li>
  <li style={{fontSize:"18px"}}>One-Click Refunds: Issue refunds with a single click.</li>
  <li style={{fontSize:"18px"}}>Hassle-Free Onboarding: Enjoy a seamless onboarding experience.  
  </li>
</ul>
    {/* <div className="button-group">
      <button className="button-payments">Ready ot use plugins</button>
      <button className="button-payments">Easy integration</button>
    </div>
    <div className="button-group">
      <button className="button-payments">Easy Customisation</button>
      <button className="button-payments">Premium Support</button>
    </div> */}
  </div>
    <img src='https://res.cloudinary.com/djo2jovhh/image/upload/v1719923696/c9qruhszurtposanphy5.svg' alt='logo' className='bg-image2'/>
</div>
</div>
      
      
      <div className='payment-solution-card3'>
          <div className='text-button-card'>
            <div className='text-left-card3'>


            <h1 className='main-head-text-change' style={{textAlign:"left"}}>
            Payment Button



              </h1>
              <p style={{fontSize:"18px"}}>Create, Copy & Collect with Ease Add a Payment Button to your website and start accepting one-time payments. Thousands of NGOs, SMEs, and freelancers are already streamlining their payment collection process with our simple integration. 

</p>

              {/* <div className="button-group">
                <button className="button-payments">Transaction Reports</button>
                <button className="button-payments">Settelement and Payouts</button>
              </div>
              <div className="button-group">
                <button className="button-payments">E-Wallet Solution</button>
                <button className="button-payments">Easy Configuration</button>
              </div>
              <div className="button-group">
                <button className="button-payments">Premium Support</button>

              </div> */}
              
            </div>
            <img src='https://res.cloudinary.com/djo2jovhh/image/upload/v1719923696/c9qruhszurtposanphy5.svg' alt='logo' className='bg-image3'/>

          </div>
          <div>
            <img 
              src='https://res.cloudinary.com/djo2jovhh/image/upload/v1720087805/Group_1171274748_1_zwbnjv.svg' 
              alt='Payment Solutions' 
              style={{marginTop:"40px",width:"400px"}}
               

            />
          </div>
        </div>
      
      
      <div className='payment-solution-card2' style={{marginTop:"100px"}}>

<motion.div
className="box"
initial={{ opacity: 0, scale: 0.5 }}
animate={{ opacity: 1, scale: 1 }}
transition={{
  duration: 0.10,
  ease: [0, 0.71, 0.2, 1.01],
  scale: {
    type: "spring",
    damping: 5,
    stiffness: 100,
    restDelta: 0.001
  }
}}

>
  <img
    src='https://res.cloudinary.com/djo2jovhh/image/upload/v1719924965/cgrss7y0x5gowpy4drwl.svg'
    alt='Payment Solutions'
    className="rotate-360"
     id="animated-image2"
     height={442}
     width={442}
  />
</motion.div>
<div className='text-button-card'>
  <div className='text-left-card2'>
    <h1 className='main-head-text-change' style={{textAlign:"left"}}>
    Built for Developers

    </h1>
    <p style={{fontSize:"18px"}}>Our platform features robust, clean, and developer-friendly APIs, plugins, and libraries for all major languages and platforms. Focus on building great products while we handle the complexity of payment processing.

</p>
    {/* <div className="button-group">
      <button className="button-payments">Ready ot use plugins</button>
      <button className="button-payments">Easy integration</button>
    </div>
    <div className="button-group">
      <button className="button-payments">Easy Customisation</button>
      <button className="button-payments">Premium Support</button>
    </div> */}
  </div>
    <img src='https://res.cloudinary.com/djo2jovhh/image/upload/v1719923696/c9qruhszurtposanphy5.svg' alt='logo' className='bg-image2'/>
</div>
</div>
      
      
      
      
      
           

{/* onClick={openPopup} */}
        
        <div className='last-bg-card' >
              <div className='get-consult-card'>
                <h1 className='touch-head'>Get in Touch with us</h1>
                <p className='touch-para'>Join Our Merchant Community</p>
              </div>
            </div>
        
            
            {/* <PopupForm isOpen={isPopupOpen} onClose={closePopup} /> */}

            
            <div className='footer-card'>
              <div className='footer-flex-card'>
                <div className='footer-first-card'>
                  <h1>Make your money move</h1>
                  <p className='footer-para'>Pay online, send money and buy crypto with 
                  a digital wallet used by millions.</p>
                </div>
                <div className='footer-items'>
                  <h1 className='footer-head'>Navigation</h1>
                  <img src='https://res.cloudinary.com/djo2jovhh/image/upload/v1719920763/bqsuwv8fib6hfj6rwnes.svg'/>
                  <p>Terms & Conditions</p>
                  <p>Privacy Policy</p>
                  <p>Contact us</p>
                </div>
                <div className='footer-items'>

                  <h1 className='footer-head'>Support</h1>
                  <img src='https://res.cloudinary.com/djo2jovhh/image/upload/v1719920763/bqsuwv8fib6hfj6rwnes.svg'/>
                  <p>FAQ'S</p>
                  <p>Terms & Conditions</p>
                  <p>Contact Us</p>
                </div>

              </div>
              <div className='footer-end-card'>
                <div style={{display:"flex",gap:"10px",alignItems:"center",marginLeft:"100px"}}>
                <div className='email-card'></div>
                <p>support@apexpay.tech</p>
                </div>
                <div className='footer-circle-card-flex'>  
                <div className='footer-circle-card'></div>
                <div className='footer-circle-card'></div>
                <div className='footer-circle-card'></div>
                <div className='footer-circle-card'></div>
                </div>

              </div>
              <div className='center-line'>
              <div className='horizantal-line'></div>
              </div>
              <div>
                <p></p>
              </div>
            </div>
            
      </div>
    </>
  );
}
export default PayIn;