const Web3 = require('Web3')

const web3 = new Web3('http://localhost:8545')

// console.log(web3)

privateKey = '0x000c6e66818fe0a9909ab6da2815dc264992303f2ab35e4dc0a9479aa4fc3d0d'

const myAccount = web3.eth.accounts.wallet.add(privateKey);

// console.log(myAccount)

module.exports = {
    web3: web3,
    myAccount: myAccount
}