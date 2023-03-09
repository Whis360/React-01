import React from 'react'
import './App.css';
import star from '../src/img/star.png';
import shield from '../src/img/shield.png';
import plane from '../src/img/paper plane.png';
import basketball from '../src/img/Basketball.png';
import netflix from '../src/img/Netflix.png';
import threebars from '../src/img/Three Bars.png';
import redarrow from '../src/img/Red Arrow.png';
import greenarrow from '../src/img/Green Arrow.png';
import Paypal from '../src/img/Paypal.png';
import greentick from '../src/img/Green Tick.png';
import apple from '../src/img/Apple.png';
import google from '../src/img/Google.svg';
import biggest from '../src/img/Biggest Ellipse.svg';
import medium from '../src/img/Medium Ellipse.svg';
import small from '../src/img/Small Ellipse.svg';
import scan from '../src/img/Scan.svg';
import online from '../src/img/Online.svg';
import pay from '../src/img/Pay Method.svg';
import quotation from '../src/img/Quotation.svg';
import herman from '../src/img/Herman.svg';
import steve from '../src/img/Steve.svg';
import kenn from '../src/img/Kenn.svg';
import airbnb from '../src/img/Airbnb.svg';
import binance from '../src/img/Binance.svg';
import coinbase from '../src/img/Coinbase.svg';
import dropbox from '../src/img/Dropbox.svg';
import hoobank from '../src/img/logo.png'
import himage from '../src/img/h-image.svg'



const Content = () => {

    return (
        <main>
            <div className='business'>
                <div className='grid-item'>
                    <p className='handling'>You do the business, <br /> we'll handle the money</p>
                    <p className='market'>With the right credit card, you can improve your financial life by <br />building credit, earning rewards and saving money. But with <br />hundreds of credit cards on the market.</p>
                    <button className='btn'>
                        <p>Get started</p>
                    </button>
                </div>

                <div className='grid-item1'>
                    <div className='cards'>
                        <div className='card1'>
                            <img className='star' src={star} alt="This is an image"/>
                            <div className='txt'>
                                <div id='r1B'>Rewards</div>
                                <p>The best credit cards offer some tantalizing <br />
                                combinations of promotions and prizes.</p>
                            </div>
                            
                        </div>

                        <div className='card2'>
                            <img className='shield' src={shield} alt="This is an image"/>
                            <div className='txt'>
                                <div id='r1B'>100% Secured</div>
                                <p>We take proactive steps make sure your <br />
                                information and transactions are secure.</p>
                            </div>
                           
                        </div>

                        <div className='card3'>
                            <img className='paper-plane' src={plane} alt="This is an image"/>
                            <div className='txt'>
                                <div id='r1B'>Balance Transfer</div>
                                <p>A balance transfer credit card can save <br />
                                you a lot of money in interest charges.</p>
                            </div>
                    
                        </div>
                    </div>
                </div>
            </div>

            <div className='invoicing'>
                <div className='grid-item'>
                    
                    <div className='l-transaction'>
                        <p className='trans'>Last Transaction</p>
                        <div  className='stocks' >
                            <img className='basketball' src={basketball} alt="This is an logo"/>
                            <p className='topic'>Dribble Pro <br /> <p id='days'>15 Days ago</p> </p>
                            
                            <div className='prices'>
                                <img className='red-arrow' src={redarrow} alt="This is an logo"/> -$250,93
                            </div>
                        </div>
                        
                        <div className='stocks'>
                            <img className='netflix' src={netflix} alt="This is an logo"/>
                            <p className='topic'>Netflix <br /> <p id='days'>4 Days ago</p> </p>

                            <div className='prices'>
                                <img className='red-arrow' src={redarrow} alt="This is an logo"/> -$250,93
                            </div>
                        </div>
                        
                        <div className='stocks'>
                            <img className='threebars' src={threebars} alt="This is an logo"/>
                            <p className='topic'>Manulife Cash <br /> <p id='days'>4 Days ago</p> </p>

                            <div className='prices'>
                                <img className='green-arrow' src={greenarrow} alt="This is an logo"/> -$250,93
                            </div>
                        </div>
                    </div>

                    <div className='paypal'>
                        
                        <div className='brand'>
                            <img className='p-logo' src={Paypal} alt="This is an logo"/>
                            <p className='p-text'>Paypal <br /> <p id='check'>Checkout</p> </p>
                        </div>

                        <div className='total'>
                            <p className='t-text'>Total <br /> <p id='two-h'>$210</p> </p>
                            <p id='change'>Change</p>
                        </div>

                        <button className='p-btn'>Make payment</button>
                    </div>

                    <div className='great'>
                        <img className='greentick' src={greentick} alt="This is an logo"/>
                        <p className='g-text'>Great!  Your Payment is successfully.</p>
                    </div>
                </div>

                <div className='grid-item'>
                    <div className='billing'>
                        <p className='handling'>Easily control your <br />
                        billing & invoicing.</p>
                        
                        <p className='control'>Elit enim sed massa etiam. Mauris eu adipiscing <br />
                        ultrices ametodio aenean neque. Fusce ipsum orci <br />
                        rhoncus aliporttior integer platea placerat.</p>

                        <div id='get-it'>
                            <img className='apple' src={apple} alt="This is a button" />
                            <img src={google} alt="This is a button" />
                        </div>

                    </div>
                </div>
            </div>

            <div id='credit-card'>
                <div id='deal'>
                    <p className='handling'>
                        Find a better card deal <br />in few easy steps
                    </p>
                    <p className='control'>
                        Arcu tortor, purus in mattis at sed integer faucibus. <br />Aliquest quis aliquet eget mauris tortor.ç Aliquet <br /> ultrices ac, ametau.
                    </p>
                    <button className='bnn'>Get Started</button>
                </div>

                <div id='analysis'>
                    <img src={biggest} alt="This is a image"/>
                    <img className='medium' src={medium} alt="This is a image"/>
                    <img className='small' src={small} alt="This is a image"/>
                    <img id='scan' src={scan} alt="This is a image"/>
                    <img id='online' src={online} alt="This is a image"/>
                    <img id='pay' src={pay} alt="This is a image"/>
                </div>          
            </div>

            <div id='saying'>
                <div className='about'>
                    What people are <br />saying about us
                </div>

                <div className='accept'>
                    Everything you need to accept card payments <br /> and grow your business anywhere on the planet.
                </div>
            </div>

            <div id='leader'>
                <div className='jensen'>
                    <img src={quotation} className="quotation" alt="This is an image"/>
                    <p className='tool'>
                        Money is only a tool. It will take <br />
                        you wherever you wish, but it <br />
                        will not replace you as the <br />
                        driver.
                    </p>

                    <div className='founders'>
                        <img src={herman} alt="This is an image"/>
                        <p className='super'>Herman Jensen <br /> <p id='sub'>Founder & Leader</p> </p>
                    </div>
                </div>

                <div className='mark'>
                    <img src={quotation} className="quotation" alt="This is an image"/>
                    <p className='easier'>
                        Money makes your life easier. If <br />
                        you're lucky to have it, you're <br />
                        lucky
                    </p>

                    <div className='founders-mark'>
                        <img src={steve} alt="This is an image"/>
                        <p className='super'>Steve Mark  <br /> <p id='sub'>Founder & Leader</p> </p>
                    </div>
                </div>

                <div className='gallagher'>
                    <img src={quotation} className="quotation" alt="This is an image"/>
                    <p className='trade'>
                        It is usually people in the <br />
                        money business, finance, and <br />
                        international trade that are <br />
                        really rich.
                    </p>

                    <div className='founders'>
                        <img src={kenn} alt="This is an image"/>
                        <p className='super'>Kenn Gallagher <br /> <p id='sub'>Founder & Leader</p> </p>
                    </div>
                </div>
            </div>

            <div id='comp'>
                <img src={airbnb} className="airbnb" alt="This is a logo"/>
                <img src={binance} className="binance" alt="This is a logo"/>
                <img src={coinbase} className="coinbase" alt="This is a logo"/>
                <img src={dropbox} className="dropbox"  alt="This is a logo"/>
            </div>

            <div id='try'>
                <div className='t-now'>
                    <p className='now'>Let's try our service now!</p>
                    <p className='planet'>Everything you need to accept card payments <br />and grow your business anywhere on the planet</p>
                </div>

                <div>
                    <button className='bnn'>Get Started</button>
                </div>
            </div>

            <div id='least'>
                <div className='hoo-bank'>
                    <div className='h-logo'>
                        <img src={himage} className='h-image' alt="This is a logo"/>
                        <p className='hoo'>Hoo<p className='h-bank'>Bank</p> </p>
                    </div>

                    <p className='secure'>A new way to make the payments <br />easy, reliable and secure</p>
                </div>

                <div className='useful'>
                    <p className='links'>Useful Links</p>

                    <ul className='ul'>
                        <li>Content</li>
                        <li>How it Works</li>
                        <li>Create</li>
                        <li>Explore</li>
                        <li>Teams and Services</li>
                    </ul>
                </div>

                <div className='community'>
                    <p className='links'>Community</p>

                    <ul className='ul'>
                        <li>Help Center</li>
                        <li>Partners</li>
                        <li>Suggestions</li>
                        <li>Blog</li>
                        <li>Newsletters</li>
                    </ul>
                </div>

                <div className='partner'>
                    <p className='links'>Partner</p>

                    <ul className='ul'>
                        <li>Our Partner</li>
                        <li>Become a partner</li>
                    </ul>
                </div>
            </div>

            <div className='h-line'> <hr /> </div>
            </main>
    )
}

export default Content