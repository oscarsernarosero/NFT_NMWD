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
  /* // old code
  // ethers is avaialble in the global scope
  const [deployer] = await ethers.getSigners();
  console.log(
    "Deploying the contracts with the account:",
    await deployer.getAddress()
  );

  console.log("Account balance:", (await deployer.getBalance()).toString());
  */ 
  const Token = await ethers.getContractFactory("Token");
  const NMWDToken = await ethers.getContractFactory("NoMoreWarOnDrugs");
  const token = await Token.deploy();
  const nmwdToken = await NMWDToken.deploy("NoMoreWarOnDrugs", "NMWD" );
  await token.deployed();
  await nmwdToken.deployed();

  console.log("Token address:", token.address);
  console.log("nmwdToken address:", nmwdToken.address);

  // We also save the contract's artifacts and address in the frontend directory
  saveFrontendFiles(token, "token");
  saveFrontendFiles(nmwdToken, "NoMoreWarOnDrugs");
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
