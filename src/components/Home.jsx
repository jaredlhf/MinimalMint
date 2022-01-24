import { useEffect, useState } from "react";
import { HomeContainer, HeaderContainer, Icon, StyledTitle, StyledText, StyledInput, WalletButton, SwapButton, MintButton , MetadataButton } from "./HomeElements";
import iconImage from "../assets/Mint_icon.png"
import abi from "../assets/abi.json"
import regAbi from "../assets/regAbi.json"
import proxyAbi from "../assets/proxyAbi.json"
import { ethers } from "ethers"
const provider = new ethers.providers.Web3Provider(window.ethereum)
let signer;

const Home = (props) => {
  
  let metadata;
  let _symbol;
  let _name;
  //State variables
  const [walletAddress, setWallet] = useState("");
  const [status, setStatus] = useState("");
  const [url, setAddress] = useState("");
  const [tokenId, setTokenId] = useState("");
 
  useEffect(async () => { //TODO: implement
    
  }, []);

  const connectWalletPressed = async () => { 
    await provider.send("eth_requestAccounts", []);
    signer = provider.getSigner();
    const addr = await signer.getAddress();
    console.log("Account:", addr);
    setWallet(addr);
  };

  const getMetadataPressed = async (url, tokenId) => { 
    const tokenContract = new ethers.Contract(url, abi, provider);
    metadata = await tokenContract.tokenURI(tokenId);
    _symbol = await tokenContract.symbol();
    _name = await tokenContract.name();
    console.log("name: " + _name + "\n symbol: " + _symbol + '\n metadata: ' + metadata);
  }

  const onSwapPressed = async () => { 

  };

  const onMintPressed = async () => { // mints new NFT
    const registryAddress = '0x81eC14342AF0A3F881a094Ae0A5133A33692619c';
    const provider = new ethers.providers.Web3Provider(window.ethereum)
    await provider.send("eth_requestAccounts", []);
    signer = provider.getSigner();
    const newContract = new ethers.Contract(registryAddress, regAbi, signer);

    await newContract.mintInReg(_name, _symbol, metadata);
    // const newNFTAddy = await ethers.utils.getAddress(newNFT);
    // console.log("new proxy NFT address: " + newNFTAddy);

    // const proxyNFT = new ethers.Contract(newNFTAddy, proxyAbi, signer);
    // const newIndex = await proxyNFT.getNewTokenID();
    // console.log("new ID: " + newIndex);
  };

  return (
    <HomeContainer id="homeContainer">
        <WalletButton id="walletButton" onClick={connectWalletPressed}>
        {walletAddress.length > 0 ? (
            "Connected: " +
            String(walletAddress).substring(0, 6) +
            "..." +
            String(walletAddress).substring(38)
        ) : (
            <span>Connect Wallet</span>
        )}
        </WalletButton>

        <HeaderContainer>
            <Icon src={iconImage}/>
            <StyledTitle id="title">Minimal Mint</StyledTitle>
        </HeaderContainer>
      
        <form>
        <StyledText>Address of asset: </StyledText>
        <StyledInput
            type="text"
            placeholder="e.g. 0xE876D9Be49051564a55533f33c2ae67aACAfeA4A"
            onChange={(event) => setAddress(event.target.value)}
        />

        <StyledText>Token Id: </StyledText>
        <StyledInput
            type="text"
            placeholder="e.g. 0"
            onChange={(event) => setTokenId(event.target.value)}
        />
        </form>

        <MetadataButton id="metaButton" onClick={(e) =>{getMetadataPressed(url, tokenId)}}>
            Get Metadata
        </MetadataButton>

        <SwapButton id="swapButton" onClick={onSwapPressed()}>
            Swap Chain
        </SwapButton>

        <MintButton id="mintButton" onClick={onMintPressed}>
        Mint NFT
        </MintButton>

        <p id="status">
        {status}
        </p>
    </HomeContainer>
  );
};

export default Home;