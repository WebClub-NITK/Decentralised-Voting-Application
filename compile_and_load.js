Web3 = require('web3');
solc = require('solc');
fs = require('fs');

web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));

code = fs.readFileSync("Voting.sol").toString();
compiledCode = solc.compile(code);

abiDef = JSON.parse(compiledCode.contracts[':Voting'].interface);
VotingContract = web3.eth.contract(abiDef);
byteCode = compiledCode.contracts[':Voting'].bytecode;

deployedContract = VotingContract.new(['Rama', 'Nick', 'Jose'], {
    data: byteCode,
    from: web3.eth.accounts[0],
    gas: 4700000
}, function (err, result) {
    if (err) {
        console.log('Error');
        return;
    }
    params = JSON.stringify(
        {
            abi: compiledCode.contracts[':Voting'].interface,
            address: deployedContract.address
        },
        null,
        2
    );

    fs.writeFileSync('params.json', "params = " + params);
});
