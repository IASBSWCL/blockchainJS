
// store all block data (new transactions) before place in chain 
function BlockChain() {
    this.chain = [];
    // Pending transactions
    this.pendingTransactions = [];
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
    
    return this.getLastBlock()['index'] + 1 ;
}
module.exports = BlockChain;