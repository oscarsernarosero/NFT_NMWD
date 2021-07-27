import React from "react";
import './Home.css'

import { LeftImage } from "./LeftImage";
import { RightImage } from "./RightImage";
import { ThreeElements } from "./ThreeElements";

export class Overview extends React.Component {
    render(){
        return (
            <div className="home-container">
            <LeftImage
                src="https://www.pngplay.com/wp-content/uploads/2/Diamond-Transparent-Image.png"
                alt="image2"
                title="There is a finit amount of NFTs: 512"
                
                text={<p>
                    SWD NFTs are scarce. There will be only 512 SWDs ever which is hardcoded in the smart contract.
                    This finit amount of NFTs aims to make each token very special, and therefore gives it a high 
                    value that increases over time. But these NFTs are not just any NFTs out there in the market.
                    These NFTs are tokens of your political believes, and peaces of history that we are creating
                    together.

                    <br/><br/>
                    This is a very important moment in history, and you can not just be part of it, but you can even own 
                    peaces of it. Don't miss out!
                    <br/><br/>
                    Where does the "512" number come from? 512 is the result of 2^9.
                    </p>
                }            
            />
            <RightImage
                src="https://gallery.yopriceville.com/var/resizes/Free-Clipart-Pictures/School-Clipart/Quill_and_Ink_Pot_Transparent_PNG_Vector_Clipart.png?m=1507172108"
                alt="image2"
                title="The Message"
                backgroundImage="https://www.forbes.com/advisor/wp-content/uploads/2021/04/NFT.jpeg.jpg"
                text={<p >
                    A very important aspect of this collection of NFTs is that you can set a message that
                    will live for ever in the blockchain. This message can be set only once, and you cannot
                    modify it once it's set, so be careful! The amount of characters available for this message is 300,
                    so there is enough space for you to elaborate on your idea. 
                    <br/><br/>
                    You can "sign" the message with your name or a pseudoname  at the end to make sure that people will
                    know that it was you who set the message.
                    <br/><br/>
                    The main idea of this message is to let the governments of the world know that we are 
                    against the hypocrite <b>War On Drugs</b>, and that we are tired of state terrorism, and
                    we also want our freedoms back. However, there is no hard rules. You can literally write whatever
                    you want.  
                
                </p>
                }       

            />
            <ThreeElements
                leftTitle="YouTube Channel"
                leftText={<p>
                    This NFTs project is part of a bigger project which main goal is to demilitarize 
                    the <b>War On Drugs</b>. The main part of this project has been so far the 
                    YouTube channel that aims to study the development
                    of prohibition and drug trafficking from various perspective, and shedding 
                    light on the fact that the <b>War On Drugs</b> is nothing more than a geopolitical,
                    and political tool. In other words, a means for power.
            
                </p>}

                middleTitle="Gallery"
                middleText={<p>
                    Explore the different NFTs created in collaboration with different artists from
                    the very same places that have been harmed the most in this <b>War On Drugs</b>.
                    Express yourself against this bloodshed by writing a message that will live for
                    ever in the Ethereum blockchain.
                </p>

                }

                rightTitle="Blog"
                rightText={<p>
                    If you are a curious person, the blog is for you. We have put together an extension
                    of the YouTube Channel where we express our main ideas, and link it with different
                    videos that talk about those ideas. If you persue the truth, you have
                    come to the right place. If you like to live in a bubble, don't go there.
                </p>

                }
            />
            <LeftImage
                src="https://i.pinimg.com/originals/30/64/8c/30648c7d2798558216aec8580c2746ee.png"
                alt="image2"
                title="The Artists"
                
                text={<p>
                    This collection of NFTs have collaborated with different artists, mostly from
                    Latinamerica. They are mostly local artists from cities that have been really
                    devastated by this War On Drugs. Cities like Cali, Cololombia, or Ciudad Juarez, 
                    México, are among the hometowns of these talented artists. One of the goals of 
                    this project is to give visibility to these not-very-known artists through the Ethereum 
                    blockchain, and expose the incredible creativity that these forgotten areas can offer. 
                    Also, a percentage of the royalties of the NFTs goes to the artists directly, which 
                    could potentially impact their lives in a very positive way.
                    </p>
                }            
            />
            <RightImage
                src="https://forensicminds.co.uk/images/marker5.png"
                alt="image2"
                backgroundImage="https://www.eluniversal.com.mx/sites/default/files/2019/08/23/ejercito_.jpg"
                title="Why To Stop War On Drugs?"
                text={<p >
                    The question should be better why not? Simply try to think about one achievement of the
                    War On Drugs. Now, try to research and see if that achievement is actually true. Besides the
                    biased sources you might find, the truth is that the stricter the prohibition on drugs, the worse the drug problem
                    gets, and it has failed on all of it purposes. We still have a steady supply of drugs in the streets.
                    We have an increasing drug addiction problem. We have an increasing number of deaths by ODs.
                    What is even worse, today, the-War-On-Drugs victory looks further away than ever before! Maybe, we are fighting it wrong.
                    But the question still remains, why hasn't anybody noticed? Or maybe people in power are looking to the other side?
                    What are those intesests behind the sham called War On Drugs?
                
                </p>
                }   
            />
            <LeftImage
                src="https://assets.stickpng.com/thumbs/580b57fcd9996e24bc43c545.png"
                alt="image2"
                title="Support My YouTube Channel"
                
                text={<p>
                    This collection of NFTs is born from the necessity of supporting my research on 
                    the War On Drugs which I share through my YouTube Channel. Even though my channel
                    has captured some attention before, YouTube quickly started to restric my videos,
                    and even my ability to monetize some of them. These restrictions are so severe that
                    they killed the organic growth of my views, and therefore my profits from my channel. 
                    Instead of abandoning my initiative, I decided to combine all of my passions in this  
                    project: history, software development, blockchain technology, and politics. My idea is to
                    feed my YouTube channel from the NFT market, at the same time that I feed the NFT 
                    market from my YouTube Channel. In the process, I can finance my true passions, and 
                    beneffit the comunities I work with.
            
                    </p>
                }            
            />
            </div>
        );
    }
}