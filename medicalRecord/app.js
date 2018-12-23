const web3 = require('web3');
const express = require('express');
const Tx = require('ethereumjs-tx');


var query = require('./Query/query.js')
var deploy = require('./Deploy/deployContract.js')


const app = express();

var bodyParser = require('body-parser');
app.use(bodyParser.json()); // support json encoded bodies

app.get('/', function(req, res){
    res.send('Hello! welcome to the MedicalRecord Blockchain Dapp!!!')
})

// redireact the call to the app folder acoundingly
app.post('/contractfunction', function (req, res) {
    console.log("---------------------------------Contract Function  API Started---------------------------------",req.body)

    //console.log("Aguments--------",req.body.arguments);
    //var args = req.body.arguments;
    
        //const result = query.contractFunction(operation, args).then(function(result,error) {
        const result = query.contractFunction().then(function(result,error){
           console.log("Result:", result)
           res.send(result)       
            });

    console.log("---------------------------------Contract Function  API END---------------------------------",result)

        });
       

app.post('/deploy',async function (req, res) {
    console.log("---------------------------------Deploy Contract API Started---------------------------------",req.body)
    const result1 =await deploy.deployContract(req.body.arguments);
    res.send(result1)


    console.log("---------------------------------Deploy Contract API END---------------------------------",result1)

  })

  
app.listen(3002, () => console.log('Example app listening on port 3002!'))