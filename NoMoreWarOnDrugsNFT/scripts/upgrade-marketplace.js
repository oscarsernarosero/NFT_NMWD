// scripts/upgrade-box.js
const { ethers, upgrades } = require("hardhat");

async function main() {
    // This is just a convenience check
    if (network.name === "hardhat") {
        console.warn(
          "You are trying to deploy a contract to the Hardhat Network, which" +
            "gets automatically created and destroyed every time. Use the Hardhat" +
            " option '--network localhost'"
        );
      }

  const MARKETPLACE_PROXY_ADDRESS=require("../frontend/src/contracts/"+network.name+"-contract-address-SWDMarketPlace.json");

  const MarketPlaceUpGraded = await ethers.getContractFactory("SWDMarketPlace");
  const marketPlace = await upgrades.upgradeProxy(MARKETPLACE_PROXY_ADDRESS.Token, MarketPlaceUpGraded);
  // We also save the contract's artifacts and address in the frontend directory
    //saveFrontendFiles(token, "token");
    saveFrontendFiles(marketPlace, "SWDMarketPlace");
  }
  
  function saveFrontendFiles(token, name) {
    const fs = require("fs");
    const contractsDir = __dirname + "/../frontend/src/contracts";
  
    if (!fs.existsSync(contractsDir)) {
      fs.mkdirSync(contractsDir);
    }
  
    const TokenArtifact = artifacts.readArtifactSync("SWDMarketPlace");
    
    
    fs.writeFileSync(
      contractsDir + "/Token_"+name+".json",
      JSON.stringify(TokenArtifact, null, 2)
    );
  
  }
  

main() //<<<<========= CHANGE THIS FOR THE MARKETPLACE ADDRESS (MAKE SURE ABOUT THE NETWORK)
.then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });


    //npx hardhat run --network localhost scripts/upgrade-marketplace.js

    //npx hardhat run --network ropsten scripts/upgrade-marketplace.js