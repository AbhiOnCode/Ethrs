var ethers = require('ethers');
var Wallet = ethers.Wallet;
var utils = ethers.utils;
var providers = ethers.providers;

var privateKey = "";
var wallet = new Wallet(privateKey);

// console.log('Address: ' + wallet.address);

var transaction = {

    // nonce - number of transaction by this address
    nonce: "0x01",

    // Gas limit (standard - 21000)
    gasLimit: 21000,

    // Gas price - (4 gwei = 4*10^9 wei)
    gasPrice: utils.bigNumberify("4000000000"),

    // to send at address // contact address for erc20 token
    to: "",

    // value to send
    value: "0x00",

    // data to send // function calls for erc20 calls
    data: "",

    // This ensures the transaction cannot be replayed on different networks
    //chainId: providers.Provider.chainId.homestead

};

var signedTransaction = wallet.sign(transaction);

// console.log(signedTransaction);

// This can now be sent to the Ethereum network
var provider = providers.getDefaultProvider();

provider.sendTransaction(signedTransaction).then(function(hash) {

    // Transaction Hash
    console.log('Hash: ' + hash);
    
});
