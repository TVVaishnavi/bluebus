import './App.css';
import Body from './components/Body';
import Header from './components/Header';
import {BrowserRouter} from 'react-router-dom';
import BusProvider from './hooks/buscontrolprovider';


function App() {
  return (<BrowserRouter>
    <BusProvider>
    <div className="App">
        <Header />
        <Body />
    </div>
    </BusProvider> 
    </BrowserRouter>
  );
}

export default App;
