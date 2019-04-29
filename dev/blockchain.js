// Wireless communication lab
// Blcok Chain constructor  
// = (holds all chain and stores the pending transactions for next round)
// ----->>>>  createNewBlock 
// = (Put pending transactions into a new block)
// ----->>>>  getLastBlock
// = (returns the index of last block in our chain)
// ----->>>>  createNewTransaction
//  = (push a new transaction into pending transactions and finds the right block for new transaction)
// ----->>>>  hashBlock
//  = (gets the current block and the hash of previous block to build a new one, uses shaw256)
// ----->>>>  proofOfWork
//  = (Mining step happens here, find the proper nonce in a way hash's  first four characters be 0)
//  = ( nonce in this step could be zero, one hundered or one hundred thousands)

const sha256 = require('sha256');
const currentNodeUrl = process.argv[3];

// store all block data (new transactions) before place in chain 
function BlockChain() {
    this.chain = [];
    // Pending transactions
    this.pendingTransactions = [];

    this.currentNodeUrl = currentNodeUrl;
    this.networkNodes = [];

    //genesis block
    this.createNewBlock(100, '0', '0');
}

// creates new block with new transactions and push new transactions to a chain 
BlockChain.prototype.createNewBlock = function (nonce, previousBlockHash, hash) {
    const newBlock = {
        index: this.chain.length + 1,
        timestamp: Date.now(),
        transactions: this.pendingTransactions,
        nonce: nonce,
        hash: hash,
        previousBlockHash: previousBlockHash
    };
    this.pendingTransactions = [];
    this.chain.push(newBlock);
    return newBlock;
}

BlockChain.prototype.getLastBlock = function () {
    return this.chain[this.chain.length - 1]
}

BlockChain.prototype.createNewTransaction = function (amount, sender, recipient) {
    const newTransaction = {
        amount: amount,
        sender: sender,
        recipient: recipient
    }

    this.pendingTransactions.push(newTransaction);
    return this.getLastBlock()['index'] + 1;
}

// our hash will contain data from previous block, and the current one , so we can trace them 
BlockChain.prototype.hashBlock = function (previousBlockHash, currentBlockData, nonce) {
    const dataAsString = previousBlockHash + nonce.toString() + JSON.stringify(currentBlockData);
    const hash = sha256(dataAsString);
    return hash;
}

// uses a lot of energy
BlockChain.prototype.proofOfWork = function (previousBlockHash, currentBlockData) {
    let nonce = 0;
    let hash = this.hashBlock(previousBlockHash, currentBlockData, nonce);

    // this part is mining
    while (hash.substring(0, 4) != '0000') {
        nonce += 1;
        hash = this.hashBlock(previousBlockHash, currentBlockData, nonce);
        console.log(hash);
    }

    return nonce;
}

module.exports = BlockChain;