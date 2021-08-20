// This is a script for deploying your contracts. You can adapt it to deploy

const { network } = require('hardhat');

// yours, or create new ones.
async function main() {
    // This is just a convenience check
    if (network.name === "hardhat") {
      console.warn(
        "You are trying to deploy a contract to the Hardhat Network, which" +
          "gets automatically created and destroyed every time. Use the Hardhat" +
          " option '--network localhost'"
      );
    }
    
    //gas price setup
    let overrides = { 
      // The price (in wei) per unit of gas

    // 10 Gwei: 0x2540BE400
    // 8 Gwei: 0x1DCD65000
    // 5 Gwei: 0x12A05F200
      gasPrice: '0x1DCD65000'
    };
  
    //#### MODIFY THIS WITH THE INFO #####
    const SWDAddress = "0x1F4dEa20Ab14fDaBd74974251601933437232C3C";
    const artistAddress = "0x04F2612a826c88017Fa3e447D291462d56449a7F";
    const artistPct = 5500; // magnified by 100: 10% = 1000; 50%=5000;
    const artistName = "Juan_Melo";//Always capitals on initial letters, separated by _ in spaces.

    // first we create the hash of the info and check if it already exists
    const SHA256 = require('crypto-js/sha256');
    const fs = require("fs");
    const contractsDir = __dirname + "/../royalty-contracts";
    const addressDB = require(contractsDir+"/royalty-contract-addresses.json");
    const addressObj = {
                        artistAddress: artistAddress,
                        SWDAddress: SWDAddress,
                        artistPct: artistPct,
                        network: network.name
                      } 
    const addressObjStr = JSON.stringify(addressObj,undefined, 2);
    const objHash = SHA256(addressObjStr);

    if (addressDB[artistName]){
      if (addressDB[artistName][objHash]){
        console.log("This contract already exists at the address ",addressDB[artistName][objHash]["contractAddress"])
        return;
      }else{
        addressDB[artistName][objHash]={};
      }
    }else{
      addressDB[artistName]={};
    }

    //if it doesn't exists, we continue to deploy the contract
    const RoyaltyReceiver = await ethers.getContractFactory("NMWDRoyaltyReceiver");
    const royaltyReceiver = await RoyaltyReceiver.deploy(SWDAddress, artistAddress, artistPct, overrides );
    await royaltyReceiver.deployed();
    console.log("Royalty Receiver:", royaltyReceiver.address);

    //we then add the contract address and date to the object
    let today = new Date();
    let date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
    let time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    let dateTime = date+' '+time;
    addressObj["contractAddress"]=royaltyReceiver.address;
    addressObj["dateCreated"]=dateTime;

    //then we add the object to the DB
    addressDB[artistName][objHash]=addressObj;

    //and now we write to the DB
    console.log("addressDB", addressDB);
      fs.writeFileSync(
        contractsDir + "/royalty-contract-addresses.json",
        JSON.stringify(addressDB, null, 2)
      );


  
  }
  
  function saveFrontendFiles(_contractAddress, artistAddress, SWDAddress,
                            artistPct, artistName) {
    const SHA256 = require('crypto-js/sha256');
    const fs = require("fs");
    const contractsDir = __dirname + "/../royalty-contracts";
    const addressDB = require(contractsDir+"/royalty-contract-addresses.json");
    const addressObj = {
                        artistAddress: artistAddress,
                        SWDAddress: SWDAddress,
                        artistPct: artistPct,
                        artistName: artistName
                      } 
    const addressObjStr = stringify(addressObj,undefined, 2);
    const objHash = SHA256(addressObjStr);
    addressObj[contractAddress]=_contractAddress
    let finalObj = {};
    finalObj[objHash] = addressObj;
    console.log("addressDB", addressDB);
    
    if (addressDB.artistName){
      console.log("addressDB.artistName", addressDB.artistName);
      if (addressDB.artistName.objHash){
        console.log("addressDB.artistName.objHash", addressDB.artistName.objHash);
        return false;
      }else{
        addressDB.artistName[objHash] = addressObj;
      }
    }else{
      addressDB[artistName] = finalObj;
    }
    console.log("addressDB", addressDB);
      fs.appendFileSync(
      contractsDir + "/royalty-contract-addresses.json",
        JSON.stringify({ contract_address: token.address, artist: artist }, undefined, 2)
        );
      fs.writeFileSync(
        contractsDir + "/royalty-contract-addresses.json",
        JSON.stringify(addressDB, null, 2)
      );

      return true
  }
  
  main()
    .then(() => process.exit(0))
    .catch((error) => {
      console.error(error);
      process.exit(1);
    });

    //npx hardhat run --network localhost scripts/deploy-royalty-receiver.js

    //npx hardhat run --network rinkeby scripts/deploy-royalty-receiver.js

    //npx hardhat run --network ropsten scripts/deploy-royalty-receiver.js
  