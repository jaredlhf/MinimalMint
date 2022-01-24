//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

import "./StrippedDown/token/ERC721/ERC721.sol";

contract NewNFT is ERC721 {

    address internal _owner;

    constructor(address owner_, address contractor_) 
        ERC721(owner_, contractor_)
    {
        _owner = owner_;
    }
}