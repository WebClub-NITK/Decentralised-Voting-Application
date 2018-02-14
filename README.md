# Decentralized Voting Application

This is a basic decentralized voting application, built for Ethereum, which highlights key features of a Decentralized application such as the Smart Contracts.

This application is based on the fantastic tutorial [here](https://medium.com/@mvmurthy/full-stack-hello-world-voting-ethereum-dapp-tutorial-part-1-40d2d0d807c2). We encourage you to read this article, since it covers the concepts in a nice way.

## Requirements

* `NodeJS` and `npm`
* A Web Browser

## Installing Dependencies

* Run `npm install` in the directory to install the required packages.

## Running the application locally

We'll be running the app on an in-memory blockchain (sort of blockchain simulator)

* Run the `start_eth_sim.sh` script to start the ganache-cli(in-memory blockchain)

```bash
bash start_eth_sim.sh
```

* Run the `compile_and_load.js` node script to compile the solidity code and deploy it to the local blockchain. The address of the deployed code and the ABI(Application Binary Interface) which basically contains all the methods available in the compiled contract and stores them to the `params.json` file.

```bashslid
node compile_and_load.js
```

* You can now interact with the application using the web page. You can serve the `index.html` using apps like Web Server for Chrome or simple open it in a browser.
