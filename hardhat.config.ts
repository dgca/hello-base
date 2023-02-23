import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";

const config: HardhatUserConfig = {
  solidity: "0.8.17",
  networks: {
    base: {
      url: "https://goerli.base.org",
      accounts: []
    }
  }
};

export default config;
