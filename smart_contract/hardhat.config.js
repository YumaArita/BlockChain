//https://eth-goerli.g.alchemy.com/v2/wO1YKTDhqbXPYp3huNxQ-wWdETRFplmF
require("@nomiclabs/hardhat-waffle");

module.exports = {
  defaultNetwork: "goerli",
  solidity: "0.8.0",
  networks: {
    goerli: {
      url: "https://eth-goerli.g.alchemy.com/v2/wO1YKTDhqbXPYp3huNxQ-wWdETRFplmF",
      accounts: [
        "6df557466b37f12e500f0494e81bc91d96f7d770c1c1a36926609e4bb14903ee",
      ],
    },
  },
};
