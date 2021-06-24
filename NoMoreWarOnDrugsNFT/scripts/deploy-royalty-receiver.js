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

    // 10 Gwei: 0x2540BE400
    // 8 Gwei: 0x1DCD65000
    // 5 Gwei: 0x12A05F200
      gasPrice: '0x1DCD65000'
    };
  
    const RoyaltyReceiver = await ethers.getContractFactory("NMWDRoyaltyReceiver");

    //for right now, the arguments for the contract are being set manually in the next line.
    //the arguments are: address _nmwd, address _artist,  uint _ptc_artist
    // _pct_artist is a percentage multiplied by 100.
    const royaltyReceiver = await RoyaltyReceiver.deploy("0xB85ea1C62FD5CC6F081F047eCA0BD5aFDd5c5cD5",//this is me
                                                        "0x44E2c3503572B9bb359DA5b38c7B057c95D7CD01",// this is the artist
                                                        4000, overrides );//50%
    await royaltyReceiver.deployed();
  
    //console.log("Token address:", token.address);
    console.log("Royalty Receiver:", royaltyReceiver.address);
  
    // We also save the contract's artifacts and address in the frontend directory
    //saveFrontendFiles(token, "token");
    saveFrontendFiles(royaltyReceiver, "RoyaltyReceiver", "Artist000");
  }
  
  function saveFrontendFiles(token, name, artist) {
    const fs = require("fs");
    const contractsDir = __dirname + "/../royalty-contracts";
    const contractsDirArt = __dirname + "/../frontend/src/contracts";
  
    if (!fs.existsSync(contractsDir)) {
      fs.mkdirSync(contractsDir);
    }
  
    //fs.writeFileSync(
      //contractsDir + "/contract-address-"+artist+".json",
      fs.appendFileSync(
      contractsDir + "/royalty-contract-addresses.json",
      JSON.stringify({ contract_address: token.address, artist: artist }, undefined, 2)
    );

    let TokenArtifact = artifacts.readArtifactSync("RoyaltyReceiver");
      
    fs.writeFileSync(
        contractsDirArt + "/Contract_"+name+".json",
      JSON.stringify(TokenArtifact, null, 2)
    );
  }
  
  main()
    .then(() => process.exit(0))
    .catch((error) => {
      console.error(error);
      process.exit(1);
    });
  