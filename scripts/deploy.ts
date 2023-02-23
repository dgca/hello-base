import { ethers } from "hardhat";

async function main() {
  const HelloBase = await ethers.getContractFactory("HelloBase");
  const hello = await HelloBase.deploy();

  await hello.deployed();

  console.log(`Deployed HelloBase to ${hello.address}`);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
