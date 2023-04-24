require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config({ path: ".env" });

const INFURA_GOERLI_HTTP_URL = process.env.INFURA_GOERLI_HTTP_URL;
const INFURA_SEPOLIA_HTTP_URL = process.env.INFURA_SEPOLIA_HTTP_URL;
const PRIVATE_KEY = process.env.PRIVATE_KEY;
const API_KEY = process.env.API_KEY;

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.9",
  networks: {
    goerli: {
      url: INFURA_GOERLI_HTTP_URL + API_KEY,
      accounts: [PRIVATE_KEY],
    },
    sepolia: {
      url: INFURA_SEPOLIA_HTTP_URL + API_KEY,
      accounts: [PRIVATE_KEY],
    },
  },
};
