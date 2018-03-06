var Wallet = require('ethers').Wallet;
var jsonfile = require('jsonfile')


var wallets = [],
len = 2,
file = './wallets.json';

for(i = 0; i < len; i++){
	let wallet = Wallet.createRandom();
	wallets.push({public : wallet.address,private : wallet.privateKey});
}


jsonfile.writeFile(file, wallets, function (err) {
	console.error(err);
})