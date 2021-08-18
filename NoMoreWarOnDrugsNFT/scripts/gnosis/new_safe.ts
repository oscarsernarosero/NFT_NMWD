/*
async function main(){  
  const ethers = require('ethers');
  const EthersAdapter =require('@gnosis.pm/safe-core-sdk');

  const web3Provider = window.ethereum;
  const provider = new ethers.providers.Web3Provider(web3Provider)
  const owner1 = provider.getSigner(0)

  const ethAdapterOwner1 = new EthersAdapter({
    ethers,
    signer: owner1
  });


  const Safe, SafeFactory, SafeAccountConfig = require('@gnosis.pm/safe-core-sdk');

  const safeFactory = await SafeFactory.create({ ethAdapterOwner1 });

  const owners = ['0x44E2c3503572B9bb359DA5b38c7B057c95D7CD01', '0xf8f676835beC0aABB7447993eef42928189F3C50', '0x5516083B26674A7736be854142c353b5c97c1b6B'];
  const threshold = 2;
  const safeAccountConfig = { owners, threshold }

  const Safe = await safeFactory.deploySafe(safeAccountConfig)
}

main()
.then(() => process.exit(0))
.catch((error) => {
  console.error(error);
  process.exit(1);
});
*/

import { ethers } from 'ethers';
import { EthersAdapter } from '@gnosis.pm/safe-core-sdk';
import { SafeFactory, SafeAccountConfig } from '@gnosis.pm/safe-core-sdk'
import  Safe from '@gnosis.pm/safe-core-sdk'

async function main(){  
    
  let window: any;

  const web3Provider = window.ethereum;
  const provider = new ethers.providers.Web3Provider(web3Provider)
  const owner1 = provider.getSigner(0)

  const ethAdapter: EthersAdapter = new EthersAdapter({
    ethers,
    signer: owner1
  })



  const safeFactory = await SafeFactory.create({ ethAdapter })

  const owners = ['0x44E2c3503572B9bb359DA5b38c7B057c95D7CD01', '0xf8f676835beC0aABB7447993eef42928189F3C50', '0x5516083B26674A7736be854142c353b5c97c1b6B']
  const threshold = 3
  const safeAccountConfig: SafeAccountConfig = { owners, threshold }

  const safeSdk: Safe = await safeFactory.deploySafe(safeAccountConfig)
}
main()
.then(() => process.exit(0))
.catch((error) => {
  console.error(error);
  process.exit(1);
});