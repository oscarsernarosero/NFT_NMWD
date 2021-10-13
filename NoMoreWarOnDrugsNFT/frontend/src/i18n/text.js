import { setTranslations, setLocale } from 'react-i18nify';
import React, { Component }  from 'react';
import { Link } from "react-router-dom";

setTranslations({
  en: {
      home: {
          first:{
            title:"Be part of the history",
            para1:<span>Stop-The-War-On-Drugs is probably the biggest project with mayor relation to the future of the NFTs space.
              This collection not only has an artistic and cultural value, but also a huge political and historical one. "Stop the war on drug" is a world-wide movement 
              that grows by the day, which is still on its early stage. However, just like the prohibition
              of the 1920's, our war on drugs is destined to fail, and WILL come to an end. This means that SWD will continue to increase its value
              the more that the war on drugs approaches its end, and this movement becomes more relevant in the world politics.
            </span>,

            para2:<span>But that's not it!
                By getting one or more of these SWD NFTs, you are also <b>immortalizing yourself in the Ethereum blockchain for ever! </b>  
                These NFTs offer you the opportunity to write a message against the war on drugs directly into the blockchain without the 
                possiblity of it getting modified or erased ever. This means your message will be immortal. Together, we will make history 
                in the blockchain space through the political activism to end this horrific war on drugs that is taking our rights and 
                freedoms away. This is the opportunity to be able to show your future generations that YOU were part of the movement 
                that changed the world. WTF are you waiting for?</span>
          },
          second:{
            title:"You are supporting artists and my Youtube channel",
            para1:<span>One of the main goals of this project is to give visibility to some artists from the very same places that 
            <b> War On Drugs</b> has done the most harm. In other words, artists from countries like Colombia, México and Peru.
            People who suffer -through their skin- the cartels brutality and government corruption in their daily lives --the natural 
            outcome of prohibition. We want to turn the pain into art. </span>,

            para2:<span>
              But that's not it.
            This NFT project is one of the first ones to implement ERC2981 which aims to support royalties for
            NFT creators. SWD has a standard 6.00% royalty for all NFTs, and, as a rule of thumb, SWD grants a percentage of 
            the total amount of royalties collected to <b>all</b> the artists who collaborate in the art creation. This percentage 
            can be somewhere between 20% and 55% depending on the preference of payment of the artist. To know more about
            this, you can check out our <Link to='/artist-partner'>artist partner program.</Link> </span>
          
          },
          contact_me:"Reach to us:",
          artist_partner:{
            title:"If Your An Artist, You Can Be Our Partner",
            text:<p>
              We are in the minting phase. This means that artists from all around the globe can participate 
              and express themselves against the war on drugs through this project.
              If you are an artist, then you too can be part of this historical collection. So don't wait any longer, and create your 
              best piece against the war on drugs. Let's make money together by saving the world from this false crusade. 
              You will get a sweet deal regarding royalties and comission over the first sale (minting). 
              Check out our <Link to='/artist-partner'>Artist-Partner program</Link> to learn more. There will be only 904 NFTs in 
              this collection, so don't waste any more time. Apply now.
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
              There are only 904 NFTs because that's the amount of <i>líderes sociales</i> -activists- murdered in Colombia between
              December 1st, 2016 through February 28th, 2021. The War on Drugs has to do a great deal in this matter. Therefore, these NFTs 
              symbolize the millions of deceased victims of the War On Drugs.
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
            devastated by this War On Drugs. Counties like Colombia, 
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

              If you'd like to learn more on why The War On Drugs has been a hoax from the very beginning, we encorage you to visit our channel
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
                however this service is still not 100% reliable, so we made it available also with the more 
                traditional .com). Following this philosophy,
                every NFT's ID is in reality the hash of the URI file on IPFS. So, you can look up this file
                yourself only with the NFT's ID. <br/><br/>
                To do this, you simply have to build the CID by prepending "F01701220" to the ID. In  
                other words, your CID will be 'F01701220|YOUR-NFT-ID|'. So, for example, if you have 
                access to an IPFS node, you can do something like  ipfs://F01701220|YOUR-NFT-ID|. Or you can do this 
                through a public IPFS gateway such as Pinata or Fleek using the same CID. This is done this way to  
                guaranty 100% authenticity of each NFT, and to acomplish self-describing IDs. <br/><br/>
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
          <li>The format of the piece can be rectangular or square, vertical or horizontal. However, if rectngular, it cannot 
            have a proportion higher than 2:1 or 1:2.
          </li>
          <li>The piece must have the name of the project somewhere in a readable manner. It doesn't have to be a big element, 
            but it needs to be clear that the piece belongs to this project. This will be achieved by putting 
            "stopthewarondrugs.eth" in your graphic work.
          </li>
          <li>The piece must be as small as any of the HD dimensions or as big as any of the 4K dimensions. </li>
          <li>Cloud space is limmited, and NFTs are meant to be shown in a screen. So, even though we care a lot about 
            high quality and pieces with good resolution, please don't make unnecessarily heavy files with quality that 
            will be invisible to the eye.
          </li>
          <li>Your NFT may be animated or not, but the file must be a JPEG, PNG, GIF, or MP4.
          </li>
        </ul></p>,
      apply_title:"How To Apply",
      apply_text:<p>
        Applying to be part of this NFT project is very easy. Simply send an e-mail to 
        nft@stopthewarondrugs.com with your art, your name, and optionally a breve descriptio of the piece. 
        We will consider your art and have an answer by 3 weeks of your submition.
      </p>,
      subtitle4:"Once Your NFT Is Accepted",
      paragraph4:<p>
        Once your graphic piece is accepted to be part of this exclusive collection, you need to provide a couple more things 
        for us to be able to make your graphic piece into an NFT:
        <ul>
          <li>The Ethereum address where you want to receive/claim your payments.</li>
          <li>Your prefered artistic pseoudonym (you can also go anonymus).</li>
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
        <b>Fees:</b> This market place applies a 0.8% fee on all transactions. One of the lowest in the market. We recommend to
        transact your SWDs in this platform.
        <br/><br/>
        <b>Royalties:</b> This marketplace also enforces ERC2981 for royalty payments. Every SWD has a royalty of 5%. This menas that 
        the final amount you will be paid will be 94.24% of the price that you set for your NFT once it is sold.
        <br/><br/>
        <b>Payments:</b> This marketplace is a non-custodial marketplace which means it doesn't hold any Ether on your behalf. If  
        one of your NFTs is sold through this platform, then the marketplace will collect a fee, pay the royalties,  
        and pay YOU in the same transaction.
        
    </p>
      }

  },
  es: {
      home: {
          first:{
            title:"Sé Parte de la Historia",
            para1:<span>Stop-the-War-on-Drugs es probablemente el proyecto con mayor significado a futuro en el 
              mundo de los NFTs. Esta colección no sólo tiene valor artístico y cultural, sino que también tiene un gran 
              valor político e histórico. "No más guerra contra las drogas" es un movimiento mundial
              que crece día a día y que aún se encuentra en su temprana infancia. Pero la guerra contra las drogas está 
              destinada al fracaso, así como la prohibición de los 20s, y no dudamos de que esta horrenda guerra algún día acabará.
              Esto quiere decir que SWD irá creciendo en valor a medida que la guerra contra las drogas vaya siendo eliminada, y que 
              este movimiento vaya tomando mayor relevancia en la política mundial.
          
            </span>,

            para2:<span>Pero eso no es todo!
            Al adquirir uno o más de estos Stop-The-War-On-Drugs NFTs también estás <b>inmortalizándote en la red de Ethereum para siempre!</b>.
            Estos NFTs te ofrecen la oportunidad de escribir un mensaje en contra de la nefasta <b>Guerra Contra las Drogas</b> directamente
            en el blockchain sin la posibilidad de ser modificado o eliminado <b>nunca jamás!!! </b>. Es decir, tu mensaje será inmortal.
            
            Nosotros, unidos, haremos historia en el mundo del blockchain mediante el activismo político para acabar con esta horrenda guerra 
            contra las drogas que nos vulnera nuestros derechos y libertades, y tú podrás demostrarle a tus nietos que tú fuiste parte de este
            movimiento que cambió al mundo. Qué estás esperando?</span>
          },
          second:{
            title:"Estás apoyando a artistas",
            para1:<span>Uno de los objetivos principales de este proyecto es el de dar visibilidad a artistas provenientes de los mismos lugares
              en donde <b>La Guerra Contra Las Drogas</b> ha hecho el mayor daño. En otras palabras, artistas originarios de países como Colombia,
              México, Perú y Bolivia. Personas que han sufrido en carne propia la brutalidad de los carteles y la corrupción de sus gobiernos en sus
              vidas diarias (el resultado natural de la prohibición). Queremos convertir el dolor en arte.</span>,

            para2:<span>
              
              Este proyecto además implementa el ERC2981 para el pago de royalties a los creadores de los NFTs. SWD aplica un 5%
              de royalties a todos sus NFTs del cual, como ley y filosofía de este proyecto, un porcentaje es destinado al beneficio de los artistas
              creadores. Este porcentaje puede estar entre un 20% y un 55% dependiendo del método de pago preferido por el artista. Para saber más
              acerca de las formas de pago a artistas, revisa el programa de <Link to='/artist-partner'>artistas socios.</Link> </span>
          
            },
            contact_me:"Contacto:",
            artist_partner:{
              title:"Si Eres Artista, Puedes Ser Nuestro Socio",
              text:<p>
                Estamos en fase de acuñado. Esto quiere decir que, en estos momentos, 
                artistas al rededor del mundo pueden participar y expresarse en contra de la guerra contra las drogas a través de 
                este proyecto. Si eres un artista y deseas ser parte de esta colección histórica, no esperes más. Crea tu mejor 
                pieza en contra de la guerra contra el narcotráfico y ganemos dinero juntos salvando al mundo 
                de esta falsa cruzada. Te ofrecemos un buen trato con respecto a las regalías (royalties) y a la primera venta de 
                tu arte (acuñado). Aprende más de nuestro programa de <Link to='/artist-partner'>artistas socios.</Link>. Sólo existirán
                904 NFTs en esta colección, así que no pierdas más tiempo. Aplica ahora.
              </p>
            
            }
        },
      overview:{
          first:{
              title:"Hay una cantidad finita de NFTs: 904",
              text:<span>Los SWD NFTs son realmente escasos. Sólo existirán un total de 904 SWDs en toda la historia, lo cual está
                codificado de esta forma en su smart contract. Este número finito de NFTs busca hacer que cada token sea muy especial,
                lo cual a su vez le da un alto valor, que a futuro se podría traducir en valor monetario (alto precio). Pero estos
                NFTs no son simplemente cualquier NFTs en el mercado. Estos tokens son piezas históricas que estamos creando juntos.

              <br/><br/>
              Sólo habrán 904 NFTs porque esta es la cantidad de líderes sociales asesinados en Colombia entre el primero de 
              diciembre de 2016 y el 28 de febrero de 2021. La guerra contra las drogas ha sido un detonador importante de esta violencia.
              De esta forma, estos NFTs simbolizan las millones de vidas perdidas en esta Guerra Contra Las Drogas.
              </span>
          },
          second:{
            title:"El mensaje",
            text:<p >
              Un aspecto muy importante de esta colección de NFTs es que tu puedes escribir un mensaje directamente en el NFT
              que vivirá para siempre en el blockchain. Este mensaje sólo puede ser escrito una vez, y no podrá ser modificado
              o eliminado nunca por ningún motivo. Así que escribe un buen mensaje! La cantidad de caracteres disponibles para 
              tu texto son 300 para que tengas espacio suficiente para expresar tus valiosas ideas.

            <br/><br/>
            Puedes incluso "firmar" al final del mensaje con tu nombre o alias para que estés seguro de que la gente va a 
            saber que has sido tú quien escribió el mensaje.
            <br/><br/>
            La idea principal de este mensaje es la de demostrarle a los gobiernos del mundo que estamos en contra de la 
            hipócrita <b>Guerra Contra Las Drogas</b>, y que estamos cansados del terrorismo de estado y de que constantemente nos 
            vulneren nuestros derechos y libertades por medio de esta guerra. Sin embargo, tú eres completamente libre
            de escribir cualquier mensaje que tu quieras. No existen reglas.
        
        </p>
        },
        third:{
          title:"Por qué NFTs en 2 idiomas?",
          text:<p>
            Probablemente hayas notado que muchos de los NFTs vienen en 2 versiones: inglés y español. Esto se debe a que creemos que es
            responsabilidad del pueblo latinoamericano de alzar la voz de protesta en contra de esta guerra que ha devastado la mayor parte
            de las comunidades pobres del mundo, pero sobretodo nuestra región latinoamericana.
            Por este motivo, esta lucha debe ser argumentada en español. Sin embargo entendemos que los asuntos internacionales y la comunidad
            global de NFTs son comunidades de habla inglesa, lo cual nos ha llevado a crear estos NFTs en 2 versiones para llevar el mensaje a
            una audiencia más amplia.
          </p>
      },
      fourth:{
        lefttitle:"Canal de YouTube",
        left:<p>
          Este proyecto de NFTs es parte de un proyecto aún más grande cuyo objetivo es la de desmilitarizar
          <b> la guerra contra las drogas</b>. Hasta ahora, el principal componente de este proyecto ha 
          sido el canal de YouTube donde se estudia la farsa que ha sido esta guerra desde la historia y 
          otros campos del conocimiento como la economía. En este canal, mostramos cómo la <b>la guerra 
            contra las drogas</b> no ha sido más que una herramienta política y geopolítica empleada por
            las élites. En otras palabras, esta guerra no ha sido más que un medio para alcanzar el poder.
          </p>,
        middletitle:"Galería",
        middle:<p>
          Explora los diferentes NFTs creados en colaboración con diferentes artistas originarios de los 
          mismos lugares donde <b>la guerra contra las drogas</b> ha causado el mayor daño. Exprésate en
          contra de este derramamiento de sangre escribiendo un mensaje que vivirá por siempre en el
          blockchain de Ethereum.
          </p>,
        righttitle:"Blog",
        right: <p>
          Si eres una persona curiosa, el blog es justo para ti. Hemos creado lo que se podría considerar
          como una extensión del canal de YouTube donde expresamos nuestras ideas más importantes, y las 
          relacionamos con los videos en YouTube. Si eres de los que persiguen la verdad, has venido al 
          lugar correcto. Si eres de los que prefiere vivir en una burbuja, huye. Una vez abres los ojos,
          no hay vuelta atrás. 
          </p>
      },
        fifth:{
        title:"Los Artistas",
        text:<p>
          Esta colección de NFTs ha colaborado con diferentes artistas, en su mayoría de Latinoamérica 
          la cual es una de las regiones mas azotada por <b>la guerra contra las drogas</b>. Países 
          como Colombia, México y Perú son algunos de los lugares de origen de los artistas que han 
          colaborado en esta colección. Uno de los objetivos de este proyecto es el de visibilizar el
          arte de estas zonas devastadas a través de la red de Ethereum. Parte de los royalties colectados
          a través de la venta de estos NFTs va directamente a los artistas, lo cual aporta un granito de 
          arena para impactar de forma positiva la calidad de vida en estas zonas.
          
          </p>
        },
        sixth:{
          title:"Por Qué Parar La Guerra Contra Las Drogas?",
          text:<p >
              La pregunta debería ser mejor: por qué no? Simplemente trata de pensar en un solo logro de 
              esta guerra contra las drogas. Si pensaste en alguno, trata de investigar en internet si 
              lo que consideras un logro de esta guerra es realmente cierto. Además de algunas fuentes
              completamente sesgadas que podrías encontrar, la verdad es que mientras más estricta sea la
              prohibición, peores son los problemas de drogadicción. La guerra contra las drogas ha fallado
              en cada uno de sus postulados: aún tenemos un constante flujo de drogas desde las calles.
              Las muertes por sobredosis incluso han aumentado desde la prohibición! y lo más triste de 
              todo, es que el fin de esta guerra se ve más lejos que nunca antes. Quizá estamos peleando
              esta guerra de la manera equivocada. Aunque una pregunta aún más importante surge: por qué 
              nadie ha notado este fracaso antes? o quizá la gente en el poder se están haciendo los de la
              vista gorda? Cuáles son esos intereses detrás de una guerra  caótica, inútil y devastadora? 
              <br/><br/>
              Si quieres saber más de por qué la guerra contra el narcotráfico ha sido una farsa desde su 
              inicio, te invitamos a que visites nuestro <Link to='/channel'>canal</Link>.          
          </p>
          },
          seventh:{
              title:"Apoya Mi Canal De YouTube",
              text:<p>
                Esta colección de NFTs nace de la necesidad de financiar mi investigación con
                respecto a la Guerra Contra Las Drogas. Esta investigación es compartida a través
                de mi <a href="https://www.youtube.com/channel/UCxn8ktVoqqOEwBjNJHX2O-w" 
                target="_blank" rel="noopener noreferrer">
                canal de YouTube</a> el cual ha logrado tener mucha atención anteriormente, sin 
                embargo YouTube empezó a restringir severamente mis videos por la temática del canal, 
                lo cual
                ha restringido bastante el crecimiento orgánico de mi audiencia y mi habilidad para 
                monetizar mis videos. En lugar de abandonar esta importante iniciativa, he decidido
                combinar todas mis pasiones en este proyecto: historia, desarrollo de software, 
                blockchain, y política. Mi idea es alimentar mi canal de YouTube a través del 
                mercado de los NFTs, al mismo tiempo que alimento el mercado de los NFTs a través de 
                mi canal de YouTube. En este proceso, puedo financiar mis verdaderas pasiones, y 
                beneficiar las comunidades con las que trabajo.
                </p>
          },about_me:{
            title:"Quién Soy?",
            text:<p><i>
              "Durante el día, soy un simple inmigrante con un trabajo mediocre. Durante la noche, soy un alma idealista
              clandestina, un aficionado a la historia, un desarrollador de software, y un amante del crypto que quiere aportar 
              su granito de arena en este mundo."</i>
              </p>
          },
          id_cid:{
            title:"Busca Tu NFT en IPFS Con Su ID",
            text:<p>Este proyecto ha sido construído de la forma más descentralizada posible. Desde subir la página a 
              IPFS hasta usar ENS para el dominio del sitio (también puedes acceder a esta página con 
              stopthewarondrugs.eth.(link/limo) aunque este servicio aún está en fase experimental por lo cual hemos hecho
              el sitio disponible con el tradicional .com).
              Siguiendo esta misma filosofía, cada ID de los NFTs es en realidad el hash 
              del archivo URI del NFT en IPFS para que tú puedas buscar este archivo usando sólamente 
              el ID del NFT. <br/><br/>
              Para hacer esto, simplemente necesitas construir el CID colocando "F01701220" justo antes del ID del NFT. En 
              otras palabras, el CID de tu NFT será 'F01701220|EL-ID-DE-TU-NFT|'. Por ejemplo, si tienes acceso a un 
              nodo de IPFS, puedes hacer algo como ipfs://F01701220|EL-ID-DE-TU-NFT|. O también puedes hacer lo mismo 
              a través de un gateway de IPFS público como el de Pinata o Fleek usando el CID que construíste. Estos 
              NFTs se crearon de esta forma para garantizar 100% su autenticidad y para lograr IDs autodescriptivos.
                <br/><br/>
              El archivo URI tendrá la mayoría de la información del NFT, incluyendo la imagen que lo representa. Sin embargo, 
              alguna información del NFT está disponible únicamente a través del blockchain, como el mensaje, por ejemplo.
            </p>
          }
        

      },
      filter:{
        title:"Filtrar",
        option1:"Por tipo de droga",
        option2:"Por personaje histórico",
        option3:"Por país de referencia",
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
        title:<h2>Acuña Nuevos NFTs</h2>,
        text:<p>
          Al acuñar nuevos NFTs tienes el privilegio de inmortalizarte en el blockchain por medio
          del mensaje que decidas escribir en el NFT. Este mensaje vivirá para siempre en la red 
          de Ethereum. No dejes pasar esta oportunidad!
          </p>
      },
      imageNFT:{
        message:"Mensaje",
        noMessage:"Este NFT aún no tiene un mensaje. Tú puedes darle uno si compras este NFT!",
        artist:"Artista",
        description:"Descripción",
        youOwn:"Tú eres el dueño de este NFT !",
        connectWallet:"Necesitas Conectar Billetera",
        mint:" Acuñar!",
        buy:"COMPRAR",
        notForSale:"No está en venta",
        setMessage:"Escribe El Mensaje!",
        changePrice:"Cambiar Precio",
        forSale:"En Venta? ",
        transfer:"Enviar",
        
      },
      setMessage:{
        title:"Escribe El Mensaje De Tu NFT",
        text:"Felicitaciones! Tú, como dueño de un SWD NFT, tienes el privilegio de inmortalizarte con un mensaje que vivirá \
        por siempre en el blockchain. Pero ten cuidado! Este mensaje no podrá ser cambiado una vez lo envíes al blockchain. \
        Por otro lado, ten en cuenta que el mensaje sólo puede tener un máximo de 300 caracteres. Bienvenido a la inmortalidad \
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
        title:"Envía tu NFT a otra dirección",
        warning:"Ten cuidado! enviar tu NFT a la dirección quivocada significa la perdida permanente de tu NFT.",
        to:"Transferir a dirección de Ethereum:"
      },
      navItems:{
        home:"Inicio",
        overview:"Acerca",
        gallery:"Galería",
        mint:"Acuñar",
        wallet:"Billetera",
        channel:"Canal"
      },
      artist_partner:{
        title:"Programa de Artista Socio",
        subtitle1:"Intro",
        paragraph1: <p>
          Los artistas son el corazón de Stop-The-War-On-Drugs NFTs. Para iniciar este proyecto, fue necesario contactar 
          diferentes artistas para desarrollar juntos las primeras piezas. Pero ya que en este momento existen varios NFTs,
          los artistas ahora se pueden dar una idea más fácilmente de cuál es la idea principal de este proyecto y de 
          qué se trata. Aquí es cuando el programa de artistas socios entra en juego.
          <br/><br/>
          En pocas palabras, los artistas ahora pueden desarrollar sus propios NFTs para SWD sin mucha supervisión de nuestra 
          parte, y ganar dinero con su arte através de nuestra plataforma. Sin embargo, esto representa un riesgo para el 
          artista ya que sus NFTs pueden ser rechazados o simplemente podrían no venderse. Por lo tanto, SWD va a recompensar 
          a los artistas que decidan hacer NFTs por su cuenta no sólo con un porcentage alto en los royalties, sino también 
          con un porcentaje del valor recibido en la plataforma por la primera venta (acuñado) de su NFT.
          </p>,
        subtitle2:"El Acuerdo",
        paragraph2:<p>
          Al ser parte del programa de artistas socios, tú, como artista, tienes derecho al 40% de la cantidad de Ether 
          percibida por el marketplace de SWD durante el acuñado del NFT que tú creaste. Pero eso no es la mejor parte. Tú 
          tendrás derecho al 55% de las regalías (royalties) ganadas en el futuro a través de ese NFT en particular. Todos los 
          pagos serán realizados en la criptomoneda Ether.
          <br/><br/>
          Las regalías (royalties) son una innovación del blockchain muy importante porque permite seguir percibiendo ganancias 
          del arte producido incluso después de vendido. Algo así como lo que pasa con la industria de los libros, donde el autor 
          sigue recolectando ganancias de por vida siempre y cuando sus libros se sigan vendiendo. Esto mismo se puede hacer con 
          NFTs y nosotros hemos implementado este mecanismo para los artistas. Cabe aclarar que de estas regalías, una parte va 
          para el artista y otra para SWD (55% y 45% respectivamente en este caso).
          <br/><br/>
          El pago y la división de las regalías (royalties) sucede automáticamente en el blockchain através de mecanismos en smart 
          contracts para mayor transparencia del proceso. Es decir, SWD no tendrá la autoridad de cambiar estos mecanismo los 
          cuales estarán en el blockchain por siempre para garantizar la total transparencia y descentralización de este proceso. 
          El artista podrá verificar el código de estos mecanismos los cuales serán públicos en el blockchain.
          Por otro lado, el 40% de la primera venta será pagado manual y directamente por 
          nosotros en máximo una semana después de la venta. Todos los pagos serán en Ether.
          <br/><br/>
          Pero para ser socio de este proyecto y tener NFTs en esta exclusiva colección que hará historia, es necesario 
          cumplir con unos requisitos mínimos.
          </p>,
          subtitle3:"Requisitos",
          paragraph3:<p> Cumplir con los requisitos te va a poner en la puerta de entrada para ser socio con nosotros, pero 
            no te garantiza la entrada. Existirán sólamente 904 NFTs de SWD en toda la historia, lo que significa que estás 
            tratando de crear NFTs para una colección muy exclusiva. Por lo tanto, puede que tu arte sea aceptado o 
            no. Obviamente, mientras más temprano en el proyecto apliques, mayores probabilidades de ser aceptado vas a tener.
            A pesar de que la idea de este programa es la de agilizar el proceso de creación artística y liberar un poco la 
            carga del equipo, tú puedes enviarnos un e-mail para recibir un poco de guía con respecto a tus NFTs para 
            aumentar tus probabilidades de ser aceptado. Simplemente no abuses de este recurso. Los requisitos mínimos para 
            tu NFT son:
            
          <ul>
            <li>Primero que todo, el requisito más obvio, tu NFT debe ser en contra de la prohibición o la farsa que es la 
              guerra contra el narcotráfico. Si el NFT es inspirado en las ideas o la historia contada en el 
              <Link to='/channel'> canal de YouTube</Link> , tendrá mejores posibilidades de ser aceptado.
            </li>
            <li>El formato de la pieza puede ser cuadrado, rectangular, horizontal o vertical. Sin embargo, si es rectangular, 
              debe tener una proporción menor o igual a 2:1 o 1:2.
            </li>
            <li>La pieza debe hacer referencia al proyecto en alguna parte de manera legible. No tiene que ser necesariamente 
              un elemento grande en la pieza, pero necesita ser claro que el NFT hace parte de este proyecto. Para esto debes 
              poner "stopthewarondrugs.eth" en tu trabajo gráfico.
            </li>
            <li>La pieza puede ser tan pequeño como tamaño estándar HD o tan grande como tamaño estándar 4k.  </li>
            <li>El espacio en la nube es limitado y los NFTs están hechos para ser vistos a través de una pantalla. Así que, 
              a pesar de que nos preocupamos por mantener la mejor calidad posible y una excelente resolució de las piezas, 
              trata de NO crear archivos súper pesados con calidad que va a ser invisible al ojo humano.
            </li>
            <li>Tu NFT puede ser animado o no, pero debe estar en formato JPEG, PNG, GIF, o MP4.
            </li>
            <li>Opcionalmente, si tu NFT contiene texto, puedes realizar 2 versiones: una en inglés y otra en español.
            </li>
          </ul></p>,
        apply_title:"Cómo Aplicar?",
        apply_text:<p>
          Aplicar para ser parte de este proyecto de NFTs que hará historia es muy fácil. Sólo sigue los siguientes pasos:
          <ol>
            <li>
            Primero, debes crear una carpeta en Google Drive en donde vas a subir tu arte.
            </li>
            <li>
            Segundo, copia el link de la carpeta y asegúrate de que el link es público para cualquiera con el enlace.
            </li>
            <li>
            Finalmente, envíanos un e-mail a apply@stopthewarondrugs.com con la siguiente información:
            </li>
            <ul>
              <li>En <i>Asunto</i> debes poner "aplicación".</li>
              <li>En el email debes poner tu nombre artístico, y el link de la carpeta en Google Drive que copiaste en el 
                paso anterior.</li>
              <li>Opcionalmente, puedes agregar una descripción de tus ilustraciones ya que así podríamos guiarte de una mejor 
                forma si vemos potencial en la propuesta pero creemos que hay que corregir algún detalle.</li>
            </ul>
            </ol>
            Por razones de seguridad, tu email será eliminado si:
            <ul>
            <li><b>El email contiene algún archivo adjunto</b>. Tu email <b>NO</b> debe contener ningún archivo adjunto
             o de lo contrario será eliminado automáticamente. </li>
             <li>Sólo debe existir un link en el email el cual debe direccionar a Google Drive, o de lo contrario será eliminado.</li>
            </ul>
           Nosotros consideraremos la posibilidad de incluir tu NFT en esta colección y te responderemos en un máximo de tres semanas 
          a partir de tu aplicación. Buena suerte!.
        </p>,
        subtitle4:"Si Tu NFT Es Aceptado",
        paragraph4:<p>
          Una vez tu NFT haya sido aceptado para ser parte de esta exclusiva colección, necesitas darnos unos cuanto datos más: 
          
          <ul>
            <li>Una dirección de Ethereum en la cual deseas recibir/reclamar tus pagos.</li>
            <li>Tu nombre artístico (también puedes ir de anónimo).</li>
            <li>La dirección de tu página web (opcional).</li>
          </ul>
        </p>,
        subtitle5:"Cómo Obtengo Mis Pagos?",
        paragraph5:<p>
          El primer pago será realizado por nosotros directamente a tu dirección de Ethereum. La seguridad de estos fondos 
          son responsabilidad única y exclusivamente tuya una vez éstos lleguen a tu dirección.
          <br/><br/>
          El pago de las regalías (royalties), sin embargo, serán recolectadas en el smart contract divisor de regalías hasta 
          que tú retires tus fondos de este contrato. Por lo tanto, tú tendrás que retirar tus Ethers de este smart contract 
          para poder obtener las regalías. Recuerda que necesitarás tener Ether para poder retirar tus Ethers de este 
          contrato. Por lo tanto te recomendamos que no retires tus regalías hasta que tengas una suma considerable para 
          evitar pagar mucho dinero en "gas fees".
          <br/><br/>
          La dirección de este smart contract será entregado a tí una vez despleguemos el contrato en el blockchain. Si tienes 
          más de un NFT con nosotros, este contrato será el mismo para los royalties de todos tus NFTs.
        </p>
        },
    marketplace:{
      title:"Información Importante Acerca de Este Marketplace",
      text:<p className="small-info">
      <b>Taza:</b> Este marketplace aplica una taza del 0.8% por cada transacción. Una de las más bajas del mercado. Así que 
      te recomendamos que trances tus SWD a través de esta plataforma.
      <br/><br/>
      <b>Regalías:</b> este marketplace también ejerce el ERC2981 para el pago de regalias (royalties). Cada SWD NFT tiene 
      una regalía del 5%, lo que significa que la cantidad final de Ether que usted recivirá una vez halla vendido su NFT 
      será del 94.24% del precio por el cual lo vendió.
      <br/><br/>
      <b>Pagos:</b> Este marketplace es no-custodio, lo que significa que éste no guarda ninguna cantidad de Ether que 
      sea suyo. Si uno de sus NFTs es vendido a través de esta plataforma, entonces el marketplace va a recolectar la taza, 
      va a pagar las regalías y le va a pagar a usted, todo en una misma transacción.
  </p>
    }}
    
  });
  
  //setLocale('es');