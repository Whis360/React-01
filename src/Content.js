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

            <div className='credit-card'>
                <div className='grid-item deal'>
                    <p className='handling'>
                        Find a better card deal <br />in few easy steps
                    </p>
                </div>
            </div>
        </main>
    )
}

export default Content
