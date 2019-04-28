var express = require('express');
var app = express();
var bodyParser = require('body-parser');
const BlockChain = require('./blockchain');
const uuid = require('uuid/v1');


// creates a uniqe ID for us, because it contains dashes(-) between addresses 
// we will replace dashes with nothing ( removing dashes ).
const nodeAddress = uuid().split('-').join('');

const bitcoin = new BlockChain();


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


// send back entire block chain
app.get('/blockChain', function (req, res) {
    res.send(bitcoin);

});

app.post('/transaction', function (req, res) {
    const blockIndex = bitcoin.createNewTransaction(req.body.amount, req.body.sender, req.body.recipient);
    res.json({ note: `Transaction will be added in block ${blockIndex}.` });
});

app.get('/mine', function (req, res) {

    const lastBlock = bitcoin.getLastBlock();
    const previousBlockHash = lastBlock.hash;

    const currentBlockData = {
        transactions: bitcoin.pendingTransactions,
        index: lastBlock['index'] + 1
    }

    const nonce = bitcoin.proofOfWork(previousBlockHash, currentBlockData)
    const blockHash = bitcoin.hashBlock(previousBlockHash,currentBlockData,nonce);

// mining reward 

    bitcoin.createNewTransaction(12.5,"00",uuid)

    const newBlock = bitcoin.createNewBlock(nonce, previousBlockHash, blockHash);

    res.json({
        note:"New block mined successfully",
        block:newBlock
    })
});


app.listen(3000, () => {
    console.log('Listening on port 3000 .');
});