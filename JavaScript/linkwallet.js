function linkMetaMask() {
    ethereum.request({ method: 'eth_requestAccounts' });
    console.log("Web3 connected!");
}