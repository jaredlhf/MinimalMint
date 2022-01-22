import { useEffect, useState } from "react";

const Home = (props) => {

  //State variables
  const [walletAddress, setWallet] = useState("");
  const [status, setStatus] = useState("");
  const [url, setAddress] = useState("");
 
  useEffect(async () => { //TODO: implement
    
  }, []);

  const connectWalletPressed = async () => { //TODO: implement
   
  };

  const onSwapPressed = async () => { //TODO: implement
    
  };

  const onMintPressed = async () => { //TODO: implement
    
  };

  return (
    <div className="Home">
      <button id="walletButton" onClick={connectWalletPressed}>
        {walletAddress.length > 0 ? (
          "Connected: " +
          String(walletAddress).substring(0, 6) +
          "..." +
          String(walletAddress).substring(38)
        ) : (
          <span>Connect Wallet</span>
        )}
      </button>

      <br></br>
      <h1 id="title">Minimal Mint</h1>
      
      <form>
        <h2>Address of asset: </h2>
        <input
          type="text"
          placeholder="e.g. >"
          onChange={(event) => setAddress(event.target.value)}
        />
      </form>

      <button id="swapButton" onClick={onSwapPressed}>
          Swap Chain
      </button>

      <button id="mintButton" onClick={onMintPressed}>
        Mint NFT
      </button>

      <p id="status">
        {status}
      </p>
    </div>
  );
};

export default Home;