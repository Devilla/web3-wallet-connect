import React, { useState } from 'react';
import MetaMaskConnector from './MetaMaskConnector';

function App() {
 const [balance, setBalance] = useState('');

 const handleBalanceUpdate = (newBalance) => {
    setBalance(newBalance);
 };

 return (
    <div className="App">
      <nav>
        <p>Balance: {balance} ETH</p>
      </nav>
      <main>
        <MetaMaskConnector onBalanceUpdate={handleBalanceUpdate} />
        {/* Your game components go here */}
      </main>
    </div>
 );
}

export default App;
