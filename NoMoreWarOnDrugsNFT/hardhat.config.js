require("@nomiclabs/hardhat-waffle");
require('dotenv').config();
require("@nomiclabs/hardhat-ethers");
require('@openzeppelin/hardhat-upgrades');
require("@nomiclabs/hardhat-etherscan");

// The next line is part of the sample project, you don't need it in your
// project. It imports a Hardhat task definition, that can be used for
// testing the frontend.
require("./tasks/faucet");

const { API_URL, API_URL_MAINNET, RINKEBY_API_URL, PRIVATE_KEY, PRIVATE_KEY2, ETHERSCAN_API_KEY } = process.env;

module.exports = {
  solidity:{
    compilers: [
      {
        version: "0.7.3"
      },
      {
        version: "0.8.0",
        settings: { } 
      },
      {
        version: "0.8.2",
        settings: { } 
      }
    ]
  },
  defaultNetwork: "ropsten",
  //defaultNetwork: "hardhat",
   networks: {
      hardhat: {
        chainId: 1337, ///this is not hardhat default and is a temporary solution.
        accounts: [{privateKey: `0x${PRIVATE_KEY}`, balance: "100000000000000000000"}]
      },
      ropsten: {
         url: API_URL,
         accounts: [`0x${PRIVATE_KEY}`]
      }
      ,
      rinkeby: {
        url: RINKEBY_API_URL,
        accounts: [`0x${PRIVATE_KEY}`]
     }
      ,
      mainnet:{
        url: API_URL_MAINNET,
        accounts: [`0x${PRIVATE_KEY2}`]
      }
   },
   etherscan: {
    // Your API key for Etherscan
    // Obtain one at https://etherscan.io/
    apiKey: ETHERSCAN_API_KEY
  }
};