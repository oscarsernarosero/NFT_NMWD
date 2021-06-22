# List of error codes

The strategy for codes is to separate them by smart contract kind. Each smart contract has a code as follows:

<br>


| Code           | Smart Contract|
| -------------- |:-------------:| 
| 01 | Owned |
| 02 | NFTokenEnumerable |
| 03 | NFToken |
| 04 | NoMoreWarOnDrugs |
| 05 | NMWDMarketPlace |

<br>

This strategy allows us to easily find the error source when a tx reverts. The former code is then followed by a 2 digit index which specifies the error in the contract, which results in a 4-digit code where the first two reference the contract, and the last 2 digits reference the index of the error inside that contract.

Let's take the error coed "0102" as an example.

This code is, as explained before, composed out of 2 different codes. *01* and *02*

the digits *01* reference the contract *Owned*, and the digits *02* reference the index of the error in the contract *Owned* (second error).

The full list of the errors are in the following list:

<br>


| Code         | Name | Description|
| ------------ |:-----------:| -----------:| 
| 0101 | NOT_CURRENT_OWNER | Not the owner |
| 0102 | CANNOT_TRANSFER_TO_ZERO_ADDRESS | Can't  tranfer ownership to address 0 |
| 0201 | INVALID_INDEX | The NFT with the specified index doesn't exist |
| 0301 | ZERO_ADDRESS | trying to send to address 0 |
| 0302 | NOT_VALID_NFT | This NFT hasn't been minted |
| 0303 | NOT_OWNER_OR_OPERATOR | Not-authorized sender |
| 0304 | NOT_OWNER_APPROVED_OR_OPERATOR | Not-authorized sender |
| 0305 | NOT_ABLE_TO_RECEIVE_NFT | Contract failed to receive NFT |
| 0306 | NFT_ALREADY_EXISTS | Trying to mint an NFT that already exists|
| 0307 | NOT_OWNER | Not the owner |
| 0308 | IS_OWNER | Can't approve the owner of an NFT |

<br>




