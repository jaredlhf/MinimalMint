pragma solidity ^0.8.0;

import "./NewNFT.sol";

contract bridgeRegistry {

    // deployed proxy NFT contract used for tokenID instead of uint256
    
    string internal _name;
    uint256 internal _total;

    // map address of new NFT to its index
    mapping(address => uint256) internal _indexOf;

    // get name
    mapping(uint256 => string) internal _nameOf;

    // get symbol
    mapping(uint256 => string) internal _symbolOf;

    // array of assets owned by address (possible future implementation)
    // mapping(address => address[]) internal _assets;

    // owner of asset
    mapping(uint256 => address) internal _holderOf;

    // asset data
    mapping(uint256 => string) internal _assetData;

    // asset approval
    mapping(uint256 => mapping(address => bool)) internal _operators;

    constructor(string memory name_) {
        _name = name_;
        _total = 0;
    }

    event Minted(uint256 minted_);

    function getTokenID() public view virtual returns (uint256) {
        return _indexOf[msg.sender];
    }

    function ownerOf(uint256 tokenId) public view virtual returns (address) {
        address owner = _holderOf[tokenId];
        require(owner != address(0), "ERC721: owner query for nonexistent token");
        return owner;
    }

    function name() public view virtual returns (string memory) {
        return _nameOf[_indexOf[msg.sender]];
    }

    /**
     * @dev See {IERC721Metadata-symbol}.
     */
    function symbol() public view virtual returns (string memory) {
        return _symbolOf[_indexOf[msg.sender]];
    }

    /**
     * @dev See {IERC721Metadata-tokenURI}.
     */
    function tokenURI(uint256 tokenId) public view virtual returns (string memory) {
        require(_exists(tokenId), "ERC721Metadata: URI query for nonexistent token");

        return _assetData[tokenId];

        // string memory baseURI = _baseURI();
        // return bytes(baseURI).length > 0 ? string(abi.encodePacked(baseURI, tokenId.toString())) : "";
    }

    function _exists(uint256 tokenId) internal view virtual returns (bool) {
        return _holderOf[tokenId] != address(0);
    }

    /**
     * @dev Base URI for computing {tokenURI}. If set, the resulting URI for each
     * token will be the concatenation of the `baseURI` and the `tokenId`. Empty
     * by default, can be overriden in child contracts.
     */
    function _baseURI() internal view virtual returns (string memory) {
        return "";
    }

    function mintInReg(string memory name_, string memory symbol_, string memory assetData_) 
        public virtual returns (address) {
            // deploy proxyNFT, get contract address
            NewNFT newContract = new NewNFT(msg.sender, address(this));
            address proxy_ = address(newContract);
            // address proxy_ = 0x39917dA86f2761923887DD71CB4B5Dfd2a5D8221;
            uint256 proxyNFT = _total;
            _indexOf[proxy_] = _total;
            _total++;
            
            _holderOf[proxyNFT] = msg.sender;
            _nameOf[proxyNFT] = name_;
            _symbolOf[proxyNFT] = symbol_;
            _assetData[proxyNFT] = assetData_;

            emit Minted(_total-1);

            return proxy_;
            
    }

    function burnProxy(uint proxy_) public  {
        _holderOf[proxy_] = address(0);
    }

    // function checkProof(address proxy_) public {
        // future implmentation to check proof 
    // }
}