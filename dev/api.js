var express = require('express'); 
var app = express(); 


// send back entire block chain
app.get('/blockChain', function(req,res){
    
});

app.post('/transaction',function(req,res){

        res.send("it Works")
});

app.get('./mine',function (req,res) {

});


app.listen(3000, ()=>{
console.log('Listening on port 3000 . ');
});