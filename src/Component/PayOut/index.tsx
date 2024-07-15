"use strict"

// import { useRef,  } from "react";
import { motion,  } from "framer-motion";
import "animate.css/animate.compat.css"
// useState
// useInView


import './index.css';
// import PopupForm from "../PopForm";
const PayOut = () => {
  // const [isPopupOpen, setIsPopupOpen] = useState(false)
  // const ref = useRef(null);
  // const isInView = useInView(ref, { once: true });
  // const openPopup = () => {
  //   setIsPopupOpen(true);
  // };

  // const closePopup = () => {
  //   setIsPopupOpen(false);
  // };


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
              <h1  style={{textAlign:"left"}}  className='main-head-text-change'>
              Payout

              </h1>
              <p style={{fontSize:"18px"}}>Effortless Payouts for Every Business Need
              </p>
              <p style={{fontSize:"18px"}}>Apexpay offers simple, reliable, and scalable payout solutions. Instantly send payments to bank accounts, UPI IDs, and wallets securely through APIs, dashboards, and file uploads.</p>
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
          <div>
            <img
              src='https://res.cloudinary.com/djo2jovhh/image/upload/v1719924300/avgz571mqiptrljq80ok.svg'
              alt='Payment Solutions'
              id="animated-image"
    className="slide-in-right"
            />
          </div>
        </div>
        
        
            <div style={{display:"flex",justifyContent:"center",textAlign:"center",marginTop:"40px",marginBottom:"40px"}}>
                <div>
            <h1>Comprehensive Financial Control with Integrated Solutions
            </h1>
            <p style={{fontSize:"18px"}} >Maximize your financial control with Apexpay’s fully integrated source-to-pay solution. Automate and streamline your accounts payable and vendor payment workflows on a single, unified platform.

</p>
            </div>
            </div>
        
      
      <div className='payment-solution-card2'>

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
    <h1 style={{textAlign:"left"}}  className='main-head-text-change'>
    Full Stack Payout Capabilities


    </h1>
    <p style={{fontSize:"18px"}}>Enjoy the convenience and power of our full stack payout capabilities. Our easy and efficient payout solutions prioritize the needs of your payees, ensuring a seamless experience.

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


            <h1 style={{textAlign:"left"}}  className='main-head-text-change'>
            Payouts to Bank Accounts


              </h1>
              <p style={{fontSize:"18px"}}>Make payouts 24/7, even on bank holidays, using IMPS, NEFT, RTGS, and UPI. Apexpay ensures your payments reach your payees’ bank accounts reliably and promptly.

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
      
      
      <div className='payment-solution-card2'>

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
    <h1 style={{textAlign:"left"}}  className='main-head-text-change'>
    Scalable Solutions for All Business Sizes


    </h1>
    <p style={{fontSize:"18px"}}>Whether you’re a small business needing fast self-serve payouts or a large enterprise requiring custom integrations, Apexpay’s payout capabilities are designed to meet the unique needs of businesses of all sizes.



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


            <h1 style={{textAlign:"left"}}  className='main-head-text-change'>
            User-Friendly Dashboard Payouts


              </h1>
              <p style={{fontSize:"18px"}}>No developer? No problem. Easily manage payouts directly from our intuitive dashboard. Start making payouts in minutes by entering the payee’s account details or UPI handle.



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
      
      
      <div className='payment-solution-card2'>

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
    <h1 style={{textAlign:"left"}}  className='main-head-text-change'>
    Bulk Payouts Made Simple
    </h1>
    <p style={{fontSize:"18px"}}>Excel enthusiasts can send bulk payouts with just one click. Our platform supports easy file uploads, allowing you to handle large volumes of payments efficiently.

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
      
      
      {/* <div className='chart-tech'>
            <div>
              <h1>
              Payments as a Service <span className='span-text'>Beyond Boundaries</span>
              </h1>
              <p className='chart-para'>Ingesting the potential of payment network infrastructure capabilities to all line of businesses in India
              </p>
              <div className='flex-buers-card'> 
                <div className='flex-buyers'>
                  <img src='https://res.cloudinary.com/djo2jovhh/image/upload/v1719917128/rwtvwx2pjxwygtdogrfe.svg'/>
                  <div className='text-card-buyers'>
                    <h1 className='buyer-head'>+15 000</h1>
                    <p className='buyer-para'>Business buyers</p>
                  </div>
                </div>
                <div className='flex-buyers'>
                  <img src='https://res.cloudinary.com/djo2jovhh/image/upload/v1719917128/rwtvwx2pjxwygtdogrfe.svg'/>
                  <div className='text-card-buyers'>
                    <h1 className='buyer-head'>+35 000 00</h1>
                    <p className='buyer-para'>Orders processed</p>
                  </div>
                </div>
                <div className='flex-buyers'>
                  <img src='https://res.cloudinary.com/djo2jovhh/image/upload/v1719917128/rwtvwx2pjxwygtdogrfe.svg'/>
                  <div className='text-card-buyers'>
                    <h1 className='buyer-head'>+20 0000</h1>
                    <p className='buyer-para'>Active merchants</p>
                  </div>
                </div>
              </div>
            </div>
            
            </div> */}
      
      
            
            {/* <div className='image-flex'>
            <img src='https://res.cloudinary.com/djo2jovhh/image/upload/v1719917875/qk9rigoxercyf0e3eyja.svg'/>
 
            </div>
            

           
           <div className='chart-tech'>
              <div>
              <h1>
                Our<span className='span-text'> Services</span>
              </h1>
              <p className='chart-para'>Our Payment solutions are used by diversified Business in different markets.</p>
              <div className='card-flex'>
                <div className='main-services-card1'>
                 <div>
                 <img src='https://res.cloudinary.com/djo2jovhh/image/upload/v1719918537/lwtnraez8z8jey1voa4r.svg' height={60} width={60} className='card-image' />
                 <h1 className='card-text'>Collect  Payments</h1>
                 </div>
                </div>
                <div className='main-services-card2'>
                <div>
                 <img src='https://res.cloudinary.com/djo2jovhh/image/upload/v1720012269/jwgwxpqxxvzljfvqyso4.svg' height={60} width={60} className='card-image' />
                 <h1 className='card-text'>Make Payments</h1>
                 </div>
                </div>
                <div className='main-services-card3'>
                <div>
                 <img src='https://res.cloudinary.com/djo2jovhh/image/upload/v1719922337/epceukjflwvtl3huyot3.svg' height={60} width={60} className='card-image' />
                 <h1 className='card-text'>Instant Settlement</h1>
                 </div>
                </div>
              </div>
              <div className='card-flex'>
                <div className='main-services-card4'>
                <div>
                 <img src='https://res.cloudinary.com/djo2jovhh/image/upload/v1719922384/xg6esgcw3zao1ogj06mx.svg' height={60} width={60} className='card-image' />
                 <h1 className='card-text'>E-Commerce </h1>
                 </div>
                </div>
                <div className='main-services-card5'>
                <div>
                 <img src='https://res.cloudinary.com/djo2jovhh/image/upload/v1719922428/bhqbkamtr5tnstfqu9q9.svg' height={60} width={60} className='card-image' />
                 <h1 className='card-text'>Digital Wallet</h1>
                 </div>
                </div>
                <div className='main-services-card6'>
                <div>
                 <img src='https://res.cloudinary.com/djo2jovhh/image/upload/v1719922466/gq2purdic31uxgbeu2j4.svg' style={{color:"#D8008B"}} height={60} width={60} className='card-image' />
                 <h1 className='card-text'>Retailers</h1>
                 </div>
                </div>
              </div>
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
                <h1 className="footer-head">Make your money move</h1>
                <p className='footer-para'>Pay online, send money and buy crypto with
                  a digital wallet used by millions.</p>
              </div>
              <div className='footer-items'>
                <h1 className='footer-head'>Navigation</h1>
                <img src='https://res.cloudinary.com/djo2jovhh/image/upload/v1719920763/bqsuwv8fib6hfj6rwnes.svg' />
                <p>Terms & Conditions</p>
                <p>Privacy Policy</p>
                <p>Contact us</p>
              </div>
              <div className='footer-items'>

                <h1 className='footer-head'>Support</h1>
                <img src='https://res.cloudinary.com/djo2jovhh/image/upload/v1719920763/bqsuwv8fib6hfj6rwnes.svg' />
                <p>FAQ'S</p>
                <p>Terms & Conditions</p>
                <p>Contact Us</p>
              </div>

            </div>
            <div className='footer-end-card'>
              <div className="main-footer-last-end">
                <div className='email-card'></div>
                <p className="foooter-support-para">support@apexpay.tech</p>
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
export default PayOut;