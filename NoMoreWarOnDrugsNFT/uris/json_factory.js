//This script should be used for every URI created in order to maintain consistancy in
//the format of the URIs. Simply replace the values of the constants. to run this script, 
//simply run: <node uris/json_factory.js> (from the NoMoreWarOnDrugsNFT directory)
async function main(){

    const fs = require("fs");
    const CONST = require('./uri_constants');
    const TOPIC = CONST.TOPIC;
    const LANGUAGE = CONST.LANGUAGE;
    const contractsDir = __dirname + "/../frontend/src/uris/";

    //############### MODIFY THE PARAMETERS HERE: ###############
    const description="Tratado del fin de las guerras del opio";
    const name="Tratado De Las Guerras Del Opio";
    const language = LANGUAGE.ES;
    //
    const imageCID="QmdcLdgjC8WPLyEfYaFRE13uchyfivXtRdaf2BVUFMwCBT";
    const artist="Yo momma";
    const artist_webpage="https://youtu.be/vI2hT9lb1gY";
    const topics= [TOPIC.UK, TOPIC.GEOPOLITICS, TOPIC.HISTORY, TOPIC.OPIUM, TOPIC.CHINA];
    const _royaltyPct = "8.00"//%
    const _royaltyAddress = "0x24cAEd0fF40814d9DB16a6F341e8A023804D9EF3"
    //
    const external_url="warondrugsisasham.eth.link";
    //############################################################

    if(topics.length==0){
        throw("topics must be an array with at least 1 topic");
    }
    if( language !== LANGUAGE.EN  &&  language !== LANGUAGE.ES ){
        throw("There are only 2 languages availabe: EN and ES");
    }

    const uri = {
        description: description,
        external_url: external_url,
        image: "ipfs://"+imageCID,
        name: name,
        attributes: {
            artist: artist,
            webpage:artist_webpage,
            topics: topics,
            language: language
        },
        royalties: {
            pctValue: _royaltyPct,
            address: _royaltyAddress
        }
    }
    const safe_name = name.replace(/ /g,"_");
    fs.writeFileSync(
    contractsDir+safe_name+".json",
    JSON.stringify(uri, undefined, 0)
    );
}

main()
.then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });



