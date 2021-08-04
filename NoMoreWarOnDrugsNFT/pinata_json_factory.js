//This script should be used for every URI created in order to maintain consistancy in
//the format of the URIs. Simply replace the values of the constants. to run this script, 
//simply run: <node uris/pinata_json_factory.js> (from the NoMoreWarOnDrugsNFT directory)
async function main(){

    const fs = require("fs");
    const CONST = require('./uris/uri_constants');
    const pinataSDK = require('@pinata/sdk');
    const axios = require('axios');
    const FormData = require('form-data');
    require('dotenv').config();
    const { PINATA_PRIVATE_KEY, PINATA_PUBLIC_KEY} = process.env;
    const pinata = pinataSDK(PINATA_PUBLIC_KEY, PINATA_PRIVATE_KEY);

    const TOPIC = CONST.TOPIC;
    const LANGUAGE = CONST.LANGUAGE;
    const contractsDir = "./frontend/src/uris/";

    //############### MODIFY THE PARAMETERS HERE: ###############
    const description="This is the second test of displaying a video as an NFT";
    const name="MP4 Test 2";
    const language = LANGUAGE.EN;
    //
    const imageCID="";
    const videoCID="QmTLs9Z9u2X8z2pf8DoTkcLRy2Fxu7NqMoXYw9aiG32fH5";
    const artist="Who Knows";
    const artist_webpage="https://youtu.be/vI2hT9lb1gY";
    const topics= [TOPIC.CHINA, TOPIC.UK, TOPIC.GEOPOLITICS, TOPIC.HISTORY, TOPIC.OPIUM];
    const _royaltyPct = "8.00"//%
    const _royaltyAddress = "0xB85ea1C62FD5CC6F081F047eCA0BD5aFDd5c5cD5"
    //
    const external_url="stopthewarondrugs.eth.link";
    //############################################################

    if(topics.length==0){
        throw("topics must be an array with at least 1 topic");
    }
    if( language !== LANGUAGE.EN  &&  language !== LANGUAGE.ES ){
        throw("There are only 2 languages availabe: EN and ES");
    }
    let image_url;
    let video_url;
    if(videoCID==""){
      image_url="ipfs://"+imageCID;
      video_url="";
    }else{
      if(imageCID==""){
        image_url="";
      }else{
        image_url="ipfs://"+imageCID
      }
      video_url="ipfs://"+videoCID;
    }

    const uri = {
        description: description,
        external_url: external_url,
        image: image_url,
        animation_url: video_url,
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

    console.log("about to save file");
    const safe_name = name.replace(/ /g,"_");
    await fs.writeFileSync(
    contractsDir+safe_name+".json",
    JSON.stringify(uri, undefined, 0));

    console.log("about to authenticate");
    await pinata.testAuthentication().then((result) => {
        //handle successful authentication here
        console.log("pinata authenticated? => ",result);
    }).catch((err) => {
        //handle error here
        console.log(err);
    });

    const url = `https://api.pinata.cloud/pinning/pinFileToIPFS`;

    //we gather a local file for this example, but any valid readStream source will work here.
    let data = new FormData();
    data.append('file', fs.createReadStream(contractsDir+safe_name+".json"));

    const metadata = JSON.stringify({
        name: safe_name
    });

    data.append('pinataMetadata', metadata);

    const pinataOptions = JSON.stringify({
        pinataMetadata: {
        name: safe_name
        },
        pinataOptions: {
            cidVersion: 0,
            customPinPolicy: {
                regions: [
                    {
                        id: 'FRA1',
                        desiredReplicationCount: 2
                    },
                    {
                        id: 'NYC1',
                        desiredReplicationCount: 2
                    }
                ]
            }
            }
        }, undefined, 0);

        data.append('pinataOptions', pinataOptions);

        let CID;

        await axios
        .post(url, data, {
            maxBodyLength: 'Infinity', //this is needed to prevent axios from erroring out with large files
            headers: {
                'Content-Type': `multipart/form-data; boundary=${data._boundary}`,
                pinata_api_key: PINATA_PUBLIC_KEY, 
                pinata_secret_api_key: PINATA_PRIVATE_KEY
            }
        })
        .then(function (response) {
            //handle response here
            CID = response.data.IpfsHash;
            
            console.log("response", response);
            console.log("CID",CID);
        })
        .catch(function (error) {
            //handle error here
            console.log("error", error);
        });

        const bs58 = require('bs58');

        const bytes = bs58.decode(CID);
        const full_str = bytes.toString('hex');
        console.log("full_str",full_str);
        const id = "0x"+full_str.substring(4);
        console.log("id",id);

        uri.attributes.topics.map((topic) => {
            insert("attributes",id, topic, "topic");
        });
        insert("attributes",id, uri.attributes.language,"language");
        insert("attributes",id,uri.attributes.artist, "artist");
        insert("uri_files",safe_name,id,null);
}

function insert(db, value, row, table) {

    const fs = require("fs");

    //the localDB directory
    const dirDB = "./frontend/src/localDB";

    if(db==="attributes"){
      const attributes = require(dirDB+"/attributes.json");

      const topic = attributes.topic;
      const artist = attributes.artist;
      const language = attributes.language;
  
      try{ 
        if(table=="topic"){
          topic[row].push(value);
        }
        else if(table=="artist"){
          artist[row].push(value);
        }
        else if(table=="language"){
          language[row].push(value);
        }
        else{
          throw("Not a valid table");
        }
        
      }catch{ 
        
        if(table=="topic"){
          topic[row]=[value];
        }
        else if(table=="artist"){
          artist[row]=[value];
        }
        else if(table=="language"){
          language[row]=[value];
        }
        else{
          throw("Not a valid table");
        }
      }
  
      const final={topic, language, artist};
  
      fs.writeFileSync(
          dirDB+"/attributes.json",
      JSON.stringify(final, null, 2)
      );
    }

    else if(db==="uri_files"){

      let files = require(dirDB+"/uri_files.json");

      files[row]=value;

      fs.writeFileSync(
          dirDB+"/uri_files.json",
      JSON.stringify(files, null, 2)
      );
      }
    
}

main()
.then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });

//node pinata_json_factory.js

