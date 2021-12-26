const fs   = require("fs");
const { web3, myAccount } = require('./utils')
const { abi, address, transactionHash } = require('./contractArtifacts')

// const REGISTRY_ABI = JSON.parse(fs.readFileSync("SimpleStorage_sol_SimpleStorage.abi"));


let contract = new web3.eth.Contract(JSON.parse(abi), address)

/**
 * For gettig the transaction details
 */
async function getTransaction() {
    let r = await web3.eth.getTransaction(transactionHash)

    console.log(r)
}

/**
 * For getting the transactionReceipt
 */
async function getTransactionReceipt() {
    let r  = await web3.eth.getTransactionReceipt(transactionHash)
    return r.contractAddress
}

async function get() {
    
    let r = await contract.methods.get().call()

    return r
}

async function set(value) {
    let r = await contract.methods.set(value).send({
        from: myAccount.address,
        gas: 80000
    })

    return r.transactionHash
}

get()
// set(4)



// for interacting with the browser
window.addEventListener('load', () => {
  document.getElementById("get").onclick = () => {
    get().then((r) => {
      document.getElementById("resultOfGet").innerHTML = r
    })
  }
  document.getElementById("set").onclick = () => {
    val = document.getElementById("value").value
    set(val).then((r) => {
      document.getElementById("resultOfSet").innerHTML = r
    })
  }
})