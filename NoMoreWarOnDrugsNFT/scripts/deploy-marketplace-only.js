// This is a script for deploying your contracts. You can adapt it to deploy
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
      gasPrice: '0x12A05F200'
    };
  
    const MarketPlace = await ethers.getContractFactory("NMWDMarketPlace");
    const marketPlace = await MarketPlace.deploy(overrides);
    await marketPlace.deployed();
  
    console.log("marketPlace address:", marketPlace.address);
  
    // We also save the contract's artifacts and address in the frontend directory
    //saveFrontendFiles(token, "token");
    saveFrontendFiles(marketPlace, "NMWDMarketPlace");
  }
  
  function saveFrontendFiles(token, name) {
    const fs = require("fs");
    const contractsDir = __dirname + "/../frontend/src/contracts";
  
    if (!fs.existsSync(contractsDir)) {
      fs.mkdirSync(contractsDir);
    }
  
    fs.writeFileSync(
      contractsDir + "/contract-address-"+name+".json",
      JSON.stringify({ Token: token.address }, undefined, 2)
    );
  
    let TokenArtifact;
  
    if (name === "token"){
      TokenArtifact = artifacts.readArtifactSync("Token");
      
    }else if (name === "NoMoreWarOnDrugs"){
      TokenArtifact = artifacts.readArtifactSync("NoMoreWarOnDrugs");
    }
  
    else if(name == "NMWDMarketPlace"){
      TokenArtifact = artifacts.readArtifactSync("NMWDMarketPlace");
    }
    
    fs.writeFileSync(
      contractsDir + "/Token_"+name+".json",
      JSON.stringify(TokenArtifact, null, 2)
    );
  
  }
  
  main()
    .then(() => process.exit(0))
    .catch((error) => {
      console.error(error);
      process.exit(1);
    });
  