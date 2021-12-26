const fs = require('fs')
const { web3, myAccount } = require('./utils')
const { byteCode } = require('./contractArtifacts')


// const REGISTRY_BYTE = fs.readFileSync("SimpleStorage_sol_SimpleStorage.bin");

async function deploy() {

    await web3.eth.sendTransaction({
        from: myAccount.address,
        gas: 800000,
        data: byteCode
    })
    .on('receipt', console.log)

}

deploy()