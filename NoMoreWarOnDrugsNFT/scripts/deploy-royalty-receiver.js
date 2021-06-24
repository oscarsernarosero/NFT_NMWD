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
  
    const RoyaltyReceiver = await ethers.getContractFactory("NMWDRoyaltyReceiver");

    //for right now, the arguments for the contract are being set manually in the next line.
    //the arguments are: address _nmwd, address _artist,  uint _ptc_artist
    // _pct_artist is a percentage multiplied by 100.
    const royaltyReceiver = await RoyaltyReceiver.deploy("0xB85ea1C62FD5CC6F081F047eCA0BD5aFDd5c5cD5",//this is me
                                                        "0x44E2c3503572B9bb359DA5b38c7B057c95D7CD01",// this is the artist
                                                        5000, overrides );//50%
    await royaltyReceiver.deployed();
  
    //console.log("Token address:", token.address);
    console.log("Royalty Receiver:", royaltyReceiver.address);
  
    // We also save the contract's artifacts and address in the frontend directory
    //saveFrontendFiles(token, "token");
    saveFrontendFiles(royaltyReceiver, "RoyaltyReceiver", "Test0");
  }
  
  function saveFrontendFiles(token, name, artist) {
    const fs = require("fs");
    const contractsDir = __dirname + "/../royalty-contracts";
  
    if (!fs.existsSync(contractsDir)) {
      fs.mkdirSync(contractsDir);
    }
  
    fs.writeFileSync(
      contractsDir + "/contract-address-"+artist+".json",
      JSON.stringify({ contract_address: token.address }, undefined, 2)
    );
  }
  
  main()
    .then(() => process.exit(0))
    .catch((error) => {
      console.error(error);
      process.exit(1);
    });
  