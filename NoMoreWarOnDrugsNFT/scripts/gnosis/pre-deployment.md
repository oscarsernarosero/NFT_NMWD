# Helper File For Royalty Receiving Contracts

This document is meant to help with the royalty-contract deployment since it can be reviewed before deploying. The repetitive process of modifying the script can easily lead to mistakes, which can be avoided by getting all the info ready before hand.

To verify:

```
npx hardhat verify --network mainnet DEPLOYED_CONTRACT_ADDRESS SWDAddress artistAddress artistPct
```

if ```no such file or directory``` error shows up, then run ```npx hardhat clean```

### My Addresses:

hardwallet 0x48ac7BC89FD29f2E771F62fd0D9574285Da1e766

coldwallet 0x3994C97E7b9558f3E12685320d9484fFFa7447F8


### Melo 

```
    const SWDAddress = "0x48ac7BC89FD29f2E771F62fd0D9574285Da1e766";
    const artistAddress = "0x4Ee9aB899421332A90B082abe3306Ecdb6a5Fd90";
    const artistPct = 2000; // magnified by 100: 10% = 1000; 50%=5000;
    const artistName = "Juan_Melo";//Always capitals on initial letters, separated by _ in spaces.
```
checked
deployed at: 0xE817F3186e527a77cFF6207dff977D7bE538de15
date: Oct 17th, 2021, 00:49
verified


### Luto 

```
    const SWDAddress = "0x3994C97E7b9558f3E12685320d9484fFFa7447F8";
    const artistAddress = "0x8E8c90aafCc31E0545C00ea9662ccB4b6d1326bD";
    const artistPct = 2000; // magnified by 100: 10% = 1000; 50%=5000;
    const artistName = "Luto";//Always capitals on initial letters, separated by _ in spaces.
```
checked
deployed at: 0x0665db5CD07b05Bef3d7B4F847695DfE413c317D
date: Oct 17th, 2021, 00:54
verified


### Solarte

```
    const SWDAddress = "0x48ac7BC89FD29f2E771F62fd0D9574285Da1e766";
    const artistAddress = "0x3a9B0EF0c968D59633F799dC1890f0290C811Bf9";
    const artistPct = 2000; // magnified by 100: 10% = 1000; 50%=5000;
    const artistName = "JP";//Always capitals on initial letters, separated by _ in spaces.
```
checked
deployed at: 0xbcB5080C9297456760394c9FA2742edbcb7B7B20
date: Oct 17th, 2021, 00:57
verified


### Julio

```
    const SWDAddress = "0x3994C97E7b9558f3E12685320d9484fFFa7447F8";
    const artistAddress = "0x2b84E62e4A3684B0c619fF0F5d9d778628C07454";
    const artistPct = 2000; // magnified by 100: 10% = 1000; 50%=5000;
    const artistName = "El_Cerra'o_Cómics";//Always capitals on initial letters, separated by _ in spaces.
```
checked
deployed at: 0x92b1fb7902779D5e40d9F4A749469Af321046a5F
date: Oct 17th, 2021, 00:59
verified


### Ana Belén

```
    const SWDAddress = "0x48ac7BC89FD29f2E771F62fd0D9574285Da1e766";
    const artistAddress = "0xb6619b1deAA1e7204c6a0E0E4820227273D83935";
    const artistPct = 2000; // magnified by 100: 10% = 1000; 50%=5000;
    const artistName = "AB.MC";//Always capitals on initial letters, separated by _ in spaces.
```
checked
deployed at: 0xE7398Fb3e598B11DD988d8F6e56e5cee1283bfd3
date: Oct 17th, 2021, 01:34
verified

### Marco Tóxico

```
    const SWDAddress = "0x3994C97E7b9558f3E12685320d9484fFFa7447F8";
    const artistAddress = "0x237E0FD513886D1Bacb49c0FFB559Fc2f185394a";
    const artistPct = 2000; // magnified by 100: 10% = 1000; 50%=5000;
    const artistName = "Marco_Tóxico";//Always capitals on initial letters, separated by _ in spaces.
```
checked
deployed at: 0x394DafE5F2134f2B8fB798bDAA479DEE5Dc8e865
date: Nov 12th, 2021, 01:06
verified


### Royor

```
    const SWDAddress = "0x48ac7BC89FD29f2E771F62fd0D9574285Da1e766";
    const artistAddress = "0x62De2A18168C6174C8d5af857566473745E86937";
    const artistPct = 2000; // magnified by 100: 10% = 1000; 50%=5000;
    const artistName = "Royor_Samudio";//Always capitals on initial letters, separated by _ in spaces.
```
cehcked
deployed at: 0xba5a075235eFA92e858AeAeE76d1E88753aDdbB5
date: Nov 12th, 2021, 01:11
verified

### Rito Sin Sermones

```
    const SWDAddress = "0x3994C97E7b9558f3E12685320d9484fFFa7447F8";
    const artistAddress = "0xD6E5ABE412359566F9000149742b1De53Bf18E13";
    const artistPct = 2000; // magnified by 100: 10% = 1000; 50%=5000;
    const artistName = "Rito_sin_sermones";//Always capitals on initial letters, separated by _ in spaces.
```
checked
deployed at: 0x8640e39af1d29868E50117A5c83A1cBB6Ec5493D
date: Nov 12th, 2021, 01:13

