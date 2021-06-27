//This script should be used for every URI created in order to maintain consistancy in
//the format of the URIs. Simply replace the values of the constants. to run this script, 
//simply run: <node uris/json_factory.js> (from the NoMoreWarOnDrugsNFT directory)
async function main(){

    const fs = require("fs");
    const CONST = require('./uri_constants');
    const TOPIC = CONST.TOPIC;
    const LANGUAGE = CONST.LANGUAGE;
    const contractsDir = __dirname + "/";

    //############### MODIFY THE PARAMETERS HERE: ###############
    const description="this is when they were protesting about beer";
    const external_url="warondrugsisasham.eth.link";
    const image="ipfs://QmQ2dyeZANz8DLFUfLrJ1YUxka8Sr1RBDphu59DmuZwtDs";
    const name="We Want Beer";
    const artist="Who Knows";
    const artist_webpage="https://youtu.be/rBooOvKESNk";
    const topics= [TOPIC.ALCOHOL, TOPIC.US, TOPIC.POLITICS, TOPIC.HISTORY];
    const language = LANGUAGE.EN;
    //############################################################

    if(image.substring(0,7)!=="ipfs://"){
        throw("invalid image format. Expected an IPFS url such as ipfs://<CID>");
    }
    if(topics.length==0){
        throw("topics must be an array with at least 1 topic");
    }
    if( language !== LANGUAGE.EN  &&  language !== LANGUAGE.ES ){
        throw("There are only 2 languages availabe: EN and ES");
    }

    const uri = {
        description: description,
        external_url: external_url,
        image: image,
        name: name,
        attributes: {
            artist: artist,
            webpage:artist_webpage,
            topics: topics,
            language: language
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



