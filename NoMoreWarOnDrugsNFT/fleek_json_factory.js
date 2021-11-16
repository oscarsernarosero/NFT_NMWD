//This script should be used for every URI created in order to maintain consistancy in
//the format of the URIs. Simply replace the values of the constants. to run this script, 
//simply run: <node uris/pinata_json_factory.js> (from the NoMoreWarOnDrugsNFT directory)
async function main(){

    const fs = require("fs");
    const CONST = require('./uris/uri_constants');
    const fleekStorage = require('@fleekhq/fleek-storage-js');
    require('dotenv').config();
    const { FLEEK_API_SECRET, FLEEK_API_KEY} = process.env;

    const TOPIC = CONST.TOPIC;
    const LANGUAGE = CONST.LANGUAGE;
    const contractsDir = "./frontend/src/uris/";


    //############### MODIFY THE PARAMETERS HERE: ###############
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
    //############################################################

    if(topics.length==0) 
        throw("topics must be an array with at least 1 topic")
    
    if( language !== LANGUAGE.EN  &&  language !== LANGUAGE.ES ) 
        throw("There are only 2 languages availabe: EN and ES")
    
    const safe_name = name.replace(/ /g,"_");
    const nftMediaConent = fs.createReadStream(nftMediaPath);
    //uploading the NFT media-content file
    let uploadedFile;
    let response;
    uploadedFile = await fleekStorage.upload({apiKey: FLEEK_API_KEY, apiSecret: FLEEK_API_SECRET,
                    key: safe_name+"_media", data: nftMediaConent,  })
        .then(res => {response=res; });
    console.log("response media content", response);

    //now writting the URI json file
    let image_url;
    let video_url;
    if(isAnimated){
        video_url="ipfs://"+response.hashV0;
        image_url="";
    } 
    else {
        video_url="";
        image_url="ipfs://"+response.hashV0;
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
    
    await fs.writeFileSync(
    contractsDir+safe_name+".json",
    JSON.stringify(uri, undefined, 0));

    //reading the file I just created
    const fileData = fs.createReadStream("./frontend/src/uris/"+safe_name+".json");

    //uploading the URI file
    uploadedFile = await fleekStorage.upload({
        apiKey: FLEEK_API_KEY,
        apiSecret: FLEEK_API_SECRET,
        key: safe_name,
        data: fileData,
        })
        .then(res => {
            response=res;
            console.log("res", res);
        });
    console.log("response", response);


    //decoding the CID and wrtting the database
    const bs58 = require('bs58');

    const bytes = bs58.decode(response.hashV0);
    const full_str = bytes.toString('hex');
    console.log("full_str",full_str);
    const id = "0x"+full_str.substring(4);
    console.log("id",id);

    uri.attributes.topics.map((topic) => {
        insert("attributes",id, topic, "topic");
    });
    
    insert("attributes",id, uri.attributes.language,"language");
    insert("attributes",id, uri.attributes.artist, "artist");
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

//node fleek_json_factory.js

//very important: save before running the script. Otherwise, 
//it won't create anything new.
