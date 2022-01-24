
async function main() {
    // We get the contract to deploy
    const Greeter = await ethers.getContractFactory("DefaultNFT");
    const greeter = await Greeter.deploy("DEFAULT", "DF");
  
    console.log("Greeter deployed to:", greeter.address);

    await greeter.mint('https://www.youtube.com/watch?v=dQw4w9WgXcQ')
  }
  
  main()
    .then(() => process.exit(0))
    .catch((error) => {
      console.error(error);
      process.exit(1);
    });