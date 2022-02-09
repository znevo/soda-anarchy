require('dotenv').config()

const ethers = require('ethers');
const {Wallet, utils, providers: { JsonRpcProvider } } = ethers;

const provider = new JsonRpcProvider(process.env.RINKEBY_URL);
const wallet = new Wallet(process.env.PRIVATE_KEY, provider);

const address = "0x12Da25ED43ff9cFab241A880a5de7877A82A3A66"
const abi = [{"inputs":[{"internalType":"uint256","name":"_numSodas","type":"uint256"},{"internalType":"address payable","name":"_owner","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"inputs":[{"internalType":"address","name":"_engineer","type":"address"}],"name":"addEngineer","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address payable","name":"_newOwner","type":"address"}],"name":"changeOwner","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"engineer","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"hasVoted","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"numSodas","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address payable","name":"_owner","type":"address"}],"name":"overthrow","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address payable","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"purchase","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_toRefill","type":"uint256"}],"name":"refillSodas","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"revolutionRequests","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"sodasOwned","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"voteForRevolution","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"withdraw","outputs":[],"stateMutability":"payable","type":"function"}];

var contract = new ethers.Contract(address, abi, wallet);

contract.purchase({
    gasLimit: 50000,
    value: 1000000000000000,
}).then((intermediateTx) => {
    console.log(intermediateTx);
    return intermediateTx.wait();
}).then((receipt) => {
    console.log(receipt);
}).catch((error) => {
    console.log(error);
});
