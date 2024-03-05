import React, { useState, useEffect } from 'react';
import Web3 from 'web3';

const MetaMaskConnector = ({ onBalanceUpdate }) => {
 const [account, setAccount] = useState('');
 const [balance, setBalance] = useState('');

 useEffect(() => {
    if (typeof window.ethereum !== 'undefined') {
      const web3 = new Web3(window.ethereum);
      const loadBlockchainData = async () => {
        const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
        setAccount(accounts[0]);
        const balance = await web3.eth.getBalance(accounts[0]);
        setBalance(web3.utils.fromWei(balance, 'ether'));
      };
      loadBlockchainData();
    } else {
      alert("Please install MetaMask!");
    }
 }, []);

 const connectWallet = async () => {
    if (typeof window.ethereum !== 'undefined') {
      const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
      setAccount(accounts[0]);
      const web3 = new Web3(window.ethereum);
      const balance = await web3.eth.getBalance(accounts[0]);
      setBalance(web3.utils.fromWei(balance, 'ether'));
      onBalanceUpdate(balance);
    } else {
      alert("Please install MetaMask!");
    }
 };

 return (
    <div>
      <button onClick={connectWallet}>Connect Wallet</button>
      <p>Account: {account}</p>
      <p>Balance: {balance} ETH</p>
    </div>
 );
};

export default MetaMaskConnector;
