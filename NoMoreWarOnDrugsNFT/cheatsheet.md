# To test on localhost blockchain

first, launch local blockcahin:

```
npx hardhat node
```

then deploy contratcs.

``` 
npx hardhat run --network localhost scripts/deploy-token.js
npx hardhat run --network localhost scripts/deploy-marketplace-only.js
```


# To Deploy on Testnets

For Rinkeby:

``` 
npx hardhat run --network rinkeby scripts/deploy-token.js
npx hardhat run --network rinkeby scripts/deploy-marketplace-only.js
```

For Ropsten:

``` 
npx hardhat run --network ropsten scripts/deploy-token.js
npx hardhat run --network ropsten scripts/deploy-marketplace-only.js
```

# Launch the front end

To launch the front end:

```
cd frontend
npm start
```

make sure the network you are testing is the same network that metamask is pointing to.

# In Production

## First time marketplace config:

Simply hit the initialize contract button. Then transfer the ownership of the market place to the gnosis multisignature safe address. That's it!

## set prices of the NFTs

Since now the marketplace is owned by the gnosis wallet. We have to do this from there. 

From the Gnosis UI:

New transaction -> contract interaction:

address: the address of the marketplace (the proxy, not the real one)

abi:

since we only need to setup the prices, we only provide the abi for the setPrice method:
```
[
{
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_price",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "_tokenId",
          "type": "uint256"
        },
        {
          "internalType": "address",
          "name": "_royaltyAddress",
          "type": "address"
        }
      ],
      "name": "setPriceForMinting",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    }
    ]
```
The price is in WEIs!

## Upgrading the marketplace

