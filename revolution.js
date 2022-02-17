require('dotenv').config()

const ethers = require('ethers');
const {Wallet, utils, providers: { JsonRpcProvider } } = ethers;

const provider = new JsonRpcProvider(process.env.RINKEBY_URL);
const wallet = new Wallet(process.env.PRIVATE_KEY, provider);

const address = "0xb0bf7ba98d1cea8a4ff8556ab8381b2e92d4c823"
const abi = [{"inputs":[{"internalType":"uint256","name":"_numSodas","type":"uint256"},{"internalType":"address payable","name":"_owner","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"inputs":[{"internalType":"address","name":"_engineer","type":"address"}],"name":"addEngineer","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address payable","name":"_newOwner","type":"address"}],"name":"changeOwner","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"deposit","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"engineer","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"numSodas","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address payable","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"purchase","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_toRefill","type":"uint256"}],"name":"refillSodas","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"revolution","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"revolutionRequests","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"sodasOwned","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"withdraw","outputs":[],"stateMutability":"payable","type":"function"}];

var contract = new ethers.Contract(address, abi, wallet);

contract.revolution({
    gasLimit: 50000,
}).then((intermediateTx) => {
    console.log(intermediateTx);
    return intermediateTx.wait();
}).then((receipt) => {
    console.log(receipt);
}).catch((error) => {
    console.log(error);
});
