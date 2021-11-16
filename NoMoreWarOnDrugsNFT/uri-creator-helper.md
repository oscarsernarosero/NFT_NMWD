# Helper File For URI Creation

This document is meant to help with the json URI creation since it can be reviewed before uploading. The repetitive process of modifying the script can easily lead to mistakes, which can be avoided by getting all the info ready before hand.


## Check Protocol

Before testnet test:

Check in each one:

1. Check is animated.
2. Check Title and Desription spelling.
3. Check Languages.
4. Check Topics.

Now, check by artist:

1. Check that all the links of the artist are the same.
2. Check that the link is correct.
3. Check that all the royalty addresses are the same for the artist.
4. Check royalty address against local databse.
5. Check the name of the artist is the same everywhere.


Run a testnet check.

1. Check images, titles and descriptions for final OK.
2. Check artists links.
3. Check royalty address in a block explorer. Read contract's artist address, and check with the artist message where he/she gave that address.

That's it.

Don't erase anything until the piece has been minted.


## LUTO

1
```
    const nftMediaPath="./nft_media/LUTO/P3 español.jpg";
    const isAnimated = false;
    const name="Con una mano compra, con la otra persigue";
    const description="Los mayores consumidores son también quienes la prohiben más ferozmente, pero persiguen sólo a cierto tipo de personas.";

    const language = LANGUAGE.ES;
    
    const artist="LUTO";
    const artist_webpage="https://www.instagram.com/lutocorps/?fbclid=IwAR0NBST9LqAPi0G7VZ8LXDWp8U407OO4RO1vaGRT7NHJLmLk1n9lO1UNh3w";
    const topics= [TOPIC.US,TOPIC.RACISM];
    const _royaltyPct = "6.00"//%
    const _royaltyAddress = "0x0665db5CD07b05Bef3d7B4F847695DfE413c317D"
    //
    const external_url="www.stopthewarondrugs.com";
 ```
 DONE

2
 ```
    const nftMediaPath="./nft_media/LUTO/P3 ingles.jpg";
    const isAnimated = false;
    const name="Buys with one hand. Prosecutes with the other";
    const description="The most avid consumers are also the most draconian prohibitionists, but they only go after certain profiled people.";

    const language = LANGUAGE.EN;
    
    const artist="LUTO";
    const artist_webpage="https://www.instagram.com/lutocorps/?fbclid=IwAR0NBST9LqAPi0G7VZ8LXDWp8U407OO4RO1vaGRT7NHJLmLk1n9lO1UNh3w";
    const topics= [TOPIC.US,TOPIC.RACISM];
    const _royaltyPct = "6.00"//%
    const _royaltyAddress = "0x0665db5CD07b05Bef3d7B4F847695DfE413c317D"
    //
    const external_url="www.stopthewarondrugs.com";
 ```
DONE

 3
 ```
    const nftMediaPath="./nft_media/LUTO/POSTER4esp.jpg";
    const isAnimated = false;
    const name="Muerte y miseria";
    const description="Los grandes resultados de la guerra contra el narcotráfico.";

    const language = LANGUAGE.ES;
    
    const artist="LUTO";
    const artist_webpage="https://www.instagram.com/lutocorps/?fbclid=IwAR0NBST9LqAPi0G7VZ8LXDWp8U407OO4RO1vaGRT7NHJLmLk1n9lO1UNh3w";
    const topics= [TOPIC.VIOLENCE, TOPIC.CRIME, TOPIC.CORRUPTION];
    const _royaltyPct = "6.00"//%
    const _royaltyAddress = "0x0665db5CD07b05Bef3d7B4F847695DfE413c317D"
    //
    const external_url="www.stopthewarondrugs.com";
 ```
 DONE

  4
 ```
    const nftMediaPath="./nft_media/LUTO/POSTER4ingles.jpg;
    const isAnimated = false;
    const name="Death And Misery";
    const description="The great outcomes of the war on drugs.";

    const language = LANGUAGE.EN;
    
    const artist="LUTO";
    const artist_webpage="https://www.instagram.com/lutocorps/?fbclid=IwAR0NBST9LqAPi0G7VZ8LXDWp8U407OO4RO1vaGRT7NHJLmLk1n9lO1UNh3w";
    const topics= [TOPIC.VIOLENCE, TOPIC.CRIME, TOPIC.CORRUPTION];
    const _royaltyPct = "6.00"//%
    const _royaltyAddress = "0x0665db5CD07b05Bef3d7B4F847695DfE413c317D"
    //
    const external_url="www.stopthewarondrugs.com";
 ```
 DONE

  5
 ```
    const nftMediaPath="./nft_media/LUTO/POSTER5español.jpg;
    const isAnimated = false;
    const name="Los esteroides de la mafia";
    const description="La prohibición son los esteroides y el combustible del crimen.";

    const language = LANGUAGE.ES;
    
    const artist="LUTO";
    const artist_webpage="https://www.instagram.com/lutocorps/?fbclid=IwAR0NBST9LqAPi0G7VZ8LXDWp8U407OO4RO1vaGRT7NHJLmLk1n9lO1UNh3w";
    const topics= [TOPIC.CRIME, TOPIC.ECONOMICS];
    const _royaltyPct = "6.00"//%
    const _royaltyAddress = "0x0665db5CD07b05Bef3d7B4F847695DfE413c317D"
    //
    const external_url="www.stopthewarondrugs.com";
 ```
 DONE

 6
 ```
    const nftMediaPath="./nft_media/LUTO/POSTER5ingles.jpg";
    const isAnimated = false;
    const name="Mafia's Steroids";
    const description="Prohibition is the crime's steroids and fuel.";

    const language = LANGUAGE.EN;
    
    const artist="LUTO";
    const artist_webpage="https://www.instagram.com/lutocorps/?fbclid=IwAR0NBST9LqAPi0G7VZ8LXDWp8U407OO4RO1vaGRT7NHJLmLk1n9lO1UNh3w";
    const topics= [TOPIC.CRIME, TOPIC.ECONOMICS];
    const _royaltyPct = "6.00"//%
    const _royaltyAddress = "0x0665db5CD07b05Bef3d7B4F847695DfE413c317D"
    //
    const external_url="www.stopthewarondrugs.com";
 ```
 DONE
CHECKED


 ## El Cerrea'o Comics


7
```
    const nftMediaPath="./nft_media/El_Cerrao_Comics/NFT_GUERRA_01_ENGLISH.png";
    const isAnimated = false;
    const name="US Army In Vietnam";
    const description="The responsibility of the US army in the drug-abuse problem. Ironically, it is the same country leading the war-on-drugs.";

    const language = LANGUAGE.EN;
    
    const artist="El Cerra'o Comics";
    const artist_webpage="https://www.instagram.com/el.cerrao.comics/?fbclid=IwAR2figf5tBg2Xm_O4aZyqP2IperdgANcaEd-veRgme-w6GF_GGUH_8mgWRw";
    const topics= [ TOPIC.SHAM, TOPIC.US, TOPIC.VIETNAM];
    const _royaltyPct = "6.00"//%
    const _royaltyAddress = "0x92b1fb7902779D5e40d9F4A749469Af321046a5F"
    //
    const external_url="www.stopthewarondrugs.com";
 ```
 DONE

 8
```
    const nftMediaPath="./nft_media/El_Cerrao_Comics/NFT_GUERRA_01_SPANISH.png";
    const isAnimated = false;
    const name="Ejército de EEUU en Vietnam";
    const description="Responsabilidad del ejército norteamericano en el consumo en su propio pueblo. Irónicamente, líder en la guerra contra las drogas.";

    const language = LANGUAGE.ES;
    
    const artist="El Cerra'o Comics";
    const artist_webpage="https://www.instagram.com/el.cerrao.comics/?fbclid=IwAR2figf5tBg2Xm_O4aZyqP2IperdgANcaEd-veRgme-w6GF_GGUH_8mgWRw";
    const topics= [TOPIC.SHAM, TOPIC.US, TOPIC.VIETNAM];
    const _royaltyPct = "6.00"//%
    const _royaltyAddress = "0x92b1fb7902779D5e40d9F4A749469Af321046a5F"
    //
    const external_url="www.stopthewarondrugs.com";
 ```
 DONE

 9
```
    const nftMediaPath="./nft_media/El_Cerrao_Comics/NFT_GUERRA_02_ENGLISH.png";
    const isAnimated = false;
    const name="At The Mercy Of An Extremely Bipolar System";
    const description="The two personalities of a schizophrenic society.";

    const language = LANGUAGE.EN;
    
    const artist="El Cerra'o Comics";
    const artist_webpage="https://www.instagram.com/el.cerrao.comics/?fbclid=IwAR2figf5tBg2Xm_O4aZyqP2IperdgANcaEd-veRgme-w6GF_GGUH_8mgWRw";
    const topics= [TOPIC.POLITICS, TOPIC.SHAM, TOPIC.US];
    const _royaltyPct = "6.00"//%
    const _royaltyAddress = "0x92b1fb7902779D5e40d9F4A749469Af321046a5F"
    //
    const external_url="www.stopthewarondrugs.com";
 ```
 DONE

  10
```
    const nftMediaPath="./nft_media/El_Cerrao_Comics/NFT_GUERRA_02_SPANISH.png";
    const isAnimated = false;
    const name="A merced de un sistema extremadamente bipolar";
    const description="Las dos personalidades de una sociedad esquizofrénica.";

    const language = LANGUAGE.ES;
    
    const artist="El Cerra'o Comics";
    const artist_webpage="https://www.instagram.com/el.cerrao.comics/?fbclid=IwAR2figf5tBg2Xm_O4aZyqP2IperdgANcaEd-veRgme-w6GF_GGUH_8mgWRw";
    const topics= [TOPIC.POLITICS, TOPIC.SHAM, TOPIC.US];
    const _royaltyPct = "6.00"//%
    const _royaltyAddress = "0x92b1fb7902779D5e40d9F4A749469Af321046a5F"
    //
    const external_url="www.stopthewarondrugs.com";
 ```
 DONE

 11
```
    const nftMediaPath="./nft_media/El_Cerrao_Comics/NFT_GUERRA_03_ENGLISH.png";
    const isAnimated = false;
    const name="Endless Death";
    const description="The War On Drugs is a hungry beast, a bottomless hole of death where resources and freedoms are lost.";

    const language = LANGUAGE.EN;
    
    const artist="El Cerra'o Comics";
    const artist_webpage="https://www.instagram.com/el.cerrao.comics/?fbclid=IwAR2figf5tBg2Xm_O4aZyqP2IperdgANcaEd-veRgme-w6GF_GGUH_8mgWRw";
    const topics= [TOPIC.VIOLENCE, TOPIC.CRIME, TOPIC.CORRUPTION];
    const _royaltyPct = "6.00"//%
    const _royaltyAddress = "0x92b1fb7902779D5e40d9F4A749469Af321046a5F"
    //
    const external_url="www.stopthewarondrugs.com";
 ```

  12
```
    const nftMediaPath="./nft_media/El_Cerrao_Comics/NFT_GUERRA_03_SPANISH.png";
    const isAnimated = false;
    const name="Muerte sinfín";
    const description="La guerra contra el narcotráfico es una bestia hambrienta. Un agujero sinfín de muerte, donde se pierden recursos y libertades.";

    const language = LANGUAGE.ES;

    const topics= [TOPIC.VIOLENCE, TOPIC.CRIME, TOPIC.CORRUPTION];
    
    const artist="El Cerra'o Comics";
    const artist_webpage="https://www.instagram.com/el.cerrao.comics/?fbclid=IwAR2figf5tBg2Xm_O4aZyqP2IperdgANcaEd-veRgme-w6GF_GGUH_8mgWRw";
    const _royaltyPct = "6.00"//%
    const _royaltyAddress = "0x92b1fb7902779D5e40d9F4A749469Af321046a5F"
    //
    const external_url="www.stopthewarondrugs.com";
 ```
 DONE

  13
```
    const nftMediaPath="./nft_media/El_Cerrao_Comics/NFT_GUERRA_04.png";
    const isAnimated = false;
    const name="Plan Colombia";
    const description="He who creates the laws is the same one who violates them.";

    const language = LANGUAGE.EN;
    
    const artist="El Cerra'o Comics";
    const artist_webpage="https://www.instagram.com/el.cerrao.comics/?fbclid=IwAR2figf5tBg2Xm_O4aZyqP2IperdgANcaEd-veRgme-w6GF_GGUH_8mgWRw";
    const topics= [TOPIC.VIOLENCE, TOPIC.CRIME, TOPIC.COLOMBIA, TOPIC.US];
    const _royaltyPct = "6.00"//%
    const _royaltyAddress = "0x92b1fb7902779D5e40d9F4A749469Af321046a5F"
    //
    const external_url="www.stopthewarondrugs.com";
 ```
 DONE
CHECKED

 ## JP

 14
```
    const nftMediaPath="./nft_media/JP/3172DD47-76AA-419A-A4DD-C968EB252A28.jpeg";
    const isAnimated = false;
    const name="The Prohibition Chain";
    const description="Parody of the Food Chain.";

    const language = LANGUAGE.EN;

    const topics= [TOPIC.VIOLENCE, TOPIC.CRIME, TOPIC.CORRUPTION];
    
    const artist="JP";
    const artist_webpage="https://jimpixelcomix.com/?fbclid=IwAR0cDDksh4UoMiOR0A3e4a31oCGU-ai_CbK7QlWrczrafR4L9oAI16YHXF4";
    const _royaltyPct = "6.00"//%
    const _royaltyAddress = "0xbcB5080C9297456760394c9FA2742edbcb7B7B20"
    //
    const external_url="www.stopthewarondrugs.com";
 ```
 DONE

 15
```
    const nftMediaPath="./nft_media/JP/56FE2EE3-06EA-468F-AFE7-759071140F90.jpeg";
    const isAnimated = false;
    const name="La Cadena Prohibicionista";
    const description="Parodia de la cadena alimenticia.";

    const language = LANGUAGE.ES;

    const topics= [TOPIC.VIOLENCE, TOPIC.CRIME, TOPIC.CORRUPTION];
    
    const artist="JP";
    const artist_webpage="https://jimpixelcomix.com/?fbclid=IwAR0cDDksh4UoMiOR0A3e4a31oCGU-ai_CbK7QlWrczrafR4L9oAI16YHXF4";
    const _royaltyPct = "6.00"//%
    const _royaltyAddress = "0xbcB5080C9297456760394c9FA2742edbcb7B7B20"
    //
    const external_url="www.stopthewarondrugs.com";
 ```
 DONE

 16
```
    const nftMediaPath="./nft_media/JP/73ACBC92-9BF4-4BA9-A854-94F83922F870.jpeg";
    const isAnimated = false;
    const name="The DEA Secret Deals With the Sinaloa Cartel";
    const description="The DEA made secret deals with the Sinaloa Cartel to make the sham of The War On Drugs easier with the OK from the US government.";

    const language = LANGUAGE.EN;

    const topics= [TOPIC.US, TOPIC.MEXICO, TOPIC.SHAM, TOPIC.DEA];
    
    const artist="JP";
    const artist_webpage="https://jimpixelcomix.com/?fbclid=IwAR0cDDksh4UoMiOR0A3e4a31oCGU-ai_CbK7QlWrczrafR4L9oAI16YHXF4";
    const _royaltyPct = "6.00"//%
    const _royaltyAddress = "0xbcB5080C9297456760394c9FA2742edbcb7B7B20"
    //
    const external_url="www.stopthewarondrugs.com";
 ```
 DONE

 17
```
    const nftMediaPath="./nft_media/JP/7EA1017D-B2D6-4283-9419-8F59BF6C6262.jpeg";
    const isAnimated = false;
    const name="Narco States";
    const description="Alvaro Uribe sent tons of cocaine to El Chapo while being president, according to @hackerfiscalia.";

    const language = LANGUAGE.EN;

    const topics= [TOPIC.COLOMBIA, TOPIC.MEXICO, TOPIC.SHAM];
    
    const artist="JP";
    const artist_webpage="https://jimpixelcomix.com/?fbclid=IwAR0cDDksh4UoMiOR0A3e4a31oCGU-ai_CbK7QlWrczrafR4L9oAI16YHXF4";
    const _royaltyPct = "6.00"//%
    const _royaltyAddress = "0xbcB5080C9297456760394c9FA2742edbcb7B7B20"
    //
    const external_url="www.stopthewarondrugs.com";
 ```
 DONE

 18
```
    const nftMediaPath="./nft_media/JP/87D7366E-1945-4FEC-940B-22761C82305C.jpeg";
    const isAnimated = false;
    const name="Narco Estados";
    const description="Alvaro Uribe le envió toneladas de cocaína al Chapo cuando era presidente, según @hackerfiscalia.";

    const language = LANGUAGE.EN;

    const topics= [TOPIC.COLOMBIA, TOPIC.MEXICO, TOPIC.SHAM];
    
    const artist="JP";
    const artist_webpage="https://jimpixelcomix.com/?fbclid=IwAR0cDDksh4UoMiOR0A3e4a31oCGU-ai_CbK7QlWrczrafR4L9oAI16YHXF4";
    const _royaltyPct = "6.00"//%
    const _royaltyAddress = "0xbcB5080C9297456760394c9FA2742edbcb7B7B20"
    //
    const external_url="www.stopthewarondrugs.com";
 ```
 DONE

 ## Juan Melo

19
```
    const nftMediaPath="./nft_media/Jaun_Melo/1 The War On Drugs.mp4";
    const isAnimated = true;
    const name="The War On Drugs Is A Geopolitical Tool";
    const description="The War On Drugs was born as the US perfect means to protect the trade with China from the European colonial powers.";

    const language = LANGUAGE.EN;

    const topics= [TOPIC.GEOPOLITICS, TOPIC.HISTORY, TOPIC.CHINA, TOPIC.US];
    
    const artist="Juan Melo";
    const artist_webpage="juanmelo.org/";
    const _royaltyPct = "6.00"//%
    const _royaltyAddress = "0xE817F3186e527a77cFF6207dff977D7bE538de15"
    //
    const external_url="www.stopthewarondrugs.com";
 ```
 DONE

 20
```
    const nftMediaPath="./nft_media/Jaun_Melo/2 La Guerra Contra Las Drogas.mp4";
    const isAnimated = true;
    const name="La guerra contra las drogas es un arma geopolítica";
    const description="La guerra contra las drogas nació como el medio perfecto de Estados Unidos para proteger el comercio con China de las potencias coloniales europeas.";

    const language = LANGUAGE.ES;

    const topics= [TOPIC.GEOPOLITICS, TOPIC.HISTORY, TOPIC.CHINA, TOPIC.US];
    
    const artist="Juan Melo";
    const artist_webpage="juanmelo.org/";
    const _royaltyPct = "6.00"//%
    const _royaltyAddress = "0xE817F3186e527a77cFF6207dff977D7bE538de15"
    //
    const external_url="www.stopthewarondrugs.com";
 ```
 DONE

 21
```
    const nftMediaPath="./nft_media/Jaun_Melo/5 Racist.mp4";
    const isAnimated = true;
    const name="The War On Drugs Is Racist";
    const description="The prohibition of certain drugs has been the legal means of the white America to tell non-European cultures that it is prohibited for them to be themselves";

    const language = LANGUAGE.EN;

    const topics= [TOPIC.RACISM];
    
    const artist="Juan Melo";
    const artist_webpage="juanmelo.org/";
    const _royaltyPct = "6.00"//%
    const _royaltyAddress = "0xE817F3186e527a77cFF6207dff977D7bE538de15"
    //
    const external_url="www.stopthewarondrugs.com";
 ```
 DONE

 22
```
    const nftMediaPath="./nft_media/Jaun_Melo/6 Racista.mp4";
    const isAnimated = true;
    const name="La guerra contra las drogas es racista";
    const description="La prohibición de ciertas drogas ha sido el medio legal de los estadounidenses blancos para decirle a las culturas no europeas que está prohibido ser ellos mismos.";

    const language = LANGUAGE.ES;

    const topics= [TOPIC.RACISM];
    
    const artist="Juan Melo";
    const artist_webpage="juanmelo.org/";
    const _royaltyPct = "6.00"//%
    const _royaltyAddress = "0xE817F3186e527a77cFF6207dff977D7bE538de15"
    //
    const external_url="www.stopthewarondrugs.com";
 ```

 ??

 ??

 

## AB.MC

 ??
```
    const nftMediaPath="./nft_media/AB.MC/DEA-GIF-final2 grande.gif";
    const isAnimated = false;
    const name="The Biggest Cartel";
    const description="The DEA has been involved in several drug trafficking and money laundering scandals.";

    const language = LANGUAGE.EN;

    const topics= [TOPIC.SHAM, TOPIC.DEA];
    
    const artist="AB.MC";
    const artist_webpage="https://www.instagram.com/belenomas/";
    const _royaltyPct = "6.00"//%
    const _royaltyAddress = "0xE7398Fb3e598B11DD988d8F6e56e5cee1283bfd3"
    //
    const external_url="www.stopthewarondrugs.com";
 ```

 ## marco Tóxico

```
    const nftMediaPath="./nft_media/Tóxico/STOPTHEWARONDRUGS_mt_1a.jpg";
    const isAnimated = false;
    const name="A Farmer Or A Criminal";
    const description="The US market has historically over incentivized the production of cocaine while its government pursues the criminalization of growing coca bushes even in its native zones where it has been used for millennia by indigenous people.";

    const language = LANGUAGE.EN;

    const topics= [TOPIC.COCAINE, TOPIC.US, TOPIC.GEOPOLITICS, TOPIC.LATINAMERICA];
    
    const artist="Marco Tóxico";
    const artist_webpage="https://www.instagram.com/marcotoxico";
    const _royaltyPct = "6.00"//%
    const _royaltyAddress = "0x394DafE5F2134f2B8fB798bDAA479DEE5Dc8e865"
    //
    const external_url="www.stopthewarondrugs.com";
 ```
DONE


```
    const nftMediaPath="./nft_media/Tóxico/STOPTHEWARONDRUGS_mt_1b.jpg";
    const isAnimated = false;
    const name="Campesino o criminal";
    const description="El mercado estadounidense ha sobreincentivado históricamente la producción de cocaína, mientras que su gobierno persigue la criminalización del cultivo de la mata de coca incluso en sus zonas nativas donde se ha utilizado durante milenios por comunidades indígenas.";

    const language = LANGUAGE.ES;

    const topics= [TOPIC.COCAINE, TOPIC.US, TOPIC.GEOPOLITICS, TOPIC.LATINAMERICA];
    
    const artist="Marco Tóxico";
    const artist_webpage="https://www.instagram.com/marcotoxico";
    const _royaltyPct = "6.00"//%
    const _royaltyAddress = "0x394DafE5F2134f2B8fB798bDAA479DEE5Dc8e865"
    //
    const external_url="www.stopthewarondrugs.com";
 ```
DONE

```
    const nftMediaPath="./nft_media/Tóxico/STOPTHEWARONDRUGS_mt_2a.jpg";
    const isAnimated = false;
    const name="Coca Jima";
    const description="Prohibition has always been the means to colonization.";

    const language = LANGUAGE.EN;

    const topics= [TOPIC.COCA, TOPIC.US, TOPIC.GEOPOLITICS, TOPIC.LATINAMERICA];
    
    const artist="Marco Tóxico";
    const artist_webpage="https://www.instagram.com/marcotoxico";
    const _royaltyPct = "6.00"//%
    const _royaltyAddress = "0x394DafE5F2134f2B8fB798bDAA479DEE5Dc8e865"
    //
    const external_url="www.stopthewarondrugs.com";
 ```
DONE

 ```
    const nftMediaPath="./nft_media/Tóxico/STOPTHEWARONDRUGS_mt_2b.jpg";
    const isAnimated = false;
    const name="Coca Jima";
    const description="La prohibición siempre ha sido un medio para la colonización.";

    const language = LANGUAGE.ES;

    const topics= [TOPIC.COCA, TOPIC.US,TOPIC.GEOPOLITICS, TOPIC.LATINAMERICA];
    
    const artist="Marco Tóxico";
    const artist_webpage="https://www.instagram.com/marcotoxico";
    const _royaltyPct = "6.00"//%
    const _royaltyAddress = "0x394DafE5F2134f2B8fB798bDAA479DEE5Dc8e865"
    //
    const external_url="www.stopthewarondrugs.com";
 ```
 DONE

```
    const nftMediaPath="./nft_media/Tóxico/STOPTHEWARONDRUGS_mt_3a.jpg";
    const isAnimated = false;
    const name="Life vs. Death";
    const description="The war on drugs is a policy of death fighting against the resilience of life.";

    const language = LANGUAGE.EN;

    const topics= [TOPIC.VIOLENCE];
    
    const artist="Marco Tóxico";
    const artist_webpage="https://www.instagram.com/marcotoxico";
    const _royaltyPct = "6.00"//%
    const _royaltyAddress = "0x394DafE5F2134f2B8fB798bDAA479DEE5Dc8e865"
    //
    const external_url="www.stopthewarondrugs.com";
 ```
DONE

 ```
    const nftMediaPath="./nft_media/Tóxico/STOPTHEWARONDRUGS_mt_3a.jpg";
    const isAnimated = false;
    const name="Vida vs. muerte";
    const description="La guerra contra las drogas es una política de muerte peleando contra la tenacidad de la vida.";

    const language = LANGUAGE.ES;

    const topics= [TOPIC.VIOLENCE];
    
    const artist="Marco Tóxico";
    const artist_webpage="https://www.instagram.com/marcotoxico";
    const _royaltyPct = "6.00"//%
    const _royaltyAddress = "0x394DafE5F2134f2B8fB798bDAA479DEE5Dc8e865"
    //
    const external_url="www.stopthewarondrugs.com";
 ```
DONE

 ### Royor Samudio


 ```
    const nftMediaPath="./nft_media/Royor_Samudio/N1-2.png";
    const isAnimated = false;
    const name="An Alleged Drug Abuse To Justify A Brutal Abuse Of Authority";
    const description="Prohibition is a means to legitimize wide-spread systemic abuse of power.";

    const language = LANGUAGE.EN;

    const topics= [TOPIC.VIOLENCE];
    
    const artist="Royor Samudio";
    const artist_webpage="https://www.instagram.com/vagabundodelaidea";
    const _royaltyPct = "6.00"//%
    const _royaltyAddress = "0xba5a075235eFA92e858AeAeE76d1E88753aDdbB5"
    //
    const external_url="www.stopthewarondrugs.com";
 ```
 DONE


 ```
    const nftMediaPath="./nft_media/Royor_Samudio/N1.png";
    const isAnimated = false;
    const name="Un supuesto abuso de drogas para justificar un brutal abuso de autoridad";
    const description="La prohibición es un medio para legitimar abusos de autoridad sistemáticos sobre la población.";

    const language = LANGUAGE.ES;

    const topics= [TOPIC.VIOLENCE];
    
    const artist="Royor Samudio";
    const artist_webpage="https://www.instagram.com/vagabundodelaidea";
    const _royaltyPct = "6.00"//%
    const _royaltyAddress = "0xba5a075235eFA92e858AeAeE76d1E88753aDdbB5"
    //
    const external_url="www.stopthewarondrugs.com";
 ```
DONE

 ```
    const nftMediaPath="./nft_media/Royor_Samudio/N2-2.png";
    const isAnimated = false;
    const name="THE WAR FOR DRUGS";
    const description="The war on drugs is in reality a war between drug cartels.";

    const language = LANGUAGE.EN;

    const topics= [TOPIC.VIOLENCE, TOPIC.SHAM, TOPIC.CORRUPTION, TOPIC.POLITICS];
    
    const artist="Royor Samudio";
    const artist_webpage="https://www.instagram.com/vagabundodelaidea";
    const _royaltyPct = "6.00"//%
    const _royaltyAddress = "0xba5a075235eFA92e858AeAeE76d1E88753aDdbB5"
    //
    const external_url="www.stopthewarondrugs.com";
 ```
 DONE


 ```
    const nftMediaPath="./nft_media/Royor_Samudio/N2.png";
    const isAnimated = false;
    const name="LA GUERRA POR LAS DROGAS";
    const description="La guerra contra las drogas es en realidad en una guerra entre carteles.";

    const language = LANGUAGE.EN;

    const topics= [TOPIC.VIOLENCE, TOPIC.SHAM, TOPIC.CORRUPTION, TOPIC.POLITICS];
    
    const artist="Royor Samudio";
    const artist_webpage="https://www.instagram.com/vagabundodelaidea";
    const _royaltyPct = "6.00"//%
    const _royaltyAddress = "0xba5a075235eFA92e858AeAeE76d1E88753aDdbB5"
    //
    const external_url="www.stopthewarondrugs.com";
 ```
 DONE


```
    const nftMediaPath="./nft_media/Royor_Samudio/N3.png";
    const isAnimated = false;
    const name="Disinformation";
    const description="The real bosses of drug cartels get to say what is told in the media.";

    const language = LANGUAGE.EN;

    const topics= [TOPIC.VIOLENCE, TOPIC.SHAM, TOPIC.CORRUPTION, TOPIC.POLITICS];
    
    const artist="Royor Samudio";
    const artist_webpage="https://www.instagram.com/vagabundodelaidea";
    const _royaltyPct = "6.00"//%
    const _royaltyAddress = "0xba5a075235eFA92e858AeAeE76d1E88753aDdbB5"
    //
    const external_url="www.stopthewarondrugs.com";
 ```
 DONE

 ## Rito sin sermones



```
    const nftMediaPath="./nft_media/rito_sin_sermon/cia_en.jpeg";
    const isAnimated = false;
    const name="The CIA Drug Cartel";
    const description="The CIA used American-tax-payer money to build a huge cocaine trade network that flooded the streets of the US with cocaine under Reagan admin. to finance a terrorist group in Nicaragua.";

    const language = LANGUAGE.EN;

    const topics= [TOPIC.POLITICS, TOPIC.CIA, TOPIC.SHAM, TOPIC.RONALD_REAGAN, TOPIC.US];
    
    const artist="Rito Sin Sermones";
    const artist_webpage="www.ritosinsermones.com";
    const _royaltyPct = "6.00"//%
    const _royaltyAddress = "0x8640e39af1d29868E50117A5c83A1cBB6Ec5493D"
    //
    const external_url="www.stopthewarondrugs.com";
 ```
DONE


```
    const nftMediaPath="./nft_media/rito_sin_sermon/cia_es.jpeg";
    const isAnimated = false;
    const name="El cartel de la CIA";
    const description="La CIA montó una red gigante de narcotráfico con dinero de los contribuyentes bajo la administración Reagan, la cual inundó las calles estadounidenses con cocaína para poder financiar un grupo terrorista en Nicaragua.";

    const language = LANGUAGE.ES;

    const topics= [TOPIC.POLITICS, TOPIC.CIA, TOPIC.SHAM, TOPIC.RONALD_REAGAN, TOPIC.US];
    
    const artist="Rito Sin Sermones";
    const artist_webpage="www.ritosinsermones.com";
    const _royaltyPct = "6.00"//%
    const _royaltyAddress = "0x8640e39af1d29868E50117A5c83A1cBB6Ec5493D"
    //
    const external_url="www.stopthewarondrugs.com";
 ```
DONE

```
    const nftMediaPath="./nft_media/rito_sin_sermon/cycle_en.jpeg";
    const isAnimated = false;
    const name="The True Vicious Cycle";
    const description="Politicians promise the end of drugs through useless policies and violence. They take some of our freedoms and privacy rights away in the name of a 'good cause'. Then, they fund armies which are given power to use violence at their discretion around the globe to fight this war. Meanwhile, mafias get instantly rich by operating the market that only they can operate for being an illegal market. The mafias then use this money to threaten and bribe politicians and armies that go after them. Corruption becomes untenable and obvious. New politicians rise with the same promises. Repeat.";

    const language = LANGUAGE.EN;

    const topics= [TOPIC.POLITICS, TOPIC.SHAM];
    
    const artist="Rito Sin Sermones";
    const artist_webpage="www.ritosinsermones.com";
    const _royaltyPct = "6.00"//%
    const _royaltyAddress = "0x8640e39af1d29868E50117A5c83A1cBB6Ec5493D"
    //
    const external_url="www.stopthewarondrugs.com";
 ```
 DONE

```
    const nftMediaPath="./nft_media/rito_sin_sermon/cycle_es.jpeg";
    const isAnimated = false;
    const name="El verdadero círculo vicioso";
    const description="Políticos prometen acabar con el narcotráfico con políticas y violencia inútil. Nos quitan nuestras libertades y violentan nuestra privacidad en nombre de una 'buena causa'. Después financian ejércitos a quienes se les da el poder de usarla violencia a su discreción en el mundo entero para pelear esta guerra. Mientras tanto, las mafias se vuelven millonarias al operar el mercado que sólo ellos pueden operar por ser un mercado ilegal.Las mafias usan entonces su dinero para amenazar y corromper a políticos y ejércitos que los persiguen. La corrupción se vuelve inevitable y obvia. Nuevos políticos aparecen con las mismas promesas. Todo se repite.";

    const language = LANGUAGE.ES;

    const topics= [TOPIC.POLITICS, TOPIC.SHAM];
    
    const artist="Rito Sin Sermones";
    const artist_webpage="www.ritosinsermones.com";
    const _royaltyPct = "6.00"//%
    const _royaltyAddress = "0x8640e39af1d29868E50117A5c83A1cBB6Ec5493D"
    //
    const external_url="www.stopthewarondrugs.com";
 ```
 DONE
 


```
    const nftMediaPath="./nft_media/rito_sin_sermon/justice_en.jpeg";
    const isAnimated = false;
    const name="Justice In A Prohibitionist World";
    const description="no comments needed.";

    const language = LANGUAGE.EN;

    const topics= [TOPIC.POLITICS, TOPIC.SHAM];
    
    const artist="Rito Sin Sermones";
    const artist_webpage="www.ritosinsermones.com";
    const _royaltyPct = "6.00"//%
    const _royaltyAddress = "0x8640e39af1d29868E50117A5c83A1cBB6Ec5493D"
    //
    const external_url="www.stopthewarondrugs.com";
 ```
 DONE


```
    const nftMediaPath="./nft_media/rito_sin_sermon/justice_es.jpeg";
    const isAnimated = false;
    const name="Justicia en un mundo prohibicionista";
    const description="Sin comentarios.";

    const language = LANGUAGE.ES;

    const topics= [TOPIC.POLITICS, TOPIC.SHAM];
    
    const artist="Rito Sin Sermones";
    const artist_webpage="www.ritosinsermones.com";
    const _royaltyPct = "6.00"//%
    const _royaltyAddress = "0x8640e39af1d29868E50117A5c83A1cBB6Ec5493D"
    //
    const external_url="www.stopthewarondrugs.com";
 ```
 DONE