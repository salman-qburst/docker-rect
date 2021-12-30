import logo from './logo.svg';
import './App.css';
import { Home } from './componets/Home';

function App() {
  const handleClickFromHome = (data) =>{
     console.log(data);
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <Home somedata="my passed data" onHomeClick={handleClickFromHome}/>
          Hi there

        </p>
       
      </header>
    </div>
  );
}

export default App;
