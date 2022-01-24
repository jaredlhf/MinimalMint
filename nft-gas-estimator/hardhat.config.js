require("@nomiclabs/hardhat-waffle");
require("hardhat-gas-reporter");

const keys = require("./keys.json");
const ALCHEMY_API_KEY_ROPSTEN = keys.alchemy_api_key_ropsten;
const ROPSTEN_PRIVATE_KEY = keys.private_key;
const ALCHEMY_API_KEY_RINKEBY = keys.alchemy_api_key_rinkeby;


// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (args, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(await account.address);
  }
});

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more


module.exports  = {
  solidity: "0.8.0",
  networks: {
    ropsten: {
      url: `https://eth-ropsten.alchemyapi.io/v2/${ALCHEMY_API_KEY_ROPSTEN}`,
      accounts: [`${ROPSTEN_PRIVATE_KEY}`],
      gas: "auto"
    },
    rinkeby: {
      url: `https://eth-rinkeby.alchemyapi.io/v2/${ALCHEMY_API_KEY_RINKEBY}`,
      accounts: [`${ROPSTEN_PRIVATE_KEY}`],
      gas: "auto"
    }
  }
};