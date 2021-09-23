import { setTranslations, setLocale } from 'react-i18nify';
import React, { Component }  from 'react';

setTranslations({
  en: {
    home: {
      first:{
        title:"Be part of history",
        para1:<span>Stop-the-War-on-Drugs is not just an NFT project. It is a world-wide movement that gets stronger by the day.
        SWD, moreover, is pioneering in the crypto space regarding political activism! In other words, these are not just NFTs;
        These are very special tokens that represent your believes and your values. </span>,

        para2:<span>But that is not it!
        By getting one or more of the Stop-The-War-On-Drugs NFTs, you are not only supporting a YouTube channel and the artists who create 
            these art works, but you are also <b>immortalizing yourself in the Ethereum blockchain for ever!</b> These NFTs offer the opportunity
            of writting a message against the nefarious <b>War On Drugs</b> directly into the blockchain without the possibility of being modified or deleted <b>ever!!! </b> 
            In other words, your message will be immortal. We, together, will pioneer and make history in the blockchain political activism to end this horrendous War On Drugs that takes away our freedoms and rights,and you 
            will be able to prove to your kids and grandkids that you were among those pioneers that changed the world. What are you waiting for?</span>
      }
    }
  },
  es: {
    home: {
      first:{
        title:"Sé Parte de la Historia",
        para1:<span>Stop-the-War-on-Drugs no es simplemente un proyecto de NFTs, sino que es más bien parte de un movmiento mundial
          que se crece día a día. SWD es además pionero en la industria crypto con respecto al activismo político! En pocas palabras,
          Estos no son simplemente NFTs, sino que son tokens muy especiales que representan tus convicciones y tus valores.
        </span>,

        para2:<span>Pero eso no es todo!
        Al adquirir uno o más de estos Stop-The-War-On-Drugs NFTs, no sólo estas apoyando un canal de YouTube y a los artistas
        que crearon estas grandiosas piezas artísticas, sino que también estás <b>inmortalizándote en la red de Ethereum para siempre!</b>.
        Estos NFTs te ofrecen la oportunidad de escribir un mensaje en contra de la nefasta <b>Guerra Contra las Drogas</b> directamente
        en el blockchain sin la posibilidad de ser modificado o eliminado <b>nunca jamás!!! </b>. Es decir, tu mensaje será inmortal.
        Nosotros, unidos, haremos historia en el mundo del blockchain mediante el activismo político para acabar con esta horrenda guerra 
        contra las drogas que nos vulnera nuestros derechos y libertades, y tú podrás mostrarle a tus nietos que tú fuiste parte de este
        movimiento que cambió al mundo. Qué estás esperando?</span>
      }
    }
  }
});

setLocale('es');
