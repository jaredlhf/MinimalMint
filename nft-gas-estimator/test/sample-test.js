const { expect } = require("chai");
const { ethers } = require("hardhat");



describe("minimal", function () {

  it("Deploying orginal ERC721", async function () {
    const Greeter = await ethers.getContractFactory("DefaultNFT");
    const greeter = await Greeter.deploy('Name','Symbol');
    await greeter.deployed();
    
    // await greeter.mint('https://www.youtube.com/watch?v=dQw4w9WgXcQ')
  });
  it("Deploying registry", async function () {
    const Greeter = await ethers.getContractFactory("bridgeRegistry");
    const greeter = await Greeter.deploy('name');
    await greeter.deployed();
  });
  it("Deploying registry + new NFT", async () => {

    const Registry = await ethers.getContractFactory("bridgeRegistry");
    const registry = await Registry.deploy('name');
    await registry.deployed();
    // Deploy contract
    await registry.mintInReg('n', 's', 'https');
  });

});
