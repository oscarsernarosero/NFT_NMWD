// SPDX-License-Identifier: MIT
pragma solidity 0.8.0;


contract Owned {
    
    address public owner;

    event _msg(address deliveredTo, string msg);

    function isOwned() internal {
        owner = msg.sender;
        emit _msg(owner, "set owner" );
    }

    modifier onlyOwner() {
        require(msg.sender == owner, "Not an owner");
        emit _msg(owner, "passed ownership requirement" );
        _;
    }
}