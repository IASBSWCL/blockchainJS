const Blockchain = require('./blockchain');

const bitcoin = new Blockchain();
// bitcoin.createNewBlock (2222,'ASAJGSDGUJ2345','234LLIKJH3456');
// bitcoin.createNewBlock (2322,'ASDGGSDGUJ2345','2LHLLIKJH3456');
bitcoin.createNewBlock(2322, 'ASDGAJGSDGUJ2345', '234LHLLIKJH3456');

bitcoin.createNewTransaction(100, "ALEX25253LKJLJ", "JENN22SAFKLF4322");

bitcoin.createNewBlock(2222, 'ASAJGSDGUJ2345', '234LLIKJH3456');

bitcoin.createNewTransaction(50, "ALEX25253LKJLJ", "JENN22SAFKLF4322");
bitcoin.createNewTransaction(30, "ALEX25253LKJLJ", "JENN22SAFKLF4322");
bitcoin.createNewTransaction(2000, "ALEX25253LKJLJ", "JENN22SAFKLF4322");

bitcoin.createNewBlock(222322, 'ASAJGSDG23UJ2345', '234LL23432IKJH3456');



console.log(bitcoin.chain[2]);