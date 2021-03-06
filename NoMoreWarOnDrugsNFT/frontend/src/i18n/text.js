import { setTranslations, setLocale } from 'react-i18nify';
import React, { Component }  from 'react';
import { Link } from "react-router-dom";

setTranslations({
  en: {
      home: {
          first:{
            title:"Be part of the history",
            para1:<span>Stop-The-War-On-Drugs is probably the biggest project with major relation to the future of the NFTs space.
              This collection not only has an artistic and cultural value, but also a huge political and historical one. "Stop the war on drug" is a world-wide movement 
              that grows by the day, which is still on its early stage. However, just like the prohibition
              of the 1920's, our war on drugs is destined to fail, and WILL come to an end. This means that SWD will continue to increase its value
              the more that the war on drugs approaches its end, and this movement becomes more relevant in the international affairs.
            </span>,

            para2:<span>But that's not it!
                By getting one or more of these SWD NFTs, you are also <b>immortalizing yourself in the Ethereum blockchain for ever! </b>  
                These NFTs offer you the opportunity to write a message against the war on drugs directly into the blockchain without the 
                possibility of it getting modified or erased ever, meaning your message will be immortal. Together, we will make history 
                in the blockchain space through the political activism to end this horrific war on drugs that is taking our rights and 
                freedoms away. This is the opportunity to be able to show your future generations that YOU were part of the movement 
                that changed the world. WTF are you waiting for?</span>
          },
          second:{
            title:"You are supporting artists",
            para1:<span>One of the main goals of this project is to give visibility to some artists from the very same places that 
            <b> War On Drugs</b> has done the most harm. In other words, artists from countries like Colombia, M??xico and Peru.
            People who suffer through their own skin the cartels brutality and government corruption in their daily lives --the natural 
            outcome of prohibition. We want to turn the pain into art. </span>,

            para2:<span>
              But wait, there???s more.
            This NFT project is one of the first ones to implement ERC2981, which aims to support royalties for
            NFT creators. SWD has a standard 6% royalty for all NFTs, and, as a rule of thumb, SWD grants a percentage of 
            the total amount of royalties collected to <b>all</b> the artists who collaborate in the art creation. This percentage 
            can be somewhere between 20% and 55% depending on the preference of payment of the artist. To learn more about
            this, you can check out our <Link to='/artist-partner'>artist partner program.</Link> </span>
          
          },
          contact_me:"Reach to us:",
          artist_partner:{
            title:"If You're An Artist, You Can Be Our Partner",
            text:<p>
              We are in the minting phase. This means that artists from all around the globe can participate 
              and express themselves against the war on drugs through this project.
              If you're an artist, then you too can be part of this historical collection. So don't wait any longer, and create your 
              best piece against the war on drugs. Let's make Ether together by saving the world from this false crusade. 
              We will offer you a good deal regarding royalties* and commission over the first sale (minting). 
              Check out our <Link to='/artist-partner'>Artist-Partner program</Link> to learn more. There will be only 904 NFTs in 
              this collection. So, don't waste any more time. Apply now.<br/><br/>
              <i style={{fontSize:"1.8vh", lineHeight:"0.25vh"}}>*Disclaimer: At current moment, most marketplaces like Opensea and Rarible don't honor yet ERC2981, which means that royalties 
                won't be perceived from those marketplaces by neither of us (the artist or SWD). Therefore, royalties can be only guaranteed as 
                long as sales happen in our native marketplace. We really hope that most marketplaces start implementing ERC2981 soon for the 
                good of the whole Ethereum NFT ecosystem. We offer highly competitive market fees to compete and compensate this situation. Your 
                voice is important to fix this problem. Speak up against those giants in the industry that haven't implemented ERC2981 yet.
              </i>
            </p>
          
          }
        },
      overview:{
          first:{
              title:"There is a limited amount of NFTs: 904",
              text:<span>SWD NFTs are really scarce. There will be only 904 SWDs ever, which is hardcoded in the smart contract.
              This finite amount of NFTs aims to make each token very special, and therefore gives it a high 
              value that increases over time (high price). However, these are not your regular NFTs.
              These are pieces of history that we are creating together.

              <br/><br/>
              There are only 904 NFTs because that's the amount of <i>l??deres sociales</i> -activists- murdered in Colombia between
              December 1st, 2016 through February 28th, 2021. The War on Drugs has to do a great deal in this matter. Therefore, these NFTs 
              symbolize the millions of deceased victims of The War On Drugs.
              </span>
          },
          second:{
            title:"The Message",
            text:<p >
            A very important aspect of this collection of NFTs is that you can set a message that
            will live for ever in the blockchain. This message can be set only once, and you cannot
            modify it once it's been set. So, choose wisely! The amount of characters available for this message is 300
            total count, so there is enough room for you to elaborate on your valuable ideas. 
            <br/><br/>
            You can even "sign" the message with your name or under a pseudonym at the end of the message to make sure 
            that people will know that it was you who wrote it.
            <br/><br/>
            The main idea of this message is to let the governments of the world know that we are 
            against the hypocrite <b>War On Drugs</b>. We're letting them know that we're tired of state terrorism, and 
            we want our freedoms back. However, there are no rules. You can literally write whatever
            you want.  
        
        </p>
        },
        third:{
          title:"Why NFTs in 2 Languages?",
          text:<p>
          You might've noticed that a lot of the NFTs come in 2 versions: English and Spanish. This is because we believe that it is the
          responsibility of the Latin-American people to speak up against the war that has devastated most of the poor communities 
          in the world, but especially our Central and South American countries.
          Therefore, this struggle must also be argued in Spanish. However, we understand that international affairs and the NFT community
          are English-spoken circles, and this has led us to create our NFTs in these 2 versions.
          </p>
        },
        fourth:{
          lefttitle:"YouTube Channel",
          left:<p>
            This NFT project is part of a bigger project whose main goal is to demilitarize 
            the <b>War On Drugs</b>. The main part of this project has been so far the 
            YouTube channel that aims to study the development
            of prohibition/drug trafficking from various perspectives, and shedding 
            light on the fact that the <b>War On Drugs</b> is nothing more than a geopolitical,
            and political tool. In other words, a means for power.
    
            </p>,
          middletitle:"Gallery",
          middle:<p>
            Explore the different NFTs created in collaboration with different artists from
            the very same places that have been harmed the most in this <b>War On Drugs</b>.
            Express yourself against this bloodshed by writing a message that will live for
            ever in the Ethereum blockchain.
            </p>,
          righttitle:"Blog",
          right: <p>
            If you are a curious person, the <Link to='/channel'>blog</Link> is for you. We have put together an extension
            of the YouTube Channel where we express our main ideas, and link it with different
            videos that talk about those ideas. If you pursue the truth, you've
            come to the right place. If you like to live in a bubble, run, because once you've opened 
            your eyes, there is no going back.
            </p>
        },
        fifth:{
          title:"The Artists",
          text:<p>
            This collection of NFTs has collaborated with many different artists, mostly from
            Latin-America which is one of the areas that has been really
            devastated by this War On Drugs. Countries like Colombia, 
            Mexico, and Peru are among the hometowns of these talented artists. One of the goals of 
            this project is to give visibility to the art from these beaten areas through the Ethereum 
            blockchain.
            Also, a percentage of the royalties of the NFTs goes to the artists directly, doing
            our bit to impact positively these areas. 
            </p>
        },
        sixth:{
          title:"Why To Stop War On Drugs?",
          text:<p >
              The question should be, why not? Simply try to think about one achievement of the
              War On Drugs. Now, do your research and see if that achievement is actually true. Besides the
              biased sources you might find. The truth is that the more strict the prohibition on drugs is, the worse the drug problem
              gets. This war has failed us on all of its purposes: We still have a steady supply of drugs in the streets,
              an increasing drug abuse problem, and we still have an increasing number of deaths by ODs.
              What is even worse is that today, the-War-On-Drugs victory looks further away than ever before! Maybe, we are just fighting it wrong.
              Yet, the question still remains: why hasn't anybody noticed? Or maybe the people in power are choosing to look the other way?
              What are the interests behind this chaotic, useless, and devastating war on drugs? 

              If you'd like to learn more on why The War On Drugs has been a hoax from the very beginning, we encourage you to visit our channel
              <Link to='/channel'> here.</Link>  
          
          </p>
          },
          seventh:{
              title:"Support My YouTube Channel",
              text:<p>
                This collection of NFTs is born from the necessity of supporting my research on 
                the War On Drugs which I share through my YouTube Channel. Even though my channel
                has captured some attention before, YouTube quickly started to restrict my videos,
                and even my ability to monetize some of them. These restrictions are so severe that
                they killed the organic growth of my views, and therefore my profits from my channel. 
                Instead of abandoning my initiative, I decided to put together all of my passions in this  
                one project: history, software development, blockchain, and politics. My idea is to
                feed my YouTube channel from the NFT market, all while I feed the NFT 
                market from my YouTube Channel. In the process, I can finance my true passions, and 
                benefit the communities I work with.
        
                </p>

          },about_me:{
            title:"About Me",
            text:<p><i>
              "I'm an immigrant burger-flipper during the day. At night, I'm a conflicted idealist soul, a coder,
              a history bug, and a crypto punk that wants to do his bit for this world."</i>
              </p>
          },
            id_cid:{
              title:"You Can Look Up The NFT In IPFS By Its ID",
              text:<p>
                This project has been built as decentralized as possible. From hosting the site on IPFS, to the use 
                of ENS for our domain (you can also look up this site by the domain stopthewarondrugs.eth.(link/limo)  
                However, this service is still not 100% reliable. So, we made it available also with the more 
                traditional .com). Following this philosophy,
                every NFT's ID is in reality the hash of the URI file on IPFS. So, you can look up this file
                yourself only with the NFT's ID. <br/><br/>
                To do this, you simply have to build the CID by prepending "F01701220" to the ID. In  
                other words, your CID will be 'F01701220|YOUR-NFT-ID|'. So, for example, if you have 
                access to an IPFS node, you can do something like  ipfs://F01701220|YOUR-NFT-ID|. Or you can do this 
                through a public IPFS gateway such as Pinata or Fleek using the same CID. This is done this way to  
                guaranty 100% authenticity of each NFT, and to accomplish self-describing IDs. <br/><br/>
                The URI will hold most of the information regarding the NFT including the image that represents it. 
                Some information such as the messages are only available through the blockchain though.
              </p>
            }
          
      },
      filter:{
        title:"Filter",
        option1:"By drug kind",
        option2:"By historical character",
        option3:"By country reference",
        option4:"By general topic",
        option5:"By artist",
        option5:"Language The NFT Is In",
        apply:"apply filter"

      },
      findById:{
        find:"Look Up By Id",
        search:"Search"
      },
      mint:{
        title:<h2>Mint New NFTs</h2>,
        text:<p>By minting new NFT you have the privilege of immortalizing yourself
        in the blockchain by setting a message for your NFT. This message will live for
        ever in the Ethereum network. Don't miss this opportunity!</p>
      },
      imageNFT:{
        message:"Message",
        noMessage:"This NFT has no message yet. You can set it yourself if you buy this NFT!",
        artist:"Artist",
        description:"Description",
        youOwn:"You Own This NFT !",
        connectWallet:"You Need to Connect Wallet",
        mint:" Mint!",
        buy:"BUY",
        notForSale:"Not For Sale",
        setMessage:"Set The Message!",
        changePrice:"Change Price",
        forSale:"For sale? ",
        transfer:"Transfer",
      },
      setMessage:{
        title:"Set The Message Of Your NFT",
        text:"Congratulations! You, as the owner of a SWD NFT token, have the privilege of immortalizing yourself with a message that will live for ever in the blockchain.\
        Be careful though. This message cannot be changed ever again once you submit it. Also, take into account that the message cannot be longer than 100 characters.\
        Welcome to the inmortal phase of your thoughts!",
        message:"Message",
        welcome:"Welcome to immortality",
        setMessage:"Set Message"
      },
      changePrice:{
        title:"Change The Price Of Your NFT",
        current:"Current price",
        new:"New Price",
        button:"Change Price"
      },
      transfer:{
        title:"Transfer your NFT to a different address",
        warning:"Be careful! transferring the NFT to the wrong address can mean the permanent loss of your token.",
        to:"Transfer to Ethereum address:"
      },
      navItems:{
        home:"Home",
        overview:"Overview",
        gallery:"Gallery",
        mint:"Mint",
        wallet:"Wallet",
        channel:"Channel"
      },
      artist_partner:{
        title:"Artist-Partner Program",
        subtitle1:"Intro",
        paragraph1: <p>
          Artists are at the heart of the Stop-The-War-On-Drugs NFT project, of course. To bootstrap this project, different 
          artists were contacted to develop the first NFTs, and build the different art works together. Since there 
          have been different NFTs already made, now artists can get the idea of what these NFTs are about more easily, and 
          that's where the artist-partner program comes into play. 
          <br/><br/>
          In simple words, artists can now develop their own art for SWD without supervision from our side, and make money 
          through their art in our platform. This, however, represents a risk for the artist of being rejected, or his/her 
          NFT not getting sold. Therefore, SWD will reward the artists who decide to share this risk 
          by not only granting a higher percentage in royalties, but also, a higher percentage on the first sale (minting)
           of his/her NFT.
          </p>,
        subtitle2:"What's the deal?",
        paragraph2:<p> By being part of the artist-partner program, you as an artist will be entitled to 40% of the amount of ETH perceived 
          by SWD marketplace during the minting of the NFT you created. But that's not even the best part. You will be entitled to
          55% of the royalties earned in the future through that particular NFT. All payments are made in the cryptocurrency Ether.
          <br/><br/>
          The NFT royalty payment and split happens automatically in the blockchain through smart-contract mechanisms which code will be 
          public in the blockchain for transparency purposes. The 40% of the first sale will be paid directly by the SWD team within a week 
          of the sale.
          <br/><br/>
          However, there are some requirements that your art work has to meet in order for it 
          to be part of this exclusive collection of NFTs that will make history.
          </p>,
        subtitle3:"Requirements",
        paragraph3:<p> Meeting the requirements for SWD NFTs will put you at the door of being a partner with us. However,
          meeting the requirements only is not enough. There will be only 904 NFTs ever in this collection, which means you 
          are trying to be part of a very selected collection. Therefore, your art might be accepted or not. Obviously, the 
          earlier in the project you apply, the higher the chances for you to be accepted. Even though the whole point of 
          this program is to get some work load off the team, you still can email us to get some guidance. Just don't abuse
          this resource. The minimum requirements for your NFT to be accepted are:
          
        <ul>
          <li>First, the most obvious requirement is that the NFT must be against prohibition --the war on drugs.
            If the piece is inspired by the ideas or history shown in the YouTube channel, it will have better chances of 
            getting accepted.
          </li>
          <li>The format of the piece can be rectangular or square, vertical or horizontal. However, if rectangular, it cannot 
            have a proportion higher than 2:1 or 1:2.
          </li>
          <li>The piece must have the name of the project somewhere in a readable manner. It doesn't have to be a big element, 
            but it needs to be clear that the piece belongs to this project. This will be achieved by putting 
            "stopthewarondrugs.eth" in your graphic work.
          </li>
          <li>The piece must be as small as any of the HD dimensions or as big as any of the 4K dimensions. </li>
          <li>Cloud space is limited, and NFTs are meant to be shown in a screen. So, even though we care a lot about 
            high quality and pieces with good resolution, please don't make unnecessarily heavy files with quality that 
            will be invisible to the eye.
          </li>
          <li>Your NFT may be animated or not, but the file must be a JPEG, PNG, GIF, or MP4.
          </li>
        </ul></p>,
      apply_title:"How To Apply",
      apply_text:<p>
        Applying to be part of this NFT project is very easy. Simply send an e-mail to 
        nft@stopthewarondrugs.com with your art, your name, and optionally a breve description of the piece. 
        We will consider your art and have an answer by 3 weeks of your submission.
      </p>,
      subtitle4:"Once Your NFT Is Accepted",
      paragraph4:<p>
        Once your graphic piece is accepted to be part of this exclusive collection, you need to provide a couple more things 
        for us to be able to make your graphic piece into an NFT:
        <ul>
          <li>The Ethereum address where you want to receive/claim your payments.</li>
          <li>Your preferred artistic pseudonym (you can also go anonymous).</li>
          <li>Your webpage url (optional).</li>
        </ul>
      </p>,
      subtitle5:"How Am I Going To Get My Payments?",
      paragraph5:<p>
        Your first payment will be issued by us directly to the Ethereum address you provided. Only you are responsible for 
        the safety of your funds once they get to your address.
        <br/><br/>
        The royalty payments, however, will be stored in the royalty-splitter smart contract until you withdraw your funds 
        from it. Therefore, you will have to withdraw your Ether from this smart contract yourself to get your royalties. 
        Please take into account that this requires some Ether to pay for the gas fees of this operation. Therefore, we 
        suggest to wait until you have a considerable amount of Ether in this smart contract to withdraw funds since this 
        way you won't pay too much money on gas fees.
        <br/><br/>
        The address of this smart contract will be given to you once we deploy it to the mainnet. If you have more 
        than one NFT with us, this contract will be the same for all of your NFTs.
      </p>
      },
      marketplace:{
        title:"Important information about this marketplace",
        text:<p className="small-info">
        <b>Fees:</b> This market place applies a 0.8% fee on all transactions. This is more than 3 times lower than Opensea
        and almost 10 times lower than other marketplaces. We really suggest you to trade your SWD in this platform. Fees are 
        collected to pay for this site maintenance, and might even be lower in the near future.
        <br/><br/>
        <b>Royalties:</b> This marketplace also enforces ERC2981 for royalty payments. Every SWD has a royalty of 6%. This menas that 
        the final amount you will be paid as a seller will be 93.248% of the price that you set for your NFT once it is sold. We have 
        NO buyer fee at all in contrast to other marketplaces which means that what you see is what you pay. So, we really suggest you to 
        buy your SWDs in this platform.
        <br/><br/>
        <b>Payments:</b> This marketplace is a non-custodial marketplace which means it doesn't hold any Ether on your behalf. If  
        one of your NFTs is sold through this platform, then the marketplace will pay YOU, pay the royalties, and collect 
        a fee all in the same transaction. You, the artist, and us get the money at the same time as soon as the blockchain 
        confirms everything went ok.
        
    </p>
      }

  },
  es: {
      home: {
          first:{
            title:"S?? Parte de la Historia",
            para1:<span>Stop-the-War-on-Drugs es probablemente el proyecto con mayor significado a futuro en el 
              mundo de los NFTs. Esta colecci??n no s??lo tiene valor art??stico y cultural, sino que tambi??n tiene un gran 
              valor pol??tico e hist??rico. "No m??s guerra contra las drogas" es un movimiento mundial
              que crece d??a a d??a y que a??n se encuentra en su temprana infancia. Pero la guerra contra las drogas est?? 
              destinada al fracaso, as?? como la prohibici??n de los 20s, y no dudamos de que esta horrenda guerra alg??n d??a acabar??.
              Esto quiere decir que SWD ir?? creciendo en valor a medida que la guerra contra las drogas vaya siendo eliminada, y que 
              este movimiento vaya tomando mayor relevancia en la pol??tica mundial.
          
            </span>,

            para2:<span>Pero eso no es todo!
            Al adquirir uno o m??s de estos Stop-The-War-On-Drugs NFTs tambi??n est??s <b>inmortaliz??ndote en la red de Ethereum para siempre!</b>.
            Estos NFTs te ofrecen la oportunidad de escribir un mensaje en contra de la nefasta <b>Guerra Contra las Drogas</b> directamente
            en el blockchain sin la posibilidad de ser modificado o eliminado <b>nunca jam??s!!! </b>. Es decir, tu mensaje ser?? inmortal.
            
            Nosotros, unidos, haremos historia en el mundo del blockchain mediante el activismo pol??tico para acabar con esta horrenda guerra 
            contra las drogas que nos vulnera nuestros derechos y libertades, y t?? podr??s demostrarle a tus nietos que t?? fuiste parte de este
            movimiento que cambi?? al mundo. Qu?? est??s esperando?</span>
          },
          second:{
            title:"Est??s apoyando a artistas",
            para1:<span>Uno de los objetivos principales de este proyecto es el de dar visibilidad a artistas provenientes de los mismos lugares
              en donde <b>La Guerra Contra Las Drogas</b> ha hecho el mayor da??o. En otras palabras, artistas originarios de pa??ses como Colombia,
              M??xico, Per?? y Bolivia. Personas que han sufrido en carne propia la brutalidad de los carteles y la corrupci??n de sus gobiernos en sus
              vidas diarias (el resultado natural de la prohibici??n). Queremos convertir el dolor en arte.</span>,

            para2:<span>
              
              Este proyecto adem??s implementa el ERC2981 para el pago de royalties a los creadores de los NFTs. SWD aplica un 6%
              de royalties a todos sus NFTs del cual, como ley y filosof??a de este proyecto, un porcentaje es destinado al beneficio de los artistas
              creadores. Este porcentaje puede estar entre un 20% y un 55% dependiendo del m??todo de pago preferido por el artista. Para saber m??s
              acerca de las formas de pago a artistas, revisa el programa de <Link to='/artist-partner'>artistas socios.</Link> </span>
          
            },
            contact_me:"Contacto:",
            artist_partner:{
              title:"Si Eres Artista, Puedes Ser Nuestro Socio",
              text:<p>
                Estamos en fase de acu??ado. Esto quiere decir que, en estos momentos, 
                artistas al rededor del mundo pueden participar y expresarse en contra de la guerra contra las drogas a trav??s de 
                este proyecto. Si eres un artista y deseas ser parte de esta colecci??n hist??rica, no esperes m??s. Crea tu mejor 
                pieza en contra de la guerra contra el narcotr??fico y ganemos dinero juntos salvando al mundo 
                de esta falsa cruzada. Te ofrecemos un buen trato con respecto a las regal??as (royalties) y a la primera venta de 
                tu arte (acu??ado). Aprende m??s de nuestro programa de <Link to='/artist-partner'>artistas socios.</Link>. S??lo existir??n
                904 NFTs en esta colecci??n, as?? que no pierdas m??s tiempo. Aplica ahora.<br/><br/>
              <i style={{fontSize:"1.8vh", lineHeight:"0.25vh"}}>*Aviso legal: en estos momentos, la mayor??a de marketplaces como Opensea o
              Rarible no han implementado el ERC2981, lo que significa que las regal??as (royalties) no ser??n percibidas cuando el NFT sea 
              transado desde estas plataformas. Realmente esperamos que esta situaci??n cambie pronto por el bien de todo el ecosistema de 
              NFTs en Ethereum. Por lo tanto, el pago de royalties puede ser ??nicamente garantizado siempre y cuando la venta se realice 
              a trav??s de nuestro marketplace nativo. Nosotros ofrecemos muy bajos "fees" para competir y compensar esta situaci??n. 
              Sin embargo, tu vos es muy importante para generar un cambio. Expr??sate en contra de los gigantes de la industria NFT que no 
              han querido implementar ERC2981 para el pago de royalties.</i>
              </p>
            
            }
        },
      overview:{
          first:{
              title:"Hay una cantidad finita de NFTs: 904",
              text:<span>Los SWD NFTs son realmente escasos. S??lo existir??n un total de 904 SWDs en toda la historia, lo cual est??
                codificado de esta forma en su smart contract. Este n??mero finito de NFTs busca hacer que cada token sea muy especial,
                lo cual a su vez le da un alto valor, que a futuro se podr??a traducir en valor monetario (alto precio). Pero estos
                NFTs no son simplemente cualquier NFTs en el mercado. Estos tokens son piezas hist??ricas que estamos creando juntos.

              <br/><br/>
              S??lo habr??n 904 NFTs porque esta es la cantidad de l??deres sociales asesinados en Colombia entre el primero de 
              diciembre de 2016 y el 28 de febrero de 2021. La guerra contra las drogas ha sido un detonador importante de esta violencia.
              De esta forma, estos NFTs simbolizan las millones de vidas perdidas en esta Guerra Contra Las Drogas.
              </span>
          },
          second:{
            title:"El mensaje",
            text:<p >
              Un aspecto muy importante de esta colecci??n de NFTs es que tu puedes escribir un mensaje directamente en el NFT
              que vivir?? para siempre en el blockchain. Este mensaje s??lo puede ser escrito una vez, y no podr?? ser modificado
              o eliminado nunca por ning??n motivo. As?? que escribe un buen mensaje! La cantidad de caracteres disponibles para 
              tu texto son 300 para que tengas espacio suficiente para expresar tus valiosas ideas.

            <br/><br/>
            Puedes incluso "firmar" al final del mensaje con tu nombre o alias para que est??s seguro de que la gente va a 
            saber que has sido t?? quien escribi?? el mensaje.
            <br/><br/>
            La idea principal de este mensaje es la de demostrarle a los gobiernos del mundo que estamos en contra de la 
            hip??crita <b>Guerra Contra Las Drogas</b>, y que estamos cansados del terrorismo de estado y de que constantemente nos 
            vulneren nuestros derechos y libertades por medio de esta guerra. Sin embargo, t?? eres completamente libre
            de escribir cualquier mensaje que t?? quieras. No existen reglas.
        
        </p>
        },
        third:{
          title:"Por qu?? NFTs en 2 idiomas?",
          text:<p>
            Probablemente hayas notado que muchos de los NFTs vienen en 2 versiones: ingl??s y espa??ol. Esto se debe a que creemos que es
            responsabilidad del pueblo latinoamericano de alzar la voz de protesta en contra de esta guerra que ha devastado la mayor parte
            de las comunidades pobres del mundo, pero sobretodo nuestra regi??n latinoamericana.
            Por este motivo, esta lucha debe ser argumentada en espa??ol. Sin embargo entendemos que los asuntos internacionales y la comunidad
            global de NFTs son comunidades de habla inglesa, lo cual nos ha llevado a crear estos NFTs en 2 versiones para llevar el mensaje a
            una audiencia m??s amplia.
          </p>
      },
      fourth:{
        lefttitle:"Canal de YouTube",
        left:<p>
          Este proyecto de NFTs es parte de un proyecto a??n m??s grande cuyo objetivo es la de desmilitarizar
          <b> la guerra contra las drogas</b>. Hasta ahora, el principal componente de este proyecto ha 
          sido el canal de YouTube donde se estudia la farsa que ha sido esta guerra desde la historia y 
          otros campos del conocimiento como la econom??a. En este canal, mostramos c??mo la <b>la guerra 
            contra las drogas</b> no ha sido m??s que una herramienta pol??tica y geopol??tica empleada por
            las ??lites. En otras palabras, esta guerra no ha sido m??s que un medio para alcanzar el poder.
          </p>,
        middletitle:"Galer??a",
        middle:<p>
          Explora los diferentes NFTs creados en colaboraci??n con diferentes artistas originarios de los 
          mismos lugares donde <b>la guerra contra las drogas</b> ha causado el mayor da??o. Expr??sate en
          contra de este derramamiento de sangre escribiendo un mensaje que vivir?? por siempre en el
          blockchain de Ethereum.
          </p>,
        righttitle:"Blog",
        right: <p>
          Si eres una persona curiosa, el blog es justo para ti. Hemos creado lo que se podr??a considerar
          como una extensi??n del canal de YouTube donde expresamos nuestras ideas m??s importantes, y las 
          relacionamos con los videos en YouTube. Si eres de los que persiguen la verdad, has venido al 
          lugar correcto. Si eres de los que prefiere vivir en una burbuja, huye. Una vez abres los ojos,
          no hay vuelta atr??s. 
          </p>
      },
        fifth:{
        title:"Los Artistas",
        text:<p>
          Esta colecci??n de NFTs ha colaborado con diferentes artistas, en su mayor??a de Latinoam??rica 
          la cual es una de las regiones mas azotada por <b>la guerra contra las drogas</b>. Pa??ses 
          como Colombia, M??xico y Per?? son algunos de los lugares de origen de los artistas que han 
          colaborado en esta colecci??n. Uno de los objetivos de este proyecto es el de visibilizar el
          arte de estas zonas devastadas a trav??s de la red de Ethereum. Parte de los royalties colectados
          a trav??s de la venta de estos NFTs va directamente a los artistas, lo cual aporta un granito de 
          arena para impactar de forma positiva la calidad de vida en estas zonas.
          
          </p>
        },
        sixth:{
          title:"Por Qu?? Parar La Guerra Contra Las Drogas?",
          text:<p >
              La pregunta deber??a ser mejor: por qu?? no? Simplemente trata de pensar en un solo logro de 
              esta guerra contra las drogas. Si pensaste en alguno, trata de investigar en internet si 
              lo que consideras un logro de esta guerra es realmente cierto. Adem??s de algunas fuentes
              completamente sesgadas que podr??as encontrar, la verdad es que mientras m??s estricta sea la
              prohibici??n, peores son los problemas de drogadicci??n. La guerra contra las drogas ha fallado
              en cada uno de sus postulados: a??n tenemos un constante flujo de drogas desde las calles.
              Las muertes por sobredosis incluso han aumentado desde la prohibici??n! y lo m??s triste de 
              todo, es que el fin de esta guerra se ve m??s lejos que nunca antes. Quiz?? estamos peleando
              esta guerra de la manera equivocada. Aunque una pregunta a??n m??s importante surge: por qu?? 
              nadie ha notado este fracaso antes? o quiz?? la gente en el poder se est??n haciendo los de la
              vista gorda? Cu??les son esos intereses detr??s de una guerra  ca??tica, in??til y devastadora? 
              <br/><br/>
              Si quieres saber m??s de por qu?? la guerra contra el narcotr??fico ha sido una farsa desde su 
              inicio, te invitamos a que visites nuestro <Link to='/channel'>canal</Link>.          
          </p>
          },
          seventh:{
              title:"Apoya Mi Canal De YouTube",
              text:<p>
                Esta colecci??n de NFTs nace de la necesidad de financiar mi investigaci??n con
                respecto a la Guerra Contra Las Drogas. Esta investigaci??n es compartida a trav??s
                de mi <a href="https://www.youtube.com/channel/UCxn8ktVoqqOEwBjNJHX2O-w" 
                target="_blank" rel="noopener noreferrer">
                canal de YouTube</a> el cual ha logrado tener mucha atenci??n anteriormente, sin 
                embargo YouTube empez?? a restringir severamente mis videos por la tem??tica del canal, 
                lo cual
                ha restringido bastante el crecimiento org??nico de mi audiencia y mi habilidad para 
                monetizar mis videos. En lugar de abandonar esta importante iniciativa, he decidido
                combinar todas mis pasiones en este proyecto: historia, desarrollo de software, 
                blockchain, y pol??tica. Mi idea es alimentar mi canal de YouTube a trav??s del 
                mercado de los NFTs, al mismo tiempo que alimento el mercado de los NFTs a trav??s de 
                mi canal de YouTube. En este proceso, puedo financiar mis verdaderas pasiones, y 
                beneficiar las comunidades con las que trabajo.
                </p>
          },about_me:{
            title:"Qui??n Soy?",
            text:<p><i>
              "Durante el d??a, soy un simple inmigrante con un trabajo mediocre. Durante la noche, soy un alma idealista
              clandestina, un aficionado a la historia, un desarrollador de software, y un amante del crypto que quiere aportar 
              su granito de arena en este mundo."</i>
              </p>
          },
          id_cid:{
            title:"Busca Tu NFT en IPFS Con Su ID",
            text:<p>Este proyecto ha sido constru??do de la forma m??s descentralizada posible. Desde subir la p??gina a 
              IPFS hasta usar ENS para el dominio del sitio (tambi??n puedes acceder a esta p??gina con 
              stopthewarondrugs.eth.(link/limo) aunque este servicio a??n est?? en fase experimental por lo cual hemos hecho
              el sitio disponible con el tradicional .com).
              Siguiendo esta misma filosof??a, cada ID de los NFTs es en realidad el hash 
              del archivo URI del NFT en IPFS para que t?? puedas buscar este archivo usando solamente 
              el ID del NFT. <br/><br/>
              Para hacer esto, simplemente necesitas construir el CID colocando "F01701220" justo antes del ID del NFT. En 
              otras palabras, el CID de tu NFT ser?? 'F01701220|EL-ID-DE-TU-NFT|'. Por ejemplo, si tienes acceso a un 
              nodo de IPFS, puedes hacer algo como ipfs://F01701220|EL-ID-DE-TU-NFT|. O tambi??n puedes hacer lo mismo 
              a trav??s de un gateway de IPFS p??blico como el de Pinata o Fleek usando el CID que constru??ste. Estos 
              NFTs se crearon de esta forma para garantizar 100% su autenticidad y para lograr IDs autodescriptivos.
                <br/><br/>
              El archivo URI tendr?? la mayor??a de la informaci??n del NFT, incluyendo la imagen que lo representa. Sin embargo, 
              alguna informaci??n del NFT est?? disponible ??nicamente a trav??s del blockchain, como el mensaje, por ejemplo.
            </p>
          }
        

      },
      filter:{
        title:"Filtrar",
        option1:"Por tipo de droga",
        option2:"Por personaje hist??rico",
        option3:"Por pa??s de referencia",
        option4:"Por tema general",
        option5:"Por artista",
        option6:"Idioma del NFT",
        apply:"Aplicar filtro"

      },
      findById:{
        find:"Buscar por Id",
        search:"Buscar"
      },
      mint:{
        title:<h2>Acu??a Nuevos NFTs</h2>,
        text:<p>
          Al acu??ar nuevos NFTs tienes el privilegio de inmortalizarte en el blockchain por medio
          del mensaje que decidas escribir en el NFT. Este mensaje vivir?? para siempre en la red 
          de Ethereum. No dejes pasar esta oportunidad!
          </p>
      },
      imageNFT:{
        message:"Mensaje",
        noMessage:"Este NFT a??n no tiene un mensaje. T?? puedes darle uno si compras este NFT!",
        artist:"Artista",
        description:"Descripci??n",
        youOwn:"T?? eres el due??o de este NFT !",
        connectWallet:"Necesitas Conectar Billetera",
        mint:" Acu??ar!",
        buy:"COMPRAR",
        notForSale:"No est?? en venta",
        setMessage:"Escribe El Mensaje!",
        changePrice:"Cambiar Precio",
        forSale:"En Venta? ",
        transfer:"Enviar",
        
      },
      setMessage:{
        title:"Escribe El Mensaje De Tu NFT",
        text:"Felicitaciones! T??, como due??o de un SWD NFT, tienes el privilegio de inmortalizarte con un mensaje que vivir?? \
        por siempre en el blockchain. Pero ten cuidado! Este mensaje no podr?? ser cambiado una vez lo env??es al blockchain. \
        Por otro lado, ten en cuenta que el mensaje s??lo puede tener un m??ximo de 300 caracteres. Bienvenido a la inmortalidad \
        de tus ideas!",
        message:"Mensaje",
        welcome:"Bienvenido a la inmortalidad",
        setMessage:"Poner Mensaje"
      },
      changePrice:{
        title:"Cambia El Precio De Tu NFT",
        current:"Precio actual",
        new:"Nuevo precio",
        button:"Cambiar Precio"
      },
      transfer:{
        title:"Env??a tu NFT a otra direcci??n",
        warning:"Ten cuidado! enviar tu NFT a la direcci??n equivocada significa la perdida permanente de tu NFT.",
        to:"Transferir a direcci??n de Ethereum:"
      },
      navItems:{
        home:"Inicio",
        overview:"Acerca",
        gallery:"Galer??a",
        mint:"Acu??ar",
        wallet:"Billetera",
        channel:"Canal"
      },
      artist_partner:{
        title:"Programa de Artista Socio",
        subtitle1:"Intro",
        paragraph1: <p>
          Los artistas son el coraz??n de Stop-The-War-On-Drugs NFTs. Para iniciar este proyecto, fue necesario contactar 
          diferentes artistas para desarrollar juntos las primeras piezas. Pero ya que en este momento existen varios NFTs,
          los artistas ahora se pueden dar una idea m??s f??cilmente de cu??l es la idea principal de este proyecto y de 
          qu?? se trata. Aqu?? es cuando el programa de artistas socios entra en juego.
          <br/><br/>
          En pocas palabras, los artistas ahora pueden desarrollar sus propios NFTs para SWD sin mucha supervisi??n de nuestra 
          parte, y ganar dinero con su arte a trav??s de nuestra plataforma. Sin embargo, esto representa un riesgo para el 
          artista ya que sus NFTs pueden ser rechazados o simplemente podr??an no venderse. Por lo tanto, SWD va a recompensar 
          a los artistas que decidan hacer NFTs por su cuenta no s??lo con un porcentaje alto en los royalties, sino tambi??n 
          con un porcentaje del valor recibido en la plataforma por la primera venta (acu??ado) de su NFT.
          </p>,
        subtitle2:"El Acuerdo",
        paragraph2:<p>
          Al ser parte del programa de artistas socios, t??, como artista, tienes derecho al 40% de la cantidad de Ether 
          percibida por el marketplace de SWD durante el acu??ado del NFT que t?? creaste. Pero eso no es la mejor parte. T?? 
          tendr??s derecho al 55% de las regal??as (royalties) ganadas en el futuro a trav??s de ese NFT en particular. Todos los 
          pagos ser??n realizados en la criptomoneda Ether.
          <br/><br/>
          Las regal??as (royalties) son una innovaci??n del blockchain muy importante porque permite seguir percibiendo ganancias 
          del arte producido incluso despu??s de vendido. Algo as?? como lo que pasa con la industria de los libros, donde el autor 
          sigue recolectando ganancias de por vida siempre y cuando sus libros se sigan vendiendo. Esto mismo se puede hacer con 
          NFTs y nosotros hemos implementado este mecanismo para los artistas. Cabe aclarar que de estas regal??as, una parte va 
          para el artista y otra para SWD (55% y 45% respectivamente en este caso).
          <br/><br/>
          El pago y la divisi??n de las regal??as (royalties) sucede autom??ticamente en el blockchain a trav??s de mecanismos en smart 
          contracts para mayor transparencia del proceso. Es decir, SWD no tendr?? la autoridad de cambiar estos mecanismo los 
          cuales estar??n en el blockchain por siempre para garantizar la total transparencia y descentralizaci??n de este proceso. 
          El artista podr?? verificar el c??digo de estos mecanismos los cuales ser??n p??blicos en el blockchain.
          Por otro lado, el 40% de la primera venta ser?? pagado manual y directamente por 
          nosotros en m??ximo una semana despu??s de la venta. Todos los pagos ser??n en Ether.
          <br/><br/>
          Pero para ser socio de este proyecto y tener NFTs en esta exclusiva colecci??n que har?? historia, es necesario 
          cumplir con unos requisitos m??nimos.
          </p>,
          subtitle3:"Requisitos",
          paragraph3:<p> Cumplir con los requisitos te va a poner en la puerta de entrada para ser socio con nosotros, pero 
            no te garantiza la entrada. Existir??n solamente 904 NFTs de SWD en toda la historia, lo que significa que est??s 
            tratando de crear NFTs para una colecci??n muy exclusiva. Por lo tanto, puede que tu arte sea aceptado o 
            no. Obviamente, mientras m??s temprano en el proyecto apliques, mayores probabilidades de ser aceptado vas a tener.
            A pesar de que la idea de este programa es la de agilizar el proceso de creaci??n art??stica y liberar un poco la 
            carga del equipo, t?? puedes enviarnos un e-mail para recibir un poco de gu??a con respecto a tus NFTs para 
            aumentar tus probabilidades de ser aceptado. Simplemente no abuses de este recurso. Los requisitos m??nimos para 
            tu NFT son:
            
          <ul>
            <li>Primero que todo, el requisito m??s obvio, tu NFT debe ser en contra de la prohibici??n o la farsa que es la 
              guerra contra el narcotr??fico. Si el NFT es inspirado en las ideas o la historia contada en el 
              <Link to='/channel'> canal de YouTube</Link> , tendr?? mejores posibilidades de ser aceptado.
            </li>
            <li>El formato de la pieza puede ser cuadrado, rectangular, horizontal o vertical. Sin embargo, si es rectangular, 
              debe tener una proporci??n menor o igual a 2:1 o 1:2.
            </li>
            <li>La pieza debe hacer referencia al proyecto en alguna parte de manera legible. No tiene que ser necesariamente 
              un elemento grande en la pieza, pero necesita ser claro que el NFT hace parte de este proyecto. Para esto debes 
              poner "stopthewarondrugs.eth" en tu trabajo gr??fico.
            </li>
            <li>La pieza puede ser tan peque??o como tama??o est??ndar HD o tan grande como tama??o est??ndar 4k.  </li>
            <li>El espacio en la nube es limitado y los NFTs est??n hechos para ser vistos a trav??s de una pantalla. As?? que, 
              a pesar de que nos preocupamos por mantener la mejor calidad posible y una excelente resoluci??n de las piezas, 
              trata de NO crear archivos s??per pesados con calidad que va a ser invisible al ojo humano.
            </li>
            <li>Tu NFT puede ser animado o no, pero debe estar en formato JPEG, PNG, GIF, o MP4.
            </li>
            <li>Opcionalmente, si tu NFT contiene texto, puedes realizar 2 versiones: una en ingl??s y otra en espa??ol.
            </li>
          </ul></p>,
        apply_title:"C??mo Aplicar?",
        apply_text:<p>
          Aplicar para ser parte de este proyecto de NFTs que har?? historia es muy f??cil. S??lo sigue los siguientes pasos:
          <ol>
            <li>
            Primero, debes crear una carpeta en Google Drive en donde vas a subir tu arte.
            </li>
            <li>
            Segundo, copia el link de la carpeta y aseg??rate de que el link es p??blico para cualquiera con el enlace.
            </li>
            <li>
            Finalmente, env??anos un e-mail a apply@stopthewarondrugs.com con la siguiente informaci??n:
            </li>
            <ul>
              <li>En <i>Asunto</i> debes poner "aplicaci??n".</li>
              <li>En el email debes poner tu nombre art??stico, y el link de la carpeta en Google Drive que copiaste en el 
                paso anterior.</li>
              <li>Opcionalmente, puedes agregar una descripci??n de tus ilustraciones ya que as?? podr??amos guiarte de una mejor 
                forma si vemos potencial en la propuesta pero creemos que hay que corregir alg??n detalle.</li>
            </ul>
            </ol>
            Por razones de seguridad, tu email ser?? eliminado si:
            <ul>
            <li><b>El email contiene alg??n archivo adjunto</b>. Tu email <b>NO</b> debe contener ning??n archivo adjunto
             o de lo contrario ser?? eliminado autom??ticamente. </li>
             <li>S??lo debe existir un link en el email el cual debe direccionar a Google Drive, o de lo contrario ser?? eliminado.</li>
            </ul>
           Nosotros consideraremos la posibilidad de incluir tu NFT en esta colecci??n y te responderemos en un m??ximo de tres semanas 
          a partir de tu aplicaci??n. Buena suerte!.
        </p>,
        subtitle4:"Si Tu NFT Es Aceptado",
        paragraph4:<p>
          Una vez tu NFT haya sido aceptado para ser parte de esta exclusiva colecci??n, necesitas darnos unos cuanto datos m??s: 
          
          <ul>
            <li>Una direcci??n de Ethereum en la cual deseas recibir/reclamar tus pagos.</li>
            <li>Tu nombre art??stico (tambi??n puedes ir de an??nimo).</li>
            <li>La direcci??n de tu p??gina web (opcional).</li>
          </ul>
        </p>,
        subtitle5:"C??mo Obtengo Mis Pagos?",
        paragraph5:<p>
          El primer pago ser?? realizado por nosotros directamente a tu direcci??n de Ethereum. La seguridad de estos fondos 
          son responsabilidad ??nica y exclusivamente tuya una vez ??stos lleguen a tu direcci??n.
          <br/><br/>
          El pago de las regal??as (royalties), sin embargo, ser??n recolectadas en el smart contract divisor de regal??as hasta 
          que t?? retires tus fondos de este contrato. Por lo tanto, t?? tendr??s que retirar tus Ethers de este smart contract 
          para poder obtener las regal??as. Recuerda que necesitar??s tener Ether para poder retirar tus Ethers de este 
          contrato. Por lo tanto te recomendamos que no retires tus regal??as hasta que tengas una suma considerable para 
          evitar pagar mucho dinero en "gas fees".
          <br/><br/>
          La direcci??n de este smart contract ser?? entregado a ti una vez despleguemos el contrato en el blockchain. Si tienes 
          m??s de un NFT con nosotros, este contrato ser?? el mismo para los royalties de todos tus NFTs.
        </p>
        },
    marketplace:{
      title:"Informaci??n Importante Acerca de Este Marketplace",
      text:<p className="small-info">
      <b>Taza:</b> Este marketplace aplica una taza del 0.8% por cada transacci??n, lo cual es 3 veces m??s bajo que la de Opensea y 
      10 veces m??s bajo que otros marketplaces. Realmente te recomendamos vender tus NFTs en esta plataforma. La taza recolectada 
      es usada para el mantenimiento de esta p??gina y podr??a a ser incluso m??s baja en el futuro cercano. 
      <br/><br/>
      <b>Regal??as:</b> este marketplace tambi??n ejerce el ERC2981 para el pago de regalias (royalties). Cada SWD NFT tiene 
      una regal??a del 6%, lo que significa que la cantidad final de Ether que usted recibir?? una vez halla vendido su NFT 
      ser?? del 93.248% del precio por el cual lo vendi??. Nosotros no aplicamos ninguna taza al comprador a diferencia de otros 
      marketplaces, lo que significa que lo que usted paga exactamente el precio que usted ve. Nosotros realmente le recomendamos 
      comprar sus SWDs aqu??.
      <br/><br/>
      <b>Pagos:</b> Este marketplace es no-custodio, lo que significa que ??ste no guarda ninguna cantidad de Ether que 
      sea suyo. Si uno de sus NFTs es vendido a trav??s de esta plataforma, entonces el marketplace va a recolectar la taza, 
      va a pagar las regal??as y le va a pagar a usted, todo en una misma transacci??n. Usted, el artista y nosotros vamos a recibir 
      el dinero tan pronto como el blockchain confirme que todo sali?? bien.
  </p>
    }}
    
  });
  
  //setLocale('es');