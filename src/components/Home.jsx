import { useEffect, useState } from "react";
import { HomeContainer, HeaderContainer, Icon, StyledTitle, StyledText, StyledInput, WalletButton, SwapButton, MintButton , MetadataButton } from "./HomeElements";
import iconImage from "../assets/Mint_icon.png"
import abi from "../assets/abi.json"
import { ethers } from "ethers"
const provider = new ethers.providers.Web3Provider(window.ethereum)


const Home = (props) => {
  
  let metadata;
  //State variables
  const [walletAddress, setWallet] = useState("");
  const [status, setStatus] = useState("");
  const [url, setAddress] = useState("");
  const [tokenId, setTokenId] = useState("");
 
  useEffect(async () => { //TODO: implement
    
  }, []);

  const connectWalletPressed = async () => { 
    await provider.send("eth_requestAccounts", []);
    let signer = provider.getSigner();
    const addr = await signer.getAddress();
    console.log("Account:", addr);
    setWallet(addr);
  };

  const getMetadataPressed = async (url, tokenId) => { 
    const tokenContract = new ethers.Contract(url, abi, provider);
    metadata = await tokenContract.tokenURI(tokenId);
  }

  const onSwapPressed = async () => { //TODO: implement
    
  };

  const onMintPressed = async () => { //TODO: implement
    
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
            placeholder="e.g. "
            onChange={(event) => setAddress(event.target.value)}
        />

        <StyledText>Token Id: </StyledText>
        <StyledInput
            type="text"
            placeholder="e.g. "
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