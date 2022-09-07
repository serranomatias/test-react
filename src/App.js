import logo from './logo.svg';
import './App.css';
import './components/boton.js';
// import AppEth from './components/AppEth';
// import { ConnectWallet } from './components/ConnectWalletButton';
import AppTest from './components/AppTest';
// import ButtonHello from './components/boton.js';



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="text-3xl font-bold underline bg-red-500">Dezure</h1>
        <AppTest />
      </header>
    </div>
  );
}

export default App;
