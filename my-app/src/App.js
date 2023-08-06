import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';

import Header from './components/header.jsx';
import MainBody from './components/mainBody.jsx';

function App() {
  return (
    <div className="App">
    <Header/>
    <MainBody/>

      {/* /* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
  </header> */}
    </div>
  );
}

export default App;
