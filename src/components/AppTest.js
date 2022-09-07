import { useState, useEffect } from 'react';
import { ethers, providers } from 'ethers';

function AppTest() {
  const [haveMetamask, sethaveMetamask] = useState(true);
  const [accountAddress, setAccountAddress] = useState('');
  const [accountBalance, setAccountBalance] = useState('');
  const [isConnected, setIsConnected] = useState(false);

  const { ethereum } = window;
  const provider = new ethers.providers.JsonRpcProvider("https://polygon-rpc.com");

  useEffect(() => {
    const { ethereum } = window;
    const checkMetamaskAvailability = async () => {
      if (!ethereum) {
        sethaveMetamask(false);
      }
      sethaveMetamask(true);
    };
    checkMetamaskAvailability();
  }, []);

  const connectWallet = async () => {
    try {
      if (!ethereum) {
        sethaveMetamask(false);
      }
      const accounts = await ethereum.request({
        method: 'eth_requestAccounts',
      });
      let contractAddress = "0x74376FaB8Ca4e226B1cF36C637eC1c06e834D989";
      let balance = await provider.getBalance(accounts[0]);
      let bal = ethers.utils.formatEther(balance);
      console.log(accounts[0])
      const abi = [
        "function balanceOf(address owner) view returns (uint256)",
    ];
      const token = new ethers.Contract(contractAddress, abi, provider);
      const balanceGuys = await token.balanceOf(accounts[0]);
      setAccountAddress(accounts[0]);
      setAccountBalance(balanceGuys);
      setIsConnected(true);
    } catch (error) {
      setIsConnected(false);
    }
  };

  return (
    <div className="AppTest">
      <header className="AppTest-header">
        {haveMetamask ? (
          <div className="AppTest-header">
            {isConnected ? (
              <div className="card">
                <div className="card-row">
                  <h3>Wallet Address:</h3>
                  <p>
                    {accountAddress.slice(0, 4)}...
                    {accountAddress.slice(38, 42)}
                  </p>
                </div>
                <div className="card-row">
                  <h3>Wallet Balance:</h3>
                  <p>{accountBalance}</p>
                </div>
              </div>
            ) : <h2>Dale al boton para ser feliz</h2>}
            {isConnected ? (
                <div>
                <p className="info">🎉 Connected Successfully</p>
                </div>
            ) : (
              <button className="bg-gray-200 my-2 px-3 rounded-xl shadow-xl text-black font-bold hover:text-white hover:bg-gray-600 transition" onClick={connectWallet}>
                Connect
              </button>
            )}
          </div>
        ) : (
          <p>Please Install MataMask</p>
        )}
      </header>
    </div>
  );
}

export default AppTest;