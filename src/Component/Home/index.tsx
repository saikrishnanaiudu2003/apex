"use strict"
import { useRef,} from "react";
import { motion, useInView } from "framer-motion";
import "animate.css/animate.compat.css"


import { Link } from 'react-router-dom';


import 'react-responsive-carousel/lib/styles/carousel.min.css';










import './index.css';
const Home = () => {
  // const [isPopupOpen, setIsPopupOpen] = useState(false)
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  // const openPopup = () => {
  //   setIsPopupOpen(true);
  // };

  // const closePopup = () => {
  //   setIsPopupOpen(false);
  // };


  return (
    <>
      <div className='main-nav-card'>

        <div className='text-flex-card'>
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
       
            <img src="https://res.cloudinary.com/djo2jovhh/image/upload/v1720072072/Arrow_03_h767pr.svg" className="arrow" alt="arrow" />
          </motion.div>
          <div ref={ref} style={{
            transform: isInView ? "none" : "translateX(-200px)",
            opacity: isInView ? 1 : 0,
            transition: "all 1.2s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
          }} className='text-card'>
            <h1  style={{fontWeight: 650,}}  className='main-text'>
              Give your customers<br /> <span > the best Payment <br /> experience</span>
            </h1>
            <p className='para-text'>
              100+ payment options available, Easy
              Integration, Faster Settlements, Zero Setup Fee.
            </p>
            <button className='contct-button'>CONTACT US</button>
          </div>
          <img
            src='https://res.cloudinary.com/djo2jovhh/image/upload/v1719816704/5fde5f1b-9415-42d2-9adf-7495f9581307_copy_1_phr7xp.svg'
            alt='image'
            height={651}
            width={541}
            className='women-image-sm'
          />
{/*            <div className='services-card'>
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
              <div className="horizantla-line"></div>
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
              <div className="horizantla-line"></div>
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
              <div className="horizantla-line"></div>
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
              <div className="horizantla-line"></div>
            </div>
          </div>
        </div>
        </div>
        
       
          <div className='payment-solution-card1'>
            <div className='text-button-card'>
              <div className='text-left-card'>
                <h1 className='main-head-text-change'>
                  Manage your payments at your fingertips in every aspect of the payment process
                </h1>

                <div className="button-group">
                  <button className="button-payments">Payment Gateway</button>
                  <button className="button-payments">Payment Links</button>
                  <button className="button-payments">UPI</button>
                </div>
                <div className="button-group2">
                  <div style={{ marginTop: "10px" }}>
                    <button className="button-payments">Payment Gateway</button>
                  </div>
                  <div style={{ marginTop: "10px" }}>
                    <button className="button-payments">Payment Links</button>
                  </div>
                  <div style={{ marginTop: "10px" }}>
                    <button className="button-payments">UPI</button>
                  </div>
                </div>

                <div className="button-group">
                  <button className="button-payments">Net Banking</button>
                  <button className="button-payments">Payment Forms</button>
                  <button className="button-payments">E Wallet</button>
                </div>

                <div className="button-group2">
                  <div style={{ marginTop: "10px" }}>
                    <button className="button-payments">Net Banking</button>
                  </div>
                  <div style={{ marginTop: "10px" }}>
                    <button className="button-payments">Payment Forms</button>
                  </div>
                  <div style={{ marginTop: "10px" }}>
                    <button className="button-payments">E Wallet</button>
                  </div>
                </div>
                <div className="main-image-card">
              <img
                src='https://res.cloudinary.com/djo2jovhh/image/upload/v1719924300/avgz571mqiptrljq80ok.svg'
                alt='Payment Solutions'
              
                className="slide-in-right2"
              />
              
            </div>
              </div>
            </div>
            <div className="main-image-card">
              <img
                src='https://res.cloudinary.com/djo2jovhh/image/upload/v1719924300/avgz571mqiptrljq80ok.svg'
                alt='Payment Solutions'
                id="animated-image"
                className="slide-in-right"
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
                <h1 className='main-head-text-change'>
                  Payment Integration Suit , A comprehensive
                  integration platform empowering you to
                  integrate and automate payment processes
                  with any platform
                </h1>
                <div className="button-group">
                  <button className="button-payments">Ready ot use plugins</button>
                  <button className="button-payments">Easy integration</button>
                </div>
                <div className="button-group2">
                  <div style={{ marginTop: "10px" }}>
                    <button className="button-payments">Ready ot use plugins</button>
                  </div>
                  <div style={{ marginTop: "10px" }}>
                    <button className="button-payments">Easy integration</button>
                  </div>

                </div>
                <div className="button-group">
                  <button className="button-payments">Easy Customisation</button>
                  <button className="button-payments">Premium Support</button>
                </div>
                <div className="button-group2">
                  <div style={{ marginTop: "10px" }}>
                    <button className="button-payments">Easy Customisation</button>
                  </div>
                  <div style={{ marginTop: "10px" }}>
                    <button className="button-payments">Premium Support</button>
                  </div>

                </div>
              </div>
              <img src='https://res.cloudinary.com/djo2jovhh/image/upload/v1719923696/c9qruhszurtposanphy5.svg' alt='logo' className='bg-image2' />
            </div>
          </div>
        
          
          <div className='payment-solution-card3'>
            <div className='text-button-card'>
              <div className='text-left-card3'>


                <h1 className='main-head-text-change'>
                  Insights and Analytic Reports to discover the patterns, trends, fraud detection and real time monitoring intuitive dashboard experience

                </h1>

                <div className="button-group">
                  <button className="button-payments">Transaction Reports</button>
                  <button className="button-payments">Settlement and Payouts</button>
                </div>
                <div className="button-group2">
                  <div style={{ marginTop: "10px" }}>
                    <button className="button-payments">Transaction Reports</button>
                  </div>
                  <div style={{ marginTop: "10px" }}>
                    <button className="button-payments">Settelement and Payouts</button>
                  </div>

                </div>
                <div className="button-group2">
                  <div style={{ marginTop: "10px" }}>
                    <button className="button-payments">E-Wallet Solution</button>
                  </div>
                  <div style={{ marginTop: "10px" }}>
                    <button className="button-payments">Easy Configuration</button>
                  </div>

                </div>
                <div className="button-group2">
                  <div style={{ marginTop: "10px" }}>
                    <button className="button-payments">Premium Support</button>
                  </div>
                  

                </div>
                <div className="button-group">
                  <button className="button-payments">E-Wallet Solution</button>
                  <button className="button-payments">Easy Configuration</button>
                </div>

                <div className="button-group">
                  <button className="button-payments">Premium Support</button>

                </div>

              </div>
              <img src='https://res.cloudinary.com/djo2jovhh/image/upload/v1719923696/c9qruhszurtposanphy5.svg' alt='logo' className='bg-image3' />

            </div>
            <div>
            <img
                src='https://res.cloudinary.com/djo2jovhh/image/upload/v1721060190/Group_1171274765_e6ennq.svg'
                alt='Payment Solutions'
                className="rotate-36012"
              
                height={442}
                width={442}
                style={{marginTop:"20px"}}
              />
            {/* <Carousel 
            autoPlay 
            infiniteLoop 
            showThumbs={false}
            showStatus={false}
            interval={3000}
        >
            <div>
                <img src="path/to/your/image1.jpg" className="rotate-36012" alt="Image 1" />
            </div>
            <div>
                <img src="path/to/your/image2.jpg" className="rotate-36012" alt="Image 2" />
            </div>
            <div>
                <img src="path/to/your/image3.jpg" className="rotate-36012" alt="Image 3" />
            </div>
            
        </Carousel> */}
{/*             </div>
          </div>
        



       
          <div className='chart-tech'>
            <div>
              <h1 className="sefvies-text">
                Payments as a Service <span className='span-text'>Beyond Boundaries</span>
              </h1>
              <p className='chart-para'>Ingesting the potential of payment network infrastructure capabilities to all line of businesses in India
              </p>
              <div className='flex-buers-card'>
                <div className='flex-buyers'>
                  <img src='https://res.cloudinary.com/djo2jovhh/image/upload/v1719917128/rwtvwx2pjxwygtdogrfe.svg' />
                  <div className='text-card-buyers'>
                    <h1 className='buyer-head'>+15 000</h1>
                    <p className='buyer-para'>Business buyers</p>
                  </div>
                </div>
                <div className='flex-buyers'>
                  <img src='https://res.cloudinary.com/djo2jovhh/image/upload/v1719917128/rwtvwx2pjxwygtdogrfe.svg' />
                  <div className='text-card-buyers'>
                    <h1 className='buyer-head'>+35 000 00</h1>
                    <p className='buyer-para'>Orders processed</p>
                  </div>
                </div>
                <div className='flex-buyers'>
                  <img src='https://res.cloudinary.com/djo2jovhh/image/upload/v1719917128/rwtvwx2pjxwygtdogrfe.svg' />
                  <div className='text-card-buyers'>
                    <h1 className='buyer-head'>+20 0000</h1>
                    <p className='buyer-para'>Active merchants</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        
       
          <div className='image-flex'>
            <img src='https://res.cloudinary.com/djo2jovhh/image/upload/v1719917875/qk9rigoxercyf0e3eyja.svg' className="world-map-image" />

          </div>
        

       
          <div className='chart-tech1'>
            <div>
              <h1>
                Our<span className='span-text1'> Services</span>
              </h1>
              <p className='chart-para1'>Our Payment solutions are used by diversified Business in different markets.</p>
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
                    <img src='https://res.cloudinary.com/djo2jovhh/image/upload/v1719922466/gq2purdic31uxgbeu2j4.svg' style={{ color: "#D8008B" }} height={60} width={60} className='card-image' />
                    <h1 className='card-text'>Retailers</h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
        

       
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
                <img src="https://res.cloudinary.com/djo2jovhh/image/upload/v1721051322/apexpay_logopng_white_1_vxyl0s.svg"/>
                <p className='footer-para'>Pay online, send money and buy crypto with
                  a digital wallet used by millions.</p>
              </div>
              <div className='footer-items2' >
                <h1 className='footer-head'>Company</h1>
                <div style={{display:"flex"}}>
                  <div style={{backgroundColor:"#9E009E",width:"78px",height:"1px"}}></div>
                  <div style={{backgroundColor:"#FFFFFF",width:"98px",height:"1px"}}></div>
                </div>
                <Link className="nav-item2" to="terms-conditions"> <p>Home</p></Link>
              <Link to="privacy-policy" className="nav-item2">  <p>About Us</p></Link>
              <Link to="privacy-policy" className="nav-item2">  <p>Blog</p></Link>
              <Link to="privacy-policy" className="nav-item2">  <p>Contact</p></Link>
              <Link to="privacy-policy" className="nav-item2">  <p>Privacy Policy</p></Link>
              <Link to="terms-conditions" className="nav-item2">  <p>Terms & Conditions</p></Link>

                <p>Contact us</p>
              </div>
              <div className='footer-items'>
                <h1 className='footer-head'>Services</h1>
                <div style={{display:"flex"}}>
                  <div style={{backgroundColor:"#9E009E",width:"78px",height:"1px"}}></div>
                  <div style={{backgroundColor:"#FFFFFF",width:"98px",height:"1px"}}></div>
                </div>
                <Link className="nav-item2" to="payIn"> <p>PayIn</p></Link>
              <Link to="payout" className="nav-item2">  <p>PayOut</p></Link>
              </div>
              <div className='footer-items'>

                <h1 className='footer-head'>Contact</h1>
                <div style={{display:"flex"}}>
                  <div style={{backgroundColor:"#9E009E",width:"78px",height:"1px"}}></div>
                  <div style={{backgroundColor:"#FFFFFF",width:"98px",height:"1px"}}></div>
                </div>
                <p>Support@apexpay.tech</p>
               <div style={{display:"flex",gap:"10px",justifyContent:"center",alignItems:"center"}}>
                <img src="https://res.cloudinary.com/djo2jovhh/image/upload/v1721059712/Group_2_dbx6yg.svg"/>
                <img src="https://res.cloudinary.com/djo2jovhh/image/upload/v1721059705/Group_1171274761_fpxbd8.svg"/>
                <img src="https://res.cloudinary.com/djo2jovhh/image/upload/v1721059700/Group_3_rbfqge.svg"/> 
               <img src="https://res.cloudinary.com/djo2jovhh/image/upload/v1721059694/Group_1171274760_njnetj.svg"/>

               </div>
              </div>
 */}
            </div>
            {/* <div className='footer-end-card'> */}
              <div className="main-footer-last-end">
                <div className='email-card'>
                <MdOutlineMailOutline  color="#D8008B" size={25} />

                </div>
                <p className="foooter-support-para">support@apexpay.tech</p>
              </div>
              <div className='footer-circle-card-flex'>
                <div className='footer-circle-card'>
                <CiLinkedin color="#D8008B" size={20} />

                </div>
                <div className='footer-circle-card'>
                <FaFacebookSquare  color="#D8008B" size={20}/>

                </div>
                <div className='footer-circle-card'>
                <FaInstagram color="#D8008B" size={20} />

                </div>
                <div className='footer-circle-card'>
                <CiTwitter color="#D8008B" size={20}/>

                </div>
              </div>

            </div> */}
            <div className='center-line'>
              <div className='horizantal-line'>

              </div>
            </div>
            <div>
              <p></p>
            </div>
          </div>
        
        
        
{/*        
       
          <div className='payment-solution-card1'>
            <div className='text-button-card'>
              <div className='text-left-card'>
                <h1 className='main-head-text-change'>
                  Manage your payments at your fingertips in every aspect of the payment process
                </h1>

                <div className="button-group">
                  <button className="button-payments">Payment Gateway</button>
                  <button className="button-payments">Payment Links</button>
                  <button className="button-payments">UPI</button>
                </div>
                <div className="button-group2">
                  <div style={{ marginTop: "10px" }}>
                    <button className="button-payments">Payment Gateway</button>
                  </div>
                  <div style={{ marginTop: "10px" }}>
                    <button className="button-payments">Payment Links</button>
                  </div>
                  <div style={{ marginTop: "10px" }}>
                    <button className="button-payments">UPI</button>
                  </div>
                </div>

                <div className="button-group">
                  <button className="button-payments">Net Banking</button>
                  <button className="button-payments">Payment Forms</button>
                  <button className="button-payments">E Wallet</button>
                </div>

                <div className="button-group2">
                  <div style={{ marginTop: "10px" }}>
                    <button className="button-payments">Net Banking</button>
                  </div>
                  <div style={{ marginTop: "10px" }}>
                    <button className="button-payments">Payment Forms</button>
                  </div>
                  <div style={{ marginTop: "10px" }}>
                    <button className="button-payments">E Wallet</button>
                  </div>
                </div>
                <div className="main-image-card">
              <img
                src='https://res.cloudinary.com/djo2jovhh/image/upload/v1719924300/avgz571mqiptrljq80ok.svg'
                alt='Payment Solutions'
              
                className="slide-in-right2"
              />
              
            </div>
              </div>
            </div>
            <div className="main-image-card">
              <img
                src='https://res.cloudinary.com/djo2jovhh/image/upload/v1719924300/avgz571mqiptrljq80ok.svg'
                alt='Payment Solutions'
                id="animated-image"
                className="slide-in-right"
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
                <h1 className='main-head-text-change'>
                  Payment Integration Suit , A comprehensive
                  integration platform empowering you to
                  integrate and automate payment processes
                  with any platform
                </h1>
                <div className="button-group">
                  <button className="button-payments">Ready ot use plugins</button>
                  <button className="button-payments">Easy integration</button>
                </div>
                <div className="button-group2">
                  <div style={{ marginTop: "10px" }}>
                    <button className="button-payments">Ready ot use plugins</button>
                  </div>
                  <div style={{ marginTop: "10px" }}>
                    <button className="button-payments">Easy integration</button>
                  </div>

                </div>
                <div className="button-group">
                  <button className="button-payments">Easy Customisation</button>
                  <button className="button-payments">Premium Support</button>
                </div>
                <div className="button-group2">
                  <div style={{ marginTop: "10px" }}>
                    <button className="button-payments">Easy Customisation</button>
                  </div>
                  <div style={{ marginTop: "10px" }}>
                    <button className="button-payments">Premium Support</button>
                  </div>

                </div>
              </div>
              <img src='https://res.cloudinary.com/djo2jovhh/image/upload/v1719923696/c9qruhszurtposanphy5.svg' alt='logo' className='bg-image2' />
            </div>
          </div>
        
       
          <div className='payment-solution-card3'>
            <div className='text-button-card'>
              <div className='text-left-card3'>


                <h1 className='main-head-text-change'>
                  Insights and Analytic Reports to discover the patterns, trends, fraud detection and real time monitoring intuitive dashboard experience

                </h1>

                <div className="button-group">
                  <button className="button-payments">Transaction Reports</button>
                  <button className="button-payments">Settelement and Payouts</button>
                </div>
                <div className="button-group2">
                  <div style={{ marginTop: "10px" }}>
                    <button className="button-payments">Transaction Reports</button>
                  </div>
                  <div style={{ marginTop: "10px" }}>
                    <button className="button-payments">Settelement and Payouts</button>
                  </div>

                </div>
                <div className="button-group2">
                  <div style={{ marginTop: "10px" }}>
                    <button className="button-payments">E-Wallet Solution</button>
                  </div>
                  <div style={{ marginTop: "10px" }}>
                    <button className="button-payments">Easy Configuration</button>
                  </div>

                </div>
                <div className="button-group2">
                  <div style={{ marginTop: "10px" }}>
                    <button className="button-payments">Premium Support</button>
                  </div>
                  

                </div>
                <div className="button-group">
                  <button className="button-payments">E-Wallet Solution</button>
                  <button className="button-payments">Easy Configuration</button>
                </div>

                <div className="button-group">
                  <button className="button-payments">Premium Support</button>

                </div>

              </div>
              <img src='https://res.cloudinary.com/djo2jovhh/image/upload/v1719923696/c9qruhszurtposanphy5.svg' alt='logo' className='bg-image3' />

            </div>
            <div>
              <img
                src='https://res.cloudinary.com/djo2jovhh/image/upload/v1720087805/Group_1171274748_1_zwbnjv.svg'
                alt='Payment Solutions'
                className="rotate-36012"
                style={{ marginTop: "40px" }}


              />
            </div>
          </div>
        
       
          <div className='chart-tech'>
            <div>
              <h1 className="sefvies-text">
                Payments as a Service <span className='span-text'>Beyond Boundaries</span>
              </h1>
              <p className='chart-para'>Ingesting the potential of payment network infrastructure capabilities to all line of businesses in India
              </p>
              <div className='flex-buers-card'>
                <div className='flex-buyers'>
                  <img src='https://res.cloudinary.com/djo2jovhh/image/upload/v1719917128/rwtvwx2pjxwygtdogrfe.svg' />
                  <div className='text-card-buyers'>
                    <h1 className='buyer-head'>+15 000</h1>
                    <p className='buyer-para'>Business buyers</p>
                  </div>
                </div>
                <div className='flex-buyers'>
                  <img src='https://res.cloudinary.com/djo2jovhh/image/upload/v1719917128/rwtvwx2pjxwygtdogrfe.svg' />
                  <div className='text-card-buyers'>
                    <h1 className='buyer-head'>+35 000 00</h1>
                    <p className='buyer-para'>Orders processed</p>
                  </div>
                </div>
                <div className='flex-buyers'>
                  <img src='https://res.cloudinary.com/djo2jovhh/image/upload/v1719917128/rwtvwx2pjxwygtdogrfe.svg' />
                  <div className='text-card-buyers'>
                    <h1 className='buyer-head'>+20 0000</h1>
                    <p className='buyer-para'>Active merchants</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        
       
          <div className='image-flex'>
            <img src='https://res.cloudinary.com/djo2jovhh/image/upload/v1719917875/qk9rigoxercyf0e3eyja.svg' className="world-map-image" />

          </div>
        

       
          <div className='chart-tech1'>
            <div>
              <h1>
                Our<span className='span-text1'> Services</span>
              </h1>
              <p className='chart-para1'>Our Payment solutions are used by diversified Business in different markets.</p>
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
                    <img src='https://res.cloudinary.com/djo2jovhh/image/upload/v1719922466/gq2purdic31uxgbeu2j4.svg' style={{ color: "#D8008B" }} height={60} width={60} className='card-image' />
                    <h1 className='card-text'>Retailers</h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
        
       
          <div className='last-bg-card' onClick={openPopup}>
            <div className='get-consult-card'>
              <h1 className='touch-head'>Get in Touch with us</h1>
              <p className='touch-para'>Join Our Merchant Community</p>
            </div>
          </div>
        

        <PopupForm isOpen={isPopupOpen} onClose={closePopup} />

       
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
         */}
      </div>
      
    </>
  );
}
export default Home;
