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

# To Deploy on Mainnet

1. Make sure you are using VPN to hide your location

2. Make sure you are using the right Ethereum account (5th).

3. Then:
``` 
npx hardhat run --network mainnet scripts/deploy-token.js
npx hardhat run --network mainnet scripts/deploy-marketplace-only.js
```

## First time marketplace config:

Simply hit the initialize contract button. Then transfer the ownership of the market place to the gnosis multisignature safe address. That's it!

## Lock up the minting method until official launch

It is important to lock up the ability to mint until official launch to avoid undesired early
minting of tokens.

```
[
    {
      "inputs": [
        {
          "internalType": "bool",
          "name": "_locked",
          "type": "bool"
        }
      ],
      "name": "setMintLock",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    }
]


```

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

## Withdraw from marketplace

```
    [
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "_payee",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "_amount",
          "type": "uint256"
        }
      ],
      "name": "withdrawFromContract",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    }
    ]
```



## Upgrading the marketplace



# Gnosis safe address:

### Mainnet:

0x87DEd4076BF0d2EE7907E2A931DD2AEc18FF4a7f

### Rinkeby:

0xC10042Fb78D4EA815aA29fCfb47d7D898Ab77559

# Tests

### Fleek vs. Pinata CIDs

File: Scan 1 (scan of the cocaine producer in Per??).

Fleek:  bafybeidt2ziwgwr7m7uosj6vtc6h64pasuybzcp3qfnwg7zlwpydvohtb4

Pinata: QmW8q8zdScE6AQVHGZvETLa15GpNFRkESbSD7EtLvJV2AJ

bafybeidt2ziwgwr7m7uosj6vtc6h64pasuybzcp3qfnwg7zlwpydvohtb4

