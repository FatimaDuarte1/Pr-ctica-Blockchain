const Block = require('./block');
const BlockChain = require('./blockchain');

const blockchain = new BlockChain("hola");
blockchain.addBlock("Data del segundo bloque");
blockchain.addBlock("Data del tercer bloque");

console.log(blockchain);
