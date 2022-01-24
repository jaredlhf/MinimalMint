
async function main() {
    // We get the contract to deploy
    const Greeter = await ethers.getContractFactory("bridgeRegistry");
    const greeter = await Greeter.deploy("minimalMint");
  
    console.log("Greeter deployed to:", greeter.address);
  }
  
  main()
    .then(() => process.exit(0))
    .catch((error) => {
      console.error(error);
      process.exit(1);
    });