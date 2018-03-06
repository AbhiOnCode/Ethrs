var Wallet = require('ethers').Wallet;

var privateKey = '';

var wallet = new Wallet(privateKey);
var provider = providers.getDefaultProvider();

var balancePromise = wallet.getBalance();

balancePromise.then(function(balance) {
    console.log(balance);
});

var transactionCountPromise = wallet.getTransactionCount();

transactionCountPromise.then(function(transactionCount) {
    console.log(transactionCount);
});