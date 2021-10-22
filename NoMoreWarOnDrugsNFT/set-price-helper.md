# Helper file for minting price setting

## Check Protocol

1. Check Ids one by one.

2. Check prices one by one.

3. Check that every artist has the same royalty address.

4. Check that royalty addresses are correct with the artist in local databse.


## Process

### For each transaction

##### This is the same in all tx

contract address: 0x14c971F1585e57cf484edB509E48E029d5708b1D

ABI:

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

#### here it varies

price:

ID:

Royalty address: