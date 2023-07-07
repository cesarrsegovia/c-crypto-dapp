// https://eth-goerli.g.alchemy.com/v2/JHyjqNGidQlzMDyMqOzIiJoL-acf8fL0

require('@nomiclabs/hardhat-waffle')

module.exports = {
  solidity: '0.8.0',
  networks: {
    goerli: {
      url: 'https://eth-goerli.g.alchemy.com/v2/JHyjqNGidQlzMDyMqOzIiJoL-acf8fL0',
      accounts: ['a8c7240d47f410bc8a0fc36ebe173c6b208a7d0da2d31f501f5201543f3009ad']
    }
  }
}