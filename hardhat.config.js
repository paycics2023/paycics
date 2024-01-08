require("@nomiclabs/hardhat-waffle");
const fs = require('fs');
// const privateKey = process.env.NEXT_PUBLIC_SECRET || "";
// const appId = process.env.NEXT_PUBLIC_APP_ID || "";
// const infuraId = process.env.NEXT_PUBLIC_INFURA_ID || "";
// const mumbaiId = process.env.NEXT_PUBLIC_MUMBAI_ID || "";

const privateKey = fs.readFileSync(".secret").toString().trim();
const appId = fs.readFileSync(".appId").toString().trim();
const infuraId = fs.readFileSync(".infuraid").toString().trim();

module.exports = {
  defaultNetwork: "hardhat",
  networks: {
    hardhat: {
      chainId: 1337,
    },
    // mumbai: {
    //   url: `https://polygon-mumbai.g.alchemy.com/v2/${mumbaiId}`,
    //   account: [
    //     `0x${privateKey}`
    //   ],
    // },
    mumbai: {
      // Infura
      url: `https://polygon-mumbai.infura.io/v3/${infuraId}`,
      accounts: [privateKey],
    },
    sepolia: {
      // Infura
      url: `https://sepolia.infura.io/v3/${infuraId}`,
      accounts: [privateKey],
    },
    // mumbai: {
    //   // maticvigil mumbai, you can use any other RPC u want.
    //   url: `https://rpc-mumbai.maticvigil.com/v1/${appId}`,
    //   accounts: [privateKey]
    // },
    // matic: {
    //   // maticvigil matic
    //   url: `https://rpc-mainnet.maticvigil.com/v1/${appId}`,
    //   accounts: [privateKey]
    // }
  },
  solidity: {
    version: "0.8.4",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
  gas: 2100000,
  gasPrice: 8000000000,
};
