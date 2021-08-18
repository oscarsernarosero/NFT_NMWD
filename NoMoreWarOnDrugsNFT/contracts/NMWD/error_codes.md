# List of error codes

The strategy for codes is to separate them by smart contract kind. Each smart contract has a code as follows:

<br>


| Code | Smart Contract|
| --- |:---:| 
| 01 | Owned |
| 02 | NFTokenEnumerable |
| 03 | NFToken |
| 04 | StopTheWarOnDrugs |
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
| 0401 | MAX_TOKENS_MINTED | The maximum amount permited of NFTs has already been minted |
| 0402 | MESSAGE_ALREADY_SET | The message of an NFT can only be set once for life |
| 0403 | NOT_VALID_MSG | A message must be more than 0 characters long and less or equal to 200 characters long |
| 0404 | ZERO_VALUE | Can't pass 0 as value for argument |
| 0501 | INVALID_ADDRESS | Not a valid Ethereum address |
| 0502 | CONTRACT_ADDRESS_NOT_SETUP | The address of the NFT hasn't been initalized |
| 0503 | NOT_APPROVED | NFT not approved to transact, neither allowed as an operator |
| 0504 | NOT_VALID_NFT | This NFT hasn't been minted | 
| 0505 | NOT_FOR_SALE | This NFT is not for sale |
| 0506 | NOT_EHOUGH_ETHER | There is not enough Ether in the contract to withdraw the requested amount |
| 0507 | NEGATIVE_VALUE | Negative values not allowed |
| 0508 | NO_CHANGES_INTENDED | You are trying to change a value, but you are setting it to the old value |
| 0509 | NOT_NFT_OWNER | You need to own the NFT to carry out this operation | 
| 0510 | INSUFICIENT_BALANCE | Your Ether balance is insuficient to withdraw the requested amount | 
| 0511 | STILL_OWN_NFT_CONTRACT | operation not permitted while the marketplace owns the NFT contract. Simply make sure to transfer ownership of the NFT contract. |
| 0512 | NFT_ALREADY_MINTED | Operation only permitted before minting |


<br>




