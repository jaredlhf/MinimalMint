import { useEffect, useState } from "react";
import { HomeContainer, HeaderContainer, Icon, StyledTitle, StyledText, StyledInput, WalletButton, SwapButton, MintButton } from "./HomeElements";
import iconImage from "../assets/Mint_icon.png"


const Home = (props) => {

  //State variables
  const [walletAddress, setWallet] = useState("");
  const [status, setStatus] = useState("");
  const [url, setAddress] = useState("");
  const [tokenId, setTokenId] = useState("");
 
  useEffect(async () => { //TODO: implement
    
  }, []);

  const connectWalletPressed = async () => { //TODO: implement
   
  };

  const getMetadataPressed = async () => { //TODO: implement

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

        <SwapButton id="swapButton" onClick={onSwapPressed}>
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