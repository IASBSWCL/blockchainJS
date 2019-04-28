const Blockchain = require('./blockchain');

const bitcoin = new Blockchain();

// bitcoin.createNewBlock (2222,'ASAJGSDGUJ2345','234LLIKJH3456');
// bitcoin.createNewBlock (2322,'ASDGGSDGUJ2345','2LHLLIKJH3456');
// bitcoin.createNewBlock(2322, 'ASDGAJGSDGUJ2345', '234LHLLIKJH3456');

// bitcoin.createNewTransaction(100, "ALEX25253LKJLJ", "JENN22SAFKLF4322");

// bitcoin.createNewBlock(2222, 'ASAJGSDGUJ2345', '234LLIKJH3456');

// bitcoin.createNewTransaction(50, "ALEX25253LKJLJ", "JENN22SAFKLF4322");
// bitcoin.createNewTransaction(30, "ALEX25253LKJLJ", "JENN22SAFKLF4322");
// bitcoin.createNewTransaction(2000, "ALEX25253LKJLJ", "JENN22SAFKLF4322");

// bitcoin.createNewBlock(222322, 'ASAJGSDG23UJ2345', '234LL23432IKJH3456');


// const previousBlockHash = "KLJIDHFJLAFSLKHJFJLAKFHJLHFA";
// const currentBlockData = [
//     {
//         amount : 10 , 
//         sender:'09LKJHDLKHJLSAKILGWYIUIENVCV1',
//         recipient:'LIHJLISFJOUJSGDLJGLIJG'
//     },
//     {
//         amount : 100 , 
//         sender:'08LKJHDLKHJLSAKILGWYIUIENVCV',
//         recipient:'06LIHJLISFJOUJSGDLJGLIJG'
//     },
//     {
//         amount : 1000 , 
//         sender:'09LKJHDLKHJLSAKILGWYIUIENVCV',
//         recipient:'06LIHJLISFJOUJSGDLJGLIJG'
//     }
// ];


// const nonce = 100 ;

// console.log(bitcoin.hashBlock(previousBlockHash,currentBlockData,nonce));

// console.log(bitcoin.proofOfWork(previousBlockHash,currentBlockData))

// bitcoin.hashBlock(previousBlockHash,currentBlockData,bitcoin.proofOfWork(previousBlockHash,currentBlockData))

// console.log(bitcoin.chain[2]);

console.log(bitcoin);